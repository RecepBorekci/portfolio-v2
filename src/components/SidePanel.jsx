export default function SidePanel({ mirrored = false }) {
  return (
    <div
      className={`
        relative 
        aspect-[2/4] 
        flex flex-col items-center justify-around 
        bg-yellow-500 
        p-[1vw] 
        w-[14vw] 
        sm:w-[12vw] 
        lg:w-[18vw]
        xl:w-[12vw]
        xl:absolute
        xl:bottom-[80px]
        xl:z-10
        ${mirrored ? "xl:right-[10%]" : "xl:left-[10%]"}
      `}
      style={{
        clipPath: mirrored
          ? "polygon(0% 7%, 100% 0, 100% 100%, 0 100%)"
          : "polygon(0% 0, 100% 7%, 100% 100%, 0 100%)",
      }}
    >
      {/* This panel is not visible below lg */}
      <div className="text-[2.5vw] lg:text-[3.8vw] xl:text-[3vw] font-bold">
        <div
          style={{
            transform: mirrored ? "skewY(-3deg)" : "skewY(3deg)",
            transformOrigin: "center",
          }}
        >
          88
        </div>
      </div>

      <div className="w-[50%] aspect-square rounded-full overflow-hidden">
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

      <div className="w-[85%] aspect-[4/3]">
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
