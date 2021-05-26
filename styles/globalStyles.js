import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    flex: 2,
    fontSize: 20,
    padding: 8,
    fontWeight: "bold",
  },
  inputHolder: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  goal: {
    backgroundColor: "teal",
    color: "#fff",
    marginTop: 8,
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 8,
  },
});

export default styles;
