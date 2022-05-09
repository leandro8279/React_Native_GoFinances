import React from "react";
import { View, Text, FlatList } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { categories } from "@utils/categories";

import { Button } from "@components/index";
import { styles } from "./styles";

interface Category {
  key: string;
  name: string;
}
interface Props {
  category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}
export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categoria</Text>
      </View>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Icon name={item.icon} style={styles.icon} />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separado} />}
      />
      <View style={styles.footer}>
        <Button>Selecionar</Button>
      </View>
    </View>
  );
}
