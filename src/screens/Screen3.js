import React, { useState, useEffect } from "react"
import { StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native"
import {
	NativeBaseProvider,

	Text,
	
	
	HStack,
	Heading,
	
	Avatar, 
	
	Box,
	VStack,
	Divider,
} from "native-base"
import { signout } from "../redux/actions"
import Post from "../components/Post"
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"
import { useTheme } from "styled-components"
import { margin } from "styled-system"


function Screen3({ signoutAction }) {
	const dummyData = [
		{
			title: "title1",
			username: "username1",
			text: "text1",
			upvotes: -4,
			date: 1635017815494,
		},
		{
			title: "title2",
			username: "username2",
			text:
				"text2sodfjgnabsjrbgaojribgaiojrebgiuerbgiuwerbgiaewrgihjergbaoeirjbgaojrsfbgajosfbgoajsfbgajksfgbajkbfskjgbasfkjb",
			upvotes: 2,
			date: 1635017815494,
		},
		{
			title: "title3",
			username: "username3",
			text: "text3",
			upvotes: 24,
			date: 1635017815494,
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
	const[follow, setFollow] = useState(false)
	const [mode, setMode] = useState(0)
	console.log(follow)
	const { colors } = useTheme()

	return (
		<SafeAreaView style={styles.container}>
			 <Avatar
        //bg="green.500"
		style={{ flex: 1 }}
        source={{
          uri: "https://static.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest/top-crop/width/360/height/360?cb=20120311133235",
        }}
      >
     
      </Avatar>
		<HStack style ={styles.HackStack1}>
		<Box rounded="lg"
      overflow="hidden"
		bg={colors.primary["200"]}
      borderColor="coolGray.200"
	  style ={styles.boxing}>

			<Text>Username</Text></Box>
			<TouchableOpacity onPress= {() => 
			setFollow(!follow)}>
			
	<Box bg={colors.primary["200"]} style ={styles.boxing} rounded ='lg'><Text>{follow ?  "Follow" : "Unfollow"}</Text></Box>
		</TouchableOpacity>

		</HStack>
		<Divider/>
	<HStack style ={styles.Hstack2entire}>
		<TouchableOpacity>
		<Box bg={colors.primary["200"]}  rounded ='lg' shadow={5}>
			
		<VStack style={styles.HStack2}>
		<Text style={{fontWeight: 'bold'}}>383838</Text>
	
		<Text style={{fontSize: 12}}> Following</Text>
		</VStack>
		</Box>
		</TouchableOpacity>
		<TouchableOpacity>
		<Box  bg={colors.primary["200"]} shadow={5} rounded ='lg'>
		<VStack style={styles.HStack2}>
		<Text style={{fontWeight: 'bold'}}>383838</Text>
		<Text style={{fontSize: 12}}> Followers</Text>
		</VStack>
		</Box>
		</TouchableOpacity>
		<Box bg={colors.primary["200"]}  shadow={5} rounded ='lg' >
		<VStack style={styles.HStack2}>
		<Text style={{fontWeight: 'bold'}}>383838</Text>
		<Text style={{fontSize: 12}}> Upvotes</Text>
		</VStack>
		</Box>
	</HStack>
	<Divider/>
<HStack style= {{justifyContent:"space-between" , width: "50%", }}>
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
						
						<ScrollView style={{ marginBottom: 5 }}>
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
		padding: 5,
		
	},
	Hstack2entire: {
		paddingBottom:15,
		width: "70%",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	HackStack1: {
		padding:15,
		width:"55%",
		justifyContent: "space-between",
		marginHorizontal:0
	},
	Headers:{
		fontSize:20,
	},
	boxing:{
		
		paddingHorizontal: 10,

	}

})
