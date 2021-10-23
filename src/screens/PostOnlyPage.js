import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { NativeBaseProvider, View, Text, Button, Heading } from "native-base";
import { testing } from "../redux/actions";
import { connect } from "react-redux";
import PostPage from "./PostPage.js";

function Screen1({ testingAction }) {
  const dummyData = [
    {
      username: "username1",
      text: "text1",
      date: "10/23/2021",
    },
    {
      username: "username2",
      text:
        "text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
      upvotes: 2,
      date: "10/24/2021",
    },
    {
      username: "username3",
      text: "text3",
      upvotes: 24,
      date: "10/21/2021",
    },
    {
      username: "username1",
      text: "text1",
      upvotes: -4,
      date: "10/23/2021",
    },
    {
      username: "username2",
      text:
        "text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
      upvotes: 2,
      date: "10/24/2021",
    },
    {
      username: "username3",
      text: "text3",
      upvotes: 24,
      date: "10/21/2021",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Heading>Comments:</Heading>
      {/* <Text>Screen1</Text>
			<Button
				onPress={() => {
					testingAction()
				}}
			>
				Do A Thing
			</Button> */}
      <ScrollView style={{ marginBottom: 60 }}>
        {dummyData.map((item, index) => (
          <PostPage {...item} key={index} />
        ))}
      </ScrollView>
      {/* <PostPage /> */}
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
