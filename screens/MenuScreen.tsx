
import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, SPACING } from "../styles/theme";
import { DATA_MENU } from "../data/data";
import MenuCard from "../components/MenuCard";
import CategoryFilter, {
  type FilterKategori,
} from "../components/CategoryFilter";
import type { MenuItem } from "../data/data";

type MenuScreenProps = {
  onPesan: (item: MenuItem) => void;
};

export default function MenuScreen({
  onPesan,
}: MenuScreenProps) {
  const [pencarian, setPencarian] = useState("");
  const [kategoriAktif, setKategoriAktif] =
    useState<FilterKategori>("Semua Menu");

  const menuTampil = useMemo(() => {
    return DATA_MENU.filter((item) => {
      const cocokNama = item.nama
        .toLowerCase()
        .includes(pencarian.toLowerCase());

      const cocokKategori =
        kategoriAktif === "Semua Menu" ||
        item.kategori === kategoriAktif;

      return cocokNama && cocokKategori;
    });
  }, [pencarian, kategoriAktif]);

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Menu Kantin 🍱</Text>

      <Text style={styles.subjudul}>
        Temukan makanan favoritmu tanpa harus mengantre lama.
      </Text>

      <TextInput
        style={styles.search}
        placeholder="🔍 Cari makanan atau minuman..."
        placeholderTextColor="#94A3B8"
        value={pencarian}
        onChangeText={setPencarian}
      />

      <CategoryFilter
        aktif={kategoriAktif}
        onPilih={setKategoriAktif}
      />

      <Text style={styles.jumlah}>
        {menuTampil.length} menu ditemukan
      </Text>

      <FlatList
        data={menuTampil}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MenuCard item={item} onPesan={onPesan} />
        )}
        ListEmptyComponent={
          <Text style={styles.kosong}>
            Menu tidak ditemukan. Coba kata pencarian lain.
          </Text>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.daftar}
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
  },
  search: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 13,
    marginTop: 18,
    color: COLORS.text,
  },
  jumlah: {
    fontSize: 13,
    color: COLORS.secondaryText,
    marginBottom: 10,
  },
  daftar: {
    paddingBottom: 30,
  },
  kosong: {
    color: COLORS.secondaryText,
    textAlign: "center",
    marginTop: 35,
  },
});