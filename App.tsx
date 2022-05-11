import { StatusBar } from "expo-status-bar";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import {Loading}from "@components/Loading";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AuthProvider } from "src/hooks/auth";
import { RootNativator } from "@navigation/index";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading/>;
  }
  return (
    <AuthProvider>
      <StatusBar style="light" />
      <RootNativator />
    </AuthProvider>
  );
}
