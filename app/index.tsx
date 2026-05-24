import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  // หน่วงเวลาหน้าจอ 2.5 วินาที
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* ส่วนเนื้อหาหลักกลางจอ */}
      <View style={styles.content}>
        <Text style={styles.title}>Money Tracking</Text>
        <Text style={styles.subtitle}>รายรับรายจ่ายของฉัน</Text>
      </View>

      {/* ส่วนแสดงข้อมูลนักศึกษา */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Created by 6825D10028</Text>
        <Text style={styles.studentInfo}>- SAU -</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004d40",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  title: {
    fontFamily: "Kanit_700Bold",
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontFamily: "Kanit_700Bold",
    color: "#ffffff",
    fontSize: 16,
    marginTop: 10,
  },
  footer: {
    position: "absolute",
    bottom: 50,
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Kanit_700Bold",
    fontSize: 13,
    color: "#96f8ff",
  },
  studentInfo: {
    fontFamily: "Kanit_700Bold",
    fontSize: 13,
    color: "#96f8ff",
    marginTop: 6,
  },
});
