import React, { useState, useEffect } from "react"
import {
	StyleSheet,
	SafeAreaView,
	TouchableOpacity,
	SafeAreaViewBase,
	Dimensions,
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
	Avatar,
} from "native-base"
import { signout } from "../redux/actions"

import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux"
import { useNavigation } from "@react-navigation/core"

function Comment({ username, timestamp, text, uid, avatar }) {
	return (
		<SafeAreaView>
			<Box style={{ margin: 10 }} bg="primary.500" rounded="lg" shadow={8}>
				<VStack space={2} style={{ padding: 15, paddingTop: 2 }}>
					<HStack justifyContent="space-between" alignItems="center">
						<HStack space={3} alignItems="center">
							<Avatar source={{ uri: avatar }} />
							<Text style={{ fontSize: 20 }}>{username}</Text>
						</HStack>
						<Text>{new Date(timestamp).toLocaleDateString()}</Text>
					</HStack>
					<Divider />
					<View>
						<Text style={{ width: Dimensions.get("window").width * 0.72 }}>
							{text}
						</Text>
					</View>
				</VStack>
			</Box>
		</SafeAreaView>
	)
}

export default Comment
