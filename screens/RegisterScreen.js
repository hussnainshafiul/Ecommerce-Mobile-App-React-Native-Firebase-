import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
// Import the MaterialIcons
import { COLORS, SIZES } from "../constants";
import { firebase } from "../config";
import { ScrollView } from "react-native-gesture-handler";

const RegisterScreen = () => {
  const Spacing = 10; // Define the value of Spacing

  //useState for all the fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [Address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");

  const checkAndRegister = () => {
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !country ||
      !mobileno ||
      !Address ||
      !occupation
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // All fields are filled, proceed with registration
    registerUser(email, password, firstName, lastName);
  };

  //function for registration of user

  registerUser = async (email, password, firstName, lastName) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://test-bcc09.firebaseapp.com",
          })
          .then(() => {
            alert("Verification email Sent");
          })
          .catch((error) => {
            alert(error.message);
          })
          .then(() => {
            firebase
              .firestore()
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                firstName,
                lastName,
                email,
                country,
                mobileno,
                Address,
                occupation,
              });
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff2" }}
    >
      <ScrollView>
        <View
          style={{ paddingHorizontal: 20, paddingLeft: 20, paddingTop: 10 }}
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
                marginVertical: Spacing * 2,
              }}
            >
              Register here
            </Text>
            <Text
              style={{
                fontFamily: "semibold",
                fontSize: SIZES.large,
                maxWidth: "80%",
                textAlign: "center",
                paddingTop: -20,
              }}
            >
              Don't have an account? Don't Worry!
            </Text>
          </View>

          <Text
            style={{
              fontSize: 23,
              fontWeight: "500",
              color: "#333",
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            Registration
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 4,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <MaterialIcons
              name="person"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="First Name"
              onChangeText={(firstName) => setFirstName(firstName)}
              autoCorrect={false}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <MaterialIcons
              name="person"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Last Name"
              onChangeText={(lastName) => setLastName(lastName)}
              autoCorrect={false}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <MaterialIcons
              name="location-pin"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Country"
              onChangeText={(country) => setCountry(country)}
              autoCorrect={false}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <MaterialIcons
              name="local-phone"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="MobileNo"
              onChangeText={(mobileno) => setMobileno(mobileno)}
              autoCorrect={false}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Entypo
              name="address"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Address"
              onChangeText={(Address) => setAddress(Address)}
              autoCorrect={false}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <MaterialIcons
              name="business-center"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Occupation"
              onChangeText={(occupation) => setOccupation(occupation)}
              autoCorrect={false}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <MaterialIcons
              name="email"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Email"
              onChangeText={(email) => setEmail(email)}
              autoCorrect={false}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "white",
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <MaterialIcons
              name="lock"
              size={20}
              color="black"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Password"
              onChangeText={(password) => setPassword(password)}
              autoCorrect={false}
              secureTextEntry={true}
              style={{
                flex: 1,
                paddingHorizontal: 5,
                color: "black",
              }}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 4,
          }}
        >
          <TouchableOpacity
            onPress={checkAndRegister}
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 40,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
