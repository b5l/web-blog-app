import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  pageContainer: {
    backgroundColor: "#CACACA",
    height: "100%",
  },
  button: {
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 30,
    borderRadius: 50,
  },
  reverseButton: {
    position: "absolute",
    left: 0,
    bottom: 0,
    margin: 30,
    borderRadius: 50,
  },
  boxContainer: {
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#B65EFF",
    maxW: "100%",
    backgroundColor: "white",
  },
});
