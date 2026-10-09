
import React from "react";
import { View, Text, Pressable, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../styles/theme";

type HeaderProps = {
  nama: string;
  role: "mahasiswa" | "pengelola" | null;
  halaman: string;
  onGantiLogin: () => void;
  onPilihHalaman: (halaman: string) => void;
};

export default function Header({
  nama,
  role,
  halaman,
  onGantiLogin,
  onPilihHalaman,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => onPilihHalaman("Menu")}>
        <Text style={styles.logo}>⚡ SmartCanteen</Text>
      </Pressable>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navigation}
      >
        <NavButton
          label="🍱 Menu"
          aktif={halaman === "Menu"}
          onPress={() => onPilihHalaman("Menu")}
        />

        <NavButton
          label="📋 Status Antrean"
          aktif={halaman === "Antrean"}
          onPress={() => onPilihHalaman("Antrean")}
        />

        {role === "pengelola" && (
          <NavButton
            label="👨‍🍳 Pengelola Kantin"
            aktif={halaman === "Pengelola"}
            onPress={() => onPilihHalaman("Pengelola")}
          />
        )}
      </ScrollView>

      {role && (
        <Text style={styles.nama}>{nama}</Text>
      )}

      <Pressable style={styles.loginButton} onPress={onGantiLogin}>
        <Text style={styles.loginText}>
          {role ? "Ganti Login" : "Login"}
        </Text>
      </Pressable>
    </View>
  );
}

type NavButtonProps = {
  label: string;
  aktif: boolean;
  onPress: () => void;
};

function NavButton({ label, aktif, onPress }: NavButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.navButton, aktif && styles.navAktif]}
    >
      <Text style={[styles.navText, aktif && styles.navTextAktif]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202124",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  logo: {
    color: COLORS.primary,
    fontSize: 19,
    fontWeight: "bold",
    padding: 6,
  },
  navigation: {
    alignItems: "center",
    gap: 6,
  },
  navButton: {
    backgroundColor: "#303134",
    paddingVertical: 11,
    paddingHorizontal: 13,
    borderRadius: 22,
  },
  navAktif: {
    backgroundColor: COLORS.primary,
  },
  navText: {
    color: "#D1D5DB",
    fontSize: 13,
    fontWeight: "600",
  },
  navTextAktif: {
    color: "#FFFFFF",
  },
  nama: {
    color: "#FFFFFF",
    fontSize: 12,
    paddingHorizontal: 5,
  },
  loginButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 11,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  loginText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});