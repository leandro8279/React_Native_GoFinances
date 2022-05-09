import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  children: string;
}
export function Button({ children, ...props }: Props) {
  return (
    <TouchableOpacity {...props} style={styles.container} activeOpacity={0.7}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
}
