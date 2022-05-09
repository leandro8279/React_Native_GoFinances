import { colors, fonts } from "@global/styles";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  error: {
    fontFamily: fonts.regular,
    fontSize: RFValue(14),
    color: colors.attention,
    marginVertical: 7,
  },
});
