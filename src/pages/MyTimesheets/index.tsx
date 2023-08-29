import {
  HStack,
  VStack,
  Image,
  Heading,
  Flex,
  Button,
  Text,
  useDisclosure,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Menu } from "../../components/DashMenu";
import { ClockIn } from "../../components/ClockIn";
import React from "react";

export function MyTimesheets() {
  const OverlayOne = () => (
    <ModalOverlay bg="modal" backdropFilter="blur(4px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <HStack h="100vh" bgColor="#F2F2F2" align="flex-start" gap="0px">
      <VStack h="100vh" bgColor="white" w="180px">
        <Image
          mt="40px"
          mb="30px"
          w="134px"
          src="/assets/pontogo-logo-purple.svg"
        ></Image>
        <VStack w="full" align="flex-start" gap="0px">
          <Menu
            icon="streamline:interface-content-note-pad-text-content-notes-book-notepad-notebook"
            title="Meus registros"
          />
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
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
          variant="darkPurpleWhite"
          size="md"
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
                10:30
              </Text>
              <Text color="purple.900" opacity={0.5}>
                26/09/2021
              </Text>
            </ModalBody>
            <ModalFooter display="flex" flexDir="column" gap="10px">
              <Button variant="darkPurpleWhite" size="md" onClick={onClose}>
                Bater ponto
              </Button>
              <Button variant="outlinePurple" size="md" onClick={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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
