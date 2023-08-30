import {
  HStack,
  VStack,
  Heading,
  Image,
  Button,
  useBreakpointValue,
  IconButton,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ClockIn } from "../../components/ClockIn";
import { Sidebar } from "../../components/Sidebar";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Dashboard() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Stack
      flexDir={!isWideVersion ? "column" : "row"}
      h="100vh"
      bgColor="#F2F2F2"
      align="flex-start"
    >
      {!isWideVersion && (
        <Box
          bgColor="white"
          w="full"
          borderBottom="1px solid rgba(79, 79, 79, .3)"
        >
          <HStack w="90%" justify="space-between" mx="auto">
            <IconButton
              w="30px"
              icon={<Icon icon={"ion:menu"} />}
              fontSize="30px"
              variant="unstyled"
              aria-label="Open navigation"
              onClick={onOpen}
            ></IconButton>
            <Image w="134px" src="/assets/pontogo-logo-purple.svg"></Image>
          </HStack>
        </Box>
      )}

      <Sidebar />
      <VStack mt="40px" align="flex-start" w="full" px="30px" gap="15px">
        <HStack w="full" justify="space-between">
          <Heading
            minW={{ base: "160px", sm: "210px", md: "260px" }}
            fontSize={{ base: "18px", sm: "20px", md: "22px" }}
            fontWeight="semibold"
          >
            Colaborador
          </Heading>
          <Heading
            fontSize={{ base: "18px", sm: "20px", md: "22px" }}
            fontWeight="semibold"
          >
            Data
          </Heading>
          <Heading
            mr="20px"
            fontSize={{ base: "18px", sm: "20px", md: "22px" }}
            fontWeight="semibold"
          >
            Hora
          </Heading>
        </HStack>
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
    </Stack>
  );
}
