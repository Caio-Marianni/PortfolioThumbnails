import ThumbnailList from "./components/ThumbnailList";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projetos</h1>
        <ThumbnailList />
      </div>
    </>
  );
}
