import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

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
}: Props) {
  return (
    <TouchableOpacity
      {...rest}
      style={isActive && type === "up" ? styles.up : styles.down}
    >
      <Feather
        name={icons[type]}
        color={type === "up" ? colors.success : colors.attention}
        style={{ marginRight: 12 }}
        size={RFValue(24)}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
