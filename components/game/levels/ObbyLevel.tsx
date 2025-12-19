"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ObbyLevel() {
    // A simple parkour course
    return (
        <group>
            {/* Start Platform */}
            <mesh position={[0, -0.5, 0]} receiveShadow>
                <boxGeometry args={[10, 1, 10]} />
                <meshStandardMaterial color="#4ade80" />
            </mesh>

            {/* Jump 1 */}
            <mesh position={[0, -0.5, -10]} receiveShadow>
                <boxGeometry args={[4, 1, 4]} />
                <meshStandardMaterial color="#f87171" />
            </mesh>

            {/* Jump 2 (Moving?) */}
            <MovingPlatform position={[0, -0.5, -20]} color="#60a5fa" />

            {/* Finish Line */}
            <mesh position={[0, 1, -35]} receiveShadow>
                <boxGeometry args={[15, 1, 5]} />
                <meshStandardMaterial color="gold" />
            </mesh>

            {/* Text */}
            {/* Note: In a real app we'd use <Text> from drei, but I didn't verify font loading. Keeping it simple geometries for now or assuming default font works */}
        </group>
    )
}

function MovingPlatform(props: any) {
    const mesh = useRef<any>();
    useFrame(({ clock }) => {
        if (mesh.current) {
            mesh.current.position.x = Math.sin(clock.getElapsedTime()) * 5;
        }
    })
    return (
        <mesh ref={mesh} {...props}>
            <boxGeometry args={[4, 1, 4]} />
            <meshStandardMaterial color={props.color} />
        </mesh>
    )
}
