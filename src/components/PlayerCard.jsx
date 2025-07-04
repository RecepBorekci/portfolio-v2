import { portfolioData } from "../data/portfolio";

export default function PlayerCard() {
  const stats = portfolioData.playerCardData.stats;

  return (
    <div
      className="
    relative 
    w-[90vw]
    sm:w-[80vw] 
    lg:w-[26vw] 
    xl:w-[22vw] 
    max-w-none
    md:max-w-[640px] 
    lg:max-w-[384px] 
    aspect-[384/662]
    xl:absolute
    xl:bottom-[120px]
    xl:left-1/2
    xl:-translate-x-1/2
    xl:z-10
      "
    >
      <svg
        viewBox="0 0 384 662"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          d="M384 599.721V68.276C384 68.276 335.222 64.4079 314.308 55.8202C293.393 47.2326 267.433 21.4252 260.538 18.9143C253.644 16.4033 242.769 10.5 242.769 10.5C242.769 10.5 237.973 32.7861 230.308 39.2125C222.642 45.6389 192 0 192 0C192 0 161.358 45.6389 153.692 39.2125C146.027 32.7861 141.231 10.5 141.231 10.5C141.231 10.5 130.587 16.4033 123.692 18.9143C116.798 21.4252 92.5378 47.2219 71.5385 55.8202C50.5391 64.4186 0 68.276 0 68.276V599.721C0 599.721 57.7183 612.011 94.7015 624.171C131.685 636.332 189.403 662 189.403 662C189.403 662 248.704 636.332 286.701 624.171C324.699 612.011 384 599.721 384 599.721Z"
          fill="#FFCF40"
        />
      </svg>

      <div className="absolute top-[10%] bottom-[10%] left-[8%] right-[8%] flex flex-col">
        {/* Profile section */}
        <div className="h-[40%] flex items-center justify-center border-b border-gray-300">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-[30%] aspect-square rounded-full object-cover"
          />
        </div>

        {/* Stats section */}
        <div className="h-[60%] grid grid-cols-2 gap-[2] pt-2 text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[1.5vw] xl:text-[1vw]">
          {stats.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              <span className="text-[1.2em] font-medium text-gray-600">
                {item.label}
              </span>
              <span className="text-[1.5em] font-bold text-gray-800">
                {item.points}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
