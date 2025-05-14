import { StatusBar, StyleSheet, View } from "react-native";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });
  return (
    <GluestackUIProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2b2b2b",
        }}
      >
        {fontsLoaded ? (
          <Text  color="white" fontSize={34}>
            HomePage
          </Text>
        ) : (
          <View />
        )}
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </View>
    </GluestackUIProvider>
  );
}
