import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";

const Details = ({ data, setData }) => {
	return (
		<View>
			<Button onPress={() => setData(null)}>back</Button>
			<Image source={{ uri: data.RecipePhoto }} style={{ width: 370, height: 170, margin: 10 }} />
			<Text style={{ margin: 10, fontSize: 22 }}>RecipeName: </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.RecipeName}</Text>
			<Text style={{ margin: 16 }}></Text>
			<Text style={{ margin: 10, fontSize: 22 }}>Cuisine: </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.Cuisine}</Text>
			<Text style={{ margin: 16 }}></Text>
			<Text style={{ margin: 10, fontSize: 22 }}>RecipeType: </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.RecipeType}</Text>
			<Text style={{ margin: 16 }}></Text>
			<Text style={{ margin: 10, fontSize: 22 }}>CookingTime: </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.CookingTime}</Text>
			<Text style={{ margin: 16 }}></Text>
			<Text style={{ margin: 10, fontSize: 22 }}>Ingredients: </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.Ingredients}</Text>
			<Text style={{ margin: 16 }}></Text>
			<Text style={{ margin: 10, fontSize: 22 }}>Steps: </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.Steps}</Text>
			<Text style={{ margin: 16 }}></Text>
			<Text style={{ margin: 10, fontSize: 22 }}>Servings </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.Servings}</Text>
			<Text style={{ margin: 16 }}></Text>
			<Text style={{ margin: 10, fontSize: 22 }}>Tags </Text>
			<Text style={{ margin: 10, fontSize: 15 }}>{data.Tags}</Text>
			<Text style={{ margin: 16 }}></Text>
		</View>
	);
};

export default Details;
