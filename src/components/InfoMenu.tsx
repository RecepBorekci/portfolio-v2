import InfoButton from "./InfoButton";
import { InfoMenuItem } from "../types/portfolio";
import { infoMenuData } from "../data/infoMenu";
import clsx from "clsx";

export default function InfoMenu() {
  const buttonData: InfoMenuItem[] = infoMenuData.buttonData;

  // Helper function to render buttons in a container
  function renderButtons({
    visibleOn,
    extraClasses,
  }: {
    visibleOn: "xl" | "lg";
    extraClasses?: string;
  }) {
    const containerClasses = clsx(
      "fixed z-50",
      {
        // Only visible on xl screens (left side)
        "hidden xl:flex xl:flex-col left-4 top-1/2 -translate-y-1/2 gap-4":
          visibleOn === "xl",
        // Only visible on lg screens (bottom center, but hidden on xl)
        "hidden lg:flex xl:hidden bottom-4 left-1/2 -translate-x-1/2 gap-2":
          visibleOn === "lg",
      },
      extraClasses
    );
    return (
      <div className={containerClasses}>
        {buttonData.map((button) => (
          <InfoButton
            key={button.id}
            icon={button.icon}
            label={button.label}
            path={button.path}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      {renderButtons({ visibleOn: "xl" })}
      {renderButtons({ visibleOn: "lg" })}
    </>
  );
}
