import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import {
	NativeBaseProvider,
	Center,
	Button,
	Text,
	View,
	Stack,
} from "native-base"
import StackNav from "./navigators/StackNav"
import { NavigationContainer } from "@react-navigation/native"

export default function BoilerplateApp() {
	return (
		<NavigationContainer>
			<StackNav />
		</NavigationContainer>
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
