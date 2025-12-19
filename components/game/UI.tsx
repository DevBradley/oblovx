"use client";

export default function UI() {
    return (
        <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                <div className="bg-black/50 text-white p-2 rounded-lg pointer-events-auto">
                    <h1 className="font-bold">Alpha v0.1</h1>
                    <p className="text-xs text-gray-300">WASD to Move, Space to Jump</p>
                </div>
            </div>

            {/* Chat Box Mockup */}
            <div className="pointer-events-auto bg-black/50 w-80 h-48 rounded-lg p-2 flex flex-col gap-2">
                <div className="flex-1 overflow-y-auto text-sm text-white space-y-1">
                    <p><span className="text-blue-400 font-bold">[System]:</span> Welcome to Oblovx!</p>
                    <p><span className="text-red-400 font-bold">[DevBradley]:</span> working on the new update</p>
                    <p><span className="text-yellow-400 font-bold">[Noob123]:</span> how do i jump??</p>
                </div>
                <input className="bg-white/10 border border-white/20 rounded px-2 py-1 text-white text-sm focus:outline-none" placeholder="Click here to chat..." />
            </div>
        </div>
    )
}
