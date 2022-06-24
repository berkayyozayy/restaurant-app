import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { elevation } from "../common/styles";

function Search({ setTerm }) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, food.."
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleEndEditing}
        value={input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  input: {
    marginLeft: 10,
    fontSize: 20,
  },
});

export default Search;
