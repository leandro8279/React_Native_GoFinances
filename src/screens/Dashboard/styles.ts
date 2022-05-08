import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { colors, fonts } from "@global/styles";
export const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:colors.background,
	},
	header: {
		width: "100%",
		height: RFPercentage(42),
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
	wrapper: {
		width: "100%",
		paddingHorizontal: 24,
		flexDirection:"row",
		justifyContent:"space-between",
		alignItems:"center"
	},
	info: {
		flexDirection: "row",
		alignItems: "center",
	},
	photo: {
		width: RFValue(48),
		height: RFValue(48),
		borderRadius: 10,
	},
	user: {
		marginLeft: 17,
	},
	title: {
		fontSize: RFValue(18),
		color: colors.shape,
		fontFamily: fonts.regular,
	},
	subTitle: {
		fontSize: RFValue(18),
		color: colors.shape,
		fontFamily: fonts.bold,
	},
});
