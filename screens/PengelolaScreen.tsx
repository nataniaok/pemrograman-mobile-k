
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, RADIUS, SPACING } from "../styles/theme";
import { DATA_MENU } from "../data/data";
import { formatRupiah } from "../utils/formatRupiah";
import type { Pesanan } from "./AntreanScreen";

type PengelolaScreenProps = {
  pesanan: Pesanan[];
};

export default function PengelolaScreen({
  pesanan,
}: PengelolaScreenProps) {
  const totalMenu = DATA_MENU.length;

  const totalStok = DATA_MENU.reduce(
    (total, item) => total + item.stok,
    0
  );

  const menuHabis = DATA_MENU.filter(
    (item) => item.stok === 0
  ).length;

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Dashboard Pengelola 👨‍🍳</Text>

      <Text style={styles.subjudul}>
        Pantau persediaan dan pesanan mahasiswa.
      </Text>

      <View style={styles.ringkasan}>
        <View style={styles.statCard}>
          <Text style={styles.statAngka}>{totalMenu}</Text>
          <Text style={styles.statLabel}>Total Menu</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statAngka}>{totalStok}</Text>
          <Text style={styles.statLabel}>Total Stok</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={[styles.statAngka, styles.merah]}>
            {menuHabis}
          </Text>
          <Text style={styles.statLabel}>Menu Habis</Text>
        </View>
      </View>

      <Text style={styles.judulDaftar}>
        Pesanan Masuk ({pesanan.length})
      </Text>

      <FlatList
        data={[...pesanan].reverse()}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.daftar}
        ListEmptyComponent={
          <View style={styles.kosong}>
            <Text style={styles.kosongJudul}>
              Belum ada pesanan masuk
            </Text>
            <Text style={styles.kosongText}>
              Pesanan mahasiswa akan muncul di sini setelah checkout.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <View style={styles.menuInfo}>
              <Text style={styles.menuNama}>{item.namaMenu}</Text>
              <Text style={styles.menuHarga}>
                Antrean #{item.nomorAntrean} · Jumlah: {item.jumlah}
              </Text>
              <Text style={styles.status}>
                Status: {item.status}
              </Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />

      <Text style={styles.judulDaftar}>Daftar Persediaan</Text>

      <FlatList
        data={DATA_MENU}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.daftar}
        renderItem={({ item }) => (
          <View style={styles.menuCard}>
            <View style={styles.menuInfo}>
              <Text style={styles.menuNama}>{item.nama}</Text>
              <Text style={styles.menuHarga}>
                {formatRupiah(item.harga)}
              </Text>
            </View>

            <View
              style={[
                styles.stokBadge,
                item.stok === 0
                  ? styles.stokHabis
                  : item.stok <= 5
                  ? styles.stokSedikit
                  : styles.stokAman,
              ]}
            >
              <Text style={styles.stokText}>
                Stok: {item.stok}
              </Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
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
    color: COLORS.text,
    fontSize: 25,
    fontWeight: "bold",
  },
  subjudul: {
    color: COLORS.secondaryText,
    marginTop: 7,
    marginBottom: 20,
    lineHeight: 21,
  },
  ringkasan: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
    borderRadius: RADIUS.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },
  statAngka: {
    fontSize: 23,
    fontWeight: "bold",
    color: COLORS.primary,
  },
  merah: {
    color: "#DC2626",
  },
  statLabel: {
    color: COLORS.secondaryText,
    fontSize: 11,
    textAlign: "center",
    marginTop: 5,
  },
  judulDaftar: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 8,
  },
  daftar: {
    paddingBottom: 20,
  },
  kosong: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.medium,
    padding: 20,
    marginBottom: 12,
  },
  kosongJudul: {
    color: COLORS.text,
    fontWeight: "bold",
  },
  kosongText: {
    color: COLORS.secondaryText,
    marginTop: 6,
    lineHeight: 20,
  },
  menuCard: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.medium,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.medium,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  menuInfo: {
    flex: 1,
  },
  menuNama: {
    color: COLORS.text,
    fontWeight: "bold",
    fontSize: 14,
  },
  menuHarga: {
    color: COLORS.secondaryText,
    marginTop: 5,
    fontSize: 12,
  },
  status: {
    color: COLORS.primaryDark,
    fontWeight: "600",
    fontSize: 12,
    marginTop: 6,
  },
  stokBadge: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  stokAman: {
    backgroundColor: "#D1FAE5",
  },
  stokSedikit: {
    backgroundColor: "#FEF3C7",
  },
  stokHabis: {
    backgroundColor: "#FEE2E2",
  },
  stokText: {
    color: COLORS.text,
    fontWeight: "600",
    fontSize: 12,
  },
});