import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";
export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      paddingHorizontal: 24,
    },
    chartContainer: {
      width: "100%",
      alignItems: "center",
    },
    monthSelect: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 24,
    },
    month: {
      fontFamily: fonts.regular,
      fontSize: RFValue(20),
    },
  });
