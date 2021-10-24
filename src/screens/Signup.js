import React, { useState, useEffect, useRef } from "react"
import { StyleSheet, SafeAreaView } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Input,
	InputGroup,
	Stack,
	KeyboardAvoidingView,
	useToast,
	HStack,
	Heading,
} from "native-base"
import { useSelector, connect, useDispatch } from "react-redux"
import { signup } from "../redux/actions/index"
import { useTheme } from "styled-components"

function Signup({ error, signupAction }) {
	const dispatch = useDispatch()
	const toast = useToast()
	const { colors } = useTheme()
	useEffect(() => {
		if (error) {
			toast.show({
				description: error,
				backgroundColor: "error.500",
			})
			dispatch({ type: "CLEAR_ERROR" })
		}
	})

	const [emailInput, setEmailInput] = useState("")
	const [usernameInput, setUsernameInput] = useState("")
	const [passwordInput, setPasswordInput] = useState("")

	const inputProps = {
		variant: "underlined",
		autoCorrect: false,
		autoCapitalize: "none",
	}
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<SafeAreaView style={styles.centered}>
				<Stack w={{ base: "75%", md: "25%" }} space="md">
					<Input
						value={emailInput}
						onChangeText={(e) => {
							setEmailInput(e)
						}}
						placeholder="Email"
						{...inputProps}
					/>
					<Input
						value={usernameInput}
						onChangeText={(e) => {
							setUsernameInput(e)
						}}
						placeholder="Username"
						{...inputProps}
					/>
					<Input
						value={passwordInput}
						onChangeText={(e) => {
							setPasswordInput(e)
						}}
						placeholder="Password"
						type={"password"}
						{...inputProps}
					/>
					<Button
						onPress={() => {
							signupAction(emailInput, usernameInput, passwordInput)
						}}
					>
						Sign Up
					</Button>
				</Stack>
			</SafeAreaView>
		</KeyboardAvoidingView>
	)
}

const mapStateToProps = (state) => ({
	error: state.error,
})

const mapDispatchToProps = (dispatch) => ({
	signupAction: (email, username, password) =>
		dispatch(signup(email, username, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	centered: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	header: {},
})
