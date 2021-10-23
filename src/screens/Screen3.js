import React, { useState, useEffect } from "react"
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Container,
	HStack,
	Heading,
	Icon,
} from "native-base"
import { signout } from "../redux/actions"

import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"

function Screen3({ signoutAction }) {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<Button
				onPress={() => {
					signoutAction()
					navigation.navigate("Welcome")
				}}
			>
				Sign Out
			</Button>
		</View>
	)
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
	signoutAction: () => dispatch(signout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen3)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
