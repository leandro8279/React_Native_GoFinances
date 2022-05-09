import React, { useState } from "react";
import { Modal, View, Text } from "react-native";

import {
  Input,
  Button,
  TransactionTypeButton,
  CategorySelectButton,
} from "@components/index";

import { CategorySelect } from "../CategorySelect";
import { styles } from "./styles";

export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
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
          <CategorySelectButton onPress={handleOpenSelectCategoryModal}>
            {category.name}
          </CategorySelectButton>
        </View>
        <Button>Enviar</Button>
      </View>
      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </View>
  );
}
