import React, { useState, useEffect } from "react"
import { StyleSheet, SafeAreaView, ScrollView } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Input,
	Icon,
	VStack,
	HStack,
	Stack,
	Box,
	useTheme,
	List,
	Heading,
	useToast,
} from "native-base"
import { connect } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import UserItem from "../components/UserItem"
import { searchForUser } from "../redux/actions"
import { useDispatch } from "react-redux"

const dummyDataUsernames = [
	{
		username: "dsj_thegoat",
		avatar:
			"https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235",
		followers: [
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
		],
	},

	{
		username: "tina110023",
		followers: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		avatar:
			"data:image/jpeg;base64,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",
	},
	{
		username: "sjhoward092",
		followers: [
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
			{},
		],
		avatar:
			"https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/avatar/characters/aang-about-web.jpg?quality=0.75&height=460&width=460&matte=true&crop=true",
	},
	{
		username: "mmmjinae",
		followers: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
		avatar:
			"https://decider.com/wp-content/uploads/2020/08/the-legend-of-korra.jpg?quality=80&strip=all&w=1200",
	},
]

function Screen2({ user, searchedUsers, searchForUserAction, error }) {
	const toast = useToast()
	const dispatch = useDispatch()
	useEffect(() => {
		if (error) {
			toast.show({
				description: error,
				backgroundColor: "error.500",
			})
			dispatch({ type: "CLEAR_ERROR" })
		}
	})

	const { username, email } = user
	const { colors } = useTheme()
	const [searchInput, setSearchInput] = useState("")
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView>
				<Box alignItems="center">
					<VStack style={{ margin: 35 }} space={3}>
						<Input
							value={searchInput}
							onChangeText={(e) => {
								setSearchInput(e)
							}}
							placeholder="Search for people to follow"
							borderRadius={20}
							borderWidth={2}
							InputLeftElement={
								<Icon
									style={{ margin: 5 }}
									color={colors.gray["400"]}
									as={Ionicons}
									name="search"
								/>
							}
							InputRightElement={
								<Button
									style={{ margin: 5 }}
									onPress={() => {
										searchForUserAction(searchInput)
									}}
								>
									Search
								</Button>
							}
							autoCorrect={false}
							autoCapitalize="none"
						/>

						<VStack space={10}>
							{searchedUsers.length !== 0 && (
								<VStack space={4} alignItems="center">
									{searchedUsers.map((item, index) => (
										<UserItem {...item} key={index} />
									))}
								</VStack>
							)}

							<VStack space={4} alignItems="center">
								<Heading>Suggested</Heading>
								{dummyDataUsernames.map((item, index) => (
									<UserItem {...item} key={index} />
								))}
							</VStack>
						</VStack>
					</VStack>
				</Box>
			</ScrollView>
		</SafeAreaView>
	)
}

const mapStateToProps = (state) => ({
	user: state.user,
	searchedUsers: state.searchedUsers,
	error: state.error,
})
const mapDispatchToProps = (dispatch) => ({
	searchForUserAction: (username) => dispatch(searchForUser(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen2)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
