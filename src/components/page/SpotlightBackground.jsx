import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const spotlight = keyframes`
  0% { background-position: top left; }
  20% { background-position: bottom right; }
  30% { background-position: center left; }
  50% { background-position: center center; }
  80% { background-position: center right; }
  100% { background-position: top left; }
`;

function SpotlightBackground() {
  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bg="radial-gradient(circle at center, #00000000 10rem, #000000 50rem)"
      bgSize="200% 200%"
      animation={`${spotlight} 4s infinite`}
      zIndex={0}
    />
  );
}

export default SpotlightBackground;
