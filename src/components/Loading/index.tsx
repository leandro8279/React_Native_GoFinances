import { colors } from "@global/styles";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

export function Loading() {
  return (
    <View style={styles().container}>
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );
}
