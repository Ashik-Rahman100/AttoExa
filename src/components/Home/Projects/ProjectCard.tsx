import Image, { StaticImageData } from "next/image";

type TDivide = {
  id: number;
  des: string;
};
interface IProjectCard {
  location: string;
  title: string;
  sortDes: string;
  divideDes: TDivide[];
  image: string | StaticImageData;
}

export default function ProjectCard({ project }: { project: IProjectCard }) {
  return (
    <div className="card card-compact bg-base-100  shadow-xl border-b-2 border-[#77892B]">
      <figure>
        <Image
          src={project?.image}
          height={216}
          width={500}
          alt={project?.title}
        />
      </figure>
      <div className="card-body">
        <p className="text-[#77892B] text-[14px]">{project?.location}</p>
        <h2 className="text-[24px] ">{project?.title}</h2>

        <p>{project?.sortDes}</p>
        <hr />
        <div className="pt-2">
          {project?.divideDes.map((des, index) => (
            <p key={index} className="py-1 text-[17]">
              {des?.des}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
