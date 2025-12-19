"use client";

import { Canvas } from "@react-three/fiber";
import { KeyboardControls, Loader } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import Scene from "./Scene";
import UI from "./UI";

interface GameClientProps {
    gameId: string;
}

export default function GameClient({ gameId }: GameClientProps) {
    const map = useMemo(() => [
        { name: 'forward', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'jump', keys: ['Space'] },
    ], [])

    return (
        <>
            <KeyboardControls map={map}>
                <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
                    <color attach="background" args={['#87CEEB']} />
                    <Suspense fallback={null}>
                        <Scene gameId={gameId} />
                    </Suspense>
                </Canvas>
                <UI />
                <Loader />
            </KeyboardControls>
        </>
    )
}
