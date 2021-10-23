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
} from "native-base"

import { Ionicons, Fontisto } from "@expo/vector-icons"

export default function Post({ title, username, text, upvotes, date }) {
	const { colors } = useTheme()
	return (
		<SafeAreaView style={{ width: Dimensions.get("window").width }}>
			<Box style={{ margin: 10 }} shadow={8}>
				<HStack space={1}>
					<VStack justifyContent="flex-start" alignItems="center">
						<TouchableOpacity>
							<Icon as={Ionicons} name="arrow-up" />
						</TouchableOpacity>
						<Text>{upvotes}</Text>
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
									<Text style={{ fontSize: 16 }}>{title}</Text>
									<Text style={{ fontSize: 10 }}>{username}</Text>
								</HStack>
								<Divider style={{backgroundColor: colors.gray["400"], height:.5 }} />
								<Text style={{ width: Dimensions.get("window").width * 0.78 }}>
									{text}
								</Text>
							</VStack>
						</TouchableOpacity>
						<HStack justifyContent="space-between">
							<TouchableOpacity>
								<Text
									style={{
										textDecorationLine: "underline",
										textDecorationColor: colors.primary["500"],
									}}
								>
									Comments
								</Text>
							</TouchableOpacity>
							<Text>{`${timeSince(date)} ago`}</Text>
						</HStack>
					</VStack>
					{/* <VStack alignItems="center">
						<Text style={{ width: 42 }}>{date}</Text>
					</VStack> */}
				</HStack>
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
		let returnString=  Math.floor(interval) + " months"
		
		if (Math.floor(interval) === 1) {
			returnString = returnString.replace('s',"")
		}
		return returnString
	}
	interval = seconds / 86400
	
	if (interval > 1) {
		let returnString = Math.floor(interval) + " days"
		if (Math.floor(interval) === 1) {
			returnString = returnString.replace('s',"")
		}
		return returnString
	}
	interval = seconds / 3600
	if (interval > 1) {
		let returnString = Math.floor(interval) + " hours"
		if (Math.floor(interval) === 1) {
			returnString = returnString.replace('s',"")
		}
		return returnString
	}
	interval = seconds / 60
	if (interval > 1) {
		let returnString = Math.floor(interval) + " minutes"
		if (Math.floor(interval) === 1) {
			returnString = returnString.replace('s',"")
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
