import React from "react";
import { View, Text } from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

import { styles } from "./styles";

interface CategoryProps {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}
export function TransactionCard({ data }: Props) {
  return (
    <View style={styles().container}>
      <Text style={styles().title}>Desenvolvimento de site</Text>
      <Text style={styles(data.type).amount}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Text>
      <View style={styles().footer}>
        <View style={styles().category}>
          <Icon name={data.category.icon} style={styles().icon} />
          <Text style={styles().categoryName}>{data.category.name}</Text>
          <Text style={styles().date}>{data.date}</Text>
        </View>
      </View>
    </View>
  );
}
