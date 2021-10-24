import React, { useState, useEffect } from "react"
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Container,
	HStack,
	Heading,
	Icon,
	VStack,
} from "native-base"
import { signout } from "../redux/actions"

import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"
import { createPost, followUser } from "../redux/actions/index"

function Screen3({ user, signoutAction, createPostAction, followUserAction }) {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<VStack space={3}>
				<Text>{user.username}</Text>
				<Button
					onPress={() => {
						signoutAction()
						navigation.navigate("Welcome")
					}}
				>
					Sign Out
				</Button>
				<Button
					onPress={() => {
						const title = "post number 2 for af?"
						const text =
							"fuckity fuck fuck fuck fuckity fuck fuck fuck fuckity fuck fuck fuck fuckity fuck fuck fuck fuckity fuck fuck fuck fuckity fuck fuck fuck "
						const contacts = [
							{
								platform: "facebook",
								info: "Ron Desantis",
								text: "who made this person",
							},
							{
								platform: "email",
								info: "rondesantis@gmail.com",
								text: "tell this dude to fuck off",
							},
						]
						createPostAction(title, text, contacts)
					}}
				>
					Make Post
				</Button>
				<Button
					onPress={() => {
						const uid = "tbQr8MjG2Yhks81k1cpBzkeqREh2"
						const username = "af"
						const avatar =
							"https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235"

						followUserAction(uid, username, avatar)
					}}
				>
					Follow someone
				</Button>
			</VStack>
		</View>
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
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
