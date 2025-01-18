import { StaticImageData } from "next/image";

interface IStoryCard {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export default function StoriesCard({ story }: { story: IStoryCard }) {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${story.image})`,
        height: "388px",
        color: "white",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="card-body mt-[40%] text-wrap">
        <div className="border-l-4 border-[#77892B] pl-3">
          <h2 className="card-title ">{story.title}</h2>
          <p className="mr-16">{story.description}</p>
        </div>
      </div>
    </div>
  );
}
