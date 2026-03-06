interface PublicationProps {
    publication: {
        raw_text: string;
        title: string;
        authors: string;
        year: string;
        pdf_url: string;
    };
}

export function PublicationCard({ publication }: PublicationProps) {
    return (
        <div className="flex flex-col md:flex-row p-6 bg-card border rounded-xl hover:shadow-md transition-shadow gap-4">
            <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">
                    {publication.title}
                </h3>
                <p className="text-sm text-foreground mb-1 font-medium bg-secondary inline-block px-2 py-0.5 rounded">
                    {publication.year}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    {publication.authors}
                </p>
                <p className="text-xs text-muted-foreground mt-2 italic border-l-2 border-primary/30 pl-3">
                    {publication.raw_text}
                </p>
            </div>
            {(publication.pdf_url && publication.pdf_url.length > 0) && (
                <div className="flex items-center justify-start md:justify-end shrink-0">
                    <a
                        href={publication.pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                        >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                        </svg>
                        PDF
                    </a>
                </div>
            )}
        </div>
    );
}
