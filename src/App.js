import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import TodoItem from "./components/TodoItem";

let id = 0;
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo() {
    if (todo.trim().length) {
      setTodos([...todos, { text: todo, id }]);
      setTodo("");
      id += 1;
    } else alert("Informe uma tarefa");
  }

  function removeTodo(idRemoved) {
    const todoRest = todos.filter((todoItem) => todoItem.id !== idRemoved);
    setTodos(todoRest);
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent />
      <View style={styles.row}>
        <TextInput
          value={todo}
          onChangeText={(value) => setTodo(value)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={createTodo}>
          <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll}>
        {todos.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            text={todoItem.text}
            onClick={() => removeTodo(todoItem.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#069",
    alignItems: "center",
    paddingTop: 90,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    width: 220,
    height: 45,
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 5,
    color: "#fff",
    paddingLeft: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
    height: 50,
  },
  button: {
    backgroundColor: "#f00",
    borderRadius: 5,
    padding: 12,
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
  },
  scroll: {
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: 50,
  },
});
