import React from "react";
import { View, Text } from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

import { styles } from "./styles";
import { categories } from "@utils/categories";

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}
export function TransactionCard({ data }: Props) {
  const [category] = categories.filter((item) => item.key === data.category);
  return (
    <View style={styles().container}>
      <Text style={styles().title}>{data.name}</Text>
      <Text style={styles(data.type).amount}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Text>
      <View style={styles().footer}>
        <View style={styles().category}>
          <Icon name={data.category.icon} style={styles().icon} />
          <Text style={styles().categoryName}>{category?.name}</Text>
          <Text style={styles().date}>{data.date}</Text>
        </View>
      </View>
    </View>
  );
}
