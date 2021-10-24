import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Linking,
} from "react-native";
import {
  NativeBaseProvider,
  View,
  Text,
  Button,
  List,
  VStack,
  HStack,
  Heading,
  Divider,
  Avatar,
  Icon,
  Box,
  TextArea,
} from "native-base";
import { testing } from "../redux/actions";
import { connect } from "react-redux";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Contact from "../components/Contact";
import { Header } from "react-native/Libraries/NewAppScreen";
import { useTheme } from "styled-components";
import { Ionicons, AntDesign } from "@expo/vector-icons";

function Screen1({ testingAction }) {
  const { colors } = useTheme();
  const [text, setText] = React.useState("");
  const dummyData = [
    {
      title: "title1",
      username: "username1",
      text: "text1",
      upvotes: -4,
      date: 1635017815494,
      icon: "twitter",
      link: "https://twitter.com",
      description: "dfsdfdsf",
    },
    {
      title: "title2",
      username: "username2",
      text:
        "text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
      upvotes: 2,
      date: 1635017815494,
      icon: "facebook-square",
      link: "https://www.facebook.com/",
      description: "dsff0w9gwjweoig",
    },
    {
      title: "title3",
      username: "username3",
      text: "text3",
      upvotes: 24,
      date: 1635017015494,
      icon: "linkedin-square",
      link: "https://www.google.com/",
      description: "w0909ugu320fjiwe8938r",
    },
    {
      title: "title1",
      username: "username1",
      text: "text1",
      upvotes: -4,
      date: 1630007815494,
      icon: "mail",
      link: "https://www.honesttea.com/",
      description: "vdnknkvndksjv",
    },
    {
      title: "title2",
      username: "username2",
      text:
        "text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
      upvotes: 2,
      date: 1635010015424,
      icon: "instagram",
      link: "https://www.instagram.com/",
      description: "vdnknkvndksjv",
    },
    {
      title: "title3",
      username: "username3",
      text: "text3",
      upvotes: 24,
      date: 1635000015494,
      icon: "amazon",
      link: "https://www.amazon.com/",
      description: "vdnknkvndksjv",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Box style={{ margin: 10 }} shadow={8}>
          <HStack space={1}>
            <VStack justifyContent="flex-start" alignItems="center">
              <TouchableOpacity>
                <Icon as={Ionicons} name="arrow-up" />
              </TouchableOpacity>
              <Text>5</Text>
              <TouchableOpacity>
                <Icon as={Ionicons} name="arrow-down" />
              </TouchableOpacity>
            </VStack>
            <VStack space={0}>
              <TouchableOpacity>
                <VStack
                  space={4}
                  style={{ padding: 15 }}
                  rounded="5"
                  bg={colors.primary["200"]}
                >
                  <HStack justifyContent="space-between">
                    <Text style={{ fontSize: 16, flex: 4 }}>Title</Text>
                    <Text style={{ fontSize: 10, flex: 1, marginRight: 3 }}>
                      Username
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        flex: 1,
                      }}
                    >
                      10/13
                    </Text>
                  </HStack>
                  <Divider
                    style={{ backgroundColor: colors.gray["400"], height: 0.5 }}
                  />
                  <Text
                    style={{ width: Dimensions.get("window").width * 0.78 }}
                  >
                    text
                  </Text>
                </VStack>
              </TouchableOpacity>
            </VStack>
          </HStack>
        </Box>
        <Heading style={{ marginLeft: 10 }}>Contacts:</Heading>
        {dummyData.map((item, index) => (
          <Contact {...item} key={index} />
        ))}
        <Heading style={{ marginLeft: 10 }}>Comments:</Heading>
        {dummyData.map((item, index) => (
          <Comment {...item} key={index} />
        ))}
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
            margin: 10,
          }}
        />
        <TextArea
          style={{
            margin: 10,
            padding: 5,
            height: 80,
            borderWidth: 3,
          }}
          placeholder="Add your input..."
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <Button style={{ margin: 10 }}>Comment</Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  testingAction: () => dispatch(testing()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
