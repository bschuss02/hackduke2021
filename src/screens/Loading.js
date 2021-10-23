import React, { useState, useEffect, useRef } from "react"
import { StyleSheet, LogBox } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Spinner,
	HStack,
	VStack,
	Heading,
} from "native-base"
import { firebase, db, thing } from "../firebase/index"
import { useNavigation } from "@react-navigation/native"
import { connect, useDispatch } from "react-redux"
import { loadData } from "../redux/actions/index"

LogBox.ignoreLogs([
	"AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
])

function Loading({ loadDataAction, isDoneLoading }) {
	const navigation = useNavigation()
	const mounted = useRef()
	const dispatch = useDispatch()

	let listener
	useEffect(() => {
		if (isDoneLoading) {
			navigation.navigate("TabNav")
		}

		if (!mounted.current) {
			if (!listener) {
				listener = firebase.auth().onAuthStateChanged((user) => {
					if (user) {
						loadDataAction()
					} else {
						navigation.navigate("Welcome")
					}
				})
			}
		}
	})

	return (
		<View style={styles.container}>
			<HStack space="md">
				<Heading color="primary.500">Loading</Heading>
				<Spinner size="lg" />
			</HStack>
		</View>
	)
}

const mapStateToProps = (state) => ({ isDoneLoading: state.isDoneLoading })
const mapDispatchToProps = (dispatch) => ({
	loadDataAction: () => dispatch(loadData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
