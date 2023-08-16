import { View, Text , TextInput, TouchableOpacity, Image} from "react-native";
import React from "react";
import styles from "./Welcome.styles";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt}>Lets Find Your </Text>
        <Text style={styles.welcomeTxt}>
          Exclusive Outfit
          <Entypo name="emoji-flirt" size={36} />
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            placeholder="What are you looking for?"
            onPressIn={()=> navigation.navigate("Search")}
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=> navigation.navigate("Search")}>
          <Image
            source={require("../../assets/search.png")}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
