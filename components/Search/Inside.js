import axios from "axios";
import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";

function Inside({ keyword, setkeyword, setData }) {
	const [advice2, setAdvice2] = React.useState([]);
	useEffect(() => {
		const getAdvice2 = () => {
			axios.get(`http://192.168.1.10:3000/${keyword}`).then((res) => {
				setAdvice2(res.data);
			});
		};
		getAdvice2();
	}, []);
	return advice2?.map((item) => (
		<Pressable
			onPress={() => {
				setData(item);
				setkeyword("");
			}}>
			<Text style={{ margin: 10, fontSize: 20 }}>{item.RecipeName}</Text>

			<Image source={{ uri: item.RecipePhoto }} style={{ width: 370, height: 150, margin: 10 }} />
		</Pressable>
	));
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

export default Inside;
