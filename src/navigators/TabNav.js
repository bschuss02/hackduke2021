import React, { useState, useEffect } from "react"
import { StyleSheet, useColorScheme, StatusBar } from "react-native"
import { NativeBaseProvider, View, Text, Button, Icon } from "native-base"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Screen1 from "../screens/Screen1"
import Screen2 from "../screens/Screen2"
import Screen3 from "../screens/Screen3"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import { useTheme } from "styled-components"

const Tab = createBottomTabNavigator()

export default function TabNav() {
	const { colors } = useTheme()

	return (
		<>
			<StatusBar
				animated={true}
				barStyle="dark-content"
				backgroundColor="red"
			/>
			<Tab.Navigator
				initialRouteName="Screen1"
				screenOptions={{ headerShown: false }}
			>
				<Tab.Screen
					name="Screen1"
					component={Screen1}
					options={{
						tabBarIcon: ({ focused, size }) => (
							<Icon
								size={size}
								as={Ionicons}
								name="home"
								color={focused ? colors.primary["500"] : colors.gray["600"]}
							/>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								color={focused ? colors.primary["500"] : colors.gray["600"]}
								fontSize="xs"
							>
								Home
							</Text>
						),
					}}
				/>
				<Tab.Screen
					name="Screen2"
					component={Screen2}
					options={{
						tabBarIcon: ({ focused, size }) => (
							<Icon
								as={Ionicons}
								name="search"
								size={size}
								color={focused ? colors.primary["500"] : colors.gray["600"]}
							/>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								color={focused ? colors.primary["500"] : colors.gray["600"]}
								fontSize="xs"
							>
								Search
							</Text>
						),
					}}
				/>
				<Tab.Screen
					name="Screen3"
					component={Screen3}
					options={{
						tabBarIcon: ({ focused, size }) => (
							<Icon
								as={Ionicons}
								name="person"
								size={size}
								color={focused ? colors.primary["500"] : colors.gray["600"]}
							/>
						),
						tabBarLabel: ({ focused }) => (
							<Text
								color={focused ? colors.primary["500"] : colors.gray["600"]}
								fontSize="xs"
							>
								Profile
							</Text>
						),
					}}
				/>
			</Tab.Navigator>
		</>
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
