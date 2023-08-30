import { VStack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <>
      <VStack w="full" align="flex-start" gap="0px">
        <NavLink
          icon="mdi-light:view-dashboard"
          title="Dashboard"
          url="/dashboard"
        />
      </VStack>
    </>
  );
}
