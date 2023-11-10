import "./App.css";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Awards from "./sections/Awards";
function App() {
  return (
    <>
      {/* <Popup /> */}
      <div className="App p-10 xl:px-[200px] xl:py-[100px]">
        <h1 className="text-left font-apple text-5xl  md:text-center mb-10 ">
          👋🏻 <span className="font-bold bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] bg-clip-text text-transparent">I'm Thepbordin Jaiinsom</span>
        </h1>

        {/* <Navbar /> */}
        <Intro />
        {/* <Skills /> */}
        <Awards />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
