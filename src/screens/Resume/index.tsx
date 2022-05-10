import React, { useEffect, useState } from "react";
import { Header } from "@components/Header";
import { HistoryCard } from "@components/HistoryCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { categories } from "@utils/categories";
import { ScrollView, View } from "react-native";

import { styles } from "./styles";

interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: string;
  color: string;
  percentFormatted: string;
  percent: number;
}
export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );
  async function loadData() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === "negative"
    );
    const expensivesTotal = expensives.reduce(
      (accumulator: number, expensive: TransactionData) => {
        return accumulator + Number(expensive.amount);
      },
      0
    );
    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const total = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        const percent = (categorySum / expensivesTotal) * 100;
        const percentFormatted = `${percent.toFixed(0)}%`;
        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total,
          percent,
          percentFormatted,
        });
      }
    });
    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles().container}>
      <Header>Resumo por categoria</Header>
      <ScrollView contentContainerStyle={styles().content}>
        {totalByCategories.map((item) => (
          <HistoryCard
            key={item.key}
            title={item.name}
            amount={item.total}
            color={item.color}
          />
        ))}
      </ScrollView>
    </View>
  );
}
