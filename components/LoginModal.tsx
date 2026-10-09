
import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { COLORS, RADIUS, SPACING } from "../styles/theme";

type Role = "mahasiswa" | "pengelola";

type LoginModalProps = {
  visible: boolean;
  onLogin: (role: Role) => void;
  onClose: () => void;
};

export default function LoginModal({
  visible,
  onLogin,
  onClose,
}: LoginModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.logo}>⚡ SmartCanteen</Text>

          <Text style={styles.title}>Selamat Datang!</Text>

          <Text style={styles.description}>
            Silakan pilih jenis akun untuk melanjutkan.
          </Text>

          <Pressable
            style={styles.roleCard}
            onPress={() => onLogin("mahasiswa")}
          >
            <Text style={styles.icon}>🎓</Text>

            <View style={styles.roleInfo}>
              <Text style={styles.roleTitle}>Login Mahasiswa</Text>
              <Text style={styles.roleDescription}>
                Pesan makanan dan lihat status antrean.
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <Pressable
            style={styles.roleCard}
            onPress={() => onLogin("pengelola")}
          >
            <Text style={styles.icon}>👨‍🍳</Text>

            <View style={styles.roleInfo}>
              <Text style={styles.roleTitle}>
                Login Pengelola Kantin
              </Text>
              <Text style={styles.roleDescription}>
                Kelola menu dan stok makanan.
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Tutup</Text>
          </Pressable>

          <Text style={styles.note}>
            Mode demo untuk pembelajaran
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.65)",
    justifyContent: "center",
    alignItems: "center",
    padding: SPACING.medium,
  },
  card: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
    padding: SPACING.large,
  },
  logo: {
    textAlign: "center",
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 23,
  },
  title: {
    color: COLORS.text,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  description: {
    color: COLORS.secondaryText,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 22,
  },
  roleCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: "#F8FAFC",
    borderRadius: RADIUS.medium,
    padding: SPACING.medium,
    gap: 12,
    marginBottom: 12,
  },
  icon: {
    fontSize: 28,
  },
  roleInfo: {
    flex: 1,
  },
  roleTitle: {
    fontWeight: "bold",
    color: COLORS.text,
    fontSize: 15,
  },
  roleDescription: {
    color: COLORS.secondaryText,
    fontSize: 12,
    marginTop: 5,
  },
  arrow: {
    color: COLORS.primary,
    fontSize: 26,
  },
  closeButton: {
    padding: 12,
    alignItems: "center",
  },
  closeText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
  note: {
    color: "#94A3B8",
    textAlign: "center",
    fontSize: 11,
    marginTop: 8,
  },
});