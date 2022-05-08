import React from "react";
import { View, Text } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { colors } from "@global/styles";
import { styles } from "./styles";

export function HighlightCard() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Entrada</Text>
				<Icon
					name="arrow-up-circle"
					color={colors.text_dark}
					size={RFValue(40)}
				/>
			</View>

			<View>
				<Text style={styles.amount}>R$ 17.400,00</Text>
				<Text style={styles.lastTransaction}>
					Última entrada dia 13 de abril
				</Text>
			</View>
		</View>
	);
}
