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

function Contact({ icon, link, description }) {
	const { colors } = useTheme()
	return (
		<SafeAreaView>
			<Box style={{ margin: 10 }} shadow={8}>
				<VStack space={0}>
					<TouchableOpacity>
						<VStack
							space={4}
							style={{ padding: 15 }}
							rounded="5"
							bg={colors.primary["200"]}
						>
							<HStack>
								<TouchableOpacity>
									<Icon as={AntDesign} name={icon} marginRight="30" />
								</TouchableOpacity>
								<Text
									style={{ color: "black", paddingLeft: 20, paddingTop: 5 }}
									onPress={() => Linking.openURL(link)}
								>
									{link}
								</Text>
							</HStack>
							<Divider
								style={{ backgroundColor: colors.gray["400"], height: 0.5 }}
							/>
							<Text style={{ width: Dimensions.get("window").width * 0.78 }}>
								{description}
							</Text>
						</VStack>
					</TouchableOpacity>
				</VStack>
			</Box>
		</SafeAreaView>
	)
}

export default Contact
