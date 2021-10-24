import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	HStack,
	Box,
	VStack,
	Heading,
} from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useSelector, shallowEqual } from "react-redux"

export default function Welcome() {
	const navigation = useNavigation()
	const state = useSelector((state) => ({ thing: state.thing }))

	return (
		<View style={styles.container}>
			<VStack space={10}>
				<Box
					alignItems="center"
					bg={{
						linearGradient: {
							colors: ["tertiary.300", "primary.500"],
							start: [0, 0],
							end: [1, 0],
						},
					}}
					p={12}
					rounded="lg"
					_text={{
						fontSize: "md",
						fontWeight: "bold",
						color: "white",
					}}
				>
					<Heading style={{ fontSize: 30, color: "white" }}>Grassroots</Heading>
				</Box>

				<HStack w={{ base: "75%", md: "25%" }} style={styles.buttonContainer}>
					<Button
						onPress={() => {
							navigation.navigate("Login")
						}}
					>
						Login
					</Button>
					<Button
						onPress={() => {
							navigation.navigate("Sign Up")
						}}
					>
						Sign Up
					</Button>
				</HStack>
			</VStack>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: { justifyContent: "space-evenly" },
})
