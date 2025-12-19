import GameClient from "@/components/game/GameClient";

export default function PlayPage({ params }: { params: { gameId: string } }) {
    return (
        <div className="h-[calc(100vh-64px)] w-full bg-black relative">
            <GameClient gameId={params.gameId} />
        </div>
    )
}
