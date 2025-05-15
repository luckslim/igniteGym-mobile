import { StatusBar} from "react-native";
import { config } from "@gluestack-ui/config";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { Center, GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { Loading } from "./components/Loading";
import { SignIn } from "./screens/signIn";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });
  return (
    <GluestackUIProvider config={config}>
      {fontsLoaded ? (
        // <Center flex={1} bg="$backgroundDark900">
        //   <Text color="white" fontSize={34}>
        //     HomePage
        //   </Text>
        // </Center>
        <SignIn/>
      ) : (
        <Loading />
      )}
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </GluestackUIProvider>
  );
}
