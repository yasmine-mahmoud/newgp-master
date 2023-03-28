import * as React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { foodMakerList } from "../assets/dummyData";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import FoodListItemComponent from '../components/FoodListItemComponent';
function FoodMaker() {
  const [text, onChangeText] = React.useState(null);
  let [Name, setName] = React.useState("j");

  const handleOnclick = () => {
    setName("f");
  };


  return (
    <SafeAreaView>
      <Text style={styles.text}>What's in your Fridge/Pantry?</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add ingredients...."
      ></TextInput>

      <View style={styles.button}>
        <Button color="#FF642F" title="Add" onPress={handleOnclick} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          marginTop: 20,
        }}
      >
        <FlatList
          data={foodMakerList}
          renderItem={({ item }) => <FoodListItemComponent item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  input: {
    height: 40,
    width: 244,
    borderWidth: 0.6,
    padding: 10,
    borderRadius: 2,
    top: 40,
    left: 20,
  },

  text: {
    top: 25,
    left: 25,
    fontSize: 18,
    fontStyle: "italic",
    letterSpacing: 0.5,
    fontWeight: "400",
  },

  button: {
    width: 150,
    right: 90,
    paddingRight: 90,
    paddingTop: 0.5,
    top: 1,
    left: 280,
  },

});

export default FoodMaker;
