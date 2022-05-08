import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: RFValue(14),
    fontFamily: fonts.regular,
  },
});
