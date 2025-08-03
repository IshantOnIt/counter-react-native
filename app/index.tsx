import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Pressable onPress={increment}>
            <MaterialIcons name="add" size={32} color="#333" />
          </Pressable>
        </View>
        <View style={styles.button}>
          <Pressable onPress={decrement}>
            <MaterialIcons name="remove" size={32} color="#333" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 96,
    fontWeight: "bold",
    textAlign: "center",
    color: "#eee",
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#eee",
    padding: 4,
    borderRadius: 4,
  },
});
