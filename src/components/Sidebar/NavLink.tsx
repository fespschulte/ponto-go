import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface NavLinkProps {
  title: string;
  icon: string;
  url: string;
}

export function NavLink(props: NavLinkProps) {
  return (
    <Box
      color="purple.900"
      display="flex"
      flexDir="row"
      w="full"
      borderY="1px solid rgba(79, 79, 79, .08)"
    >
      <Box h="full" w="4px" bgColor="purple.900" />
      <Link to={props.url}>
        <HStack py="40px" pl="16px" gap="10px">
          <Icon width="24px" height="24px" icon={props.icon} />
          <Text fontSize="14px">{props.title}</Text>
        </HStack>
      </Link>
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
    </Box>
  );
}
