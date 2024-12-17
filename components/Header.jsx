import React from "react";
import { View } from "react-native";
import { Box, Heading } from "native-base";

export default function Header({ title }) {
  return (
    <>
      <View>
        <Box
          backgroundColor={"gray.100"}
          height={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          pt={30}
          pb={5}
        >
          <Heading
            fontFamily={"heading"}
            my={5}
            fontSize={"2xl"}
            color={"blue.800"}
          >
            {title}
          </Heading>
        </Box>
      </View>
    </>
  );
}
