import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	HStack,
	VStack,
	Avatar,
	Box,
	useTheme,
} from "native-base"

export default function UserItem({ username, image }) {
	const { colors } = useTheme()
	return (
		<HStack
			// bg={colors.tertiary["400"]}
			w={{ base: "100%" }}
			justifyContent="space-between"
			alignItems="center"
			space={3}
			style={{ borderBottomWidth: 0.25, paddingBottom: 10 }}
		>
			<Avatar
				style={{ flex: 1 }}
				source={{
					uri: image,
				}}
			/>
			<Text style={{ flex: 2 }}>{username}</Text>
			<Button>Follow</Button>
		</HStack>
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