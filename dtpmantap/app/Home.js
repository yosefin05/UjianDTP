import React, { useState } from "react";
import { Link } from "expo-router";
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from "react-native";

export default function Home() {
  const router = useRouter();
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
      name: "20 Kecamatan di Banyumas Rawan Banjir dan Longsor, Mana Saja?",
      image:
        "https://asset.kompas.com/crops/QlDgelMDamat4jpG8_f9-K0Pwrk=/0x0:0x0/1200x800/data/photo/2024/11/13/67347792b144d.jpg",     
      description:
        "BANYUMAS, KOMPAS.com - Memasuki musim hujan, ratusan desa di Kabupaten Banyumas, Jawa Tengah, bersiap menghadapi potensi bencana alam. Berdasarkan data dari Badan Penanggulangan Bencana Daerah (BPBD) Banyumas, terdapat 275 desa yang rawan banjir dan 173 desa yang rawan tanah longsor.'Wilayah rawan longsor tersebar di 21 kecamatan dan rawan banjir di 22 kecamatan,' ungkap Kepala BPBD Banyumas, Budi Nugroho, usai apel kesiapsiagaan bencana di Kodim 0701/Banyumas, Rabu (13/11/2024).",
      category: "Insiden",
    },
    {
      id: "12",
      name: "Koreksi Budiman Sudjatmiko, Mensos Sebut 20 Persen Data Penerima Bansos Bukan Salah Sasaran",
      image:
        "https://asset.kompas.com/crops/pdfST_12ARc6TIQVqjxb618rfOo=/532x0:3910x2252/1200x800/data/photo/2024/11/11/6731fdeff032c.jpeg",
      description:
          "JAKARTA, KOMPAS.com - Menteri Sosial RI, Saifullah Yusuf atau Gus Ipul mengoreksi Kepala Badan Percepatan Pengentasan Kemiskinan (BP Taskin) Budiman Sudjatmiko yang menyebut ada 20 persen data penerima bantuan sosial (bansos) yang salah sasaran. Dia menyebut, data itu bukan salah sasaran, tetapi ada bias yang membuat data tersebut bisa berubah-ubah. Misalnya penerima bansos yang meninggal dunia. 'Bukan tidak tepat sasaran, jadi ya ada biasnya lah karena kan ada yang meninggal, kadang belum dilaporkan, ada yang pindah tempat, sehingga bantuannya tetap ke situ kan juga gak boleh,' ujarnya saat ditemui di Bambu Apus, Jakarta Timur, Selasa (12/11/2024).",
      category: "Politik",
    },
    {
      id: "13",
      name: "Ara Pastikan Renovasi Rumah Sempit Nenek Hasna Beres 20 Februari 2025",
      image:
        "https://asset.kompas.com/crops/f7oVytc3ID8zCNPtrj0sjhsLItw=/174x0:1152x652/1200x800/data/photo/2024/09/25/66f3be9d8c690.jpg",
      description:
        "JAKARTA, KOMPAS.com - Menteri Perumahan dan Kawasan Permukiman (PKP) Maruarar Sirait memastikan renovasi rumah Hasna (62) di Kelurahan Johar Baru, Kecamatan Tanah Tinggi, Kota Administrasi Jakarta Pusat selesai dalam 2,5 bulan ke depan. Menteri yang karib disapa Ara tersebut memperkirakan, pembangunannya ini selesai pada 20 Februari 2025. 'Doakan lancar bulan Februari 20 (2025), mudah-mudahan udah jadi,' tutur Ara saat meninjau rumah Nenek Hasna di Jakarta, Senin (11/11/2024).",
      category: "insiden",
    },
    {
      id: "14",
      name: "Jutaan Rokok Ilegal Disita di Surabaya, Total Kerugian Negara Capai Rp 20 Miliar",
      image:
        "https://asset.kompas.com/crops/NfjHpk2_FczjlNf7j9nuXxriKZk=/0x0:0x0/1200x800/data/photo/2024/11/11/67320e024d089.jpeg",
      description:
        "SURABAYA, KOMPAS.com - Aparat kepolisian menyita jutaan batang rokok ilegal ketika melakukan operasi di wilayah Surabaya bagian utara dalam waktu tiga bulan. Total kerugian negara ditaksir mencapai Rp 20 miliar. Kapolres Pelabuhan Tanjung Perak, AKBP William Cornelis Tannasale mengatakan, total ada 7.677.400 batang rokok ilegal yang disita saat operasi periode September sampai November 2024.'Kami berhasil mengamankan 644 karton berisi 43.645 slop rokok berbagai merek yang tidak dilengkapi pita cukai,' kata William ketika berada di Mapolres Pelabuhan Tanjung Perak, Senin (11/11/2024).",
      category: "Insiden",
    },
    {
      id: "15",
      name: "Beasiswa S1-S2 bagi Mahasiswa UGM, Ada Bantuan Pendidikan Rp 20 Juta",
      image:
        "https://asset.kompas.com/crops/xbZ-YYKO5NM9gmTCDRFvzLlY7t4=/89x0:839x500/1200x800/data/photo/2023/10/03/651b7e78dcce3.jpg",
      description:
        "KOMPAS.com - Mahasiswa S1 dan S2 UGM (Universitas Gadjah Mada), ada beasiswa dari Kabupaten Kuantan Singingi yang bisa kamu coba. Beasiswa dari Kabupaten Kuantan Singingi memberikan besaran yang berbeda bagi mahasiswa S1 dan S2. Dilansir dari laman Direktorat Kemahasiswaan UGM, beasiswa Kabupaten Kuantan Singingi memberikan bantuan biaya pendidikan untuk jenjang S1 sebesar Rp 15 juta. Sedangkan bantuan biaya pendidikan untuk jenjang S2 sebesar Rp 20 juta.",
      category: "Insiden",
    },
    {
      id: "16",
      name: "20 PTN Terbaik Indonesia Versi QS AUR 2025, UI dan Unair Unggul",
      image:
        "https://asset.kompas.com/crops/_Pdq38A4k-MY9mJgwen5Q0Lszsc=/171x0:750x386/1200x800/data/photo/2024/05/06/66386c4ea6e86.jpg",
      description:
        "KOMPAS.com - Sebanyak 71 kampus di Indonesia masuk dalam pemeringkatan kampus terbaik versi Quacquarelli Symonds Asia University Rankings (QS AUR) 2025. QS AUR 2025 memuat daftar perguruan tinggi negeri (PTN) dan perguruan tinggi swasta (PTS) terbaik di Asia. Termasuk di Indonesia. Sementara dari hasil PTN terbaik di Indonesia, peringkat pertama terbaik di Indonesia versi QS AUR 2025 adalah Universitas Indonesia (UI). Kemudian, posisi kedua dipegang oleh Universitas Airlangga (Unair).",
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
      name: "Kisah Aktivis Perlindungan Anak di Sumbawa, 20 Tahun Hadapi Ragam Tantangan Pendampingan Kekerasan Seksual",
      image:
        "https://asset.kompas.com/crops/Jpef0EPduhB2C2c3DnBxY3wOi2g=/0x0:0x0/1200x800/data/photo/2024/11/06/672b400fece41.jpg",
      description:
        "KOMPAS.com - Selama 20 tahun menjadi aktivis yang mendampingi kasus kekerasan seksual terhadap anak adalah perjuangan yang tak mudah bagi Fatriatulrahma. Sebagai Sekretaris Lembaga Perlindungan Anak (LPA) Kabupaten Sumbawa, Nusa Tenggara Barat (NTB), perempuan berusia 48 tahun ini masih terus mendampingi anak yang berhadapan dengan hukum sebagai korban maupun pelaku dan saksi. Sosok yang akrab disapa Atul ini mengatakan, menjadi pendamping korban kekerasan seksual adalah pekerjaan berat.",
      category: "Politik",
    },
    {
      id: "19",
      name: "Tria Pastikan Kondisinya Telah Bugar Jelang Konser 20 Tahun The Changcuters",
      image:
        "https://asset.kompas.com/crops/m58ppwAMFYbbnPgs2AHP-QIcr8w=/0x0:0x0/1200x800/data/photo/2024/11/05/6729f041ed556.jpeg",
      description:
        "JAKARTA, KOMPAS.com - Penyanyi Mohammad Tria Ramadhani atau lebih dikenal Tria memastikan kondisi kesehatannya prima jelang Konser 20 Tahun Tangguh The Changcuters. Diketahui, The Changcuters akan menggelar konser akbar 2 dekade berkiprah di industri musik Tanah Air yang diselenggarakan di Ecovention Concert Hall, Ancol, Jakarta Utara pada 7 Desember 2024. Seolah memastikan kondisinya prima, Tria mengaku bisa langsung melakukan push up.",
      category: "Insiden",
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
            {/* Bottom Bar with Home and Profile Icons */}
            <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconContainer}
          onPress={()=> router.push('./Home')}
        >
          <Icon name="home" size={30} color="#007BFF" />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => router.push('./Profile')}  // Navigate to ProfileScreen
        >
          <Icon name="user" size={30} color="#007BFF" />
          <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>
      </View>
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
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Warna latar belakang bottom bar
    borderTopWidth: 1,
    borderTopColor: '#ddd', // Warna garis atas
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 12,
    color: '#007BFF',
    marginTop: 4, // Jarak antara ikon dan teks
  },
});
