import Skills from "./utilities/skills.json";
import SocialMedias from "./sosmed";
const About = () => {
  return (
    <main id="about" className="bg-zinc-800 text-white h-screen max-sm:h-auto pt-24">
      <div className="w-full">
        <h1 className="text-center text-4xl  w-max m-auto px-5 font-bold pb-2 max-md:text-2xl ">About me</h1>
      </div>
      <article className="mt-5 font-medium text-lg text-center">
        <p className="w-[750px] m-auto max-sm:w-[300px] max-sm:text-[13px]">
          "Im Hamdan Ubaidillah but you can call me Hamdan, im currently 18 years old from Pandaan Indonesia and student from{" "}
          <a href="https://www.smarifda.sch.id/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-semibold">
            SMA Maarif NU Pandaan
          </a>
          .
        </p>
        <p className="mt-2 w-[750px] m-auto max-sm:w-[300px] max-sm:text-[13px]">
          {" "}
          I got interest in programming especially in web development since jan 2022 while in pandemic. Im also intrested in game, music and anime/manga also in western movie."
        </p>
      </article>
      {/* skills */}
      <section className="mt-5 w-[70%] m-auto">
        <h1 className="text-center text-3xl font-bold border-b-[1px] border-gray-500 pb-2 max-md:text-2xl">Skills and Tools</h1>
        {/* skills card container */}
        <section className="mt-4 flex justify-between items-center flex-wrap gap-5 ">
          {Skills.map((skill, i) => {
            return (
              <div key={i} className="bg-zinc-700 shadow-[6px_6px_1px_0px_rgb(0,0,0,.3)] w-[20rem] h-[200px] rounded-lg p-4 hover:translate-y-[-5px] hover:bg-zinc-600 transition-all duration-300">
                <h1 className="text-2xl w-full font-semibold border-b-[1px] mb-2 max-sm:text-[20px] max-md:text-center">{skill.title}</h1>
                <ul className="text-lg flex flex-col  font-semibold font-['Poppins']">
                  {skill.items.map((items, i) => {
                    return (
                      <li key={i} className="flex flex-col max-sm:text-[16px] max-md:text-center">
                        {items.item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
      </section>
      <SocialMedias />
    </main>
  );
};

export default About;
