import { StyleSheet, Text, View, Image } from "react-native";

const HotelCard = ({ imageSource1, text1, imageSource2, text2 }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.column}>
        <Image source={imageSource1} style={styles.image} />
        <Text style={styles.text}>{text1}</Text>
      </View>
      <View style={[styles.column, { marginLeft: 10 }]}>
        <Image source={imageSource2} style={styles.image} />
        <Text style={styles.text}>{text2}</Text>
      </View>
    </View>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#B3B5C8",
    paddingVertical: 10,
    borderRadius: 10,
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
});
