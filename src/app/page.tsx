import AboutPage from "@/components/Home/About/AboutPage";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact/Contact";
import Dream from "@/components/Home/Dream/Dream";
import HeroCard from "@/components/Home/HeroCard/HeroCard";
import Projects from "@/components/Home/Projects/Projects";
import Stories from "@/components/Home/Stories/Stories";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="-mt-10 lg:-mt-24">
        <h2 className="text-[26px] text-center text-[#ffff]">
          Praktische groene oplossingen
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4  px-3 lg:px-32">
          <HeroCard></HeroCard>
          <HeroCard></HeroCard>
          <HeroCard></HeroCard>
        </div>
      </div>
      <AboutPage></AboutPage>
      <Dream></Dream>
      <Projects></Projects>
      <Stories></Stories>
      <Contact></Contact>
    </div>
  );
}
