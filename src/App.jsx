import Platform from "./components/Platform";
import PlayerCard from "./components/PlayerCard";
import SidePanel from "./components/SidePanel";
import InfoMenu from "./components/InfoMenu";

function App() {
  return (
    <div
      className="
    min-h-screen overflow-hidden relative 
    flex flex-col items-center justify-center gap-10
  "
    >
      <img
        src="/images/Stadium.jpg"
        alt="stadium"
        className="absolute top-0 left-0 w-full h-full object-cover xl:object-top z-0"
      />
      {/* InfoMenu */}
      <InfoMenu />

      {/* Container for screens below xl - maintains existing flexbox layout */}
      <div className="xl:hidden relative w-full max-w-[1280px] px-4 flex items-center justify-around">
        {/* Left Panel */}
        <div className="hidden lg:block self-end">
          <SidePanel />
        </div>

        {/* Player Card */}
        <div className="flex justify-center ">
          <PlayerCard />
        </div>

        {/* Right Panel */}
        <div className="hidden lg:block self-end">
          <SidePanel mirrored />
        </div>
      </div>

      {/* Container for xl+ screens - new relative positioned container */}
      <div className="hidden xl:block relative w-full max-w-[1678px] h-[800px]">
        {/* Platform positioned at bottom */}
        <Platform />

        {/* Left Panel - absolutely positioned */}
        <div className="hidden lg:block">
          <SidePanel />
        </div>

        {/* Player Card - absolutely positioned */}
        <PlayerCard />

        {/* Right Panel - absolutely positioned */}
        <div className="hidden lg:block">
          <SidePanel mirrored />
        </div>
      </div>
    </div>
  );
}

export default App;
