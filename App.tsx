import { StatusBar } from "expo-status-bar";
import { ActivityIndicator } from "react-native";

import { CategorySelect } from "@screens/CategorySelect";

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
    return <ActivityIndicator />;
  }
  return (
    <>
      <StatusBar style="light" />
      <CategorySelect />
    </>
  );
}
