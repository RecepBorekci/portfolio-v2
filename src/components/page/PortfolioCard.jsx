import { Avatar, Button, Card, Center, Text} from "@chakra-ui/react";


function PortfolioCard() {
    return (
        <Center minH="100vh" px={4} position="relative" zIndex={1} >
        <Card.Root maxW="md" w="100%" p={8} boxShadow="xl" borderRadius="xl" alignItems="center" gap="2">
          <Avatar.Root size="xl">
            <Avatar.Image src="/public/images/profile.jpg" />
            <Avatar.Fallback name="Recep" />
          </Avatar.Root>
          <Card.Title size="2xl">
            Recep's Portfolio
          </Card.Title>
          <Text fontSize="md" color="gray.500" mb={6} textAlign="center">
            Full Stack Developer specializing in React, Python, and modern web technologies. Explore my FIFA-style interactive portfolio!
          </Text>
          <Button colorScheme="yellow" size="lg" fontWeight="bold">
            View Projects
          </Button>
        </Card.Root>
      </Center>
    )
}

export default PortfolioCard;