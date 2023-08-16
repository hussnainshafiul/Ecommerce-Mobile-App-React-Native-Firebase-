import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./Home.styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../constants";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import ProductRow from "../components/products/ProductRow";
import { firebase } from "../config";
import { getProducts } from "../model/data";
const Home = () => {
  const [name, setName] = useState("");

  //fetching the products on the base of Gender Category
  const newArrivals = getProducts().filter(
    (product) => product.Gender === "girl"
  );
  const boysProducts = getProducts().filter(
    (product) => product.Gender === "Boys"
  );
  const menProducts = getProducts().filter(
    (product) => product.Gender == "Men"
  );
  const womenProducts = getProducts().filter(
    (product) => product.Gender == "Women"
  );

  //useEffect Hook for the firestore data

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("Users dont exists");
        }
      });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            <Text style={styles.User}>Hello {name.firstName} </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("OrderScreen")}
            >
              <MaterialIcons name="home" size={33} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>

        <Welcome />
        <Carousel />
        <View style={styles.title}>
          <View>
            <Text style={styles.titletxt}>Girls Apparels</Text>
            <ProductRow products={newArrivals} />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titletxt}>Boys Apparels</Text>

          <ProductRow products={boysProducts} />
        </View>

        <View style={styles.title}>
          <Text style={styles.titletxt}>Men Footwear</Text>

          <ProductRow products={menProducts} />
        </View>

        <View style={styles.title}>
          <Text style={styles.titletxt}>Women Footwear</Text>

          <ProductRow products={womenProducts} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
