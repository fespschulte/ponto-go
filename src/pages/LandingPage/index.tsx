import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Slider } from "../../components/Slider";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export function LandingPage() {
  const { onToggle } = useDisclosure();

  return (
    <Box
      backgroundImage={"assets/bg-landing.png"}
      bgRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Flex
        w={{ base: "85%", md: "85.5%" }}
        justify="space-between"
        pt={{ base: "20px", md: "45px" }}
        mx="auto"
      >
        <Image w="164px" src="/assets/pontogo-logo.svg" alt="Logo PontoGo" />
        <VStack display={{ base: "flex", md: "none" }} align="flex-start">
          <VStack align="center">
            <Menu placement="left">
              {({ isOpen }) => (
                <>
                  <MenuButton
                    textAlign="start"
                    p={0}
                    as={Button}
                    w="auto"
                    bgColor="transparent"
                    onClick={onToggle}
                  >
                    {isOpen ? (
                      <CloseIcon w={5} h={5} />
                    ) : (
                      <HamburgerIcon w={7} h={7} />
                    )}
                  </MenuButton>
                  <MenuList mt="10px" borderRadius="5px" minWidth="auto">
                    <MenuItem bgColor="transparent">
                      <MobileNav />
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </VStack>
        </VStack>
        <Flex
          width="-webkit-fill-available"
          display={{ base: "none", md: "flex" }}
          justify="flex-end"
        >
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir="column" maxW="85.5%" mx="auto">
        <HStack
          flexWrap={{ base: "wrap", md: "nowrap" }}
          mt={{ base: "80px", md: "50px" }}
          mb="43px"
          gap="38px"
          justify={{ base: "center", md: "space-between" }}
        >
          <Flex
            minW={{ lg: "420px", xl: "520px" }}
            maxW={{ lg: "420px" }}
            color="white"
            flexDir="column"
            align={{ base: "center", md: "flex-start" }}
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
              fontSize={{ base: "3xl", xl: "40px" }}
              textAlign={{ base: "center", md: "start" }}
            >
              Chegou a nova realidade para &nbsp;
              <Heading
                as="span"
                color="purple.800"
                fontWeight={"extrabold"}
                fontSize={{ base: "3xl", xl: "40px" }}
              >
                Controle de Pontos
              </Heading>
            </Heading>
            <Text
              fontWeight={"medium"}
              mb="30px"
              fontSize={{ sm: "xs", md: "sm", xl: "lg" }}
              textAlign={{ base: "center", md: "start" }}
            >
              Com o PontoGo seus colaboradores poderão bater seus pontos de
              forma fácil e rápida, possuindo também uma Dashboard intuitiva.
            </Text>
            <Flex gap="15px">
              <Button size="sm" variant="purpleWhite">
                Assinar agora
              </Button>
              <ChakraLink href="#planos">
                <Button borderRadius="5" variant="outline">
                  Ver planos
                </Button>
              </ChakraLink>
            </Flex>
          </Flex>
          <Image
            w={{ sm: "400px", md: "450px", lg: "550px", xl: "fit-content" }}
            src="/assets/hero-img.png"
          />
        </HStack>
        <HStack
          mb="87px"
          justifyContent="space-evenly"
          align="center"
          wrap="wrap"
          gap={{ base: "20px", sm: "none" }}
          display={{ base: "grid", sm: "flex" }}
          gridTemplateColumns={{ base: "150px 150px", sm: "none" }}
        >
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
          <Text
            fontWeight="extrabold"
            fontSize={{ base: "2xl", md: "4xl", xl: "40px" }}
          >
            Encontre o plano perfeito
          </Text>
          <Text
            opacity={0.7}
            fontSize={{ sm: "xs", md: "sm", xl: "xl" }}
            fontWeight="regular"
          >
            Escolha o plano que melhor se encaixa na sua empresa e faça sua
            assinatura, dentro de 72h iremos liberar seus acessos.
          </Text>
        </Flex>
        <div id="planos">
          <Slider />
        </div>
      </Flex>
      <Divider mt="100px" borderColor="purple.800" orientation="horizontal" />
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        w={{ base: "70%", sm: "90%" }}
        justify="center"
        align={{ base: "center" }}
        my="20px"
        gap={{ base: "10px", sm: "60px" }}
        mx="auto"
      >
        <Flex
          align={{ base: "center", sm: "start" }}
          gap="5px"
          color="white"
          flexDir="column"
        >
          <Text fontSize="xl" fontWeight="bold">
            @pontogo
          </Text>
          <Text fontSize="base" fontWeight="light">
            Se conecta com a gente
          </Text>
        </Flex>
        <Flex gap="40px">
          <Link to="#">
            <Image
              w={{ base: "45px", sm: "auto" }}
              src="/assets/instagram-logo.svg"
            ></Image>
          </Link>
          <Link to="#">
            <Image
              w={{ base: "45px", sm: "auto" }}
              src="/assets/facebook-logo.svg"
            ></Image>
          </Link>
          <Link to="#">
            <Image
              w={{ base: "45px", sm: "auto" }}
              src="/assets/linkedin-logo.svg"
            ></Image>
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

function DesktopNav() {
  return (
    <HStack spacing={["20px", "40px"]}>
      <Flex fontSize={["sm", "md"]} gap="50px">
        <ChakraLink href="/">
          <Text color="white">Início</Text>
        </ChakraLink>
        <ChakraLink href="#planos">
          <Text color="white">Planos</Text>
        </ChakraLink>
      </Flex>
      <Link to="/login">
        <Button size="sm" variant="solidWhite">
          Fazer Login
        </Button>
      </Link>
    </HStack>
  );
}

function MobileNav() {
  return (
    <VStack
      display={{ base: "flex", md: "none" }}
      align="flex-start"
      fontSize={["sm", "md"]}
      gap="15px"
    >
      <ChakraLink href="/">
        <Text color="purple.900">Início</Text>
      </ChakraLink>
      <ChakraLink href="#planos">
        <Text color="purple.900">Planos</Text>
      </ChakraLink>
      <ChakraLink href="/login">
        <Text fontWeight={"bold"} color="purple.900">
          Login
        </Text>
      </ChakraLink>
    </VStack>
  );
}
