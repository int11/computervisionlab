import { getYamlData } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PublicationCard } from "@/components/PublicationCard";

interface Publication {
    raw_text: string;
    title: string;
    authors: string;
    year: string;
    pdf_url: string;
}

interface PublicationsData {
    international_journal: Publication[];
    international_conference: Publication[];
    domestic_journal: Publication[];
    domestic_conference: Publication[];
}

export default function PublicationsPage() {
    const international_journal = getYamlData<Publication[]>('publications/international_journal.yaml') || [];
    const international_conference = getYamlData<Publication[]>('publications/international_conference.yaml') || [];
    const domestic_journal = getYamlData<Publication[]>('publications/domestic_journal.yaml') || [];
    const domestic_conference = getYamlData<Publication[]>('publications/domestic_conference.yaml') || [];

    const data = {
        international_journal,
        international_conference,
        domestic_journal,
        domestic_conference
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">Publications</h1>
                    <p className="text-lg text-muted-foreground">
                        A comprehensive list of latest research articles and conference proceedings published by our laboratory.
                    </p>
                </div>

                <Tabs defaultValue="international_journal" className="w-full">
                    <TabsList className="w-full justify-start overflow-hidden rounded-none border-b bg-transparent p-0 mb-8">
                        <TabsTrigger
                            value="international_journal"
                            className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            International Journal ({data.international_journal.length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="international_conference"
                            className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            International Conference ({data.international_conference.length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="domestic_journal"
                            className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Domestic Journal ({data.domestic_journal.length})
                        </TabsTrigger>
                        <TabsTrigger
                            value="domestic_conference"
                            className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Domestic Conference ({data.domestic_conference.length})
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="international_journal" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="flex flex-col gap-4">
                            {data.international_journal.map((pub, idx) => (
                                <PublicationCard key={idx} publication={pub} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="international_conference" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="flex flex-col gap-4">
                            {data.international_conference.map((pub, idx) => (
                                <PublicationCard key={idx} publication={pub} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="domestic_journal" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="flex flex-col gap-4">
                            {data.domestic_journal.map((pub, idx) => (
                                <PublicationCard key={idx} publication={pub} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="domestic_conference" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="flex flex-col gap-4">
                            {data.domestic_conference.map((pub, idx) => (
                                <PublicationCard key={idx} publication={pub} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
