import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	Dimensions,
	Touchable,
	TouchableOpacity,
	SafeAreaView,
} from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Pressable,
	Box,
	HStack,
	VStack,
	useTheme,
	Icon,
	Divider,
	Avatar,
} from "native-base"

import { Ionicons, Fontisto, FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function Post({
	title,
	username,
	text,
	upvotes,
	timestamp,
	upvotePostAction,
	uid,
	postId,
	avatar,
	contacts,
	comments,
}) {
	const { colors } = useTheme()
	const navigation = useNavigation()
	return (
		<SafeAreaView style={{ width: Dimensions.get("window").width }}>
			<Box shadow={8}>
				<VStack space={1} alignItems="center">
					<VStack
						space={0}
						style={{
							width: Dimensions.get("window").width * 0.96,
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("Post View", {
									title,
									username,
									text,
									upvotes,
									timestamp,
									uid,
									postId,
									avatar,
									contacts,
									comments,
								})
							}}
						>
							<VStack
								space={4}
								style={{ padding: 15 }}
								rounded="5"
								bg={colors.primary["200"]}
							>
								<HStack style={{ flex: 1 }}>
									<Avatar size={10} source={{ uri: avatar }} />
									<VStack style={{ marginLeft: 10 }}>
										<Text style={{ fontSize: 10 }}>{username}</Text>
										<Text style={{ fontSize: 16 }}>{title}</Text>
									</VStack>
								</HStack>
								<Divider
									style={{ backgroundColor: colors.gray["400"], height: 0.5 }}
								/>
								<Text style={{ width: Dimensions.get("window").width * 0.78 }}>
									{text}
								</Text>
							</VStack>
						</TouchableOpacity>
						<HStack justifyContent="space-between" alignItems="center">
							<HStack alignItems="center">
								<TouchableOpacity
									style={{ padding: 5 }}
									onPress={() => {
										upvotePostAction(uid, postId, 1)
									}}
								>
									<Icon as={Ionicons} name="arrow-up" />
								</TouchableOpacity>
								<Text>{upvotes}</Text>
								{/* <TouchableOpacity
									style={{ padding: 5 }}
									onPress={() => {
										upvotePostAction(uid, postId, -1)
									}}
								>
									<Icon as={Ionicons} name="arrow-down" />
								</TouchableOpacity> */}
							</HStack>
							<TouchableOpacity>
								<Icon as={FontAwesome} name="comments-o" />
							</TouchableOpacity>
							<Text>{`${timeSince(timestamp)} ago`}</Text>
						</HStack>
					</VStack>
				</VStack>
			</Box>
		</SafeAreaView>
	)
}

function timeSince(date) {
	var seconds = Math.floor((new Date() - date) / 1000)

	var interval = seconds / 31536000

	if (interval > 1) {
		return Math.floor(interval) + " years"
	}
	interval = seconds / 2592000
	if (interval > 1) {
		let returnString = Math.floor(interval) + " months"

		if (Math.floor(interval) === 1) {
			returnString = returnString.replace("s", "")
		}
		return returnString
	}
	interval = seconds / 86400

	if (interval > 1) {
		let returnString = Math.floor(interval) + " days"
		if (Math.floor(interval) === 1) {
			returnString = returnString.replace("s", "")
		}
		return returnString
	}
	interval = seconds / 3600
	if (interval > 1) {
		let returnString = Math.floor(interval) + " hours"
		if (Math.floor(interval) === 1) {
			returnString = returnString.replace("s", "")
		}
		return returnString
	}
	interval = seconds / 60
	if (interval > 1) {
		let returnString = Math.floor(interval) + " minutes"
		if (Math.floor(interval) === 1) {
			returnString = returnString.replace("s", "")
		}
		return returnString
	}

	return Math.floor(seconds) + " seconds"
}
var aDay = 24 * 60 * 60 * 1000

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
