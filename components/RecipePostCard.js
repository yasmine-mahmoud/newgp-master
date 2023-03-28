import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { width } from "../constants/Layout";
import { AntDesign } from "@expo/vector-icons";
import Stars from "react-native-stars";

const RecipePostCard = ({ recipePost }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <View style={styles.postContainer}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: recipePost.userImage }}
          style={{ width: 50, height: 50, borderRadius: 50, margin: 10 }}
        />
        <Text style={{ fontSize: 22, fontWeight: "700" }}>{recipePost.by}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 5, maxWidth: !readMore ? "80%" : "100%" }}>
          <Text
            numberOfLines={readMore ? undefined : 2}
            style={{ fontSize: 16 }}
          >
            {recipePost.description}
          </Text>
          {readMore && (
            <TouchableOpacity onPress={() => setReadMore(false)}>
              <Text style={{ fontSize: 14, fontWeight: "800" }}>Less</Text>
            </TouchableOpacity>
          )}
        </View>
        {!readMore && (
          <View style={{ marginRight: 3 }}>
            <TouchableOpacity onPress={() => setReadMore(true)}>
              <Text style={{ fontSize: 14, fontWeight: "800" }}>Read More</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View
        style={{
          marginTop: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: recipePost.image }}
          style={{ height: 190, borderRadius: 10, width: width - 30 }}
        />
      </View>
      <View style={styles.starsContainer}>
        <View style={{ marginLeft: 10 }}>
          <Stars
            half={true}
            default={+recipePost.stars}
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
        <TouchableOpacity style={styles.commentButton}>
          <Text style={{ fontSize: 17, fontWeight: "900" }}>Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecipePostCard;

const styles = StyleSheet.create({
  postContainer: {
    width: width - 20,
    // height: 330,
    borderRadius: 10,
    backgroundColor: "#f0f8ff",
    marginTop: 20,
  },
  starsContainer: {
    marginTop: 15,
    height: 30,
    backgroundColor: "Beige",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  commentButton: {
    width: 120,
    height: 40,
    backgroundColor: "#6495ed",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 5,
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
