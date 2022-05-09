import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    height: RFValue(113),
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 19,
  },
  title: {
    fontFamily: fonts.regular,
    fontSize: RFValue(18),
    color: colors.shape,
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
