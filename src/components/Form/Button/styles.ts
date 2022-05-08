import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: colors.secondary,
      padding: 18,
      borderRadius: 5,
      alignItems: "center",
    },
    title: {
      fontSize: RFValue(14),
      fontFamily: fonts.medium,
      color: colors.shape,
    },
  });
