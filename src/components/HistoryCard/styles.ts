import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = (color?: string) =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: colors.shape,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 13,
      paddingHorizontal: 24,
      borderRadius: 5,
      borderLeftWidth: 5,
      borderLeftColor: color,
      marginBottom: 8,
    },
    title: {
      fontSize: RFValue(15),
      fontFamily: fonts.regular,
    },
    amount: { fontSize: RFValue(15), fontFamily: fonts.bold },
  });
