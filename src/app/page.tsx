import AboutPage from "@/components/Home/About/AboutPage";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact/Contact";
import Dream from "@/components/Home/Dream/Dream";
import HeroPage from "@/components/Home/HeroCard/HeroPage";
import Projects from "@/components/Home/Projects/Projects";
import Stories from "@/components/Home/Stories/Stories";

export default function Home() {
  return (
    <div>
      <Banner />
      <HeroPage></HeroPage>
      <AboutPage></AboutPage>
      <Dream></Dream>
      <Projects></Projects>
      <Stories></Stories>
      <Contact></Contact>
    </div>
  );
}
