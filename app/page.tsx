import GameCard from "@/components/GameCard";

export default function Home() {
    const games = [
        { id: "obby", title: "The Impossible Obby", description: "Can you survive the parkour?", imageColor: "bg-red-500", visits: "12.5k", rating: "92%" },
        { id: "hangout", title: "Vibe Station", description: "Chill with friends in 3D.", imageColor: "bg-purple-500", visits: "3.2k", rating: "98%" },
        { id: "tycoon", title: "Pizza Tycoon", description: "Build your own pizza empire.", imageColor: "bg-orange-400", visits: "8.1k", rating: "88%" },
        { id: "combat", title: "Sword Fight", description: "Classic combat arena.", imageColor: "bg-blue-600", visits: "5.5k", rating: "75%" },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900 to-black opacity-50" />
                <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #2a2a2a 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.2 }}></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent drop-shadow-2xl">
                        OBLOVX
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 font-light">
                        Reimagining the metaverse. Build, play, and explore millions of 3D experiences.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Start Playing
                        </button>
                    </div>
                </div>
            </section>

            {/* Recommended */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">Recommended for You</h2>
                    <a href="/games" className="text-gray-400 hover:text-white transition-colors">See All →</a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map(game => (
                        <GameCard key={game.id} {...game} />
                    ))}
                </div>
            </section>

            {/* Featured Banner */}
            <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 relative overflow-hidden">
                    <div className="relative z-10 max-w-xl">
                        <span className="bg-black/30 px-4 py-1 rounded-full text-sm font-bold text-white mb-4 inline-block">EVENT</span>
                        <h2 className="text-4xl font-bold mb-4">The Winter Games are Here</h2>
                        <p className="text-lg text-white/80 mb-8">Complete quests and earn exclusive limited items in 50+ participating experiences.</p>
                        <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                            Join Now
                        </button>
                    </div>
                    <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/placeholder-event.png')] bg-cover opacity-20 md:opacity-50 mix-blend-overlay" />
                </div>
            </section>
        </div>
    )
}
