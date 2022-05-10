import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
interface Props {
  title: string;
  amount: string;
  color: string;
}
export function HistoryCard({ amount, color, title }: Props) {
  return (
    <View style={styles(color).container}>
      <Text style={styles().title}>{title}</Text>
      <Text style={styles().amount}>{amount}</Text>
    </View>
  );
}
