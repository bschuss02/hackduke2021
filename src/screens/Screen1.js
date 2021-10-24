import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	StatusBar,
} from "react-native"
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
	Fab,
} from "native-base"
import { testing } from "../redux/actions"
import { connect } from "react-redux"
import Post from "../components/Post"
import { Header } from "react-native/Libraries/NewAppScreen"
import { useTheme } from "styled-components"
import { Ionicons } from "@expo/vector-icons"
import { upvotePost } from "../redux/actions"
import CreatePost from "./CreatePost.js"
import { useNavigation } from "@react-navigation/native"

const dummyData = [
	{
		title: "title1",
		username: "username1",
		text: "text1",
		upvotes: -4,
		date: 1635017815494,
	},
	{
		title: "title2",
		username: "username2",
		text:
			"text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
		upvotes: 2,
		date: 1635017815494,
	},
	{
		title: "title3",
		username: "username3",
		text: "text3",
		upvotes: 24,
		date: 1635017015494,
	},
	{
		title: "title1",
		username: "username1",
		text: "text1",
		upvotes: -4,
		date: 1630007815494,
	},
	{
		title: "title2",
		username: "username2",
		text:
			"text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
		upvotes: 2,
		date: 1635010015424,
	},
	{
		title: "title3",
		username: "username3",
		text: "text3",
		upvotes: 24,
		date: 1635000015494,
	},
]

function Screen1({ feed, upvotePostAction }) {
	const [mode, setMode] = useState(0)
	const { colors } = useTheme()
	const navigation = useNavigation()

	return (
		<SafeAreaView>
			<Fab
				renderInPortal={false}
				isDisabled={false}
				onPress={() => {
					navigation.navigate("Create Post")
				}}
				position="absolute"
				style={{ marginBottom: 20 }}
				icon={<Icon as={Ionicons} name="add" />}
			/>
			<VStack>
				<HStack justifyContent="center" space={2}>
					<TouchableOpacity
						onPress={() => {
							setMode(0)
						}}
					>
						<Heading
							underline={mode === 0}
							color={mode === 0 ? colors.primary["500"] : colors.muted["500"]}
						>
							Following
						</Heading>
					</TouchableOpacity>
					<Heading>|</Heading>
					<TouchableOpacity
						onPress={() => {
							setMode(1)
						}}
					>
						<Heading
							underline={mode === 1}
							color={mode === 1 ? colors.primary["500"] : colors.muted["500"]}
						>
							General
						</Heading>
					</TouchableOpacity>
				</HStack>
				<ScrollView style={{ marginBottom: 60, marginTop: 10 }}>
					<VStack space={5}>
						{feed.map((item, index) => (
							<Post upvotePostAction={upvotePostAction} {...item} key={index} />
						))}
					</VStack>
				</ScrollView>
			</VStack>
		</SafeAreaView>
	)
}

const mapStateToProps = (state) => ({
	feed: state.feed,
})
const mapDispatchToProps = (dispatch) => ({
	testingAction: () => dispatch(testing()),
	upvotePostAction: (uid, postId, downvote) =>
		dispatch(upvotePost(uid, postId, downvote)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
