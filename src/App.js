import Home from "./components/home";
import Navigation from "./components/nav";
import Project from "./components/project";
import About from "./components/about";

const App = () => {
  return (
    <main className="h-screen">
      <Navigation />
      <Home />
      <About />
      <Project />
      <footer className=" flex flex-col items-center justify-center bg-zinc-800 text-white font-semibold py-[20px] max-sm:text-sm">
        <h1 className="text-center text-md">
          Created by{" "}
          <a href="http://instagram.com/hmdnubaidillah" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            hmdnubaidillah
          </a>
        </h1>
      </footer>
    </main>
  );
};

export default App;
