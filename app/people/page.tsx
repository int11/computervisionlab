import { getYamlData } from "@/lib/data";
import { TeamCard } from "@/components/TeamCard";

interface Member {
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
}

interface MembersData {
    professor: Member[];
    phd_students: Member[];
    ms_students: Member[];
    undergrad_interns: Member[];
}

interface LeaveOfAbsenceMember {
    name: string;
    degree: string;
    image?: string;
}

interface AlumniData {
    phd_alumni: Member[];
    ms_alumni: Member[];
    leave_of_absence: LeaveOfAbsenceMember[];
}

export default function PeoplePage() {
    const members = getYamlData<MembersData>('members.yaml') || {} as MembersData;
    const alumni = getYamlData<AlumniData>('alumni.yaml') || {} as AlumniData;

    const professorData = members.professor || [];
    const phdData = members.phd_students || [];
    const msData = members.ms_students || [];
    const internData = members.undergrad_interns || [];

    const phdAlumni = alumni.phd_alumni || [];
    const msAlumni = alumni.ms_alumni || [];
    const leaveOfAbsence = alumni.leave_of_absence || [];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Professor Section */}
                <section>
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-3xl font-extrabold tracking-tight">Professor</h2>
                    </div>
                    <div className="space-y-6">
                        {professorData.map((member, idx) => (
                            <TeamCard key={idx} member={member} role="Professor" />
                        ))}
                    </div>
                </section>

                {/* Ph.D Students Section */}
                <section>
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-2xl font-bold tracking-tight">Ph.D. Students</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {phdData.map((member, idx) => (
                            <div key={idx} className="flex flex-col bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-56 relative bg-secondary/30 m-4 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
                                    {member.image ? (
                                        <img src={`/computervisionlab/images/${member.image}`} alt={member.name} className="w-full h-full object-contain rounded-lg mix-blend-multiply" />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full text-4xl text-muted-foreground font-medium">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 pt-2 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <div className="space-y-2 text-sm text-muted-foreground mt-3 flex-1">
                                        {member.email && (
                                            <p className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                {member.email}
                                            </p>
                                        )}
                                        {member.research_interests && (
                                            <p className="mt-2 text-primary/80"><span className="font-semibold text-foreground">Interest:</span> {member.research_interests}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* M.S. Students Section */}
                <section>
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-2xl font-bold tracking-tight">M.S. Students</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {msData.map((member, idx) => (
                            <div key={idx} className="flex flex-col bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-56 relative bg-secondary/30 m-4 rounded-xl overflow-hidden shrink-0 flex items-center justify-center p-2">
                                    {member.image ? (
                                        <img src={`/computervisionlab/images/${member.image}`} alt={member.name} className="w-full h-full object-contain rounded-lg mix-blend-multiply" />
                                    ) : (
                                        <div className="flex items-center justify-center w-full h-full text-4xl text-muted-foreground font-medium">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 pt-2 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <div className="space-y-2 text-sm text-muted-foreground mt-3 flex-1">
                                        {member.email && (
                                            <p className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                                {member.email}
                                            </p>
                                        )}
                                        {member.research_interests && (
                                            <p className="mt-2 text-primary/80"><span className="font-semibold text-foreground">Interest:</span> {member.research_interests}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Undergraduate Interns Section */}
                <section>
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-2xl font-bold tracking-tight">Undergraduate Interns</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {internData.map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                                <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 border-2 border-primary/10 bg-secondary/30 flex items-center justify-center p-1">
                                    {member.image ? (
                                        <img src={`/computervisionlab/images/${member.image}`} alt={member.name} className="w-full h-full object-contain rounded-full" />
                                    ) : (
                                        <div className="bg-secondary/50 flex items-center justify-center w-full h-full text-2xl text-muted-foreground font-medium rounded-full">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{member.email}</p>
                                {member.research_interests && (
                                    <p className="text-xs mt-3">{member.research_interests}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Alumni Section */}
                <section className="bg-slate-50 p-8 rounded-3xl border">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight">Alumni</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-primary border-b-2 border-primary/20 pb-2 inline-block">Ph.D. Alumni</h3>
                            <ul className="space-y-4">
                                {phdAlumni.map((alum, idx) => (
                                    <li key={idx} className="flex items-center gap-4 border-b border-muted py-3 hover:bg-slate-100 px-3 rounded transition-colors group">
                                        <div className="w-16 h-20 relative bg-secondary/20 rounded-md overflow-hidden shrink-0 flex items-center justify-center p-1 border">
                                            {alum.image ? (
                                                <img src={`/computervisionlab/images/${alum.image}`} alt={alum.name} className="w-full h-full object-contain rounded-sm mix-blend-multiply" />
                                            ) : (
                                                <div className="flex items-center justify-center w-full h-full text-xl text-muted-foreground font-medium">
                                                    {alum.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <span className="font-semibold text-lg">{alum.name}</span>
                                            <span className="text-sm text-muted-foreground block group-hover:text-primary transition-colors mt-1">{alum.affiliation}</span>
                                        </div>
                                        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded shrink-0">
                                            {alum.graduation}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-primary border-b-2 border-primary/20 pb-2 inline-block">M.S. Alumni</h3>
                            <ul className="space-y-4">
                                {msAlumni.map((alum, idx) => (
                                    <li key={idx} className="flex items-center gap-4 border-b border-muted py-3 hover:bg-slate-100 px-3 rounded transition-colors group">
                                        <div className="w-16 h-20 relative bg-secondary/20 rounded-md overflow-hidden shrink-0 flex items-center justify-center p-1 border">
                                            {alum.image ? (
                                                <img src={`/computervisionlab/images/${alum.image}`} alt={alum.name} className="w-full h-full object-contain rounded-sm mix-blend-multiply" />
                                            ) : (
                                                <div className="flex items-center justify-center w-full h-full text-xl text-muted-foreground font-medium">
                                                    {alum.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <span className="font-semibold text-lg">{alum.name}</span>
                                            <span className="text-sm text-muted-foreground block group-hover:text-primary transition-colors mt-1">{alum.affiliation}</span>
                                        </div>
                                        <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded shrink-0">
                                            {alum.graduation}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Leave of Absence Section */}
                {leaveOfAbsence.length > 0 && (
                <section>
                    <div className="mb-8 border-b pb-4">
                        <h2 className="text-2xl font-bold tracking-tight">Leave of Absence</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {leaveOfAbsence.map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center bg-card border rounded-xl p-6 shadow-sm text-center">
                                <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4 border-2 border-primary/10 bg-secondary/30 flex items-center justify-center p-1">
                                    {member.image ? (
                                        <img src={`/computervisionlab/images/${member.image}`} alt={member.name} className="w-full h-full object-contain rounded-full" />
                                    ) : (
                                        <div className="bg-secondary/50 flex items-center justify-center w-full h-full text-2xl text-muted-foreground font-medium rounded-full">
                                            {member.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold">{member.name}</h3>
                                <p className="text-xs text-muted-foreground mt-1">{member.degree}</p>
                            </div>
                        ))}
                    </div>
                </section>
                )}

            </div>
        </div>
    );
}
