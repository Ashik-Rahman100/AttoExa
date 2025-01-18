import Image, { StaticImageData } from "next/image";

import ProjectCard from "./ProjectCard";
type TDivide = {
  id: number;
  des: string;
};
interface IProjectData {
  id: number;
  location: string;
  title: string;
  sortDes: string;
  divideDes: TDivide[];
  image: string | StaticImageData;
}
async function getData() {
  const res = await fetch(
    `https://expensetracker-five-alpha.vercel.app/api/projects`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  // const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return data;
}

export default async function Projects() {
  const projectsData: IProjectData[] = await getData();

  return (
    <div className="px-3 lg:px-32  mt-20" id="projecten-fotso">
      <h1 className="text-4xl">
        Samen werken aan een groenere <br /> wereld: bekijk onze projecten
      </h1>
      <div className="py-8 pb-16 flex flex-col lg:flex-row  lg:space-x-4">
        <p className="py-4">
          Bossen zijn een van de meest effectieve oplossingen om de effecten van
          klimaatverandering aan te pakken. Ze zijn ook een krachtige kracht om
          mensen uit de armoede te halen, biodiversiteit te behouden en
          verwoestijning terug te dringen.
        </p>
        <p className="bg-[#F0ECE3] text-[#454C4F] px-2 py-4 border-l-4 border-[#77892B] ">
          In plaats van alleen meer bomen te planten, werken we aan het
          herstellen van landschappen en het beschermen ervan tegen ontbossing
          op de lange termijn.
        </p>
      </div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  ">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}></ProjectCard>
          ))}
        </div>

        <div className="join flex justify-center pt-14 pb-6">
          <button className=" btn  bg-[#77892B] text-white hover:bg-[#404d07] hover:text-white join-item">
            Dekijk onze projecten
          </button>
          <button className="btn bg-[#77892B] hover:bg-[#404d07] hover:text-white text-white join-item">
            <Image
              height={7}
              width={3.5}
              src="/VectorWhite.png"
              alt="vector"
            ></Image>
          </button>
        </div>
      </section>
    </div>
  );
}
