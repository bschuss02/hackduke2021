import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native"
import {
	NativeBaseProvider,
	Text,
	HStack,
	Heading,
	Avatar,
	Box,
	VStack,
	Divider,
} from "native-base"
import { signout } from "../redux/actions"
import Post from "../components/Post"
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"
import { useTheme } from "styled-components"
import { margin } from "styled-system"

function Screen3({ signoutAction }) {
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
			date: 1635017815494,
		},
		{
			title: "title1",
			username: "username1",
			text: "text1",
			upvotes: -4,
			date: "10/23/2021",
		},
		{
			title: "title2",
			username: "username2",
			text:
				"text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
			upvotes: 2,
			date: "10/24/2021",
		},
		{
			title: "title3",
			username: "username3",
			text: "text3",
			upvotes: 24,
			date: "10/21/2021",
		},
	]
	const navigation = useNavigation()
	const [follow, setFollow] = useState(false)
	const [mode, setMode] = useState(0)
	console.log(follow)
	const { colors } = useTheme()

	return (
		<SafeAreaView style={styles.container}>
			<Avatar
				//bg="green.500"
				style={{ flex: 1 }}
				source={{
					uri:
						"https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235",
				}}
			></Avatar>
			<HStack style={styles.HackStack1}>
				<Box
					rounded="lg"
					overflow="hidden"
					bg={colors.tertiary["300"]}
					borderColor="coolGray.200"
				>
					<Text>Username</Text>
				</Box>
				<TouchableOpacity onPress={() => setFollow(!follow)}>
					<Box bg={colors.tertiary["300"]} rounded="lg">
						<Text>{follow ? "Follow" : "Unfollow"}</Text>
					</Box>
				</TouchableOpacity>
			</HStack>
			<HStack style={styles.Hstack2entire}>
				<Box bg={colors.tertiary["300"]} rounded="lg">
					<VStack style={styles.HStack2}>
						<Text>383838</Text>

						<Text> Following</Text>
					</VStack>
				</Box>
				<Box bg={colors.tertiary["300"]} rounded="lg">
					<VStack style={styles.HStack2}>
						<Text>383838</Text>
						<Text> Follwers</Text>
					</VStack>
				</Box>
				<Box bg={colors.tertiary["300"]} rounded="lg">
					<VStack style={styles.HStack2}>
						<Text>383838</Text>
						<Text> Upvotes</Text>
					</VStack>
				</Box>
			</HStack>
			<HStack style={{ justifyContent: "space-between", width: "50%" }}>
				<TouchableOpacity
					onPress={() => {
						setMode(0)
					}}
				>
					<Text
						style={styles.Headers}
						underline={mode === 0}
						color={mode === 0 ? colors.primary["500"] : colors.gray["400"]}
					>
						Posts
					</Text>
				</TouchableOpacity>
				<Text>|</Text>
				<TouchableOpacity
					onPress={() => {
						setMode(1)
					}}
				>
					<Text
						style={styles.Headers}
						underline={mode === 1}
						color={mode === 1 ? colors.primary["500"] : colors.gray["400"]}
					>
						Upvoted
					</Text>
				</TouchableOpacity>
			</HStack>
			<Divider style={{ marginTop: 5 }} color={colors.primary["500"]} />
			<ScrollView style={{ marginBottom: 5 }}>
				{dummyData.map((item, index) => (
					<Post {...item} key={index} />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
	signoutAction: () => dispatch(signout()),
	createPostAction: (title, text, contacts) =>
		dispatch(createPost(title, text, contacts)),
	followUserAction: (uid, username, avatar) =>
		dispatch(followUser(uid, username, avatar)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen3)

const styles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: "center",
	},

	HStack2: {
		alignItems: "center",
		padding: 5,
	},
	Hstack2entire: {
		paddingBottom: 15,
		width: "70%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	HackStack1: {
		padding: 15,
		width: "45%",
		justifyContent: "space-between",
		marginHorizontal: 0,
	},
	Headers: {
		fontSize: 20,
	},
})
