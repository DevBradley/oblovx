import GameCard from "@/components/GameCard";

export default function GamesPage() {
    const categories = ["Popular", "Parkour", "Combat", "Tycoon", "RP"];
    const allGames = Array(12).fill(null).map((_, i) => ({
        id: `game-${i}`,
        title: `Game Experience ${i + 1}`,
        description: "An amazing adventure awaits you.",
        imageColor: ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"][i % 4],
        visits: `${(Math.random() * 100).toFixed(1)}k`,
        rating: `${80 + Math.floor(Math.random() * 20)}%`
    }));

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Discover</h1>

            {/* Chips */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
                {categories.map(cat => (
                    <button key={cat} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 whitespace-nowrap transition-colors font-medium">
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {allGames.map(game => (
                    <GameCard key={game.id} {...game} />
                ))}
            </div>
        </div>
    )
}
