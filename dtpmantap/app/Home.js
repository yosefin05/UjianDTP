// Home.js
import React, { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const data = [
    {
      id: "1",
      name: "Israel Serang Berbagai Wilayah Gaza",
      image:
        "https://asset.kompas.com/crops/_UsuYyw5cVcHzYPqJRcZBMCc-QA=/0x0:2000x1333/1200x800/data/photo/2024/11/04/672829f49e52a.jpg",
      description:
        "GAZA, KOMPAS.com - Badan Pertahanan Sipil Gaza pada Minggu (17/11/2024) melaporkan, serangan udara Israel menewaskan sedikitnya 20 orang, termasuk empat perempuan dan tiga anak-anak, di sejumlah wilayah Gaza. Serangan terbaru yang paling mematikan terjadi di kamp pengungsi Bureij di Gaza tengah.",
      category: "Insiden",
    },
    {
      id: "2",
      name: "COP29, RI Dapat Pendanaan Rp 20 Triliun untuk Kembangkan Listrik Hijau.",
      image:
        "https://asset.kompas.com/crops/UM1MXxZ8jBBC9_SIMXJNCF7u45U=/184x0:1728x1029/1200x800/data/photo/2024/09/23/66f102df707e0.jpg",
      description:
        "KOMPAS.com - Pemerintah Indonesia mendapatkan pendaan hijau sebesar 1,2 miliar euro atau setara Rp 20 triliun dalam forum Conference of the Parties (COP29) di Baku, Azerbaijan, Rabu (13/11). Dana tersebut didapat dari bank Kreditanstalt für Wiederaufbau (KfW) untuk mengembangkan infrastruktur kelistrikan hijau, yakni pembangkit listrik tenaga air (PLTA) Pumped Storage dan transmisi penghubung ke pembangkit hijau.",
      category: "Lingkungan",
    },
    {
      id: "3",
      name: "UMP Jateng Diumumkan 20 November, Pj Nana Minta Buruh dan Pengusaha Tidak Berselisih.",
      image:
        "https://asset.kompas.com/crops/-5IgOD8tyW9mk9kxAOj2yUAU7zg=/0x0:0x0/1200x800/data/photo/2024/11/15/67373d5239d48.jpg",
      description:
        "SEMARANG, KOMPAS.com - Pemerintah Provinsi Jawa Tengah bakal mengumumkan Upah Minimum Provinsi (UMP) 2025 pada 20 November 2024. Pj Gubernur Jateng Nana Sudjana meminta agar pengusaha dan buruh tidak berselisih mengenai ketetapan UMP dan mengikuti kebijakan perumusan dari pemerintah pusat. Hal itu disampaikan Nana saat memimpin Rapat Forum Koordinasi Pimpinan Daerah (Forkopimda) di Kantor BPSDMD Jateng, Jumat (15/11/2024).",
      category: "Politik",
    },
    {
      id: "4",
      name: "Jadi Green Port Pertama di Indonesia, Container Yard Pelabuhan Batu Ampar Tembus 20 Persen",
      image:
        "https://asset.kompas.com/crops/aJ2BcRTRUBWWVvjHGgrcbfOZg34=/400x0:2560x1440/1200x800/data/photo/2024/11/15/673687ca3ab31.jpg",
      description:
        "JAKARTA, KOMPAS.com - Pembangunan Container Yard (CY) dan infrastruktur penunjang Terminal Peti Kemas Pelabuhan Batu Ampar, Batam, Kepulauan Riau, menunjukkan progres signifikan. Sejak groundbreaking pada Mei 2024 Hingga November 2024, perkembangan fisiknya telah mencapai angka 20 persen atau deviasi 3 persen lebih cepat dari target dengan serapan dana sekitar Rp 78 miliar.",
      category: "Lingkungan",
    },
    {
      id: "5",
      name: "Mendikdasmen Bakal Revisi Dua UU untuk Lindungi Guru dan Dosen.",
      image:
        "https://asset.kompas.com/crops/vTcAGlrN3VIJNdVISESvc1B80Jg=/0x0:0x0/1200x800/data/photo/2024/11/14/6734e0b87eada.jpg",
      description:
        "KOMPAS.com - Menteri Pendidikan Dasar dan Menengah (Mendikdasmen), Abdul Mu'ti menyebut akan merevisi dua Undang-Undang (UU) terkait siswa, guru dan dosen. Kedua UU itu ialah Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional dan Undang-Undang Nomor 14 Tahun 2005 tentang Guru dan Dosen. Kedua undang-undang ini dianggap perlu diperbarui untuk memberikan perlindungan lebih bagi guru, baik dari sisi profesi maupun keamanan.",
      category: "Politik",
    },
    {
      id: "6",
      name: "Debat Pilkada Kota Magelang Bahas RTLH, “Aman” Janjikan Bantuan Rp 25 Juta, “Damai” Siapkan Rp 20 Juta",
      image:
        "https://asset.kompas.com/crops/3ipkxv-EPJmXAkCRe4btqBfbDUk=/36x68:961x530/1200x800/data/photo/2024/11/14/6735366fafa7e.jpg",
      description:
        "MAGELANG, KOMPAS.com - Debat penutup pemilihan wali kota dan wakil wali kota Magelang, Jawa Tengah, digelar di Atria Hotel Magelang, Rabu (13/11/2024) malam. Debat ini mengangkat tema 'Transformasi Kota Magelang Menuju Kota Modern dan Berkelanjutan'. Panelis yang dilibatkan Rektor Universitas Tidar Sugiyarto, Rektor Universitas Muhammadiyah Magelang Lilik Andriyani, dan Direktur Magelang Ekspres Jaka Surasa.",
      category: "Politik",
    },
    {
      id: "7",
      name: "BPJS Kesehatan Diprediksi Defisit Rp 20 Triliun, Dirut Ungkap Penyebabnya",
      image:
        "https://asset.kompas.com/crops/boWLX78pkR-0p-mbcHriytmOKtU=/0x0:780x520/1200x800/data/photo/2024/11/04/67288dbf638c5.jpg",
      description:
        "JAKARTA, KOMPAS.com - Badan Penyelenggara Jaminan Sosial (BPJS) Kesehatan diprediksi mengalami defisit sekitar Rp 20 triliun pada 2024. Direktur Utama BPJS Kesehatan Ali Ghufron Mukti mengatakan, defisit BPJS Kesehatan diakibatkan naiknya utilitas. “Yang bikin defisit tentu utilisasi, karena utilisasi itu meningkat. Dulu cuma 252.000 sehari, sekarang 1,7 juta sehari. Melompatnya berapa? Kalau utilisasi kami kan harus bayar,” kata Ali Ghufron usai Rapat Dengar Pendapat dengan Komisi IX DPR RI di Kompleks Parlemen, Jakarta Pusat, Rabu (13/11/2024).",
      category: "Politik",
    },
    {
      id: "8",
      name: "Kecelakaan Motor di Magelang: Ibu Hamil dan Anak Balita Jatuh ke Jurang Sedalam 20 Meter",
      image:
        "https://asset.kompas.com/crops/N728J99Ug-E-4nxT-XrmxW5tb_c=/0x0:1200x800/750x500/data/photo/2024/06/13/666ac769e0c33.jpg",
      description:
        "MAGELANG, KOMPAS.com - Seorang ibu hamil berusia 35 tahun dan anak balitanya mengalami kecelakaan lalu lintas setelah sepeda motor yang mereka kendarai jatuh ke jurang di Kecamatan Bandongan, Kabupaten Magelang, Jawa Tengah, pada Rabu (13/11/2024) sekitar pukul 11.30 WIB. Kanit Gakkum Satlantas Polres Magelang Kota, Ipda Beny Setyo Prawoto, menjelaskan bahwa kecelakaan tersebut bermula saat sepeda motor Honda Beat dengan nomor polisi AA 4063 OK yang dikendarai oleh perempuan berinisial LI hendak menyalip sepeda motor lain.",
      category: "Insiden",
    },
    {
      id: "9",
      name: "2 Warga Banten Jadi Tersangka Usai Jual 20 Sapi Bantuan Kementerian Pertanian",
      image:
        "https://asset.kompas.com/crops/a5k41DWsMWUyLUxkRXzFAbR5OQM=/0x2:1920x1282/1200x800/data/photo/2024/03/05/65e6e19e868b3.jpg",
      description:
        "SERANG, KOMPAS.com - Polres Serang menetapkan JK (57) dan SW (52), dua warga Tirtayasa, Kabupaten Serang, Banten, sebagai tersangka kasus korupsi bantuan ternak sapi dari Kementerian Pertanian dengan kerugian keuangan negara Rp 300 juta. Keduanya menjual 20 ekor sapi bantuan pemerintah tahun 2023. 'Sekira bulan Agustus sampai September, JK dan SW menjual 19 ekor sapi dengan harga Rp 7 juta per ekor,' kata Kapolres Serang AKBP Condro Sasongko melalui keterangan tertulis, Rabu (13/11/2024).",
      category: "Politik",
    },
    {
      id: "10",
      name: "Lewat Entrance Musik, Pria Ini Berhasil Menebak 20 Pegulat WWE dalam 1 Menit, Pecahkan Rekor",
      image:
        "https://asset.kompas.com/crops/GzojI4oGH10trVWF6X7tKAmYqGw=/176x0:902x484/1200x800/data/photo/2020/05/26/5eccb45ae17ba.jpg",
      description:
        "NEWCASTLE, KOMPAS.com - Ross Tweddell, seorang YouTuber asal Newcastle dan penggemar berat gulat profesional, mencetak sejarah baru dengan memecahkan rekor dunia Guinness untuk kategori 'Most WWE Wrestlers Identified by Entrance Music in One Minute'. Tweddell berhasil menebak 20 pegulat dalam satu menit, mengalahkan rekor sebelumnya dengan dua pegulat. Ini berarti dia hanya mendengar potongan kecil audio entrance music-nya, lalu berhasil menebak siapa pegulatnya.",
      category: "Insiden",
    },
    {
      id: "11",
      name: "Israel Serang Berbagai Wilayah Gaza",
      image:
        "https://asset.kompas.com/crops/_UsuYyw5cVcHzYPqJRcZBMCc-QA=/0x0:2000x1333/1200x800/data/photo/2024/11/04/672829f49e52a.jpg",
      description:
        "GAZA, KOMPAS.com - Badan Pertahanan Sipil Gaza pada Minggu (17/11/2024) melaporkan, serangan udara Israel menewaskan sedikitnya 20 orang, termasuk empat perempuan dan tiga anak-anak, di sejumlah wilayah Gaza. Serangan terbaru yang paling mematikan terjadi di kamp pengungsi Bureij di Gaza tengah.",
      category: "Insiden",
    },
    {
      id: "12",
      name: "COP29, RI Dapat Pendanaan Rp 20 Triliun untuk Kembangkan Listrik Hijau.",
      image:
        "https://asset.kompas.com/crops/UM1MXxZ8jBBC9_SIMXJNCF7u45U=/184x0:1728x1029/1200x800/data/photo/2024/09/23/66f102df707e0.jpg",
      description:
        "KOMPAS.com - Pemerintah Indonesia mendapatkan pendaan hijau sebesar 1,2 miliar euro atau setara Rp 20 triliun dalam forum Conference of the Parties (COP29) di Baku, Azerbaijan, Rabu (13/11). Dana tersebut didapat dari bank Kreditanstalt für Wiederaufbau (KfW) untuk mengembangkan infrastruktur kelistrikan hijau, yakni pembangkit listrik tenaga air (PLTA) Pumped Storage dan transmisi penghubung ke pembangkit hijau.",
      category: "Lingkungan",
    },
    {
      id: "13",
      name: "UMP Jateng Diumumkan 20 November, Pj Nana Minta Buruh dan Pengusaha Tidak Berselisih.",
      image:
        "https://asset.kompas.com/crops/-5IgOD8tyW9mk9kxAOj2yUAU7zg=/0x0:0x0/1200x800/data/photo/2024/11/15/67373d5239d48.jpg",
      description:
        "SEMARANG, KOMPAS.com - Pemerintah Provinsi Jawa Tengah bakal mengumumkan Upah Minimum Provinsi (UMP) 2025 pada 20 November 2024. Pj Gubernur Jateng Nana Sudjana meminta agar pengusaha dan buruh tidak berselisih mengenai ketetapan UMP dan mengikuti kebijakan perumusan dari pemerintah pusat. Hal itu disampaikan Nana saat memimpin Rapat Forum Koordinasi Pimpinan Daerah (Forkopimda) di Kantor BPSDMD Jateng, Jumat (15/11/2024).",
      category: "Politik",
    },
    {
      id: "14",
      name: "Jadi Green Port Pertama di Indonesia, Container Yard Pelabuhan Batu Ampar Tembus 20 Persen",
      image:
        "https://asset.kompas.com/crops/aJ2BcRTRUBWWVvjHGgrcbfOZg34=/400x0:2560x1440/1200x800/data/photo/2024/11/15/673687ca3ab31.jpg",
      description:
        "JAKARTA, KOMPAS.com - Pembangunan Container Yard (CY) dan infrastruktur penunjang Terminal Peti Kemas Pelabuhan Batu Ampar, Batam, Kepulauan Riau, menunjukkan progres signifikan. Sejak groundbreaking pada Mei 2024 Hingga November 2024, perkembangan fisiknya telah mencapai angka 20 persen atau deviasi 3 persen lebih cepat dari target dengan serapan dana sekitar Rp 78 miliar.",
      category: "Lingkungan",
    },
    {
      id: "15",
      name: "Mendikdasmen Bakal Revisi Dua UU untuk Lindungi Guru dan Dosen.",
      image:
        "https://asset.kompas.com/crops/vTcAGlrN3VIJNdVISESvc1B80Jg=/0x0:0x0/1200x800/data/photo/2024/11/14/6734e0b87eada.jpg",
      description:
        "KOMPAS.com - Menteri Pendidikan Dasar dan Menengah (Mendikdasmen), Abdul Mu'ti menyebut akan merevisi dua Undang-Undang (UU) terkait siswa, guru dan dosen. Kedua UU itu ialah Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional dan Undang-Undang Nomor 14 Tahun 2005 tentang Guru dan Dosen. Kedua undang-undang ini dianggap perlu diperbarui untuk memberikan perlindungan lebih bagi guru, baik dari sisi profesi maupun keamanan.",
      category: "Politik",
    },
    {
      id: "16",
      name: "Debat Pilkada Kota Magelang Bahas RTLH, “Aman” Janjikan Bantuan Rp 25 Juta, “Damai” Siapkan Rp 20 Juta",
      image:
        "https://asset.kompas.com/crops/3ipkxv-EPJmXAkCRe4btqBfbDUk=/36x68:961x530/1200x800/data/photo/2024/11/14/6735366fafa7e.jpg",
      description:
        "MAGELANG, KOMPAS.com - Debat penutup pemilihan wali kota dan wakil wali kota Magelang, Jawa Tengah, digelar di Atria Hotel Magelang, Rabu (13/11/2024) malam. Debat ini mengangkat tema 'Transformasi Kota Magelang Menuju Kota Modern dan Berkelanjutan'. Panelis yang dilibatkan Rektor Universitas Tidar Sugiyarto, Rektor Universitas Muhammadiyah Magelang Lilik Andriyani, dan Direktur Magelang Ekspres Jaka Surasa.",
      category: "Politik",
    },
    {
      id: "17",
      name: "BPJS Kesehatan Diprediksi Defisit Rp 20 Triliun, Dirut Ungkap Penyebabnya",
      image:
        "https://asset.kompas.com/crops/boWLX78pkR-0p-mbcHriytmOKtU=/0x0:780x520/1200x800/data/photo/2024/11/04/67288dbf638c5.jpg",
      description:
        "JAKARTA, KOMPAS.com - Badan Penyelenggara Jaminan Sosial (BPJS) Kesehatan diprediksi mengalami defisit sekitar Rp 20 triliun pada 2024. Direktur Utama BPJS Kesehatan Ali Ghufron Mukti mengatakan, defisit BPJS Kesehatan diakibatkan naiknya utilitas. “Yang bikin defisit tentu utilisasi, karena utilisasi itu meningkat. Dulu cuma 252.000 sehari, sekarang 1,7 juta sehari. Melompatnya berapa? Kalau utilisasi kami kan harus bayar,” kata Ali Ghufron usai Rapat Dengar Pendapat dengan Komisi IX DPR RI di Kompleks Parlemen, Jakarta Pusat, Rabu (13/11/2024).",
      category: "Politik",
    },
    {
      id: "18",
      name: "Kecelakaan Motor di Magelang: Ibu Hamil dan Anak Balita Jatuh ke Jurang Sedalam 20 Meter",
      image:
        "https://asset.kompas.com/crops/N728J99Ug-E-4nxT-XrmxW5tb_c=/0x0:1200x800/750x500/data/photo/2024/06/13/666ac769e0c33.jpg",
      description:
        "MAGELANG, KOMPAS.com - Seorang ibu hamil berusia 35 tahun dan anak balitanya mengalami kecelakaan lalu lintas setelah sepeda motor yang mereka kendarai jatuh ke jurang di Kecamatan Bandongan, Kabupaten Magelang, Jawa Tengah, pada Rabu (13/11/2024) sekitar pukul 11.30 WIB. Kanit Gakkum Satlantas Polres Magelang Kota, Ipda Beny Setyo Prawoto, menjelaskan bahwa kecelakaan tersebut bermula saat sepeda motor Honda Beat dengan nomor polisi AA 4063 OK yang dikendarai oleh perempuan berinisial LI hendak menyalip sepeda motor lain.",
      category: "Insiden",
    },
    {
      id: "19",
      name: "2 Warga Banten Jadi Tersangka Usai Jual 20 Sapi Bantuan Kementerian Pertanian",
      image:
        "https://asset.kompas.com/crops/a5k41DWsMWUyLUxkRXzFAbR5OQM=/0x2:1920x1282/1200x800/data/photo/2024/03/05/65e6e19e868b3.jpg",
      description:
        "SERANG, KOMPAS.com - Polres Serang menetapkan JK (57) dan SW (52), dua warga Tirtayasa, Kabupaten Serang, Banten, sebagai tersangka kasus korupsi bantuan ternak sapi dari Kementerian Pertanian dengan kerugian keuangan negara Rp 300 juta. Keduanya menjual 20 ekor sapi bantuan pemerintah tahun 2023. 'Sekira bulan Agustus sampai September, JK dan SW menjual 19 ekor sapi dengan harga Rp 7 juta per ekor,' kata Kapolres Serang AKBP Condro Sasongko melalui keterangan tertulis, Rabu (13/11/2024).",
      category: "Politik",
    },
    {
      id: "20",
      name: "Lewat Entrance Musik, Pria Ini Berhasil Menebak 20 Pegulat WWE dalam 1 Menit, Pecahkan Rekor",
      image:
        "https://asset.kompas.com/crops/GzojI4oGH10trVWF6X7tKAmYqGw=/176x0:902x484/1200x800/data/photo/2020/05/26/5eccb45ae17ba.jpg",
      description:
        "NEWCASTLE, KOMPAS.com - Ross Tweddell, seorang YouTuber asal Newcastle dan penggemar berat gulat profesional, mencetak sejarah baru dengan memecahkan rekor dunia Guinness untuk kategori 'Most WWE Wrestlers Identified by Entrance Music in One Minute'. Tweddell berhasil menebak 20 pegulat dalam satu menit, mengalahkan rekor sebelumnya dengan dua pegulat. Ini berarti dia hanya mendengar potongan kecil audio entrance music-nya, lalu berhasil menebak siapa pegulatnya.",
      category: "Insiden",
    },
  ];
    const categories = ["All", "Insiden", "Lingkungan", "Politik"]; // Kategori berita

  // Filter dan pencarian
  const filteredData = data.filter(
    (item) =>
      (selectedCategory === "All" || selectedCategory === "" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Cari berita..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categorySelected,
            ]}
            onPress={() =>
              setSelectedCategory(selectedCategory === category ? "" : category)
            }
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextSelected,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{
            pathname:"./detail",
            params: {
              detail:item.name
            }
          }}>
            <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description} numberOfLines={3}>
                {item.description}
              </Text>
            </View>
            </View>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
  },
  categorySelected: {
    backgroundColor: "#007BFF",
    borderColor: "#007BFF",
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
  },
  categoryTextSelected: {
    color: "#fff",
  },
  card: {
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});
