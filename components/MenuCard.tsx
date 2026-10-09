
import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

import { COLORS, RADIUS, SPACING } from "../styles/theme";
import { formatRupiah } from "../utils/formatRupiah";
import type { MenuItem } from "../data/data";

type MenuCardProps = {
  item: MenuItem;
  onPesan: (item: MenuItem) => void;
};

export default function MenuCard({
  item,
  onPesan,
}: MenuCardProps) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.gambar }}
        style={styles.gambar}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.penjual}>{item.penjual}</Text>
        <Text style={styles.kategori}>{item.kategori}</Text>
        <Text style={styles.nama}>{item.nama}</Text>
        <Text style={styles.deskripsi}>{item.deskripsi}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>
            ⭐ {item.rating}
          </Text>

          <Text
            style={[
              styles.stok,
              item.stok > 0
                ? styles.stokAda
                : styles.stokHabis,
            ]}
          >
            {item.stok > 0
              ? `Stok: ${item.stok}`
              : "Stok habis"}
          </Text>
        </View>

        <Text style={styles.harga}>
          {formatRupiah(item.harga)}
        </Text>

        <Pressable
          onPress={() => onPesan(item)}
          disabled={item.stok <= 0}
          style={[
            styles.button,
            item.stok <= 0 && styles.buttonDisabled,
          ]}
        >
          <Text style={styles.buttonText}>
            {item.stok > 0
              ? "+ Pesan Sekarang"
              : "Stok Habis"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.medium,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.medium,
  },
  gambar: {
    width: "100%",
    height: 190,
    backgroundColor: "#E8F7F0",
  },
  content: {
    padding: SPACING.medium,
  },
  penjual: {
    color: COLORS.secondaryText,
    fontSize: 12,
    marginBottom: 6,
  },
  kategori: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: "600",
  },
  nama: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 5,
  },
  deskripsi: {
    color: COLORS.secondaryText,
    fontSize: 12,
    marginTop: 6,
    lineHeight: 18,
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  rating: {
    color: "#B7791F",
    fontSize: 12,
  },
  stok: {
    fontSize: 12,
  },
  stokAda: {
    color: COLORS.primaryDark,
  },
  stokHabis: {
    color: "#DC2626",
  },
  harga: {
    color: COLORS.primaryDark,
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 12,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: RADIUS.small,
    alignItems: "center",
    marginTop: 12,
  },
  buttonDisabled: {
    backgroundColor: "#9CA3AF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});