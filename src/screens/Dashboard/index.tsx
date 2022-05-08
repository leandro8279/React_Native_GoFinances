import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { HighlightCard } from "@components/HighlightCard";

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
			<ScrollView
				horizontal
				contentContainerStyle={styles.cardsContainer}
				style={styles.cards}
				showsHorizontalScrollIndicator={false}
			>
				 <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
			</ScrollView>
		</View>
	);
}
