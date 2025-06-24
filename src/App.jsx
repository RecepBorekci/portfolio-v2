import { Box } from "@chakra-ui/react";
import SpotlightBackground from "./components/page/SpotlightBackground"
import PortfolioCard from "./components/page/PortfolioCard"

function App() {
  return (
    <Box 
      minH="100vh"
      overflow="hidden"
      position="relative"
      bg="blue.900"
    >
      <SpotlightBackground/>
      <PortfolioCard/>
    </Box>
  );
}

export default App;
