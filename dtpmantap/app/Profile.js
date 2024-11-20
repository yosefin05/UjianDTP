import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Menggunakan require untuk gambar lokal */}
      <Image source={require("../assets/splash.png")} style={styles.logo} />
      <Text style={styles.title}>Top News</Text>
      <Text style={styles.description}>
        Selamat datang di Top News, platform yang menyediakan berita terkini dan
        terpercaya dari berbagai sumber. Kami berkomitmen untuk memberikan
        informasi yang akurat dan relevan untuk Anda.
      </Text>
      <Text style={styles.contact}>Hubungi kami: contact@topnews.com</Text>
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
});
