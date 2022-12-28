import Skills from "./skills";
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
      <Skills />
      <SocialMedias />
    </main>
  );
};

export default About;
