import { StaticImageData } from "next/image";
import StoriesCard from "./StoriesCard";

interface IStoryCard {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export default function Stories() {
  const storyData: IStoryCard[] = [
    {
      title: "Boerderij De Groene Hoop",
      description:
        "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en.....",
      image: "/home/stories/image-1.png",
    },
    {
      title: "Gemeente Natuurstad",
      description:
        "Boerderij De Groene Hoop had te kampen met afnemende oogsten door bodemerosie en extreme weersomstandigheden. Door samen.....",
      image: "/home/stories/image-2.png",
    },
    {
      title: "Stichting Groen Leven",
      description:
        "De gemeente Natuurstad wilde haar stedelijke omgeving vergroenen en biodiversiteit bevorderen. Met onze hulp hebben ze parken en verlaten.....",
      image: "/home/stories/image-3.png",
    },
  ];
  return (
    <div className="px-3 lg:px-32 pt-20 pb-10">
      <h1 className="text-4xl text-center">Klantverhalen</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10 ">
        {storyData.map((story, index) => (
          <StoriesCard story={story} key={index}></StoriesCard>
        ))}
      </div>
    </div>
  );
}
