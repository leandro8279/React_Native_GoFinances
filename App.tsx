import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import { Register } from "@screens/Register";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="light" />
      <Register />
    </>
  );
}
