import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  up: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: colors.text,
    borderRadius: 5,
    padding: 16,
    backgroundColor: colors.success_light,
  },
  down: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderColor: colors.text,
    borderRadius: 5,
    padding: 16,
    backgroundColor: colors.attention_light,
  },

  title: {
    fontSize: RFValue(14),
    fontFamily: fonts.regular,
  },
});
