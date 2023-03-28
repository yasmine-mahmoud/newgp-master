import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { RecipePosts } from "../assets/dummyData";
import RecipePostCard from "../components/RecipePostCard";
function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={RecipePosts}
        renderItem={({ item }) => {
          return <RecipePostCard recipePost={item} />;
        }}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flex: 1,
  },
});
