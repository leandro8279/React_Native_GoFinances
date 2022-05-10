import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      width: "100%",
      height: "70%",
      backgroundColor: colors.primary,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    content: {
      alignItems: "center",
    },
    title: {
      fontSize: RFValue(30),
      color: colors.shape,
      fontFamily: fonts.medium,
      marginTop: 45,
      textAlign: "center",
    },
    subTitle: {
      fontSize: RFValue(20),
      color: colors.shape,
      fontFamily: fonts.regular,
      marginTop: 80,
      marginBottom: 67,
      textAlign: "center",
    },
    footer: {
      width: "100%",
      height: "30%",
      backgroundColor: colors.secondary,
    },
  });
