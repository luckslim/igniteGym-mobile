import {
  Center,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import BackgroudImg from "../assets/background.png";
import Logo from "../assets/logo.svg";
import { Input } from "../components/input";
import { Button } from "../components/button";
export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
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
        <Center gap={"$2"} flex={1}>
          <Heading color="$trueGray200">Crie Sua Conta</Heading>
          <Input placeholder="Nome" />

          <Input
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="senha" secureTextEntry />
          <Button title="Criar e Acessar" />
          <Button title="Voltar para o Login" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
