import React, { ReactText } from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface HeaderProps {
  children: string;
}
export function Header({ children }: HeaderProps) {
  return (
    <View style={styles().container}>
      <Text style={styles().title}>{children}</Text>
    </View>
  );
}
