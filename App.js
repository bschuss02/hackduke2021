import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, Button, Text, View } from "native-base"
import BoilerplateApp from "./src/BoilerplateApp"
import { Provider } from "react-redux"
import { store } from "./src/redux/store"

export default function App() {
	return (
		<NativeBaseProvider>
			<Provider store={store}>
				<BoilerplateApp />
			</Provider>
		</NativeBaseProvider>
	)
}
