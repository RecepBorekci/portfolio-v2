import { portfolioData } from "../data/portfolio";
import { Stat } from "../types/portfolio";
import LeftSidePanelBackground from "./LeftSidePanelBackground.svg";
import RightSidePanelBackground from "./RightSidePanelBackground.svg";

interface SidePanelProps {
  mirrored?: boolean;
}

export default function SidePanel({ mirrored = false }: SidePanelProps) {
  const stats: Stat[] = portfolioData.playerCardData.stats;
  const avg = Math.round(
    stats.reduce((acc, cur) => acc + cur.points, 0) / stats.length
  );

  return (
    <div
      className={`
        relative 
        aspect-[2/4] 
        flex flex-col items-center justify-around 
        p-[1vw] 
        w-[14vw] 
        sm:w-[12vw] 
        md:w-[20vw]
        lg:w-[18vw]
        xl:w-[12vw]
        xl:absolute
        xl:bottom-[80px]
        xl:z-10
        overflow-hidden
        ${mirrored ? "xl:right-[10%]" : "xl:left-[10%]"}
      `}
      style={{
        clipPath: mirrored
          ? "polygon(0% 7%, 100% 0, 100% 100%, 0 100%)"
          : "polygon(0% 0, 100% 7%, 100% 100%, 0 100%)",
      }}
    >
      {/* SVG Background */}
      <span
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <img
          src={mirrored ? RightSidePanelBackground : LeftSidePanelBackground}
          alt="side panel background"
          className="w-full h-full object-cover"
        />
      </span>
      {/* This panel is not visible below lg */}
      <div className="text-[2.5vw] md:text-[5vw] lg:text-[3.8vw] xl:text-[3vw] font-bold z-10">
        <div
          style={{
            transform: mirrored ? "skewY(-3deg)" : "skewY(3deg)",
            transformOrigin: "center",
          }}
        >
          {avg}
        </div>
      </div>

      <div className="w-[50%] aspect-square rounded-full overflow-hidden z-10">
        <img
          src="/images/AGU.jpg"
          alt="AGU team logo"
          className="w-full h-full object-cover"
          style={{
            transform: mirrored ? "skewY(-2deg)" : "skewY(2deg)",
            transformOrigin: "center",
          }}
        />
      </div>

      <div className="w-[85%] aspect-[4/3] z-10">
        <img
          src="/images/Flag_of_Turkey.svg.webp"
          alt="Flag of Turkey"
          className="w-full h-full object-contain"
          style={{
            transform: mirrored ? "skewY(-2deg)" : "skewY(2deg)",
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  );
}
