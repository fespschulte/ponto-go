import {
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: string;
}

export function Input({ name, label, icon, ...rest }: InputProps) {
  return (
    <>
      {!!label && (
        <FormLabel htmlFor={name} fontSize="xl">
          {label}
        </FormLabel>
      )}
      <InputGroup flexDir="column">
        <ChakraInput
          id={name}
          px="20px"
          h="45px"
          mb="20px"
          focusBorderColor="purple.900"
          {...rest}
        />
        {!!icon && (
          <InputRightElement
            mt="3px"
            alignItems="center"
            pr="20px"
            color="purple.900"
          >
            <Icon width="24px" height="24px" icon={icon} />
          </InputRightElement>
        )}
      </InputGroup>
    </>
  );
}
