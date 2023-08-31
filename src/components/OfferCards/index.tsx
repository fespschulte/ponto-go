import { VStack, Text, Flex, HStack, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

interface OfferCardProps {
  plan: string;
  price: string;
  numColab?: string;
}

export function OfferCard(props: OfferCardProps) {
  return (
    <Flex
      flexDir="column"
      border="1px solid"
      borderColor="purple.800"
      borderRadius="10px"
      color="white"
      bgColor="transparent"
      w="full"
      h="full"
      align="center"
      justify="center"
      gap="20px"
      py="40px"
    >
      <VStack gap="0px">
        <Text fontSize="xl">Plano {props.plan}</Text>
        <Text fontSize="50px" fontWeight="extrabold">
          R$ {props.price}
        </Text>
        <Text fontWeight="light" color="purple.800">
          {!props.numColab
            ? "Acessos ilimitados"
            : `Uso de ${props.numColab} colaboradores`}
        </Text>
      </VStack>
      <VStack fontWeight="thin" align="flex-start" gap="15px">
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
          <Text>
            {!props.numColab
              ? "Acessos ilimitados"
              : `Acesso de ${props.numColab} colaboradores`}
          </Text>
        </HStack>
        {props.plan == "Platina" ? (
          <>
            <HStack gap="10px">
              <Icon icon="bi:check-lg" />
              <Text>Suporte Exclusivo</Text>
            </HStack>
            <HStack gap="10px">
              <Icon icon="bi:check-lg" />
              <Text>Email corporativo</Text>
            </HStack>
          </>
        ) : props.plan == "Ouro" ? (
          <>
            <HStack gap="10px">
              <Icon icon="bi:check-lg" />
              <Text>Suporte Exclusivo</Text>
            </HStack>
            <HStack opacity={0.3} gap="10px">
              <Icon icon="eva:close-fill" />
              <Text>Email corporativo</Text>
            </HStack>
          </>
        ) : (
          <>
            <HStack opacity={0.3} gap="10px">
              <Icon icon="eva:close-fill" />
              <Text>Suporte Exclusivo</Text>
            </HStack>
            <HStack opacity={0.3} gap="10px">
              <Icon icon="eva:close-fill" />
              <Text>Email corporativo</Text>
            </HStack>
          </>
        )}
      </VStack>
      <Button mt="10px" className="button-offer">
        Assinar agora
      </Button>
    </Flex>
  );
}
