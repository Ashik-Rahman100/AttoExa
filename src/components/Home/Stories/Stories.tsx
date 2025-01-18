import { StaticImageData } from "next/image";
import StoriesCard from "./StoriesCard";

interface IStoryCard {
  title: string;
  description: string;
  image: string | StaticImageData;
}

async function getData() {
  const res = await fetch(
    `https://expensetracker-five-alpha.vercel.app/api/story`,
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

export default async function Stories() {
  const storyData: IStoryCard[] = await getData();

  return (
    <div className="px-3 lg:px-32 pt-20 pb-10" id="agroforestry">
      <h1 className="text-4xl text-center">Klantverhalen</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10 ">
        {storyData.map((story, index) => (
          <StoriesCard story={story} key={index}></StoriesCard>
        ))}
      </div>
    </div>
  );
}
