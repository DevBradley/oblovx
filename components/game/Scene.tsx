"use client";

import { Environment, Grid, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Player from "./Player";
import ObbyLevel from "./levels/ObbyLevel";
import HangoutLevel from "./levels/HangoutLevel";

export default function Scene({ gameId }: { gameId: string }) {

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Environment preset="city" />

            <Player />

            {/* Level Logic */}
            <group>
                {gameId === 'obby' ? (
                    <ObbyLevel />
                ) : (
                    <HangoutLevel />
                )}
            </group>

            <Grid args={[100, 100]} cellColor="white" sectionColor="white" sectionThickness={1} cellThickness={0.5} infiniteGrid fadeDistance={50} />

            {/* Standard Floor for safety */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -50, 0]}>
                <planeGeometry args={[1000, 1000]} />
                <meshStandardMaterial color="#1a1a1a" />
            </mesh>
        </>
    )
}
