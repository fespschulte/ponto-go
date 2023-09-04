import { Box, HStack, VStack, Text, List } from "@chakra-ui/react";
import moment from "moment";

interface ClockInProps {
  username: string;
  user_id: string;
  time: string;
}

export function ClockInList({ clockins }: any[] | any) {
  if (!clockins) {
    return;
  }
  return (
    <List w="full">
      {clockins.registeredTimes.map((clockin) => (
        <ClockIn
          key={clockin.id}
          username={clockin.user.username}
          user_id={clockin.user.id}
          time={clockin.timeRegistered}
        />
      ))}
    </List>
  );
}

export function ClockIn({ username, user_id, time }: ClockInProps) {
  return (
    <HStack
      mb="15px"
      gap="0px"
      px="14px"
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
        mr={{ base: "20px", sm: "40px" }}
      ></Box>
      <HStack w="full" justify="space-between">
        <VStack align="flex-start" gap="0px">
          <Text
            color="grey"
            fontWeight="bold"
            lineHeight="24px"
            fontSize={{ base: "16px", sm: "20px", md: "22px" }}
            letterSpacing={0.2}
            minW={{ base: "125px", sm: "175px", md: "225px" }}
            textTransform="capitalize"
          >
            {username}
          </Text>
          <Text color="grey" opacity={0.5} fontSize="14px" letterSpacing={0.2}>
            00{user_id}
          </Text>
        </VStack>
        <Text
          color="grey"
          opacity={0.6}
          fontSize={{ base: "14px", sm: "20px", md: "22px" }}
          letterSpacing={0.2}
        >
          {moment(time).format("DD/MM/YY")}
        </Text>
        <Text
          color="grey"
          opacity={0.6}
          fontSize={{ base: "14px", sm: "20px", md: "22px" }}
          letterSpacing={0.2}
        >
          {moment(time).format("HH:MM")}
        </Text>
      </HStack>
    </HStack>
  );
}
