import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button } from "native-base"
import { useNavigation } from "@react-navigation/native"
import Screen3 from "./Screen3"

export default function ViewProfile({ route }) {
	const { username, avatar, followers, uid } = route.params

	const navigation = useNavigation()
	useEffect(() => {
		navigation.setOptions({ title: username })
	})

	return <Screen3 params={route.params} isSomeoneElse={true} />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
