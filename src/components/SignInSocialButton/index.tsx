import { colors } from "@global/styles";
import React from "react";
import { Text, ActivityIndicator, TouchableOpacity, View } from "react-native";
import { SvgProps } from "react-native-svg";

import { styles } from "./styles";

interface Props {
  children: string;
  loading?: boolean;
  onPress: () => void;
  svg: React.FC<SvgProps>;
}
export function SignInSocialButton({
  onPress,
  svg: Svg,
  children,
  loading,
}: Props) {
  return (
    <TouchableOpacity style={styles().container} onPress={onPress}>
      <View style={styles().content}>
        <Svg />
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{
            flex: 1,
            alignItems: "center",
          }}
        />
      ) : (
        <Text style={styles().title}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}
