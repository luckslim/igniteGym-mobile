import { Input as GluestackInput, InputField } from "@gluestack-ui/themed";
import { ComponentProps } from "react";
type Props = ComponentProps<typeof InputField>
export function Input({...rest}:Props) {
  return (
    <GluestackInput 
    w={"$80"}
    bg="$trueGray600"
    h={"$12"}
    px={"$4"}
    borderWidth={"$0"}
    borderRadius={"$md"}
    $focus={{
      borderColor:"$green500",
      borderWidth:"$1"
    }}
    >
      <InputField
      color={"white"}
      fontFamily={"$body"}
      placeholderTextColor={"white"} 
      {...rest}
      ></InputField>
    </GluestackInput>
  );
}
