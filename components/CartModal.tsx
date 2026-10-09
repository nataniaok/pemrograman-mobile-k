
import React from "react";
import {
  Modal,
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";

import { COLORS, RADIUS, SPACING } from "../styles/theme";
import { formatRupiah } from "../utils/formatRupiah";
import type { MenuItem } from "../data/data";

export type ItemKeranjang = {
  item: MenuItem;
  jumlah: number;
};

type CartModalProps = {
  visible: boolean;
  items: ItemKeranjang[];
  onTutup: () => void;
  onTambah: (id: string | number) => void;
  onKurang: (id: string | number) => void;
  onCheckout: () => void;
};

export default function CartModal({
  visible,
  items,
  onTutup,
  onTambah,
  onKurang,
  onCheckout,
}: CartModalProps) {
  const total = items.reduce(
    (sum, entry) => sum + entry.item.harga * entry.jumlah,
    0
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onTutup}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Keranjang 🛒</Text>

            <Pressable onPress={onTutup}>
              <Text style={styles.close}>Tutup ✕</Text>
            </Pressable>
          </View>

          <FlatList
            data={items}
            keyExtractor={(entry) => String(entry.item.id)}
            ListEmptyComponent={
              <Text style={styles.empty}>
                Keranjangmu masih kosong.
              </Text>
            }
            renderItem={({ item: entry }) => (
              <View style={styles.row}>
                <View style={styles.info}>
                  <Text style={styles.name}>
                    {entry.item.nama}
                  </Text>

                  <Text style={styles.price}>
                    {formatRupiah(entry.item.harga)}
                  </Text>
                </View>

                <View style={styles.quantity}>
                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => onKurang(entry.item.id)}
                  >
                    <Text style={styles.quantityText}>−</Text>
                  </Pressable>

                  <Text style={styles.count}>
                    {entry.jumlah}
                  </Text>

                  <Pressable
                    style={styles.quantityButton}
                    onPress={() => onTambah(entry.item.id)}
                  >
                    <Text style={styles.quantityText}>+</Text>
                  </Pressable>
                </View>
              </View>
            )}
          />

          <View style={styles.footer}>
            <Text style={styles.totalLabel}>
              Total pembayaran
            </Text>

            <Text style={styles.total}>
              {formatRupiah(total)}
            </Text>

            <Pressable
              style={[
                styles.checkout,
                items.length === 0 && styles.disabled,
              ]}
              disabled={items.length === 0}
              onPress={onCheckout}
            >
              <Text style={styles.checkoutText}>
                Buat Pesanan
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(15, 23, 42, 0.6)",
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: RADIUS.large,
    borderTopRightRadius: RADIUS.large,
    padding: SPACING.medium,
    height: "80%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.text,
  },
  close: {
    color: COLORS.primary,
    fontWeight: "600",
  },
  empty: {
    textAlign: "center",
    color: COLORS.secondaryText,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    gap: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    color: COLORS.text,
    fontWeight: "bold",
  },
  price: {
    color: COLORS.secondaryText,
    marginTop: 5,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  quantityButton: {
    backgroundColor: "#E8F7F0",
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityText: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  count: {
    color: COLORS.text,
    fontWeight: "bold",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 16,
    marginTop: 10,
  },
  totalLabel: {
    color: COLORS.secondaryText,
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: 5,
  },
  checkout: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.medium,
    padding: 15,
    alignItems: "center",
    marginTop: 14,
  },
  disabled: {
    backgroundColor: "#9CA3AF",
  },
  checkoutText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});