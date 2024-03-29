import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Categories from "./src/components/Categories";

import Header from "./src/components/Header";
import Restaurants from "./src/components/Restaurants";
import Search from "./src/components/Search";

export default function App() {
  const [term, setTerm] = useState("Burger");

  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./src/assets/images/cake.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/assets/images/steak.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/assets/images/smoothies.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} setTerm={setTerm} term={term} />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
