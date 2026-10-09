
import React from "react";
import {
  ScrollView,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

import { COLORS, RADIUS } from "../styles/theme";
import type { Kategori } from "../data/data";

export type FilterKategori = "Semua Menu" | Kategori;

type CategoryFilterProps = {
  aktif: FilterKategori;
  onPilih: (kategori: FilterKategori) => void;
};

const KATEGORI: FilterKategori[] = [
  "Semua Menu",
  "Makanan Berat",
  "Camilan & Snack",
  "Minuman Segar",
  "Paket Hemat",
  "Menu Sehat",
];

export default function CategoryFilter({
  aktif,
  onPilih,
}: CategoryFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {KATEGORI.map((kategori) => {
        const terpilih = aktif === kategori;

        return (
          <Pressable
            key={kategori}
            onPress={() => onPilih(kategori)}
            style={[
              styles.button,
              terpilih && styles.buttonAktif,
            ]}
          >
            <Text
              style={[
                styles.text,
                terpilih && styles.textAktif,
              ]}
            >
              {kategori}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  buttonAktif: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  text: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: "600",
  },
  textAktif: {
    color: COLORS.white,
  },
});