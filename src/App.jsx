import SpotlightBackground from "./components/page/SpotlightBackground";
import PortfolioCard from "./components/page/PortfolioCard";

function App() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-blue-900">
      <SpotlightBackground />
      <PortfolioCard />
    </div>
  );
}

export default App;
