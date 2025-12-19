"use client";

import { useKeyboardControls, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";

const GRAVITY = 30;
const JUMP_FORCE = 12;
const SPEED = 8;

export default function Player() {
    const body = useRef<THREE.Group>(null);
    const [subscribeKeys, getKeys] = useKeyboardControls();
    const velocity = useRef(new THREE.Vector3(0, 0, 0));
    const isGrounded = useRef(true);

    // Camera ref
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    const { scene } = useThree();
    const raycaster = useMemo(() => new THREE.Raycaster(), []);
    const downVector = useMemo(() => new THREE.Vector3(0, -1, 0), []);

    useFrame((state, delta) => {
        if (!body.current) return;

        // CONTROLS
        const { forward, backward, left, right, jump } = getKeys();

        // MOVEMENT
        const camera = state.camera;
        // Calculate direction relative to camera, but flatten Y
        const frontVector = new THREE.Vector3(0, 0, (backward ? 1 : 0) - (forward ? 1 : 0));
        const sideVector = new THREE.Vector3((left ? 1 : 0) - (right ? 1 : 0), 0, 0);
        const direction = new THREE.Vector3();

        direction.subVectors(frontVector, sideVector).normalize();

        // Align direction with camera view (only Y rotation)
        const euler = new THREE.Euler(0, camera.rotation.y, 0);
        direction.applyEuler(euler);
        direction.multiplyScalar(SPEED);

        // Apply horizontal velocity
        velocity.current.x = direction.x;
        velocity.current.z = direction.z;

        // PHYSICS & COLLISION
        // Update Y velocity (Gravity)
        velocity.current.y -= GRAVITY * delta;

        // Predicted position for Y
        const nextY = body.current.position.y + velocity.current.y * delta;

        // Raycast for Ground Detection
        // Ray start slightly above feet to handle small steps
        const rayOrigin = body.current.position.clone();
        rayOrigin.y += 0.5;

        raycaster.set(rayOrigin, downVector);

        // Intersect with everything in scene except player
        // TODO: In a real app, use layers or specific group refs for performance
        const intersects = raycaster.intersectObjects(scene.children, true);

        // Filter out player itself (recursive check if object is child of body)
        const validHits = intersects.filter((hit: THREE.Intersection) => {
            let obj: THREE.Object3D | null = hit.object;
            while (obj) {
                if (obj === body.current) return false;
                obj = obj.parent;
            }
            return true;
        });

        const groundHit = validHits.length > 0 ? validHits[0] : null;
        const distanceToGround = groundHit ? groundHit.distance : Infinity;

        // 0.5 (ray origin offset) + some small buffer
        const groundThreshold = 0.6;

        if (groundHit && distanceToGround < groundThreshold && velocity.current.y <= 0) {
            // We are grounded
            isGrounded.current = true;
            velocity.current.y = 0;
            // Snap to ground avoiding jitter
            // rayOrigin.y is position.y + 0.5. hit.point.y is the floor.
            // We want position.y to be hit.point.y (since origin of box is bottom? No, origin is center typically)
            // My box args=[1, 1.8, 1]. Center is at Y=0.9 relative to group?
            // Wait, body group is at [0,1,0].
            // Let's assume body group position IS the feet position for easier logic.
            // In the JSX: <group ref={body} position={[0, 1, 0]}> ... <mesh position={[0, 0.9, 0]}>
            // Yes, the mesh is shifted up by half height. So 'body.current.position' is the FEET.

            // So simply:
            body.current.position.y = groundHit.point.y;
        } else {
            isGrounded.current = false;
            // Apply gravity movement
            body.current.position.y += velocity.current.y * delta;
        }

        // Horizontal Movement
        body.current.position.x += velocity.current.x * delta;
        body.current.position.z += velocity.current.z * delta;

        // JUMP
        if (jump && isGrounded.current) {
            velocity.current.y = JUMP_FORCE;
            // Lift off slightly to break ground clamp immediately
            body.current.position.y += 0.1;
            isGrounded.current = false;
        }

        // RESPAWN (Void)
        if (body.current.position.y < -15) {
            body.current.position.set(0, 5, 0);
            velocity.current.set(0, 0, 0);
        }
    });

    // Update controls target to follow player
    return (
        <>
            <group ref={body} position={[0, 1, 0]}>
                {/* Character Model */}
                <mesh castShadow receiveShadow position={[0, 0.9, 0]}>
                    <boxGeometry args={[1, 1.8, 1]} />
                    <meshStandardMaterial color="yellow" />
                </mesh>

                <mesh position={[0, 1.6, -0.5]}>
                    <boxGeometry args={[0.6, 0.2, 0.1]} />
                    <meshStandardMaterial color="black" />
                </mesh>
            </group>
            <OrbitControls makeDefault target={body.current ? body.current.position : [0, 0, 0]} />
        </>
    );
}
