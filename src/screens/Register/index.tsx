import React, { useState } from "react";
import { View, Text } from "react-native";

import {
  Input,
  Button,
  TransactionTypeButton,
  CategorySelect,
} from "@components/index";
import { styles } from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Input placeholder="Name" />
          <Input placeholder="Preço" />
          <View style={styles.transactionsTypes}>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handleTransactionsTypeSelect("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handleTransactionsTypeSelect("down")}
              isActive={transactionType === "down"}
            />
          </View>
          <CategorySelect>Categoria</CategorySelect>
        </View>
        <Button>Enviar</Button>
      </View>
    </View>
  );
}
