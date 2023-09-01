import {
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  Box,
  IconButton,
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
    <Box w="full" mt="20px">
      {!!label && (
        <FormLabel m="0px" htmlFor={name} fontSize="xl">
          {label}
        </FormLabel>
      )}
      <InputGroup flexDir="column">
        <ChakraInput
          id={name}
          px="20px"
          h="45px"
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
            <IconButton border="none" variant="transparent" aria-label="">
              <Icon width="24px" height="24px" icon={icon} />
            </IconButton>
          </InputRightElement>
        )}
      </InputGroup>
    </Box>
  );
};

export const Input = forwardRef(InputBase);
