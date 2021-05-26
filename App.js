import React, { useState } from "react";
import { Text, View, ScrollView, FlatList } from "react-native";
import Header from "./components/Header";
import styles from "./styles/globalStyles";

export default function App() {
  let [goals, setGoals] = useState([]);
  const addGoal = (goal) => {
    setGoals([goal, ...goals]);
  };
  return (
    <View style={styles.container}>
      <Header addGoal={addGoal} />

      <FlatList
        data={goals}
        keyExtractor={(item) => `${Math.random(2, 9999)}`}
        renderItem={({ item }) => {
          return <Text style={styles.goal}>{item}</Text>;
        }}
      />
    </View>
  );
}
