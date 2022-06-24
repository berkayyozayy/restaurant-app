import { Text, View, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Take your</Text>
      <Text style={styles.boldHeader}> Meal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 36,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
    marginHorizontal: 25,
  },
});

export default Header;
