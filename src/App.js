import "./App.css";
import Navbar from "./pages/Navbar.js";
import Intro from "./pages/Intro";
import Skills from "./pages/Skills";
import Popup from "./components/Popup";
function App() {
  return (
    <>
      {/* <Popup /> */}
      <div className="App p-20 2xl:p-[200px]">
        <h1 className="text-left font-apple text-5xl font-semibold md:text-center">
          👋 I'm Thepbordin Jaiinsom
        </h1>
        <Navbar /> 
        <Intro />
        {/* <Skills /> */}
      </div>
    </>
  );
}

export default App;
