import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: RFValue(56),
      backgroundColor: colors.shape,
      borderRadius: 5,
      alignItems: "center",
      flexDirection: "row",
      marginBottom: 16,
    },
    content: {
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(16),
      borderColor: colors.background,
      borderRightWidth: 1,
    },
    title: {
      flex: 1,
      textAlign: "center",
      fontFamily: fonts.medium,
      fontSize: RFValue(16),
      color: colors.text_dark,
    },
  });
