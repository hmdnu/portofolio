import cardData from "./cardData";
const Cards = () => {
  return (
    <main>
      {/* card container */}
      <div className="pb-10 grid grid-cols-3 gap-y-10 max-md:grid-cols-2 w-[80%] max-sm:w-[90%] max-md:w-[95%] max-sm:grid-cols-1 mt-5 m-auto place-items-center">
        {cardData.map((datas, i) => {
          return (
            // card container
            <div className="bg-zinc-700 w-[25rem] max-md:w-[20rem] flex flex-col items-center py-5 px-5 m-auto rounded-2xl hover:translate-y-[-10px] transition duration-300" key={i}>
              {/* card title */}
              <h1 className="font-semibold text-xl max-sm:text-lg underline">{datas.name}</h1>
              {/* card img */}
              <div className="w-[20rem] max-md:w-[15rem] mt-4">
                <img loading="lazy" src={datas.img} alt="project" className="rounded-2xl" />
              </div>
              {/* desc */}
              <article className="mt-2">
                <p className="text-center max-md:text-sm font-semibold">"{datas.desc}"</p>
              </article>
              {/* buttons */}
              <div className="mt-3 flex gap-5 max-sm:text-sm">
                <button className="bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700 transition-all">
                  <a className="font-semibold" href={datas.linkDemo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="bg-zinc-800 px-4 py-1 rounded-lg hover:bg-zinc-900 transition-all">
                  <a className="font-semibold" href={datas.linkRepo} target="_blank" rel="noopener noreferrer">
                    Repo
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Cards;
