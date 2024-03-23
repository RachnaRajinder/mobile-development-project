import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Cards from "../components/Cards";
import HotelCard from "../components/HotelCard";
import Button from "../components/Button";

const HomeScreens = () => {
    const handlePress = () => {
        console.log("Button pressed");
    };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A0A0A0"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Countries</Text>
        <View style={styles.countryContainer}>
          <View style={[styles.countryBox, { marginRight: 10 }]}>
            <Image
              source={require("../assets/img_3.jpg")}
              style={styles.countryImage}
            />
            <Text style={styles.countryText}>Spain</Text>
          </View>
          <View style={[styles.countryBox, { marginRight: 10 }]}>
            <Image
              source={require("../assets/img_2.jpg")}
              style={styles.countryImage}
            />
            <Text style={styles.countryText}>Maldev</Text>
          </View>
          <View style={[styles.countryBox, { marginRight: 10 }]}>
            <Image
              source={require("../assets/img_4.jpg")}
              style={styles.countryImage}
            />
            <Text style={styles.countryText}>Rome</Text>
          </View>
          <View style={styles.countryBox}>
            <Image
              source={require("../assets/img_5.jpg")}
              style={styles.countryImage}
            />
            <Text style={styles.countryText}>Finland</Text>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Recommendations</Text>
          <View>
            <Cards
              imageSource={require("../assets/centa.jpg")}
              heading={<Text>Santa Calus Village</Text>}
              reviewCount={4.5}
            />
          </View>
        </View>
        <View>
          <Text style={styles.heading}>NearBy Hotels</Text>
          <HotelCard
            imageSource1={require("../assets/ch.jpg")}
            text1={<Text>Hotel Alpha</Text>} 
            imageSource2={require("../assets/lh.jpg")}
            text2={<Text>Hotel Lapland</Text>}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12372A",
    paddingTop: 40, // Add space from the top
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: "#12372A",
    borderBottomWidth: 1,
    borderBottomColor: "#12372A",
  },
  iconContainer: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#12372A",
    color: "#000",
    borderWidth: 1, // Add border width
    borderColor: "white", // Set border color
  },
  content: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20, // Only one definition for marginBottom
    color: "white",
  },
  countryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    margin: "auto",
  },
  countryBox: {
    width: "30%", // Adjusted width to accommodate spacing
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20, // Add space between country boxes
  },
  countryImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Use "cover" to maintain aspect ratio and fill the container
    borderRadius: 10, // Set border radius for rounded corners
    overflow: "hidden", // Clip the image to the border radius
  },
  countryText: {
    fontSize: 10,
    marginTop: 2,
    color: "white",
  },
});

export default HomeScreens;