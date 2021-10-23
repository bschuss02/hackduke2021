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
} from "native-base"
import { signout } from "../redux/actions"

import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"
import { createPost } from "../redux/actions/index"

function Screen3({ signoutAction, createPostAction }) {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
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
					const title = "Y'all shouldn't breath so much"
					const text =
						"seriously tho actually tho seriously tho actually thoseriously tho actually thoseriously tho actually thoseriously tho actually thoseriously tho actually thoseriously tho actually thoseriously tho actually tho"
					const contacts = [
						{
							platform: "twitter",
							info: "@tedcruz",
							text: "tell this dude to kys",
						},
						{
							platform: "email",
							info: "tedcruz@gmail.com",
							text:
								"tell this dude to kys but this time say dear senator cruz kys",
						},
					]
					createPostAction(title, text, contacts)
				}}
			>
				Make Post
			</Button>
			<Button>follow someone</Button>
		</View>
	)
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
	signoutAction: () => dispatch(signout()),
	createPostAction: (title, text, contacts) =>
		dispatch(createPost(title, text, contacts)),
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
