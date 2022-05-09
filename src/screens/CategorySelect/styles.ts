import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, fonts } from "@global/styles";
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	header: {
		width: "100%",
		height: RFValue(113),
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 19,
	},
	title: {
		fontSize: RFValue(18),
		color: colors.shape,
		fontFamily: fonts.regular,
	},
	category: {
		width: "100%",
		padding: RFValue(15),
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		fontSize: RFValue(20),
		marginRight: 16,
	},
	name: {
		fontFamily: fonts.regular,
		fontSize: RFValue(14),
	},
	separado: {
		width: "100%",
		height: 1,
		backgroundColor: colors.text,
	},
	footer: {
		width: "100%",
		padding: 24,
	},
});
