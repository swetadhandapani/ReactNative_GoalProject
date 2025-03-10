import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ text, onDelete }: { text: string; onDelete: () => void }) {
  return (

    <View style={styles.goalItem}>
      <Pressable
        onPress={onDelete}
        //android_ripple={{ color: "#210466" }}   //only for android,not for iOS
        style={({ pressed }) => pressed && styles.pressedItem }
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 14,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    margin: 8,
    padding: 3
  },
  pressedItem:{
    opacity:0.5,
  }
});
