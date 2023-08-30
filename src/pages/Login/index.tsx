import {
  HStack,
  Image,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Input } from "../../components/Form";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Flex h="100vh" align="center">
      <HStack m="auto" w="85%" justify="center" align="center" gap="150px">
        <VStack
          display={{ base: "none", md: "flex" }}
          maxW={{ base: "400px", xl: "585px" }}
          textAlign="center"
          align="center"
          color="purple.900"
        >
          <Image mb="20px" src="/assets/image-login.png"></Image>
          <Heading mb="10px" fontSize="40px">
            Bem vindo ao PontoGo
          </Heading>
          <Text fontSize="25px" opacity={0.7}>
            Aqui você fará toda gestão do <br /> seu sistema de pontos.
          </Text>
        </VStack>
        <VStack
          w={{ base: "300px", xl: "400px" }}
          align="flex-start"
          gap="30px"
        >
          <Image src="/assets/pontogo-logo-purple.svg"></Image>
          <VStack gap="0px" align="flex-start" w="full">
            <Heading
              color="purple.900"
              fontSize={{ base: "2xl", md: "3xl", xl: "40px" }}
              mb="23px"
            >
              Faça login
            </Heading>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="exemplo@email.com"
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              placeholder="***********"
              icon="ant-design:eye-filled"
            />
            <Link to="/">Esqueci minha senha</Link>
          </VStack>
          <Button
            w={{ base: "full", md: "300px", xl: "400px" }}
            variant="darkPurpleWhite"
          >
            Entrar
          </Button>
        </VStack>
      </HStack>
    </Flex>
  );
}
