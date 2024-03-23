import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ imageSource, heading, reviewCount }) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.reviewContainer}>
          <Ionicons name="star" size={16} color="gold" />
          <Ionicons name="star" size={16} color="gold" />
          <Ionicons name="star" size={16} color="gold" />
          <Text style={styles.reviewText}>{reviewCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    marginLeft: 5,
  },
});

export default Card;
