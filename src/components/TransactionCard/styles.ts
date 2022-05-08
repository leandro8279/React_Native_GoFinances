import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts } from "@global/styles";
export const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.shape,
		borderRadius: 5,
		paddingVertical: 17,
		paddingHorizontal: 24,
	},
	title: {
		fontSize: RFValue(14),
		fontFamily: fonts.regular,
	},
	amount: {
		fontSize: RFValue(20),
		fontFamily: fonts.regular,
		marginTop: 2,
	},
	footer: {
		marginTop: 19,
	},
	category: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		color: colors.text,
		fontSize: RFValue(20),
	},
	categoryName: {
		fontSize: RFValue(14),
		color: colors.text,
		marginLeft: 17,
		flex:1
	},
	date: {
		fontSize: RFValue(14),
		color: colors.text,
	},
});
