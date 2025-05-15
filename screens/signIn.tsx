import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";
import BackgroudImg from "../assets/background.png";
import Logo from "../assets/logo.svg";
import { Input } from "../components/input";
export function SignIn() {
  return (
    <VStack flex={1} bg="$backgroundDark900">
      <Image
        source={BackgroudImg}
        defaultSource={BackgroudImg}
        alt="pessoas treinando"
        w="$full"
        height={624}
        position="absolute"
      ></Image>
      <Center my={"$16"}>
        <Logo />
        <Text color="$trueGray200" fontSize={"$sm"}>
            Treine sua mente e o seu corpo.
        </Text>
      </Center>
      <Center gap={"$2"}>
        <Heading color="$trueGray200">
            Acesse Sua conta
        </Heading>
        <Input placeholder="email"/>
      </Center>

    </VStack>
  );
}
