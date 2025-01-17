import StoriesCard from "./StoriesCard";

export default function Stories() {
  return (
    <div className="px-3 lg:px-32 pt-20 pb-10">
      <h1 className="text-4xl text-center">Klantverhalen</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10 ">
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
        <StoriesCard></StoriesCard>
      </div>
    </div>
  );
}
