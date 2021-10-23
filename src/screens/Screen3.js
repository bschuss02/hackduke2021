import React, { useState, useEffect } from "react"
import { StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Container,
	HStack,
	Heading,
	Icon,
	Avatar, 
	Center,
	Box,
	VStack
} from "native-base"
import { signout } from "../redux/actions"
import Post from "../components/Post"
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"
import { useTheme } from "styled-components"


function Screen3({ signoutAction }) {
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
	const navigation = useNavigation()
	const [mode, setMode] = useState(0)
	console.log(mode)
	const { colors } = useTheme()

	return (
		<SafeAreaView style={styles.container}>
			 <Avatar
        bg="green.500"
        source={{
          uri: "https://pbs.twimg.com/profile_images/1188747996843761665/8CiUdKZW_400x400.jpg",
        }}
      >
     
      </Avatar>
		<HStack style ={styles.HackStack1}>
		<Box rounded="lg"
      overflow="hidden"
		bg={colors.tertiary["300"]}
      borderColor="coolGray.200">

			<Text>Username</Text></Box>
	<Box bg={colors.tertiary["300"]}  rounded ='lg'><Text> Follow</Text></Box>


		</HStack>
	<HStack style ={styles.Hstack2entire}>
		<Box bg={colors.tertiary["300"]}  rounded ='lg'>
		<VStack style={styles.HStack2}>
		<Text>383838</Text>
		<Text> Posts</Text>
		</VStack>
		</Box >
		<Box bg={colors.tertiary["300"]}  rounded ='lg' >
		<VStack style={styles.HStack2}>
		<Text>383838</Text>
		<Text> Following</Text>
		</VStack>
		</Box>
		<Box  bg={colors.tertiary["300"]}  rounded ='lg'>
		<VStack style={styles.HStack2}>
		<Text>383838</Text>
		<Text> Follwers</Text>
		</VStack>
		</Box>
		<Box bg={colors.tertiary["300"]}  rounded ='lg' >
		<VStack style={styles.HStack2}>
		<Text>383838</Text>
		<Text> Upvotes</Text>
		</VStack>
		</Box>
	</HStack>
<HStack >
<TouchableOpacity onPress={() => {
							setMode(0)
						}} >
	<Text style={styles.Headers}
							underline={mode === 0}
							color={mode === 0 ? colors.primary["500"] : colors.gray["400"]}
						>
							Posts
						</Text>
					</TouchableOpacity>
					<Text>|</Text>
					<TouchableOpacity
						onPress={() => {
							setMode(1)
						}}
					>
						<Text style={styles.Headers}
							underline={mode === 1}
							color={mode === 1 ? colors.primary["500"] : colors.gray["400"]}
						>
							Upvoted
						</Text>
						</TouchableOpacity>
						</HStack>
						<ScrollView style={{ marginBottom: 60 }}>
					{dummyData.map((item, index) => (
						<Post {...item} key={index} />
					))}
				</ScrollView>
		</SafeAreaView>
	)
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
	signoutAction: () => dispatch(signout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Screen3)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
		alignItems: "center",
		
	},

	HStack2: {
		
		alignItems: "center",
		
	},
	Hstack2entire: {
		paddingBottom:15,
		width: "80%",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	HackStack1: {
		padding:15,
		width:"40%",
		justifyContent: "space-between"
	},
	Headers:{
		fontSize:20,
	}


})
