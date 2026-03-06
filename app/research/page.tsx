import { getResearchData } from "@/lib/markdown";
import { ResearchCard } from "@/components/ResearchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function ResearchPage() {
    const currentResearch = await getResearchData('current');
    const pastResearch = await getResearchData('past');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4">Research</h1>
                    <p className="text-lg text-muted-foreground">
                        A comprehensive overview of our current and past research pursuits in computer vision and artificial intelligence.
                    </p>
                </div>

                <Tabs defaultValue="current" className="w-full">
                    <TabsList className="w-full justify-start overflow-hidden rounded-none border-b bg-transparent p-0 mb-8">
                        <TabsTrigger
                            value="current"
                            className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Current Research
                        </TabsTrigger>
                        <TabsTrigger
                            value="past"
                            className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Past Research
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="current" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="flex flex-col gap-10">
                            {currentResearch.map((res) => (
                                <ResearchCard key={res.id} research={res} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="past" className="focus-visible:outline-none focus-visible:ring-0">
                        <div className="flex flex-col gap-10">
                            {pastResearch.map((res) => (
                                <ResearchCard key={res.id} research={res} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
