import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, SIZES } from "../constants";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { firebase } from "../config";

const OnboardingScreen = ({ navigation }) => {
  const Spacing = 10; // Define the value of Spacing

  /*Setting up the useState for Email and Password*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function for login User

  loginUser = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error.message);
    }
  };
  //function to implement forget password
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: SIZES.xLarge,
              color: COLORS.primary,
              fontFamily: "semibold",
              marginVertical: Spacing * 3,
            }}
          >
            Login here
          </Text>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: SIZES.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back, you've been missed!
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: Spacing,
            backgroundColor: COLORS.lightWhite,
            marginVertical: Spacing,
            paddingHorizontal: Spacing * 2,
            paddingVertical: Spacing,
          }}
        >
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={COLORS.black}
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            autoCapitalize="none"
            autoCorrect={false}
            style={{
              flex: 1,
              paddingHorizontal: 5,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: Spacing,
            backgroundColor: COLORS.lightWhite,
            marginVertical: Spacing,
            paddingHorizontal: Spacing * 2,
            paddingVertical: Spacing,
          }}
        >
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color={COLORS.black}
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true} // To hide the password characters
            style={{
              flex: 1,
              paddingHorizontal: 5,
            }}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              forgetPassword();
            }}
          >
            <Text
              style={{
                fontFamily: "semibold",
                fontSize: SIZES.small,
                color: COLORS.primary,
                alignSelf: "flex-end",
              }}
            >
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => loginUser(email, password)}
          style={{
            padding: Spacing * 2,
            backgroundColor: COLORS.black,
            marginVertical: Spacing * 3,
            borderRadius: 10,
            shadowColor: COLORS.primary,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "regular",
              color: COLORS.white,
              textAlign: "center",
              fontSize: SIZES.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")} // Corrected navigation usage
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "bold",
              color: COLORS.primary,
              textAlign: "center",
              fontSize: SIZES.small,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
