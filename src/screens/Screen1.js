import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button } from "native-base"
import { testing } from "../redux/actions"
import { connect } from "react-redux"

function Screen1({ testingAction }) {
	return (
		<View style={styles.container}>
			<Text>Screen1</Text>
			<Button
				onPress={() => {
					testingAction()
				}}
			>
				Do A Thing
			</Button>
		</View>
	)
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
	testingAction: () => dispatch(testing()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen1)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
