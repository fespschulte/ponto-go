import {
  Box,
  Button,
  Divider,
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
        <HStack mb="87px" justifyContent="space-evenly" align="center">
          <Image src="/assets/brainny-logo.png"></Image>
          <Image src="/assets/amopet-logo.svg"></Image>
          <Image src="/assets/bus-logo.svg"></Image>
          <Image src="/assets/gostudy-logo.svg"></Image>
        </HStack>
        <Flex
          maxW="641px"
          color="white"
          flexDir="column"
          mx="auto"
          mb="70px"
          textAlign="center"
          gap="10px"
        >
          <Text fontWeight="extrabold" fontSize="40px">
            Encontre o plano perfeito
          </Text>
          <Text opacity={0.7} fontSize="xl" fontWeight="regular">
            Escolha o plano que melhor se encaixa na sua empresa e faça sua
            assinatura, dentro de 72h iremos liberar seus acessos.
          </Text>
        </Flex>
      </Flex>
      <Box h="20px" bgColor="white"></Box>
      <Divider
        mt="100px"
        borderColor="purple.800"
        width="100vw"
        orientation="horizontal"
      />
      <Flex justify="center" my="20px" gap="60px" mx="auto">
        <Flex gap="5px" color="white" flexDir="column">
          <Text fontSize="xl" fontWeight="bold">
            @pontogo
          </Text>
          <Text fontSize="base" fontWeight="light">
            Se conecta com a gente
          </Text>
        </Flex>
        <Flex gap="40px">
          <Link to="#">
            <Image src="/assets/instagram-logo.svg"></Image>
          </Link>
          <Link to="#">
            <Image src="/assets/facebook-logo.svg"></Image>
          </Link>
          <Link to="#">
            <Image src="/assets/linkedin-logo.svg"></Image>
          </Link>
        </Flex>
      </Flex>
      <Divider borderColor="purple.800" orientation="horizontal" />
      <Flex>
        <Flex alignItems="center" mt="60px" mb="74px" w="100vw" flexDir="row">
          <Divider
            opacity={0.4}
            borderColor="purple.800"
            orientation="horizontal"
          />
          <Text
            fontSize="base"
            fontWeight="regular"
            mx="30px"
            minW="fit-content"
            color="white"
          >
            PontoGo - Todos direitos reservados
          </Text>
          <Divider
            opacity={0.4}
            borderColor="purple.800"
            orientation="horizontal"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
