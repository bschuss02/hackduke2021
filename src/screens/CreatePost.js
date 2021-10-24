import React, { useState, useEffect } from "react";
import { StyleSheet, Platform, Picker, TouchableOpacity } from "react-native";
import {
  NativeBaseProvider,
  View,
  Text,
  Button,
  Input,
  InputGroup,
  Stack,
  KeyboardAvoidingView,
  useTheme,
  useToast,
  HStack,
  Icon,
  ScrollView,
  Heading,
} from "native-base";
import { login } from "../redux/actions";
import { connect, useDispatch } from "react-redux";
import { TextArea } from "native-base";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function CreatePost({ postAction, error }) {
  const dispatch = useDispatch();
  const toast = useToast();
  const { colors } = useTheme();
  //colors.primary["500"]
  useEffect(() => {
    if (error) {
      toast.show({ description: error, backgroundColor: "error.500" });
      dispatch({ type: "CLEAR_ERROR" });
    }
  });

  const [selectedSocialMedia, setSelectedSocialMedia] = useState([]);
  const [handlePlaceholder, setHandlePlaceholder] = useState([]);

  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [socialMediaHandle, setSocialMediaHandle] = useState("");
  const [contactDescription, setContactDescription] = useState("");
  const [dummyData, setDummyData] = useState([]);

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Stack
          /*alignItems="center"*/ w={{ base: "85%", md: "25%" }}
          space="md"
        >
          {/* <Text style={[styles.header, { padding: 2 }]}>Create Post</Text>*/}
          <Heading alignItems="center">Create Post</Heading>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />

          <Input
            backgroundColor={colors.primary["200"]}
            value={postTitle}
            onChangeText={(e) => {
              setPostTitle(e);
            }}
            variants="underlined"
            placeholder="Title"
            placeholderTextColor="black"
            autoCapitalize="none"
            autoCorrect={true}
          />
          <TextArea
            backgroundColor={colors.primary["200"]}
            style={{ textAlignVertical: "top" }}
            multiline={true}
            h={150}
            value={postDescription}
            onChangeText={(e) => {
              setPostDescription(e);
            }}
            variants="underlined"
            placeholder="Description"
            placeholderTextColor="black"
            autoCapitalize="none"
            autoCorrect={true}
          />
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
          <Heading style={[styles.contacts, { padding: 1 }]}>
            Relevant Contacts
          </Heading>

          {dummyData.map((item, index) => (
            <View key={index}>
              <Text style={[styles.contactCounter]}>Contact {item.value}</Text>

              <HStack>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#a0a0a0",
                    borderRadius: 1,
                    marginRight: 5,
                  }}
                >
                  <Picker
                    style={{ height: 50, width: 175 }}
                    placeholder="Platform"
                    value={selectedSocialMedia[index]}
                    onValueChange={(itemValue, itemIndex) => {
                      setSelectedSocialMedia([
                        ...selectedSocialMedia.slice(0, index),
                        itemValue,
                        ...selectedSocialMedia.slice(index + 1),
                      ]);
                      dummyData[index].platform = itemValue;
                      switch (itemValue) {
                        case "twitter": {
                          setHandlePlaceholder([
                            ...handlePlaceholder.slice(0, index),
                            "Twitter Handle",
                            ...handlePlaceholder.slice(index + 1),
                          ]);
                          break;
                        }
                        case "insta": {
                          setHandlePlaceholder([
                            ...handlePlaceholder.slice(0, index),
                            "Instagram Handle",
                            ...handlePlaceholder.slice(index + 1),
                          ]);
                          break;
                        }
                        case "fb": {
                          setHandlePlaceholder([
                            ...handlePlaceholder.slice(0, index),
                            "Facebook Name",
                            ...handlePlaceholder.slice(index + 1),
                          ]);
                          break;
                        }
                        case "phone": {
                          setHandlePlaceholder([
                            ...handlePlaceholder.slice(0, index),
                            "Phone Number",
                            ...handlePlaceholder.slice(index + 1),
                          ]);
                          break;
                        }
                        case "email": {
                          setHandlePlaceholder([
                            ...handlePlaceholder.slice(0, index),
                            "Email",
                            ...handlePlaceholder.slice(index + 1),
                          ]);
                          break;
                        }
                      }
                    }}
                  >
                    <Picker.Item label="Select Platform" value="" />
                    <Picker.Item label="Twitter" value="twitter" />
                    <Picker.Item label="Email" value="email" />
                    <Picker.Item label="Phone Number" value="phone" />
                    <Picker.Item label="Instagram" value="insta" />
                    <Picker.Item label="Facebook" value="fb" />
                  </Picker>
                </View>

                <Input
                  backgroundColor={colors.primary["200"]}
                  style={styles.handle}
                  value={socialMediaHandle}
                  onChangeText={(e) => {
                    setSocialMediaHandle(e);
                    dummyData[index].handle = e;
                  }}
                  variants="underlined"
                  placeholder={handlePlaceholder[index]}
                  placeholderTextColor="grey"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </HStack>

              <TextArea
                backgroundColor={colors.primary["200"]}
                marginTop={1.5}
                style={{ textAlignVertical: "top" }}
                multiline={true}
                h={50}
                value={contactDescription}
                onChangeText={(e) => {
                  setContactDescription(e);
                  dummyData[index].description = e;
                }}
                variants="underlined"
                placeholder="Contact Description"
                placeholderTextColor="grey"
                autoCapitalize="none"
                autoCorrect={true}
              />
            </View>
          ))}

          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => {
              const newObj = {
                platform: "",
                handle: "",
                description: "",
                value: dummyData.length + 1,
              };
              setDummyData([...dummyData, newObj]);
            }}
          >
            <Icon
              as={AntDesign}
              name="pluscircleo"
              color={colors.primary["500"]}
            />
          </TouchableOpacity>

          <View style={{ padding: 10, marginTop: 30, marginBottom: 20 }}>
            <Button>Create Post</Button>
            {/* <TouchableOpacity
                        style = {{alignItems : "center"}}
                    >
                        <Text>Create Post</Text>
                    </TouchableOpacity> */}
          </View>

          {/* data for posts: 
                    title stored in postTitle
                    description stored in postDescription
                    all contact information stored in dummyData object array
                    ---> contents of each dummyData object:
                            int value - contact number
                            String platform - social media platform
                            String handle - social media handle
                            String description - contact description */}
        </Stack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    paddingTop: 50,
  },

  handle: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
  },

  header: {
    fontSize: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 3,
  },

  contacts: {
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  contactCounter: {
    fontSize: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
