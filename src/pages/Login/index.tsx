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
import { useState } from "react";
import { useLogin } from "../../graphQL/hooks";
import { setAccessToken } from "../../services/auth";

export function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login, loading } = useLogin();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError(false);
    const user = await login(email, password);
    // console.log(user);
    if (user) {
      setAccessToken(user.login.jwt);
      // console.log(user.login);
      onLogin(user);
    } else {
      setError(true);
    }
  };

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
        <VStack gap="0px" w={{ base: "300px", xl: "400px" }} align="flex-start">
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
            onSubmit={handleSubmit}
            w="full"
            gap="0px"
            align="flex-start"
          >
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="***********"
              icon="ant-design:eye-filled"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
              disabled={loading}
            >
              Entrar
            </Button>
          </VStack>
        </VStack>
      </HStack>
    </Flex>
  );
}

// import { Link, Navigate } from "react-router-dom";
// import { Controller, SubmitHandler, useForm } from "react-hook-form";
// import { LOGIN_REQUEST } from "../../graphQL/mutations";
// import { useMutation } from "@apollo/client";
// // import { useAuth } from "../../contexts/AuthContext";

// interface LoginFormValues {
//   email: string;
//   password: string;
// }

// interface LoginProps {
//   loading: boolean;
// }

// export function Login({ loading }: LoginProps) {
//   // const { isAuthenticated, login, logout } = useAuth();

//   const [loginMutation] = useMutation(LOGIN_REQUEST);
//   const { handleSubmit, control } = useForm<LoginFormValues>();

//   const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
//     try {
//       await loginMutation({
//         variables: {
//           email: values.email,
//           password: values.password,
//         },
//       });
//       <Navigate to="/dashboard" />;
//       console.log();
//     } catch (error) {
//       console.error("Erro durante o login:", error);
//     }
//   };

//   const disableForm = loading;

//   return (
//     <Flex h="100vh" align="center">
//       <HStack m="auto" w="85%" justify="center" align="center" gap="150px">
//         <VStack
//           display={{ base: "none", md: "flex" }}
//           maxW={{ base: "400px", xl: "585px" }}
//           textAlign="center"
//           align="center"
//           color="purple.900"
//         >
//           <Image mb="20px" src="/assets/image-login.png"></Image>
//           <Heading mb="10px" fontSize="40px">
//             Bem vindo ao PontoGo
//           </Heading>
//           <Text fontSize="25px" opacity={0.7}>
//             Aqui você fará toda gestão do <br /> seu sistema de pontos.
//           </Text>
//         </VStack>
//         <VStack gap="0px" w={{ base: "300px", xl: "400px" }} align="flex-start">
//           <Image src="/assets/pontogo-logo-purple.svg"></Image>
//           <Heading
//             mt="30px"
//             color="purple.900"
//             fontSize={{ base: "2xl", md: "3xl", xl: "40px" }}
//           >
//             Faça login
//           </Heading>
//           <VStack
//             as="form"
//             onSubmit={handleSubmit(onSubmit)}
//             w="full"
//             gap="0px"
//             align="flex-start"
//           >
//             <Controller
//               name="email"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <Input
//                   type="email"
//                   label="Email"
//                   placeholder="exemplo@email.com"
//                   {...field}
//                 />
//               )}
//             />
//             <Controller
//               name="password"
//               control={control}
//               defaultValue=""
//               render={({ field }) => (
//                 <Input
//                   type="password"
//                   label="Senha"
//                   placeholder="***********"
//                   icon="ant-design:eye-filled"
//                   {...field}
//                 />
//               )}
//             />
//             <Link to="/">
//               <Text
//                 textDecorationLine="underline"
//                 mt="10px"
//                 color="purple.900"
//                 fontSize="15px"
//               >
//                 Esqueci minha senha
//               </Text>
//             </Link>
//             <Button
//               mt="30px"
//               type="submit"
//               w={{ base: "full", md: "300px", xl: "400px" }}
//               variant="darkPurpleWhite"
//               isLoading={loading}
//               disabled={disableForm}
//             >
//               Entrar
//             </Button>
//           </VStack>
//         </VStack>
//       </HStack>
//     </Flex>
//   );
// }

// import {
//   HStack,
//   Image,
//   Heading,
//   Text,
//   VStack,
//   Button,
//   Flex,
// } from "@chakra-ui/react";
// import { Input } from "../../components/Form";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// import { useAuth } from "../../contexts/AuthContext";
// import { LOGIN_REQUEST } from "../../graphQL/mutations";
// import { useMutation } from "@apollo/client";

// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { setUser } = useAuth();

//   const [login, { data, loading }] = useMutation(LOGIN_REQUEST);

//   useEffect(() => {
//     if (!data) {
//       return;
//     }

//     setUser(data?.login);
//   }, [!!data]);

//   return (
//     <Flex h="100vh" align="center">
//       <HStack m="auto" w="85%" justify="center" align="center" gap="150px">
//         <VStack
//           display={{ base: "none", md: "flex" }}
//           maxW={{ base: "400px", xl: "585px" }}
//           textAlign="center"
//           align="center"
//           color="purple.900"
//         >
//           <Image mb="20px" src="/assets/image-login.png"></Image>
//           <Heading mb="10px" fontSize="40px">
//             Bem vindo ao PontoGo
//           </Heading>
//           <Text fontSize="25px" opacity={0.7}>
//             Aqui você fará toda gestão do <br /> seu sistema de pontos.
//           </Text>
//         </VStack>
//         <VStack
//           w={{ base: "300px", xl: "400px" }}
//           align="flex-start"
//           gap="30px"
//         >
//           <Image src="/assets/pontogo-logo-purple.svg"></Image>
//           <VStack as="form" gap="0px" align="flex-start" w="full">
//             <Heading
//               color="purple.900"
//               fontSize={{ base: "2xl", md: "3xl", xl: "40px" }}
//               mb="23px"
//             >
//               Faça login
//             </Heading>
//             <Input
//               type="email"
//               name="email"
//               label="Email"
//               placeholder="exemplo@email.com"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//             <Input
//               type="password"
//               name="password"
//               label="Senha"
//               placeholder="***********"
//               icon="ant-design:eye-filled"
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//             <Link to="/">Esqueci minha senha</Link>
//           </VStack>
//           <Button
//             type="submit"
//             w={{ base: "full", md: "300px", xl: "400px" }}
//             variant="darkPurpleWhite"
//             isLoading={loading}
//             onClick={() => {
//               login({ variables: { email, password } });
//             }}
//           >
//             Entrar
//           </Button>
//         </VStack>
//       </HStack>
//     </Flex>
//   );
