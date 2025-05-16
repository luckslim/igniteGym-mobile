import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";
type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?:"solid"|"outline"
  isLoading?: boolean;
};
export function Button({ title, isLoading = false,variant="solid", ...rest }: Props) {
  return (
    <GluestackButton
      w="$80"
      h="$12"
      bg={variant==="outline" ? "transparent" : "$green700" }
      borderWidth={variant==="outline"? "$1" : "$0"}
      borderColor="$green700"
      rounded="$sm"
      $active-bg="$green500"
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <Text color="white" fontFamily="$heading" fontSize="$sm">
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
