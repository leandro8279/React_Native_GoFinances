import React from "react";
import {View, Text} from "react-native";

import { Feather  as Icon} from '@expo/vector-icons';

import {styles} from "./styles";

export function TransactionCard (){
	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Desenvolvimento de site
			</Text>
			<Text style={styles.amount}>
				R$ 12.000,00
			</Text>
			<View style={styles.footer}>
				<View style={styles.category}>
					<Icon name="dollar-sign" style={styles.icon}/>
					<Text style={styles.categoryName}>
						Vendas
					</Text>
					<Text style={styles.date}>
						12/04/2020
					</Text>
				</View>
			</View>
		</View>
	);
}