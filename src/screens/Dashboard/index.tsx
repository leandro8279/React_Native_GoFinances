import React from "react";
import {View, Text} from "react-native";

import {Header} from "@components/Header";

import {styles} from "./styles";

export function Dashboard(){
	return (
		<View style={styles.container}>
		<Header/>
			<Text style={styles.title}>
				Dashboard
			</Text>
		</View>
	);
}