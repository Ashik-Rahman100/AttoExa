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
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 -mt-10 lg:-mt-20 px-3 lg:px-32">
        <HeroCard></HeroCard>
        <HeroCard></HeroCard>
        <HeroCard></HeroCard>
      </div>
      <AboutPage></AboutPage>
      <Dream></Dream>
      <Projects></Projects>
      <Stories></Stories>
      <Contact></Contact>
    </div>
  );
}
