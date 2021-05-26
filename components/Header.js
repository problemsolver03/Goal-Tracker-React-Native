import React, { useState } from "react";
import { TextInput, View, Button } from "react-native";
import styles from "../styles/globalStyles";

const Header = ({ addGoal }) => {
  let [goal, setGoalText] = useState("");
  return (
    <View style={styles.inputHolder}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => {
          setGoalText(value);
        }}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          addGoal(goal);
        }}
      ></Button>
    </View>
  );
};

export default Header;
