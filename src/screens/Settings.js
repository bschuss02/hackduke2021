import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button } from "native-base"
import { signout } from "../redux/actions"
import { connect } from "react-redux"

function Settings({ signoutAction }) {
	return (
		<View style={styles.container}>
			<Button
				onPress={() => {
					signoutAction()
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
