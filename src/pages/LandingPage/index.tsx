import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <Box
      h="100vh"
      w="100vw"
      backgroundImage={"assets/bg-landing.png"}
      bgRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Flex flexDir="column" w="85.5%" mx="auto">
        <HStack justify="space-between" mt="45px">
          <Image w="164px" src="/assets/pontogo-logo.svg" alt="Logo PontoGo" />
          <HStack spacing={["20px", "40px"]}>
            <Flex fontSize={["sm", "md"]} gap="50px">
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
          </HStack>
        </HStack>
        <HStack mt="50px" mb="43px" gap="38px" justify="space-between">
          <Flex
            minW={{ lg: "420px", xl: "520px" }}
            maxW={{ lg: "420px" }}
            color="white"
            flexDir="column"
          >
            <Text
              fontSize={{ sm: "md", md: "lg", xl: "2xl" }}
              letterSpacing={4}
              fontWeight={"regular"}
              textTransform="uppercase"
              mb="11px"
            >
              Esquece o ponto manual
            </Text>
            <Heading
              as="h1"
              mb="15px"
              fontWeight={"extrabold"}
              fontSize={{ sm: "xl", md: "3xl", xl: "40px" }}
            >
              Chegou a nova realidade para &nbsp;
              <Heading
                as="span"
                color="purple.800"
                fontWeight={"extrabold"}
                fontSize={{ sm: "xl", md: "3xl", xl: "40px" }}
              >
                Controle de Pontos
              </Heading>
            </Heading>
            <Text
              fontWeight={"medium"}
              mb="30px"
              fontSize={{ sm: "xs", md: "sm", xl: "lg" }}
            >
              Com o PontoGo seus colaboradores poderão bater seus pontos de
              forma fácil e rápida, possuindo também uma Dashboard intuitiva.
            </Text>
            <Flex gap="15px">
              <Button size="sm" variant="purpleWhite">
                Assinar agora
              </Button>

              <Button borderRadius="5" variant="outline">
                Ver planos
              </Button>
            </Flex>
          </Flex>
          <Image
            w={{ sm: "300px", md: "450px", lg: "550px", xl: "fit-content" }}
            src="/assets/hero-img.png"
          />
        </HStack>
      </Flex>
    </Box>
  );
}
