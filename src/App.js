import "./App.css";
import Navbar from "./sections/Navbar.js";
import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import Popup from "./components/Popup";
import Activities from "./sections/Activities";
function App() {
  return (
    <>
      {/* <Popup /> */}
      <div className="App p-10 xl:px-[200px] xl:py-[100px]">
        <h1 className="text-left font-apple text-5xl font-medium md:text-center">
          👋 I'm Thepbordin Jaiinsom
        </h1>
        <Navbar />
        <Intro />
        {/* <Skills /> */}
        <Activities />
      </div>
    </>
  );
}

export default App;
