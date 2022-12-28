import sosials from "./utilities/sosials.json";

const SocialMedias = () => {
  return (
    <main className=" mt-6 w-[70%] m-auto">
      <h1 className="text-3xl font-semibold text-center border-b-[1px] border-gray-500 pb-2 mb-5 max-md:text-2xl ">Contact</h1>
      <div className="text-center text-lg font-medium max-md:text-sm">
        you can reach me via email
        <a href="mailto:hmdnubaidllah0306@gmail.com" className="font-bold cursor-pointer text-blue-600 hover:text-blue-500  ">
          {" "}
          hmdnubaidillah@gmail.com
        </a>{" "}
        or via,
      </div>
      <section className="flex flex-wrap justify-center mt-5 gap-5">
        {sosials.map((sosial, i) => {
          return (
            <div key={i}>
              <button
                className="w-[200px] 
              h-[50px]
              max-sm:h-[40px] 
              font-['Poppins'] 
              rounded-lg 
              hover:translate-y-[-5px] 
              transition duration-200 
              shadow-[5px_5px_2px_0px_rgb(0,0,0,.35)]"
                style={{ backgroundColor: `#${sosial.bgColor}` }}
              >
                <a href={sosial.link} className="text-center font-semibold text-xl max-md:text-[15px]">
                  {sosial.name}
                </a>
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default SocialMedias;
