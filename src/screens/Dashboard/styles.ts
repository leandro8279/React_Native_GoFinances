import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { colors, fonts } from "@global/styles";
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	header: {
		width: "100%",
		height: RFPercentage(42),
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "flex-start",
		flexDirection: "row",
	},
	wrapper: {
		width: "100%",
		paddingHorizontal: 24,
		marginTop: getStatusBarHeight() + RFValue(28),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
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
	cardsContainer: {
		paddingHorizontal: 24,
	},
	cards: {
		width: "100%",
		position: "absolute",
		marginTop: RFPercentage(20),
	},
	transactions: {
		flex: 1,
		paddingHorizontal: 24,
		marginTop: RFPercentage(12),
	},
	transactionsTitle:{
		fontSize:RFValue(18),
		fontFamily:fonts.regular,
		marginBottom:16,
	}
});
