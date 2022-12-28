import skills from "./utilities/skills.json";

const Skills = () => {
  return (
    <section className="mt-5 w-[70%] m-auto">
      <h1 className="text-center text-3xl font-bold border-b-[1px] border-gray-500 pb-2 max-md:text-2xl">Skills and Tools</h1>
      {/* skills card container */}
      <section className="mt-4 flex justify-between items-center flex-wrap gap-5 ">
        {skills.map((skill, i) => {
          return (
            <div key={i} className="bg-zinc-700 shadow-[6px_6px_1px_0px_rgb(0,0,0,.3)] w-[20rem] min-h-[220px] rounded-lg p-4 hover:translate-y-[-5px] hover:bg-zinc-600 transition-all duration-300">
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
  );
};

export default Skills;
