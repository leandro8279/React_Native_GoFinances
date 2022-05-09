import { StyleSheet } from "react-native";
import { colors, fonts } from "@global/styles";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  type?: "up" | "down";
  isActive?: boolean;
};
export const styles = ({ isActive, type }: Props) =>
  StyleSheet.create({
    container: {
      width: "48%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: isActive ? 0 : 1.5,
      borderColor: colors.text,
      borderRadius: 5,
      padding: 16,
      backgroundColor: !isActive
        ? colors.background
        : type === "up"
        ? colors.success_light
        : colors.attention_light,
    },
    title: {
      fontSize: RFValue(14),
      fontFamily: fonts.regular,
    },
  });
