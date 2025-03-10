import { Button, View, TextInput, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

interface GoalInputProps {
  visible: boolean;
  onAddGoal: (goalText: string) => void;
  onCancel: () => void;
}

export default function GoalInput({ visible, onAddGoal, onCancel }: GoalInputProps) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(text: string) {
    setGoalText(text);
  }

  function addGoalHandler() {
    if (goalText.trim().length === 0) return; // Prevent adding empty goals
    onAddGoal(goalText);
    setGoalText(""); // Clear input field
    onCancel(); // Close modal
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/Goal.png")} />
        <TextInput
          value={goalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Type your goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={onCancel} title="Cancel" color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" color="#5e0acc" />
          </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBlockColor: "#cccccc",
    borderBottomWidth: 1,
    padding: 16,
    backgroundColor: "#1A0037",
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "100%",
    padding: 8,
    marginBottom: 16,
    borderRadius: 6,
    backgroundColor: "#e4d0ff"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});
