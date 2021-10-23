import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button } from "native-base"

export default function Settings() {
	return (
		<View style={styles.container}>
			<Text>Settings</Text>
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
})
