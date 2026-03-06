import { getYamlData } from "@/lib/data";

interface SiteInfo {
    name: string;
    university: string;
    address: string;
    tel: string;
    fax: string;
    email: string;
}

export default function Footer() {
    const siteInfo = getYamlData<SiteInfo>('site.yaml');

    return (
        <footer className="border-t bg-muted">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <div className="mb-4 md:mb-0">
                        <p className="font-semibold">{siteInfo.name}, {siteInfo.university}</p>
                        <p>{siteInfo.address}</p>
                    </div>
                    <div className="text-right">
                        <p>Tel: {siteInfo.tel}</p>
                        <p>Fax: {siteInfo.fax}</p>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-muted-foreground/20 text-center text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
