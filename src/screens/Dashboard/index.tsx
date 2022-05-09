import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard, TransactionCard } from "@components/index";

import { TransactionCardProps } from "@components/TransactionCard";

import { styles } from "./styles";

import { colors } from "@global/styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}
export function Dashboard() {
  const [data, setData] = useState<DataListProps[]>([]);

  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        const amount = Number(item.amount).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date(item.date));

        return {
          id: item.id,
          name: item.name,
          amount,
          type: item.type,
          category: item.category,
          date,
        };
      }
    );

    setData(transactionsFormatted);
    console.log(transactionsFormatted);
  }

  useEffect(() => {
    loadTransactions();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <Image source={require("@assets/user.png")} style={styles.photo} />
            <View style={styles.user}>
              <Text style={styles.title}>Òla,</Text>
              <Text style={styles.subTitle}>Leandro</Text>
            </View>
          </View>
          <Feather name="power" size={24} color={colors.secondary} />
        </View>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.cardsContainer}
        style={styles.cards}
        showsHorizontalScrollIndicator={false}
      >
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </ScrollView>

      <View style={styles.transactions}>
        <Text style={styles.transactionsTitle}>Listagem</Text>
        <FlatList<DataListProps>
          data={data}
          keyExtractor={({ id }) => id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </View>
    </View>
  );
}
