import { motion } from "motion/react";
import BackgroundImage from "./BackgroundImage";

export default function BackgroundMotionWrapper({
  isMainPage,
}: {
  isMainPage: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={isMainPage ? "main" : "other"}
      variants={{
        main: {
          filter: "blur(0px) brightness(1)",
          backgroundColor: "rgba(0,0,0,0)",
        },
        other: {
          filter: "blur(8px) brightness(0.5)",
          backgroundColor: "rgba(0,0,0,0.3)",
        },
      }}
      transition={{
        filter: { duration: 0.5 },
        backgroundColor: { duration: 0.5 },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <BackgroundImage />
    </motion.div>
  );
}
