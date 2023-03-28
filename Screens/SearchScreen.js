import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput, Image } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Button, IconButton, MD3Colors } from "react-native-paper";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { set } from "react-native-reanimated";
import MainSearch from "../components/Search/MainSearch";
import Inside from "../components/Search/Inside";
import Details from "../components/Search/Details";

function Search() {
	const [text, onChangeText] = React.useState(null);
	let [Name, setName] = React.useState("j");
	let [keyword, setkeyword] = React.useState("");
	let [data, setData] = React.useState(null);
	console.log(keyword);
	const handleOnclick = () => {
		setName("f");
	};

	return (
		<ScrollView>
			<SafeAreaView>
				<Text style={styles.text}>Search</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChangeText}
					value={text}
					placeholder=". . . . . . . . . . . . . "></TextInput>
				<IconButton icon="magnify" style={styles.icon} iconColor={MD3Colors.error60} size={30} onPress={() => handleOnclick} />
				{keyword && <Button onPress={() => setkeyword("")}>back</Button>}
				{keyword ? (
					<Inside keyword={keyword} setkeyword={setkeyword} setData={setData} />
				) : data ? (
					<Details setData={setData} data={data} />
				) : (
					<MainSearch setkeyword={setkeyword} />
				)}
				{/* {advice?.map((img) => (
					<View style={{ display: "flex" }}>
						<Text style={{ margin: 10 }}>{img.Cuisine}</Text>
						<Image source={{ uri: img.RecipePhoto }} style={{ width: 150, height: 150, margin: 10 }} />
					</View>
				))} */}
			</SafeAreaView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	imageGrid: {
		flex: 1,
		marginVertical: 20,
	},
	input: {
		height: 40,
		width: 310,
		borderWidth: 0.6,
		padding: 10,
		borderRadius: 2,
		top: 40,
		left: 25,
	},

	text: {
		top: 25,
		left: 30,
		fontSize: 18,
		fontStyle: "italic",
		letterSpacing: 0.5,
		fontWeight: "400",
	},

	icon: {
		size: 24,
		color: "#FF642F",
		left: 280,
		top: -8,
	},
});

export default Search;
