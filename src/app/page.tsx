import AboutPage from "@/components/Home/About/AboutPage";
import Banner from "@/components/Home/Banner";
import HeroCard from "@/components/Home/HeroCard/HeroCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 -mt-10 lg:-mt-20 px-3 lg:px-32">
        <HeroCard></HeroCard>
        <HeroCard></HeroCard>
        <HeroCard></HeroCard>
      </div>
      <AboutPage></AboutPage>
    </div>
  );
}
