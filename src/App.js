import "./App.css";
import AcadmyPage from "./pages/AcadmyPage";
import Community from "./pages/Community";
import Empowerment from "./pages/Empowerment";
import Footer from "./pages/Footer";
import Inspiration from "./pages/Inspiration";
import OurTeam from "./pages/OurTeam";
import Story from "./pages/Story";

function App() {
  return (
    <div className="app">
      <AcadmyPage />
      <OurTeam />
      <Empowerment />
      <Community />
      <Story />
      <Inspiration />
      <Footer />
    </div>
  );
}

export default App;
