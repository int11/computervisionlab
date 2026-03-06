import Image from "next/image";

interface MemberProps {
    member: {
        name: string;
        image?: string;
        email?: string;
        office?: string;
        phone?: string;
        fax?: string;
        link?: string;
        research_interests?: string;
        graduation?: string;
        affiliation?: string;
        education_experience?: string[];
    };
    role: string;
}

export function TeamCard({ member, role }: MemberProps) {
    const imgSrc = member.image ? `/computervisionlab/images/${member.image}` : "/computervisionlab/images/ui/skku_logo.svg";

    return (
        <div className="flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
            <div className="w-full md:w-1/3 aspect-[3/4] relative bg-muted/30 shrink-0 flex items-center justify-center overflow-hidden p-4">
                {member.image ? (
                    <img
                        src={imgSrc}
                        alt={member.name}
                        className="w-full h-full object-contain rounded-xl"
                    />
                ) : (
                    <div className="text-muted-foreground font-medium text-4xl">
                        {member.name.charAt(0)}
                    </div>
                )}
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center w-full">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold tracking-tight mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{role}</p>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    {member.email && (
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            {member.email}
                        </p>
                    )}
                    {member.office && (
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            {member.office}
                        </p>
                    )}
                    {member.phone && (
                        <p className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            {member.phone}
                        </p>
                    )}
                    {member.research_interests && (
                        <div className="pt-2">
                            <span className="font-semibold text-foreground">Research Interests:</span> {member.research_interests}
                        </div>
                    )}
                </div>

                {member.education_experience && member.education_experience.length > 0 && (
                    <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Education & Experience</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {member.education_experience.map((edu, idx) => (
                                <li key={idx} className="ml-2">{edu}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
