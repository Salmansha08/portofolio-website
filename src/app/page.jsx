import Image from 'next/image';
import SectionHero from '@/app/components/SectionHero';
import Navbar from '@/app/components/Navbar';
import SectionAbout from '@/app/components/SectionAbout';
import SectionProjects from '@/app/components/SectionProjects';
import SectionConnect from '@/app/components/SectionConnect';
import Footer from '@/app/components/Footer';
import SectionAchievement from '@/app/components/SectionAchievement';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <container className="container mt-24 mx-auto px-8 py-4">
        <SectionHero />
        <SectionAbout />
        <SectionProjects />
        <SectionConnect />
        <SectionAchievement />
      </container>
      <Footer />
    </main>
  );
}
