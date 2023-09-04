import {
  HStack,
  VStack,
  Image,
  Heading,
  Button,
  Text,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  useBreakpointValue,
  IconButton,
  Box,
  useModal,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { ClockInList } from "../../components/ClockIn";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";
import { RegisteredTimesQueryById } from "../../graphQL/queries";
import { useQuery } from "@apollo/client";
import moment from "moment";
import { useCreateRegisteredTimeMutation } from "../../graphQL/hooks";

function OverlayOne() {
  return <ModalOverlay bg="modal" backdropFilter="blur(4px)" />;
}

export function MyTimesheets({ user, onLogout }) {
  const { onOpen: isDrawerOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const { createRegisteredTime } = useCreateRegisteredTimeMutation();

  const handleSubmit = async () => {
    const today = new Date().toISOString();
    await createRegisteredTime(today, user.id, today, user.id, user.id);
    return;
  };

  const handleOnLogout = () => {
    onLogout();
  };

  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, loading, error } = useQuery(RegisteredTimesQueryById, {
    variables: { id: user?.id },
    skip: !user?.id,
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }

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
              onClick={isDrawerOpen}
            ></IconButton>
            <Image w="134px" src="/assets/pontogo-logo-purple.svg"></Image>
          </HStack>
        </Box>
      )}

      <Sidebar onLogoutClick={handleOnLogout} />
      <VStack mt="40px" align="flex-start" w="full" px="30px" gap="15px">
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
          variant="darkPurpleWhite"
          w={{ base: "full", md: "200px" }}
        >
          Registrar ponto
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent
            w="400px"
            h="477px"
            py="60px"
            px="92px"
            display="flex"
            flexDir="column"
            alignItems="center"
          >
            <ModalCloseButton color="grey" opacity={0.5} />
            <Text mb="25px" fontWeight="bold" color="grey" fontSize="xl">
              Registrar novo ponto
            </Text>
            <ModalBody display="flex" flexDir="column" alignItems="center">
              <Icon
                width="100px"
                height="100px"
                color="#330693"
                icon="clarity:clock-solid"
              />
              <Text
                mt="10px"
                mb="5px"
                color="purple.900"
                fontWeight="bold"
                fontSize="3xl"
              >
                {`${new Date().getHours()}:${new Date().getMinutes()}`}
              </Text>
              <Text color="purple.900" opacity={0.5}>
                {`${moment().format("DD/MM/YY")}`}
              </Text>
            </ModalBody>
            <ModalFooter display="flex" flexDir="column" gap="10px">
              <Button
                variant="darkPurpleWhite"
                size="md"
                onClick={handleSubmit}
                disabled={loading}
              >
                Bater ponto
              </Button>
              <Button variant="outlinePurple" size="md" onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
          <ClockInList clockins={data} />
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
