import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View, Text, Image, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard, TransactionCard, Loading } from "@components/index";

import { TransactionCardProps } from "@components/TransactionCard";

import { styles } from "./styles";

import { colors } from "@global/styles";
import { useFocusEffect } from "@react-navigation/native";

export interface DataListProps extends TransactionCardProps {
  id: string;
}
interface HighlightProps {
  amount: string;
}

interface HighlightData {
  entries: HighlightProps;
  expensives: HighlightProps;
  total: HighlightProps;
}
export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<DataListProps[]>([]);
  const [highlightData, setHighlightData] = useState<HighlightData>(
    {} as HighlightData
  );
  let entriesTotal = 0;
  let expensiveTotal = 0;
  async function loadTransactions() {
    const dataKey = "@gofinances:transactions";
    // await AsyncStorage.removeItem(dataKey);
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: DataListProps[] = transactions.map(
      (item: DataListProps) => {
        if (item.type === "positive") {
          entriesTotal += Number(item.amount);
        } else {
          expensiveTotal += Number(item.amount);
        }
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
    setTransactions(transactionsFormatted);

    const total = entriesTotal - expensiveTotal;

    setHighlightData({
      entries: {
        amount: entriesTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      expensives: {
        amount: expensiveTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
      total: {
        amount: total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      },
    });
    setIsLoading(false);
  }

  useEffect(() => {
    loadTransactions();
  }, []);
  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );
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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ScrollView
            horizontal
            contentContainerStyle={styles.cardsContainer}
            style={styles.cards}
            showsHorizontalScrollIndicator={false}
          >
            <HighlightCard
              type="up"
              title="Entradas"
              amount={highlightData.entries.amount}
              lastTransaction="Última entrada dia 13 de abril"
            />
            <HighlightCard
              type="down"
              title="Saídas"
              amount={highlightData.expensives.amount}
              lastTransaction="Última saída dia 13 de abril"
            />
            <HighlightCard
              type="total"
              title="Total"
              amount={highlightData.total.amount}
              lastTransaction="01 à 16 de abril"
            />
          </ScrollView>

          <View style={styles.transactions}>
            <Text style={styles.transactionsTitle}>Listagem</Text>
            <FlatList<DataListProps>
              data={transactions}
              keyExtractor={({ id }) => id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: getBottomSpace(),
              }}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </View>
        </>
      )}
    </View>
  );
}
