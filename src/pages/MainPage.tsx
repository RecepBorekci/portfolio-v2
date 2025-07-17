import PlayerCard from "../components/PlayerCard";
import SidePanel from "../components/SidePanel";
import Platform from "../components/Platform.svg?react";

function MainPage() {
  return (
    <div
      className="
    min-h-screen overflow-hidden relative 
    flex flex-col items-center justify-center gap-10
  "
    >
      {/* Container for screens below xl - maintains existing flexbox layout */}
      <div className="xl:hidden relative w-full max-w-[1280px] px-4 flex items-center justify-around">
        {/* Left Panel */}
        <div className="hidden md:block self-end">
          <SidePanel mirrored={false} />
        </div>

        {/* Player Card */}
        <div className="flex justify-center ">
          <PlayerCard size="full" />
        </div>

        {/* Right Panel */}
        <div className="hidden md:block self-end">
          <SidePanel mirrored={true} />
        </div>
      </div>

      {/* Container for xl+ screens - new relative positioned container */}
      <div className="hidden xl:block relative w-full max-w-[1678px] h-[800px]">
        {/* Platform positioned at bottom */}
        <div className="w-[80vw] h-full flex justify-center xl:absolute xl:bottom-0 xl:left-1/2 xl:-translate-x-1/2 xl:z-20 xl:w-auto xl:h-auto">
          <Platform />
        </div>

        {/* Left Panel - absolutely positioned */}
        <div className="hidden lg:block">
          <SidePanel mirrored={false} />
        </div>

        {/* Player Card - absolutely positioned */}
        <PlayerCard size="full" />

        {/* Right Panel - absolutely positioned */}
        <div className="hidden lg:block">
          <SidePanel mirrored={true} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
