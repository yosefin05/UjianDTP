import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import Icon from "react-native-vector-icons/FontAwesome"; // Pastikan modul ini diinstal

export default function Profile() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Gambar logo */}
      <Text style={styles.title}>TOP NEWS</Text>      
      <Image source={require("../assets/splash.png")} style={styles.logo} />
      <Text style={styles.description}>
        Selamat datang di Top News, kami menyediakan berita terkini dari sumber terpercaya untuk anda. Berika yang faktual dan aktual tersedia dan siap dibaca
      </Text>
      <Text style={styles.contact}>Hubungi Kami: halohalohalo05@topnews.com</Text>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}> 
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => router.push('./Home')} // Ganti sesuai router
        >
          <Icon name="home" size={30} color="#007BFF" />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer} // Ganti sesuai router
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingBottom: 80, // Tambahkan ruang untuk bottom bar
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
  contact: {
    fontSize: 14,
    color: "#888",
    marginTop: 20,
    textAlign: "center",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 12,
    color: "#007BFF",
    marginTop: 4,
  },
});
