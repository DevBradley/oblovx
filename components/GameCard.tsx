import Link from 'next/link';
import { User, ThumbsUp } from 'lucide-react';

interface GameCardProps {
    id: string;
    title: string;
    description: string;
    imageColor: string;
    visits: string;
    rating: string;
}

export default function GameCard({ id, title, description, imageColor, visits, rating }: GameCardProps) {
    return (
        <Link href={`/play/${id}`} className="group block">
            <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] border border-white/5 hover:border-white/20">
                <div className={`aspect-video w-full ${imageColor} relative flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <span className="text-4xl">🎮</span>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1 truncate">{title}</h3>
                    <p className="text-gray-400 text-sm mb-3 truncate">{description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                            <ThumbsUp className="w-3 h-3" />
                            <span>{rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{visits} Playing</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
