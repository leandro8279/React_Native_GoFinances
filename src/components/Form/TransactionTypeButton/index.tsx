import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";

interface Props extends TouchableOpacityProps {
  type: "up" | "down";
  title: string;
  isActive: boolean;
}
export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: Props): JSX.Element {
  return (
    <TouchableOpacity {...rest} style={styles({ isActive, type }).container}>
      <Feather
        name={type === "up" ? "arrow-up-circle" : "arrow-down-circle"}
        color={type === "up" ? colors.success : colors.attention}
        style={{ marginRight: 12 }}
        size={RFValue(24)}
      />
      <Text style={styles({}).title}>{title}</Text>
    </TouchableOpacity>
  );
}
