import { VStack, Text, Flex, HStack } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export function OfferCard() {
  return (
    <Flex
      flexDir="column"
      border="1px solid"
      borderColor="purple.800"
      borderRadius="10px"
      color="white"
      bgColor="purple.900"
      w="full"
      h="full"
      align="center"
      justify="center"
      gap="20px"
      py="40px"
    >
      <VStack gap="0px">
        <Text fontSize="xl">Plano Bronze</Text>
        <Text fontSize="50px" fontWeight="extrabold">
          R$ 30
        </Text>
        <Text fontWeight="light" color="purple.800">
          Uso de 5 colaboradores
        </Text>
      </VStack>
      <VStack fontWeight="light" align="flex-start" gap="15px">
        <HStack gap="10px">
          <Icon icon="bi:check-lg" />
          <Text>Área de meus registros</Text>
        </HStack>
        <HStack gap="10px">
          <Icon icon="bi:check-lg" />
          <Text>Dashboard</Text>
        </HStack>
        <HStack gap="10px">
          <Icon icon="bi:check-lg" />
          <Text>Acesso de 5 colaboradores</Text>
        </HStack>
        <HStack gap="10px">
          <Icon icon="bi:check-lg" />
          <Text>Suporte Exclusivo</Text>
        </HStack>
        <HStack gap="10px">
          <Icon icon="bi:check-lg" />
          <Text>Email corporativo</Text>
        </HStack>
      </VStack>
    </Flex>
  );
}
