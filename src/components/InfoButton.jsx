import { NavLink } from "react-router-dom";

export default function InfoButton({ icon, label, path }) {
  return (
    <NavLink
      to={path}
      end
      className="
    flex items-center gap-2 
    justify-center
    lg:flex-col xl:flex-row
    bg-white/10 hover:bg-white/20 text-white border border-white/20
    rounded-md 
    
    px-4 py-2 
    text-[3.5vw] lg:text-[1.2vw] xl:text-[0.9vw] 
    min-w-[80px] lg:min-w-[6vw] xl:min-w-[6vw]
    min-h-[40px] lg:min-h-[8vw] xl:min-h-[3vw]
    "
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
