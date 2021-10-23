import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button, HStack } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useSelector, shallowEqual } from "react-redux"

export default function Welcome() {
	const navigation = useNavigation()
	const state = useSelector((state) => ({ thing: state.thing }))

	return (
		<View style={styles.container}>
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
