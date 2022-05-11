import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./AppNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { useAuth } from "src/hooks/auth";
export function RootNativator() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
