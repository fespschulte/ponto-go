import {
  VStack,
  Image,
  Flex,
  Text,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <VStack h="100vh" bgColor="white" minW="180px">
      <Image
        mt="40px"
        mb="30px"
        w="134px"
        src="/assets/pontogo-logo-purple.svg"
      ></Image>
      <SidebarNav />
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
  );
}
