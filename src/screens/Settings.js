import React, { useState, useEffect } from "react"
import { StyleSheet } from "react-native"
import { NativeBaseProvider, View, Text, Button,KeyboardAvoidingView, Input, Avatar, Box, HStack} from "native-base"
import { signout } from "../redux/actions"
import { connect } from "react-redux"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { useTheme } from "styled-components"





function Settings({ signoutAction, user, username }) {
	const [username2, setUsername] = useState("")
	const { colors } = useTheme()
	return (

		<KeyboardAvoidingView style={styles.container}>
			
			<Avatar
				//bg="green.500"
				size = "2xl"
				style={{ flex: 1 }}
				source={{
					uri:
						"https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235",
				}}
			/>
			
					<Box backgroundColor={colors.primary["200"]}
					rounded="md"
					style={{ padding:10, margin:13}}
					>
					<HStack >
						<Text style={{fontSize:20}}>Username: </Text>
					<Text style={{fontSize:20}}
					>{user.username}</Text>
					</HStack>
					</Box>
					<Box backgroundColor={colors.primary["200"]}
					rounded="md"
					style={{ padding:10, marginBottom: 13}}
					><HStack>
						<Text style={{fontSize:20}}>email: </Text>
					<Text style={{fontSize:20}}
					>{user.email}</Text>
					</HStack>
					</Box>

					
			<Button
			rounded="md"
				onPress={() => {
					signoutAction()
				}}
			>
				Sign Out
			</Button>
		</KeyboardAvoidingView>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
	username: state.username,
	uid: state.user.uid,
	avatar: state.user.avatar,
})
const mapDispatchToProps = (dispatch) => ({
	signoutAction: () => dispatch(signout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		//justifyContent: "center",
	},
})
