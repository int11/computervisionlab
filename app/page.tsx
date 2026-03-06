import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* We can use a colored background placeholder or an image if we have a hero image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 z-0" />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Welcome to the Computer Vision Lab
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Sungkyunkwan University (SKKU)
          </p>
          <div className="pt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 hover:-translate-y-1 transition-transform">
              <Link href="/research">Explore Our Research</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Our Vision</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since its foundation in 1999, the Computer Vision Lab has focused on research spanning over
            various subsets of Computer Vision algorithms, such as Object Recognition, Behavior Understanding,
            Medical Imaging, Anomaly Detection, Style Transfer, Image Harmonization, and Defect Detection.
          </p>
        </div>
      </section>

      {/* Features/Quick Links */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Meet our Professor, Ph.D. and M.S. students, and researchers driving innovation in computer vision.
            </p>
            <Button variant="link" asChild className="group-hover:text-primary">
              <Link href="/people">View Members &rarr;</Link>
            </Button>
          </div>

          <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Publications</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              Explore our top-tier publications in international journals and conferences.
            </p>
            <Button variant="link" asChild className="group-hover:text-primary">
              <Link href="/publications">Read Papers &rarr;</Link>
            </Button>
          </div>

          <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-primary/10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Join Us</h3>
            <p className="text-muted-foreground mb-6 flex-1">
              We are looking for passionate students to join our lab. Please contact us if you are interested.
            </p>
            <Button variant="link" asChild className="group-hover:text-primary">
              <Link href="/contact">Contact Info &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
