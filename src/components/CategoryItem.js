import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../common/styles";

function CategoryItem({ name, imageUrl, index, active, handlePress }) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active
            ? { backgroundColor: "rgb(241, 186, 87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image}></Image>
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    marginRight: 10,
    backgroundColor: "white",

    alignItems: "center",
    justifyContent: "center",
  },
  elevation,
  image: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
  },
});

export default CategoryItem;
