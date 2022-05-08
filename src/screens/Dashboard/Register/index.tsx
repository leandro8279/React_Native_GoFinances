import React from "react";
import { View, Text } from "react-native";

import { Input, Button } from "@components/index";
import { styles } from "./styles";

export function Register() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro</Text>
      </View>

      <View style={styles.form}>
        <Input placeholder="Name" />
        <Input placeholder="Preço" />
        <Button>Enviar</Button>
      </View>
    </View>
  );
}
