import React from "react";
import { ScrollView, View, Text, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard, TransactionCard } from "@components/index";

import { styles } from "./styles";

import { colors } from "@global/styles";

export function Dashboard() {
  const types = {
    positive: "positive",
    negative: "negative",
  };
  const data = [
    {
      type: types.positive,
      title: "Desenvolvimento de site 1",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      type: types.negative,
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "10/04/2020",
    },
    {
      type: types.negative,
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
      date: "13/04/2020",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/49030804?v=4",
              }}
              style={styles.photo}
            />
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
        <FlatList
          data={data}
          keyExtractor={({ title }) => title}
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
