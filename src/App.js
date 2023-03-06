import "./App.css";
import Navbar from "./pages/Navbar.js";
import Intro from "./pages/Intro";
function App() {
  return (
    <div className="App p-20">
      <h1 className="text-center font-apple text-5xl font-semibold">
        👋 I'm Thepbordin Jaiinsom
      </h1>
      <Navbar /> {/* TODO: LINKS */}
      <Intro />
    </div>
  );
}

export default App;
