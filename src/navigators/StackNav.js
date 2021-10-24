import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button } from "native-base"
import { createStackNavigator } from "@react-navigation/stack"
import Welcome from "../screens/Welcome"
import Login from "../screens/Login"
import Signup from "../screens/Signup"
import Loading from "../screens/Loading"
import TabNav from "./TabNav"
import Settings from "../screens/Settings"
import { useTheme } from "styled-components"
import CreatePost from "../screens/CreatePost"

const Stack = createStackNavigator()

export default function StackNav() {
	const { colors } = useTheme()
	return (
		<Stack.Navigator
			initialRouteName="Loading"
			screenOptions={{
				headerBackTitle: "Back",
				headerShown: true,
				headerTintColor: colors.primary["500"],
				headerTitleStyle: {},
			}}
		>
			<Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false, animationEnabled: false }}
			/>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Sign Up" component={Signup} />
			<Stack.Screen
				name="Loading"
				component={Loading}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="Create Post" component={CreatePost} />
			<Stack.Screen
				name="TabNav"
				component={TabNav}
				options={{ headerShown: false, animationEnabled: false }}
			/>
		</Stack.Navigator>
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
