import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Box, Button, NativeBaseProvider, Text } from "native-base";
import Header from "./components/Header";
import InputBar from "./components/InputBar";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: taskInput }]);
      setTaskInput("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <NativeBaseProvider>
      <View>
        <Header title="TODO APP" />
        <InputBar
          textChange={taskInput}
          setTextChange={setTaskInput}
          addTask={addTask}
        />
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"90%"}
                height={"auto"}
                bg={"blue.100"}
                mx={"auto"}
                py={2}
                px={4}
                rounded={"lg"}
                my={"16px"}
                shadow={"5"}
              >
                <Text
                  fontFamily={"heading"}
                  fontSize={"16px"}
                  color={"blue"}
                  fontWeight={"semibold"}
                >
                  {item.text}
                </Text>
                <Button size={"sm"}
                  backgroundColor={"blue.900"}
                  color={"blue.800"}
                  onPress={() => deleteTask(item.id)}
                >
                  Delete
                </Button>
              </Box>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </NativeBaseProvider>
  );
}
