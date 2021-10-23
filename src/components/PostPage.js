import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  SafeAreaViewBase,
  Dimensions,
} from "react-native";
import {
  NativeBaseProvider,
  View,
  Text,
  Button,
  Container,
  HStack,
  VStack,
  Heading,
  Icon,
  Box,
  Divider,
} from "native-base";
import { signout } from "../redux/actions";

import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/core";

function PostPage({ username, date, text }) {
  return (
    <SafeAreaView>
      <Box style={{ margin: 10 }} bg="primary.400" rounded="lg" shadow={3}>
        <VStack space={2} style={{ padding: 20 }}>
          <HStack justifyContent="space-between">
            <Text style={{ fontSize: 20 }}>{username}</Text>
            <Text>{date}</Text>
          </HStack>
          <Divider />
          <View>
            <Text style={{ width: Dimensions.get("window").width * 0.72 }}>
              {text}
            </Text>
          </View>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

export default PostPage;
