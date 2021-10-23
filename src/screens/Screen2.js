import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button } from "native-base"
import { connect } from "react-redux"

function Screen2({ user }) {
	const { username, email } = user
	return (
		<View style={styles.container}>
			<Text>Screen2</Text>
			<Text>{`username: ${username}`}</Text>
			<Text>{`email: ${email}`}</Text>
		</View>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
})
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Screen2)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
