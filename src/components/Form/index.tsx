import {
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  FormControl,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  icon?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, icon, ...rest },
  ref
) => {
  return (
    <FormControl>
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
          ref={ref}
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
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
