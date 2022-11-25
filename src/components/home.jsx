import TypeAnimate from "./utilities/typingAnimation";

const Home = () => {
  return (
    <main id="home" className="h-screen flex items-center justify-center flex-col bg-zinc-800">
      <div className=" text-center max-md:w-[90%] rounded-xl shadow-[10px_10px_1px_0px_rgb(82,82,91)] hover:shadow-zinc-500 transition-all duration-300 hover:cursor-default bg-zinc-700 w-[500px] h-[200px] flex flex-col justify-center items-center">
        <TypeAnimate />
        <h1 className="text-white font-['Poppins'] font-semibold border-t-2 mt-2 pt-2 max-md:text-[18px] text-[22px] text-center ">Im Hamdan a web developer 👋</h1>
      </div>
    </main>
  );
};

export default Home;
