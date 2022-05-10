import { StyleSheet } from "react-native";
import { colors } from "@global/styles";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  form: {
    flex: 1,
    width: "100%",
    padding: 24,
    justifyContent: "space-between",
  },
  transactionsTypes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 16,
  },
});
