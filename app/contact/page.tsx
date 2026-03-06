import { getYamlData } from "@/lib/data";

interface SiteInfo {
    name: string;
    university: string;
    address: string;
    tel: string;
    fax: string;
    email: string;
}

export default function ContactPage() {
    const siteInfo = getYamlData<SiteInfo>('site.yaml');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">Contact Us</h1>
                    <p className="text-lg text-muted-foreground">
                        Get in touch with the Computer Vision Lab at {siteInfo.university}
                    </p>
                </div>

                {/* Contact info grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card p-8 rounded-2xl shadow-sm border space-y-8 flex flex-col hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            Contact Details
                        </h3>

                        <div className="space-y-8">
                            <div className="flex flex-col">
                                <span className="text-sm text-primary font-bold uppercase tracking-wider mb-2 border-b pb-1">Location</span>
                                <span className="text-base font-medium leading-relaxed">
                                    {siteInfo.address}
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm text-primary font-bold uppercase tracking-wider mb-2 border-b pb-1">Laboratory</span>
                                <span className="text-lg font-medium">Tel. +82-31-290-7227</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-sm text-primary font-bold uppercase tracking-wider mb-2 border-b pb-1">Professor</span>
                                <div className="space-y-1">
                                    <p className="text-lg font-medium text-foreground">Tel. +82-31-290-7142</p>
                                    <p className="text-lg font-medium text-foreground">Fax. +82-31-290-7947</p>
                                    <p className="mt-2">
                                        <a href={`mailto:${siteInfo.email}`} className="text-primary hover:underline font-medium">{siteInfo.email}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow flex flex-col">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            Map View
                        </h3>

                        <div className="w-full flex-1 min-h-[400px] bg-secondary rounded-xl overflow-hidden border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.748386470077!2d126.97491011530939!3d37.29440367984955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5d198889ff39%3A0xe2deda79e4cd6442!2sSungkyunkwan%20University%20Natural%20Sciences%20Campus!5e0!3m2!1sen!2skr!4v1684305822648!5m2!1sen!2skr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
