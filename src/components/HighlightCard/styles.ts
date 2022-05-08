import {StyleSheet} from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';
import {colors} from "@global/styles";
export const styles = StyleSheet.create({
	container:{
		backgroundColor:colors.shape,
		width:RFValue(300),
		borderRadius:5,
		paddingVertical:19,
		paddingHorizontal:23,
		paddingBottom:RFValue(42),
	},
	title:{
		
	}
});