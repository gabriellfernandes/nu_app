import { StyleSheet, StatusBar } from "react-native";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export const stylesHeader = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: "rgba(255,255,255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});
