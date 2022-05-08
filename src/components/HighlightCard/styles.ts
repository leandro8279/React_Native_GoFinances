import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts } from "@global/styles";

type Props = {
	type?: "up" | "down" | "total";
};
export const styles = ({ type = null }: Props) =>
	StyleSheet.create({
		container: {
			backgroundColor: type === "total" ? colors.secondary : colors.shape,
			width: RFValue(300),
			borderRadius: 5,
			paddingVertical: 19,
			paddingHorizontal: 23,
			paddingBottom: RFValue(42),
			marginRight: 16,
		},
		header: {
			flexDirection: "row",
			justifyContent: "space-between",
		},
		title: {
			fontFamily: fonts.regular,
			fontSize: RFValue(14),
			color: type === "total" ? colors.shape : colors.text_dark,
		},
		amount: {
			fontFamily: fonts.medium,
			fontSize: RFValue(32),
			color: type === "total" ? colors.shape : colors.text_dark,
		},
		lastTransaction: {
			fontFamily: fonts.regular,
			color: colors.shape,
			fontSize: RFValue(12),
		},
	});
