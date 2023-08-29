import { Box, HStack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface MenuProps {
  title: string;
  icon: string;
}

export function Menu(props: MenuProps) {
  return (
    <Box
      color="purple.900"
      display="flex"
      flexDir="row"
      w="full"
      borderY="1px solid rgba(79, 79, 79, .08)"
    >
      <Box h="full" w="4px" bgColor="purple.900" />
      <HStack py="40px" pl="16px" gap="10px">
        <Icon width="24px" height="24px" icon={props.icon} />
        <Text fontSize="14px">{props.title}</Text>
      </HStack>
    </Box>
  );
}
