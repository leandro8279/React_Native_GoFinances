import React from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { categories } from "@utils/categories";

import { Button } from "@components/index";
import { styles } from "./styles";

interface Category {
  key: string;
  name: string;
}
interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}
export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory,
}: Props) {
  function handleCategorySelect(category: Category) {
    setCategory(category);
  }
  return (
    <GestureHandlerRootView style={styles().container}>
      <View style={styles().header}>
        <Text style={styles().title}>Categoria</Text>
      </View>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCategorySelect(item)}
            style={styles(category.key === item.key).category}
          >
            <Icon name={item.icon} style={styles().icon} />
            <Text style={styles().name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles().separado} />}
      />
      <View style={styles().footer}>
        <Button onPress={closeSelectCategory}>Selecionar</Button>
      </View>
    </GestureHandlerRootView>
  );
}
