import React, { useState } from "react";
import { Modal, View, Text } from "react-native";
import { useForm } from "react-hook-form";
import {
  InputForm,
  Button,
  TransactionTypeButton,
  CategorySelectButton,
} from "@components/index";

import { CategorySelect } from "../CategorySelect";
import { styles } from "./styles";
interface FormData {
  name: string;
  amount: string;
}
export function Register() {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
  });
  const { control, handleSubmit } = useForm();

  function handleTransactionsTypeSelect(type: "up" | "down") {
    setTransactionType(type);
  }
  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }
  function handleRegister(form: FormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>

      <View style={styles.form}>
        <View>
          <InputForm name="name" control={control} placeholder="Nome" />
          <InputForm name="amount" control={control} placeholder="Preço" />
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
        <Button onPress={handleSubmit(handleRegister)}>Enviar</Button>
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
