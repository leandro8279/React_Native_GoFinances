import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontFamily: fonts.regular,
    fontSize: RFValue(14),
    color: colors.text_dark,
    backgroundColor: colors.shape,
    borderRadius: 5,
    marginBottom: 8,
  },
});
