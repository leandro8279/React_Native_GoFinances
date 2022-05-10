import React, { useState } from "react";
import { View, Text } from "react-native";
import { SignInSocialButton } from "@components/SignInSocialButton";

import LogoSvg from "@assets/logo.svg";
import GoogleSvg from "@assets/google.svg";
import AppleSvg from "@assets/apple.svg";

import { RFValue } from "react-native-responsive-fontsize";

import { useAuth } from "src/hooks/auth";

import { styles } from "./styles";
export function SignIn() {
  const [loading, setLoading] = useState(false);
  const { user, signInWithGoogle, signInWithApple } = useAuth();
  console.log(user);
  async function handleSignInWithGoogle() {
    try {
      setLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      alert("Não foi possível conectar a conta Google");
      setLoading(false);
    }
  }
  async function handleSignInWithApple() {
    try {
      setLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      alert("Não foi possível conectar a conta Apple");
      setLoading(false);
    }
  }
  return (
    <View style={styles().container}>
      <View style={styles().header}>
        <View style={styles().content}>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
            style={{ alignItems: "center" }}
          />
          <Text style={styles().title}>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Text>
        </View>
        <Text style={styles().subTitle}>
          Faça seu login com {"\n"}
          uma das contas abaixo
        </Text>
      </View>

      <View style={styles().footer}>
        <View style={styles().footerWrapper}>
          <SignInSocialButton
            onPress={handleSignInWithGoogle}
            svg={GoogleSvg}
            loading={loading}
          >
            Entrar com Google
          </SignInSocialButton>

          <SignInSocialButton
            onPress={handleSignInWithApple}
            svg={AppleSvg}
            loading={loading}
          >
            Entrar com Apple
          </SignInSocialButton>
        </View>
      </View>
    </View>
  );
}
