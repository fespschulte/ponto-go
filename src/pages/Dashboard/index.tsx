import {
  HStack,
  VStack,
  Image,
  Heading,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Menu } from "../../components/DashMenu";
import { ClockIn } from "../../components/ClockIn";

export function Dashboard() {
  return (
    <HStack h="100vh" bgColor="#F2F2F2" align="flex-start">
      <VStack h="100vh" bgColor="white" minW="180px">
        <Image
          mt="40px"
          mb="30px"
          w="134px"
          src="/assets/pontogo-logo-purple.svg"
        ></Image>
        <VStack w="full" align="flex-start" gap="0px">
          <Menu icon="mdi-light:view-dashboard" title="Dashboard" />
        </VStack>
        <Link to="/login">
          <Flex
            position="absolute"
            bottom="20px"
            left="20px"
            gap="10px"
            align="center"
          >
            <Icon
              color="grey"
              width="24px"
              height="24px"
              icon="ant-design:logout-outlined"
            />
            <Text>Sair</Text>
          </Flex>
        </Link>
      </VStack>
      <VStack mt="40px" align="flex-start" w="full" px="30px" gap="15px">
        <Flex gap="164px">
          <Heading fontSize="22px" fontWeight="semibold">
            Colaborador
          </Heading>
          <Heading fontSize="22px" fontWeight="semibold">
            Data
          </Heading>
          <Heading fontSize="22px" fontWeight="semibold">
            Hora
          </Heading>
        </Flex>
        <VStack gap="15px" w="full">
          <ClockIn />
        </VStack>
        <HStack mt="5px">
          <Button size="xs" variant="transparentDisabled">
            <Icon icon="dashicons:arrow-left-alt2" />
          </Button>
          <Button fontSize="14px" size="xs" variant="transparent">
            1
          </Button>
          <Button size="xs" variant="transparentDisabled">
            <Icon icon="dashicons:arrow-right-alt2" />
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
}
