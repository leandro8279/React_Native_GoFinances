import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts } from "@global/styles";
export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.shape,
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
	},
	amount: {
		fontFamily: fonts.medium,
		fontSize: RFValue(32),
	},
	lastTransaction: {
		fontFamily: fonts.regular,
		color: colors.text,
		fontSize: RFValue(12),
	},
});
