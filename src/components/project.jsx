import Cards from "./utilities/card";

const Project = () => {
  return (
    <main id="project" className="bg-zinc-800 text-white h-screen max-sm:h-auto pt-24">
      <div className="w-full">
        <h1 className="text-center text-4xl max-md:text-xl  w-max m-auto px-5 font-bold pb-2 ">Projects</h1>
      </div>
      <Cards />
    </main>
  );
};

export default Project;
