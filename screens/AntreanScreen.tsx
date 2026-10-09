
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, RADIUS, SPACING } from "../styles/theme";

export type Pesanan = {
  id: string;
  namaMenu: string;
  jumlah: number;
  nomorAntrean: string;
  status: "Menunggu" | "Diproses" | "Siap Diambil";
};

type AntreanScreenProps = {
  pesanan: Pesanan[];
};

export default function AntreanScreen({
  pesanan,
}: AntreanScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Status Antrean 📋</Text>

      <Text style={styles.subjudul}>
        Pantau pesananmu tanpa perlu berdiri lama di depan kantin.
      </Text>

      <FlatList
        data={pesanan}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.daftar}
        ListEmptyComponent={
          <View style={styles.kosong}>
            <Text style={styles.emoji}>🧾</Text>

            <Text style={styles.kosongJudul}>
              Belum ada pesanan
            </Text>

            <Text style={styles.kosongText}>
              Pesanan yang kamu buat akan muncul di sini.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.nomor}>
                Antrean #{item.nomorAntrean}
              </Text>

              <View
                style={[
                  styles.badge,
                  item.status === "Siap Diambil"
                    ? styles.badgeSiap
                    : item.status === "Diproses"
                    ? styles.badgeProses
                    : styles.badgeMenunggu,
                ]}
              >
                <Text style={styles.badgeText}>
                  {item.status}
                </Text>
              </View>
            </View>

            <Text style={styles.namaMenu}>
              {item.namaMenu}
            </Text>

            <Text style={styles.jumlah}>
              Jumlah: {item.jumlah}
            </Text>

            <View style={styles.garis} />

            <Text style={styles.info}>
              {item.status === "Menunggu"
                ? "⏳ Pesanan sedang menunggu untuk diproses."
                : item.status === "Diproses"
                ? "👨‍🍳 Pesanan sedang disiapkan."
                : "✅ Pesanan siap diambil di kantin."}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.medium,
  },
  judul: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.text,
  },
  subjudul: {
    color: COLORS.secondaryText,
    marginTop: 7,
    lineHeight: 21,
    marginBottom: 18,
  },
  daftar: {
    paddingBottom: 30,
    flexGrow: 1,
  },
  kosong: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginTop: 35,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.large,
  },
  emoji: {
    fontSize: 48,
  },
  kosongJudul: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    marginTop: 12,
  },
  kosongText: {
    color: COLORS.secondaryText,
    textAlign: "center",
    marginTop: 7,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.medium,
    padding: SPACING.medium,
    marginBottom: SPACING.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
  },
  nomor: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  badgeMenunggu: {
    backgroundColor: "#FEF3C7",
  },
  badgeProses: {
    backgroundColor: "#DBEAFE",
  },
  badgeSiap: {
    backgroundColor: "#D1FAE5",
  },
  badgeText: {
    color: COLORS.text,
    fontSize: 11,
    fontWeight: "bold",
  },
  namaMenu: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 16,
  },
  jumlah: {
    color: COLORS.secondaryText,
    marginTop: 6,
  },
  garis: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 14,
  },
  info: {
    color: COLORS.secondaryText,
    fontSize: 13,
    lineHeight: 20,
  },
});