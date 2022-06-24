import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect } from "react";
import RestaurantItem from "./RestaurantItem";

function Restaurants({ term }) {
  const [{ data, error, loading }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size="large" marginVertical={35} />;
  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 25,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default Restaurants;
