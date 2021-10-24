import React, { useState, useEffect } from "react"
import { StyleSheet, Platform, Picker, TouchableOpacity } from "react-native"
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
	Select,
} from "native-base"
import { login } from "../redux/actions"
import { connect, useDispatch } from "react-redux"
import { TextArea } from "native-base"
import { Ionicons, AntDesign } from "@expo/vector-icons"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { createPost } from "../redux/actions/index"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

function CreatePost({ postAction, error, createPostAction }) {
	const dispatch = useDispatch()
	const toast = useToast()
	const { colors } = useTheme()
	const navigation = useNavigation()
	//colors.primary["500"]
	useEffect(() => {
		if (error) {
			toast.show({ description: error, backgroundColor: "error.500" })
			dispatch({ type: "CLEAR_ERROR" })
		}
	})

	const [selectedSocialMedia, setSelectedSocialMedia] = useState([])
	const [handlePlaceholder, setHandlePlaceholder] = useState([])

	const [postTitle, setPostTitle] = useState("")
	const [postDescription, setPostDescription] = useState("")
	const [socialMediaHandle, setSocialMediaHandle] = useState([])
	const [contactDescription, setContactDescription] = useState([])
	const [dummyData, setDummyData] = useState([])

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
					{/* <Heading alignItems="center">Create Post</Heading> */}
					{/* <View
						style={{
							borderBottomColor: "black",
							borderBottomWidth: 1,
						}}
					/> */}

					<Input
						backgroundColor={colors.primary["200"]}
						value={postTitle}
						onChangeText={(e) => {
							setPostTitle(e)
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
							setPostDescription(e)
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
									<Select
										style={{ height: 50, width: 400 }}
										minWidth={150}
										placeholder="Platform"
										selectedValue={selectedSocialMedia[index]}
										_selectedItem={{ bg: "primary.200" }}
										onValueChange={(itemValue, itemIndex) => {
											setSelectedSocialMedia([
												...selectedSocialMedia.slice(0, index),
												itemValue,
												...selectedSocialMedia.slice(index + 1),
											])
											console.log("dummy data", dummyData)
											console.log("itemvalue", itemValue)
											console.log("index", index)

											dummyData[index].platform = itemValue
											switch (itemValue) {
												case "twitter": {
													setHandlePlaceholder([
														...handlePlaceholder.slice(0, index),
														"Twitter Handle",
														...handlePlaceholder.slice(index + 1),
													])
													break
												}
												case "insta": {
													setHandlePlaceholder([
														...handlePlaceholder.slice(0, index),
														"Instagram Handle",
														...handlePlaceholder.slice(index + 1),
													])
													break
												}
												case "fb": {
													setHandlePlaceholder([
														...handlePlaceholder.slice(0, index),
														"Facebook Name",
														...handlePlaceholder.slice(index + 1),
													])
													break
												}
												case "phone": {
													setHandlePlaceholder([
														...handlePlaceholder.slice(0, index),
														"Phone Number",
														...handlePlaceholder.slice(index + 1),
													])
													break
												}
												case "email": {
													setHandlePlaceholder([
														...handlePlaceholder.slice(0, index),
														"Email",
														...handlePlaceholder.slice(index + 1),
													])
													break
												}
											}
										}}
									>
										<Select.Item label="Select Platform" value="" />
										<Select.Item label="Twitter" value="twitter" />
										<Select.Item label="Email" value="email" />
										<Select.Item label="Phone Number" value="phone" />
										<Select.Item label="Instagram" value="insta" />
										<Select.Item label="Facebook" value="fb" />
									</Select>
								</View>

								<Input
									backgroundColor={colors.primary["200"]}
									style={styles.handle}
									value={socialMediaHandle[index]}
									onChangeText={(e) => {
										setSocialMediaHandle([
											...socialMediaHandle.slice(0, index),
											e,
											...socialMediaHandle.slice(index + 1),
										])
										dummyData[index].handle = e
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
								value={contactDescription[index]}
								onChangeText={(e) => {
									setContactDescription([
										...contactDescription.slice(0, index),
										e,
										...contactDescription.slice(index + 1),
									])
									dummyData[index].description = e
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
							}

							setDummyData([...dummyData, newObj])
						}}
					>
						<Icon
							as={AntDesign}
							name="pluscircleo"
							color={colors.primary["500"]}
						/>
					</TouchableOpacity>

					<View style={{ padding: 10, marginTop: 30, marginBottom: 20 }}>
						<Button
							onPress={() => {
								console.log(
									"🚀 ~ file: CreatePost.js ~ line 240 ~ CreatePost ~ dummyData",
									dummyData,
								)
								console.log(
									"🚀 ~ file: CreatePost.js ~ line 240 ~ CreatePost ~ postDescription",
									postDescription,
								)
								console.log(
									"🚀 ~ file: CreatePost.js ~ line 242 ~ CreatePost ~ postTitle",
									postTitle,
								)

								const contacts = dummyData.map((item) => ({
									platform: item.platform,
									info: item.handle,
									text: item.description,
								}))

								createPostAction(postTitle, postDescription, contacts)
								navigation.navigate("TabNav")
							}}
						>
							Create Post
						</Button>
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
	)
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
	createPostAction: (title, text, contacts) =>
		dispatch(createPost(title, text, contacts)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#ffffff",
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
})
