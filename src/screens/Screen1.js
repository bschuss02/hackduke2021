import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	List,
	VStack,
	HStack,
	Heading,
	Divider,
} from "native-base"
import { testing } from "../redux/actions"
import { connect } from "react-redux"
import Post from "../components/Post"
import { Header } from "react-native/Libraries/NewAppScreen"
import { useTheme } from "styled-components"

function Screen1({ testingAction }) {
	const dummyData = [
		{
			title: "title1",
			username: "username1",
			text: "text1",
			upvotes: -4,
			date: "10/23/2021",
		},
		{
			title: "title2",
			username: "username2",
			text:
				"text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
			upvotes: 2,
			date: "10/24/2021",
		},
		{
			title: "title3",
			username: "username3",
			text: "text3",
			upvotes: 24,
			date: "10/21/2021",
		},
		{
			title: "title1",
			username: "username1",
			text: "text1",
			upvotes: -4,
			date: "10/23/2021",
		},
		{
			title: "title2",
			username: "username2",
			text:
				"text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
			upvotes: 2,
			date: "10/24/2021",
		},
		{
			title: "title3",
			username: "username3",
			text: "text3",
			upvotes: 24,
			date: "10/21/2021",
		},
	]

	const [mode, setMode] = useState(0)
	const { colors } = useTheme()
	return (
		<SafeAreaView>
			<VStack>
				<HStack justifyContent="center" space={2}>
					<TouchableOpacity
						onPress={() => {
							setMode(0)
						}}
					>
						<Heading
							underline={mode === 0}
							color={mode === 0 ? colors.primary["500"] : colors.gray["400"]}
						>
							Following
						</Heading>
					</TouchableOpacity>
					<Heading>|</Heading>
					<TouchableOpacity
						onPress={() => {
							setMode(1)
						}}
					>
						<Heading
							underline={mode === 1}
							color={mode === 1 ? colors.primary["500"] : colors.gray["400"]}
						>
							General
						</Heading>
					</TouchableOpacity>
				</HStack>
				<ScrollView style={{ marginBottom: 60 }}>
					{dummyData.map((item, index) => (
						<Post {...item} key={index} />
					))}
				</ScrollView>
			</VStack>
		</SafeAreaView>
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
