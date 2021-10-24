import React, { useState, useEffect } from "react"
import { StyleSheet, Platform } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Input,
	InputGroup,
	Stack,
	KeyboardAvoidingView,
	useTheme,
	useToast,
} from "native-base"
import { login } from "../redux/actions"
import { connect, useDispatch } from "react-redux"

function Login({ loginAction, error }) {
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
	const [passwordInput, setPasswordInput] = useState("")

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<Stack w={{ base: "75%", md: "25%" }} space="md">
				<Input
					value={emailInput}
					onChangeText={(e) => {
						setEmailInput(e)
					}}
					variant="underlined"
					placeholder="Email"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Input
					value={passwordInput}
					onChangeText={(e) => {
						setPasswordInput(e)
					}}
					type={"password"}
					variant="underlined"
					placeholder="Password"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<Button
					onPress={() => {
						loginAction(emailInput, passwordInput)
					}}
				>
					Login
				</Button>
			</Stack>
		</KeyboardAvoidingView>
	)
}

const mapStateToProps = (state) => ({ error: state.error })
const mapDispatchToProps = (dispatch) => ({
	loginAction: (email, password) => dispatch(login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
