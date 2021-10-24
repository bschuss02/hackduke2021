import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import {
	NativeBaseProvider,
	Button,
	Text,
	View,
	extendTheme,
} from "native-base"
import BoilerplateApp from "./src/BoilerplateApp"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"

const config = {
	dependencies: {
		"linear-gradient": require("expo-linear-gradient").LinearGradient,
	},
}

export default function App() {
	const theme = extendTheme({
		colors: {
			primary: {
				1: "#0076be",
				2: "#4cbc9d",
			},
			secondary: {
				1: "#48b491",
			},
		},
	})
	return (
		<NativeBaseProvider config={config} theme={theme}>
			<Provider store={store}>
				<BoilerplateApp />
			</Provider>
		</NativeBaseProvider>
	)
}
