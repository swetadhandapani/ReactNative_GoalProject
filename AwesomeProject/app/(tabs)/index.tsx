import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [goals, setGoals] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(goalText: string) {
    setGoals((currentGoals) => [...currentGoals, goalText]);
  }

  function deleteItem(index: number) {
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));
  }

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function cancelGoalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#A070D6" onPress={startAddGoalHandler} />
        <GoalInput visible={isModalVisible} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(itemData) => (
              <GoalItem text={itemData.item} onDelete={() => deleteItem(itemData.index)} />
            )}
          />
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1A0037",
  },
  goalsContainer: {
    flex: 4,
  },
});
