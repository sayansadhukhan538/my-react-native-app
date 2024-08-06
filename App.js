import { SafeAreaView, View, StyleSheet, Platform } from "react-native";
import TabScreen from "./src/screen/TabScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TabScreen />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#2089dc",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  container: {
    flex: 1,
  },
});
