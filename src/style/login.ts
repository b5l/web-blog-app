import { StyleSheet } from "react-native";

export const loginStyle = StyleSheet.create({
  loginContainer: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 30,
    paddingBottom: 30,
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
