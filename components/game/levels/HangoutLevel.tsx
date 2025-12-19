"use client";

export default function HangoutLevel() {
    return (
        <group>
            {/* Huge Baseplate */}
            <mesh position={[0, -0.5, 0]} receiveShadow>
                <boxGeometry args={[100, 1, 100]} />
                <meshStandardMaterial color="#333" />
            </mesh>

            {/* Some Buildings */}
            <mesh position={[-15, 5, -15]} castShadow receiveShadow>
                <boxGeometry args={[10, 10, 10]} />
                <meshStandardMaterial color="#888" />
            </mesh>

            <mesh position={[15, 3, 15]} castShadow receiveShadow>
                <cylinderGeometry args={[5, 5, 20, 32]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>

            {/* Trees */}
            <group position={[10, 0, -10]}>
                <mesh position={[0, 2, 0]}>
                    <cylinderGeometry args={[0.5, 0.5, 4]} />
                    <meshStandardMaterial color="brown" />
                </mesh>
                <mesh position={[0, 5, 0]}>
                    <dodecahedronGeometry args={[2]} />
                    <meshStandardMaterial color="green" />
                </mesh>
            </group>
        </group>
    )
}
