import Image from "next/image";
import { ResearchData } from "@/lib/markdown";

export function ResearchCard({ research }: { research: ResearchData }) {
    const imgSrc = research.image ? `/computervisionlab/images/${research.image}` : "/computervisionlab/images/ui/skku_logo.svg"; // fallback to banner or generic

    return (
        <div className="flex flex-col md:flex-row bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-auto relative shrink-0 bg-secondary flex items-center justify-center p-4">
                {research.image ? (
                    <img
                        src={imgSrc}
                        alt={research.title}
                        className="w-full h-full object-contain mix-blend-multiply"
                    />
                ) : (
                    <div className="text-muted-foreground w-full h-full flex items-center justify-center">
                        No Image
                    </div>
                )}
            </div>

            <div className="p-8 flex flex-col justify-center flex-1">
                <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground leading-snug">
                    {research.title}
                </h3>

                <div
                    className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground leading-relaxed max-w-none"
                    dangerouslySetInnerHTML={{ __html: research.contentHtml }}
                />
            </div>
        </div>
    );
}
