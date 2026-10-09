
export type Kategori =
  | "Makanan Berat"
  | "Camilan & Snack"
  | "Minuman Segar"
  | "Paket Hemat"
  | "Menu Sehat";

export type MenuItem = {
  id: number;
  nama: string;
  kategori: Kategori;
  harga: number;
  stok: number;
  rating: number;
  penjual: string;
  deskripsi: string;
  gambar: string;
};

export const DATA_MENU: MenuItem[] = [
  {
    id: 1,
    nama: "Ayam Geprek Sambal Bawang",
    kategori: "Makanan Berat",
    harga: 16000,
    stok: 18,
    rating: 4.9,
    penjual: "Stan 1 - Dapur Bu Siti",
    deskripsi: "Ayam krispi, sambal bawang, dan nasi hangat.",
    gambar:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1000",
  },
  {
    id: 2,
    nama: "Nasi Goreng Spesial",
    kategori: "Makanan Berat",
    harga: 14000,
    stok: 12,
    rating: 4.8,
    penjual: "Stan 2 - Kantin Bu Rina",
    deskripsi: "Nasi goreng dengan telur dan sayuran.",
    gambar:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1000",
  },
  {
    id: 3,
    nama: "Es Teh Manis",
    kategori: "Minuman Segar",
    harga: 4000,
    stok: 25,
    rating: 4.7,
    penjual: "Stan 3 - Minuman Segar",
    deskripsi: "Es teh manis yang menyegarkan.",
    gambar:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1000",
  },
  {
    id: 4,
    nama: "Pisang Goreng",
    kategori: "Camilan & Snack",
    harga: 6000,
    stok: 15,
    rating: 4.8,
    penjual: "Stan 4 - Camilan Ibu",
    deskripsi: "Pisang goreng hangat untuk camilan.",
    gambar:
      "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=1000",
  },
  {
    id: 5,
    nama: "Paket Nasi Hemat",
    kategori: "Paket Hemat",
    harga: 12000,
    stok: 10,
    rating: 4.8,
    penjual: "Stan 1 - Dapur Bu Siti",
    deskripsi: "Paket nasi dan lauk dengan harga hemat.",
    gambar:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000",
  },
  {
    id: 6,
    nama: "Salad Sayur",
    kategori: "Menu Sehat",
    harga: 10000,
    stok: 8,
    rating: 4.6,
    penjual: "Stan 5 - Menu Sehat",
    deskripsi: "Sayuran segar untuk pilihan makan sehat.",
    gambar:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000",
  },
];