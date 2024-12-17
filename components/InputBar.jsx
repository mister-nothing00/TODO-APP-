import React from "react";
import { View } from "react-native";
import { Box, Button, Input, HStack, Text } from "native-base";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function InputBar({textChange, setTextChange, addTask}) {
  return (
    <>
      <View>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          alignItems={"center"}
          my={10}
          width={"100%"}
          mx={"auto"}
          px={2}
        >
          <Input
            variant="underlined"
            rounded={"xs"}
            width={"60%"}
            placeholder="Scrivi qualcosa"
            value={textChange}
            onChangeText={setTextChange}
          />
          <Button
            backgroundColor={"gray.50"}
            py={2}
            px={6}
            rounded={"3xl"}
            shadow={"8"}
            onPress={addTask}
          >
            <HStack justifyContent="center" alignItems="center" space={2}>
              <Text color={"gray.400"}>ADD</Text>
              <AntDesign name="pluscircleo" size={18} color="gray" />
            </HStack>
          </Button>
        </Box>
      </View>
    </>
  );
}
