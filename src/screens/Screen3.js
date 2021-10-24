import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
	View,
	Dimensions,
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
	Button,
	Icon,
} from "native-base"
import { signout } from "../redux/actions"
import Post from "../components/Post"
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"
import { useTheme } from "styled-components"
import { margin } from "styled-system"

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

function Screen3({
	signoutAction,
	user,
	username,
	followUserAction,
	myPosts,
	upvotedPosts,
	followers,
	following,
	upvotes,
	isSomeoneElse,
	avatar,
	params,
}) {
	const navigation = useNavigation()
	const [follow, setFollow] = useState(false)
	const [mode, setMode] = useState(0)
	const { colors } = useTheme()

	if (isSomeoneElse) {
		username = params.username
		avatar = params.avatar
	}

	return (
		<SafeAreaView style={styles.container}>
			<Avatar
				//bg="green.500"
				style={{ flex: 1 }}
				source={{
					uri:
						"https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235",
				}}
			/>

			<VStack space={1.5} alignItems="center">
				<Box
					rounded="lg"
					overflow="hidden"
					// bg={colors.tertiary["300"]}
					borderColor="coolGray.200"
				>
					<Heading marginTop={2}>{username}</Heading>
				</Box>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Settings")
					}}
				>
					<Icon as={Ionicons} color="primary.500" name="settings" />
				</TouchableOpacity>

				{/* {
					<Button
						onPress={() => {
							followUserAction()
						}}
						marginTop={1}
					>
						{follow ? "Follow" : "Unfollow"}
					</Button>
				} */}
				{/* <TouchableOpacity onPress={() => setFollow(!follow)}>
					<Box bg={colors.tertiary["300"]} rounded="lg">
						<Text></Text>
					</Box>
				</TouchableOpacity> */}

				{/* <Divider color="red" height={5} /> */}
				<View
					style={{
						borderColor: "gray",
						borderWidth: 0.3,
						width: Dimensions.get("window").width * 0.97,
						borderRadius: 50,
						marginVertical: 10,
					}}
				/>
				<HStack style={styles.Hstack2entire}>
					<Box
						//  bg={colors.tertiary["300"]}
						rounded="lg"
					>
						<VStack style={styles.HStack2}>
							{following && (
								<Text style={{ fontSize: 20, fontWeight: "bold" }}>
									{following.length}
								</Text>
							)}
							<Text style={{ fontStyle: "italic" }}> Following</Text>
						</VStack>
					</Box>
					<Box
						// bg={colors.tertiary["300"]}
						rounded="lg"
					>
						<VStack style={styles.HStack2}>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>
								{followers.length}
							</Text>
							<Text style={{ fontStyle: "italic" }}> Followers</Text>
						</VStack>
					</Box>
					<Box
						//  bg={colors.tertiary["300"]}
						rounded="lg"
					>
						<VStack style={styles.HStack2}>
							<Text style={{ fontSize: 20, fontWeight: "bold" }}>
								{upvotes}
							</Text>
							<Text style={{ fontStyle: "italic" }}> Upvotes</Text>
						</VStack>
					</Box>
				</HStack>
				<View
					style={{
						borderColor: "gray",
						borderWidth: 0.3,
						width: Dimensions.get("window").width * 0.97,
						borderRadius: 50,
						marginBottom: 15,
					}}
				/>
				<HStack space={3} style={{ justifyContent: "center", width: "50%" }}>
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
			</VStack>
			<Divider style={{ marginTop: 5 }} color={colors.primary["500"]} />
			<ScrollView style={{ marginBottom: 5 }}>
				{mode === 0 &&
					myPosts.map((item, index) => <Post {...item} key={index} />)}
				{mode === 1 &&
					upvotedPosts.map((item, index) => <Post {...item} key={index} />)}
			</ScrollView>
		</SafeAreaView>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
	username: state.username,
	uid: state.user.uid,
	avatar: state.user.avatar,
	myPosts: state.myPosts,
	upvotedPosts: state.upvotedPosts,
	followers: state.user.followers,
	following: state.user.following,
	upvotes: state.upvotes,
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
