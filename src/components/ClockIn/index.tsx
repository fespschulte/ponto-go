import { Box, HStack, VStack, Text } from "@chakra-ui/react";

export function ClockIn() {
  return (
    <HStack
      gap="0px"
      pl="14px"
      py="15px"
      bgColor="white"
      border="1px solid rgba(79, 79, 79, .3)"
      borderRadius="5px"
      h="73px"
      w="full"
    >
      <Box
        borderRadius="30px"
        w="5px"
        h="full"
        bgColor="purple.800"
        mr="40px"
      ></Box>
      <VStack align="flex-start" gap="0px">
        <Text
          color="grey"
          fontWeight="bold"
          lineHeight="24px"
          fontSize="22px"
          letterSpacing={0.2}
          minW="240px"
        >
          João Silva
        </Text>
        <Text color="grey" opacity={0.5} fontSize="14px" letterSpacing={0.2}>
          001
        </Text>
      </VStack>
      <Text
        ml="8px"
        color="grey"
        opacity={0.6}
        fontSize="22px"
        letterSpacing={0.2}
      >
        12/10/19
      </Text>
      <Text
        ml="132px"
        color="grey"
        opacity={0.6}
        fontSize="22px"
        letterSpacing={0.2}
      >
        18:30h
      </Text>
    </HStack>
  );
}
