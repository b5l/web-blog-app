import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B65EFF",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "80%",
    minHeight: "30%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 30,
  },
  loginButton: {
    borderRadius: 10,
    width: "75%",
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontWeight: "200",
  },
});
