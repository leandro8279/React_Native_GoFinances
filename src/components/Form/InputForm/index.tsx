import React from "react";
import { TextInputProps, View, Text } from "react-native";
import { Control, Controller } from "react-hook-form";

import { Input } from "@components/Form/Input";
import { styles } from "./styles";
interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}
export function InputForm({ control, name, error, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
