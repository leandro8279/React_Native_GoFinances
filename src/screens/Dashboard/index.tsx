import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import {HighlightCard } from "@components/HighlightCard";

import { styles } from "./styles";

import { colors } from "@global/styles";
export function Dashboard() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.wrapper}>
					<View style={styles.info}>
						<Image
							source={{
								uri: "https://avatars.githubusercontent.com/u/49030804?v=4",
							}}
							style={styles.photo}
						/>
						<View style={styles.user}>
							<Text style={styles.title}>Òla,</Text>
							<Text style={styles.subTitle}>Leandro</Text>
						</View>
					</View>
					<Feather name="power" size={24} color={colors.secondary} />
				</View>
			</View>
			<HighlightCard />
		</View>
	);
}
