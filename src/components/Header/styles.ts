import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = () =>
  StyleSheet.create({
    container: {
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
  });
