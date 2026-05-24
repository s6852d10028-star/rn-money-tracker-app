import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* ส่วนแสดงรูปภาพ */}
      <View style={styles.imageSection}>
        <View style={styles.circleBackground}>
          <Image
            source={require("@/assets/images/welcome-character.png")}
            style={styles.characterImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* ส่วนข้อความ */}
      <View style={styles.textSection}>
        <Text style={styles.headlineText}>บันทึก{"\n"}รายรับรายจ่าย</Text>
      </View>

      {/* ปุ่มกดเริ่มต้นใช้งาน */}
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text style={styles.actionButtonText}>เริ่มใช้งานแอปพลิเคชัน</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  imageSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  circleBackground: {
    width: 260,
    height: 260,
    backgroundColor: "#f0fdfa",
    borderRadius: 130,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    elevation: 5,
  },
  characterImage: {
    width: "85%",
    height: "85%",
  },
  textSection: {
    alignItems: "center",
    marginVertical: 30,
  },
  headlineText: {
    fontFamily: "Kanit_700Bold",
    fontSize: 28,
    color: "#115e52",
    textAlign: "center",
    lineHeight: 40,
  },
  buttonSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: "#4c9287",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 35,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  actionButtonText: {
    fontFamily: "Kanit_700Bold",
    color: "#ffffff",
    fontSize: 18,
  },
});
