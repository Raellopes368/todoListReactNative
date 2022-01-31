import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

export default function TodoItem({ text, onClick }) {
  return (
    <View style={styles.todo}>
      <Text style={styles.text}>{text}</Text>
      <Button onClick={onClick} />
    </View>
  );
}


const styles = StyleSheet.create({
  todo: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#fff8",
    borderStyle: "solid",
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});