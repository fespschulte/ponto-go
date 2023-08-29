import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundImage={"assets/bg-landing.png"}
      bgRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Flex flexDir="column" px="120px">
        <Flex align="center" justify="space-between" mt="45px">
          <Image w="164px" src="/assets/pontogo-logo.svg" alt="Logo PontoGo" />
          <Flex align="center" gap="40px">
            <Flex gap="50px">
              <Link to="/">
                <Text color="white">Início</Text>
              </Link>
              <Link to="/">
                <Text color="white">Planos</Text>
              </Link>
            </Flex>
            <Link to="/login">
              <Button size="sm" variant="solidWhite">
                Fazer Login
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
