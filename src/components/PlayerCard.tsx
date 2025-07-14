import { portfolioData } from "../data/portfolio";
import svg from "./PlayerCardBackground.svg";

interface PlayerCardProps {
  size?: "full" | "mini";
}

export default function PlayerCard({ size = "full" }: PlayerCardProps) {
  const stats = portfolioData.playerCardData.stats;

  const isMini = size === "mini";

  return (
    <div
      className={`relative ${
        isMini
          ? "w-[180px] sm:w-[200px] md:w-[220px] max-w-[40vw]"
          : "w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[26vw] xl:w-[22vw] max-w-none md:max-w-[640px] lg:max-w-[384px]"
      } aspect-[384/681] ${
        isMini
          ? ""
          : "xl:absolute xl:bottom-[120px] xl:left-1/2 xl:-translate-x-1/2 xl:z-10"
      }`}
    >
      <img
        src={svg}
        alt="playerCardBackground"
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="absolute top-[10%] bottom-[10%] left-[8%] right-[8%] flex flex-col">
        {/* Profile section */}
        <div className="h-[46%] flex items-center justify-center">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-[30%] aspect-square rounded-full object-cover"
          />
        </div>

        <div className="h-[4%] flex items-center justify-center">
          <h2
            className={`text-[#7B4019] font-bold font-orbitron ${
              isMini
                ? "text-[0.8em] sm:text-[1em] md:text-[1em] lg:text-[1em] xl:text-[1.1em]"
                : "text-[1.3em] sm:text-[1.5em] md:text-[1.05em] lg:text-[1.2em] xl:text-[1.3em]"
            }`}
          >
            Recep Borekci
          </h2>
        </div>

        {/* Stats section */}
        <div
          className={`h-[50%] grid grid-cols-2 gap-[2] pt-4 ${
            isMini
              ? "text-[1.3vw] sm:text-[1.5vw] md:text-[1.2vw] lg:text-[1vw] xl:text-[0.6vw]"
              : "text-[3.5vw] sm:text-[3.2vw] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[1vw]"
          }`}
        >
          {stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center font-orbitron"
            >
              <span className="font-medium text-gray-600 text-[1.2em]">
                {item.label}
              </span>
              <span className="font-bold text-gray-800 text-[1.5em]">
                {item.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
