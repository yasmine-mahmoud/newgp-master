import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Stars from "react-native-stars";
import { width } from "../constants/Layout";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const FoodListItemComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{item.name}</Text>
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text>Added by {item.by}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Stars
          half={true}
          default={+item.stars}
          spacing={4}
          starSize={30}
          count={5}
          fullStar={
            <AntDesign name="star" size={24} style={[styles.myStarStyle]} />
          }
          emptyStar={
            <AntDesign
              name="star"
              size={24}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={
            <AntDesign name="star" size={24} style={[styles.myStarStyle]} />
          }
        />
      </View>
      <View
        style={{
          margin: 10,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View></View>
        <View>
          <Text style={{ color: "#69d2e7" }}>
            You have all {item.countOfIngredients} ingredients
          </Text>
        </View>
        <TouchableOpacity>
          <MaterialIcons
            name="favorite"
            size={24}
            color={item.favorite ? "#fe4365" : "white"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodListItemComponent;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: width * 0.9,
    borderWidth: 1,
    borderColor: "black",
  },
  myStarStyle: {
    color: "#FF642F",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
});
