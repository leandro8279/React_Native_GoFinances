import React from "react";
import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

import { colors } from "@global/styles";
import { styles } from "./styles";

type HighlightCardProps = {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
};
export function HighlightCard({
  type,
  lastTransaction,
  amount,
  title,
}: HighlightCardProps) {
  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign",
  };
  const iconColor = {
    up: colors.success,
    down: colors.attention,
    total: colors.shape,
  };
  return (
    <View style={styles({ type }).container}>
      <View style={styles({}).header}>
        <Text style={styles({ type }).title}>{title}</Text>
        <Feather name={icon[type]} color={iconColor[type]} size={RFValue(40)} />
      </View>

      <View>
        <Text style={styles({ type }).amount}>{amount}</Text>
        <Text style={styles({ type }).lastTransaction}>{lastTransaction}</Text>
      </View>
    </View>
  );
}
