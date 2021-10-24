import React, { useState, useEffect } from "react"
import { StyleSheet, SafeAreaView, Dimensions } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	HStack,
	VStack,
	Avatar,
	Box,
	useTheme,
} from "native-base"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { followUser } from "../redux/actions"
import { connect } from "react-redux"

function UserItem({ username, avatar, followers, uid, followUserAction }) {
	const navigation = useNavigation()
	const { colors } = useTheme()
	return (
		<SafeAreaView>
			{/* <TouchableOpacity
				onPress={() => {
					navigation.navigate("Profile", { username, avatar, followers, uid })
				}}
			> */}
			<HStack
				// bg={colors.tertiary["400"]}
				w={{ base: "100%" }}
				width={Dimensions.get("window").width * 0.97}
				justifyContent="space-between"
				alignItems="center"
				space={3}
				style={{ borderBottomWidth: 0.25, paddingBottom: 10 }}
			>
				<Avatar
					style={{ flex: 1 }}
					source={{
						uri: avatar,
					}}
				/>
				<VStack style={{ flex: 2 }} alignItems="flex-start">
					<Text style={{ fontWeight: "bold" }}>{username}</Text>
					{followers && (
						<Text>{`Followed by ${followers.length} people`} </Text>
					)}
				</VStack>
				<Button
					onPress={() => {
						followUserAction(uid, username, avatar)
					}}
				>
					Follow
				</Button>
			</HStack>
			{/* </TouchableOpacity> */}
		</SafeAreaView>
	)
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
	followUserAction: (otherUid, otherUsername, otherAvatar) =>
		dispatch(followUser(otherUid, otherUsername, otherAvatar)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserItem)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
