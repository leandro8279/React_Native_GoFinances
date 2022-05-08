import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { styles } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "@global/styles";

interface Props {
  children: string;
}
export function CategorySelect({ children }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.title}>{children}</Text>
      <Icon name="chevron-down" size={RFValue(20)} color={colors.text} />
    </TouchableOpacity>
  );
}
