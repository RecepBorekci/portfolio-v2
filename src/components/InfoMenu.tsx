import InfoButton from "./InfoButton";
import { InfoMenuItem } from "../types/portfolio";
import { portfolioData } from "../data/portfolio";

export default function InfoMenu() {
  const buttonData: InfoMenuItem[] = portfolioData.infoMenuData.buttonData;

  return (
    <>
      {/* Left side of screen (xl only) */}
      <div className="hidden xl:flex xl:flex-col fixed left-4 top-1/2 -translate-y-1/2 gap-4 z-50">
        {buttonData.map((button) => (
          <InfoButton
            key={button.id}
            icon={button.icon}
            label={button.label}
            path={button.path}
          />
        ))}
      </div>

      {/* Bottom center for lg only */}
      <div className="hidden lg:flex xl:hidden fixed bottom-4 left-1/2 -translate-x-1/2 gap-2 z-50">
        {buttonData.map((button) => (
          <InfoButton
            key={button.id}
            icon={button.icon}
            label={button.label}
            path={button.path}
          />
        ))}
      </div>
    </>
  );
}
