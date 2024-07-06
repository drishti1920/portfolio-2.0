import "./App.css";
import Banner from "./components/Banner";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Navibar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Banner />
      {/* <Skills /> */}
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
