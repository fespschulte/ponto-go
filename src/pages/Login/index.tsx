import {
  HStack,
  Image,
  Heading,
  Text,
  VStack,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Input } from "../../components/Form";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useAuthToken } from "../../services/auth";
import { LOGIN_REQUEST } from "../../graphQL/mutations";

interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginProps {
  loading: boolean;
}

export function Login({ loading }: LoginProps) {
  const navigate = useNavigate();
  const [, setAuthToken] = useAuthToken(); // Use useAuthToken para acessar o token JWT

  const [loginMutation] = useMutation(LOGIN_REQUEST);

  const { handleSubmit, control } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    try {
      const { data } = await loginMutation({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      if (data && data.login && data.login.user) {
        setAuthToken(data.login.jwt);
        // if (data.login.user.role === "admin") {
        navigate("/dashboard");
        // }
        // if (data.login.user.role === "user") {
        //   navigate("/meus-registros");
        // }
      }
    } catch (error) {
      console.error("Erro durante o login:", error);
    }
  };

  const disableForm = loading;

  return (
    <Box
      backgroundImage={"assets/bg-login.png"}
      bgRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
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
            gap="0px"
            w={{ base: "300px", xl: "400px" }}
            align="flex-start"
          >
            <Image src="/assets/pontogo-logo-purple.svg"></Image>
            <Heading
              mt="30px"
              color="purple.900"
              fontSize={{ base: "2xl", md: "3xl", xl: "40px" }}
            >
              Faça login
            </Heading>
            <VStack
              as="form"
              onSubmit={handleSubmit(onSubmit)}
              w="full"
              gap="0px"
              align="flex-start"
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    type="email"
                    label="Email"
                    placeholder="exemplo@email.com"
                    {...field}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    type="password"
                    label="Senha"
                    placeholder="***********"
                    icon="ant-design:eye-filled"
                    {...field}
                  />
                )}
              />
              <Link to="/">
                <Text
                  textDecorationLine="underline"
                  mt="10px"
                  color="purple.900"
                  fontSize="15px"
                >
                  Esqueci minha senha
                </Text>
              </Link>
              <Button
                mt="30px"
                type="submit"
                w={{ base: "full", md: "300px", xl: "400px" }}
                variant="darkPurpleWhite"
                isLoading={loading}
                disabled={disableForm}
              >
                Entrar
              </Button>
            </VStack>
          </VStack>
        </HStack>
      </Flex>
    </Box>
  );
}

// import { Input } from "../../components/Form";
// import { Link, useNavigate } from "react-router-dom";
// import { gql, useMutation } from "@apollo/client";
// import { useAuthToken } from "../../services/auth";
// import { useState } from "react";

// export const LOGIN_REQUEST = gql`
//   mutation login($email: String!, $password: String!) {
//     login(input: { identifier: $email, password: $password }) {
//       jwt
//       user {
//         role {
//           name
//           type
//         }
//       }
//     }
//   }
// `;

// type User = {
//   email: string;
//   permissions: string[];
//   role: string;
// };

// interface LoginFormValues {
//   email: string;
//   password: string;
// }

// interface LoginProps {
//   loading: boolean;
// }

// export function Login({ loading }: LoginProps) {
//   //   const isAuthenticated = false;
//   const navigate = useNavigate();

//   const [user, setUser] = useState();

//   const [loginMutation] = useMutation(LOGIN_REQUEST);

//   const { handleSubmit, control } = useForm<LoginFormValues>();

//   const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
//     try {
//       await loginMutation({
//         variables: {
//           email: values.email,
//           password: values.password,
//         },
//         onCompleted: ({ login }) => {
//           localStorage.setItem(AUTH_TOKEN, login.jwt);
//           setUser(login.user.role.type);
//           navigate("/dashboard");
//         },
//       });
//     } catch (error) {
//       console.error("Erro durante o login:", error);
//     }
//   };

//   const disableForm = loading;
