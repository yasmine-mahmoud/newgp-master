import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Image, Text, Pressable } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

const MainSearch = ({ setkeyword }) => {
	const [advice, setAdvice] = React.useState([]);

	useEffect(() => {
		const getAdvice = () => {
			axios.get("http://192.168.1.10:3000").then((res) => {
				setAdvice(res.data);
			});
		};
		getAdvice();
	}, []);
	return (
		<View>
			<Pressable onPress={() => setkeyword(advice[0]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[0]?.Cuisine[0]} Cuisine</Text>
				<Image source={{ uri: advice[0]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
			<Pressable onPress={() => setkeyword(advice[3]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[3]?.Cuisine[0]} Cuisine</Text>
				<Image source={{ uri: advice[3]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
			<Pressable onPress={() => setkeyword(advice[5]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[5]?.Cuisine[0]} Cuisine</Text>
				<Image source={{ uri: advice[5]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
			<Pressable onPress={() => setkeyword(advice[8]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[8]?.Cuisine[0]} Cuisine</Text>
				<Image source={{ uri: advice[8]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
			<Pressable onPress={() => setkeyword(advice[13]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[13]?.Cuisine[0]} Cuisine</Text>
				<Image source={{ uri: advice[13]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
			<Pressable onPress={() => setkeyword(advice[17]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[17]?.Cuisine[1]}Cuisine</Text>
				<Image source={{ uri: advice[17]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
			<Pressable onPress={() => setkeyword(advice[28]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[28]?.Cuisine[1]} Cuisine</Text>
				<Image source={{ uri: advice[28]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
			<Pressable onPress={() => setkeyword(advice[38]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[38]?.Cuisine[0]} Cuisine</Text>
				<Image source={{ uri: advice[38]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>

			<Pressable onPress={() => setkeyword(advice[1]?.Cuisine[0])}>
				<Text style={{ margin: 10, fontSize: 20 }}>{advice[1]?.Cuisine[0]} </Text>
				<Image source={{ uri: advice[1]?.RecipePhoto }} style={{ width: 350, height: 155, margin: 15 }} />
			</Pressable>
			<Text></Text>
		</View>
	);
};

export default MainSearch;
