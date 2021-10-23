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

import { Ionicons } from "@expo/vector-icons"

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
								bg={colors.tertiary["300"]}
							>
								<HStack justifyContent="space-between">
									<Text style={{ fontSize: 16 }}>{title}</Text>
									<Text style={{ fontSize: 10 }}>{username}</Text>
								</HStack>
								<Divider />
								<Text style={{ width: Dimensions.get("window").width * 0.72 }}>
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
									See More
								</Text>
							</TouchableOpacity>
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
						</HStack>
					</VStack>
					<VStack alignItems="center">
						<Text>10/23</Text>
						<Text>2021</Text>
					</VStack>
				</HStack>
			</Box>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
