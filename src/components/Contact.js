import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	SafeAreaViewBase,
	Dimensions,
	Linking,
} from "react-native"
import {
	NativeBaseProvider,
	View,
	Text,
	Button,
	Container,
	HStack,
	VStack,
	Heading,
	Icon,
	Box,
	Divider,
} from "native-base"
import { signout } from "../redux/actions"

import { Ionicons, AntDesign } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"
import { useTheme } from "styled-components"

function Contact({ icon, link, description, platform, info, text }) {
	const iconsLookup = {
		twitter: "twitter",
		insta: "instagram",
		facebook: "facebook-square",
		phone: "phone",
		email: "mail",
	}

	const linkLookup = {
		twitter: "https://twitter.com/",
		insta: "https://instagram.com/" + info,
		facebook: "https://www.facebook.com/" + info,
		phone: "tel:+" + info,
		email: "mailto:" + info,
	}

	const { colors } = useTheme()
	return (
		<SafeAreaView>
			<Box style={{ margin: 10 }} shadow={8}>
				<VStack space={0}>
					<VStack
						space={4}
						style={{ padding: 15 }}
						rounded="5"
						bg={colors.primary["300"]}
					>
						<TouchableOpacity
							onPress={() => {
								Linking.openURL(linkLookup[platform])
							}}
						>
							<HStack justifyContent="flex-start">
								<Icon as={AntDesign} name={iconsLookup[platform]} />

								<Text
									style={{
										color: "black",
										paddingLeft: 20,
										paddingTop: 5,
										textDecorationLine: "underline",
									}}
								>
									{info}
								</Text>
							</HStack>
						</TouchableOpacity>
						<Divider
							style={{ backgroundColor: colors.gray["400"], height: 0.5 }}
						/>
						<Text style={{ width: Dimensions.get("window").width * 0.78 }}>
							{text}
						</Text>
					</VStack>
				</VStack>
			</Box>
		</SafeAreaView>
	)
}

export default Contact
