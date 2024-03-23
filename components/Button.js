import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>   
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#069B77", // Button background color
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 5, // Border radius to create rounded corners
  },
  buttonText: {
    color: "white", // Button text color
    fontSize: 16, // Button text size
    fontWeight: "bold", // Button text weight
    textAlign: "center", // Align text to center
  },
});

export default Button;
