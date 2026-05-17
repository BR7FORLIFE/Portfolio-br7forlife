import "../global.css";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen p-0 m-0 overflow-x-hidden font-Geist flex flex-col bg-white">
      <Header />
      <main className="w-full max-w-7xl mx-auto flex flex-col gap-20 pt-28 pb-20 px-4">
        <Projects />
        <Experience />
        <Tech/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
