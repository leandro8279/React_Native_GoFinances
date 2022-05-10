import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: { flex: 1, paddingHorizontal: 24 },
  });
