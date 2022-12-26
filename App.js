import { View, StyleSheet } from "react-native";
import { Home } from "./src/pages/Home";

export default function App() {
  return (
    <View style={stylesApp.container}>
      <Home />
    </View>
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
}) 
