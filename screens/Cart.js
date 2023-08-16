import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../constants";
import { getProducts, getProduct } from "../model/data";

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Add a listener to fetch cart items when the screen gains focus
    const unsubscribe = navigation.addListener("focus", () => {
      fetchCartItems();
    });

    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, [navigation]);

  // Function to increment the quantity of a product in the cart
  const incrementQuantity = (productId) => {
    const updatedItems = [...cartItems, productId];
    updateCart(updatedItems);
  };

  // Function to decrement the quantity of a product in the cart
  const decrementQuantity = (productId) => {
    const index = cartItems.indexOf(productId);
    if (index > -1) {
      const updatedItems = [...cartItems];
      updatedItems.splice(index, 1);
      updateCart(updatedItems);
    }
  };

  // Function to update the cart in AsyncStorage and state
  const updateCart = async (updatedItems) => {
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(updatedItems));
      setCartItems(updatedItems);
      calculateTotalPrice(updatedItems);
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  // Function to fetch cart items from AsyncStorage
  const fetchCartItems = async () => {
    try {
      const items = await AsyncStorage.getItem("cartItems");
      if (items) {
        const parsedItems = JSON.parse(items);
        setCartItems(parsedItems);
        calculateTotalPrice(parsedItems);
      } else {
        setCartItems([]);
        calculateTotalPrice([]);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  // Function to calculate the total price of items in the cart
  const calculateTotalPrice = (items) => {
    let totalPrice = 0;
    items.forEach((id) => {
      const product = getProduct(id);
      if (product) {
        totalPrice += parseFloat(product.price);
      }
    });
    setTotal(totalPrice);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = async (id) => {
    const updatedItems = cartItems.filter((itemId) => itemId !== id);
    try {
      await AsyncStorage.setItem("cartItems", JSON.stringify(updatedItems));
      setCartItems(updatedItems);
      calculateTotalPrice(updatedItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Function to render individual products in the cart
  const renderProducts = (productId, index) => {
    const product = getProduct(productId);
    if (!product) return null;

    const quantity = cartItems.filter((id) => id === productId).length;
    const hasRendered = cartItems.slice(0, index).includes(productId);

    if (!hasRendered) {
      return (
        <View style={styles.cartItemContainer} key={index}>
          {/* Render product image */}
          <View style={styles.cartItemImageContainer}>
            <Image
              source={product.image}
              style={styles.cartItemImage}
              resizeMode="contain"
            />
          </View>
          {/* Render product details */}
          <View style={styles.cartItemDetails}>
            <Text style={styles.cartItemTitle}>{product.Title}</Text>
            <Text style={styles.cartItemPrice}>Price: ${product.price}</Text>
            {/* Render quantity controls */}
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decrementQuantity(productId)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => incrementQuantity(productId)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
              {/* Remove item button */}
              <TouchableOpacity onPress={() => removeItemFromCart(product.id)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
    return null;
  };

  // Function to handle the checkout process
  const checkOut = async () => {
    try {
      // Clear the cart items from AsyncStorage
      await AsyncStorage.removeItem("cartItems");
    } catch (error) {
      console.error("Error clearing cart:", error);
      return;
    }

    // Generate a summary of detailed product information for checkout
    const detailedProductSummary = cartItems
      .map((productId) => {
        const product = getProduct(productId);
        if (product) {
          const quantity = cartItems.filter((id) => id === productId).length;
          const totalPrice = parseFloat(product.price) * quantity;
          return {
            id: productId,
            image: product.image,
            title: product.Title,
            price: product.price,
            quantity,
            totalPrice,
          };
        }
        return null;
      })
      .filter((product) => product !== null);

    // Navigate to the order screen with product summary and total price
    navigation.navigate("OrderScreen", {
      productSummary: detailedProductSummary,
      total,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.screenTitle}>My Cart</Text>
        {cartItems.length > 0 ? (
          cartItems.map(renderProducts)
        ) : (
         <Image source={require("../assets/7807.png_860-removebg-preview.png")} style={{  resizeMode: 'contain',
                marginLeft: -10,
                marginTop: 5,
                width: SIZES.width+35,
                height: SIZES.height-200,
                opacity: 0.76}}/>
        )}
      </ScrollView>
      <View style={styles.totalContainer}>
        <Text style={styles.totalPriceText}>
          Total Price: 
          <Text style={styles.totalPriceValue}> ${total.toFixed(2)}</Text>
        </Text>
        <TouchableOpacity
          onPress={checkOut}
          style={[
            styles.checkoutButton,
            { backgroundColor: total > 0 ? COLORS.black : COLORS.gray2 },
          ]}
          disabled={total === 0}
        >
          <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  screenTitle: {
    fontSize: 25,
    fontFamily: 'bold',
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingTop: 48,
    marginBottom: 0,
    color: COLORS.black,
    
   
  },
  emptyCartText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
    color: COLORS.black,
  },
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  cartItemImageContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  cartItemImage: {
    width: 80,
    height: 80,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.black,
  },
  cartItemPrice: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 26,
    color: COLORS.black,
  },
  quantity: {
    fontSize: 16,
    color: COLORS.red,
  },
  removeButton: {
    fontSize: 14,
    color: COLORS.red,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
    paddingTop:20,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray2,
    backgroundColor: COLORS.lightWhite, // Added background color
    marginHorizontal:-10
  },
  totalWrapper: {
    flex: 1,
    flexDirection: "row"
    
  },
  totalPriceText: {
    fontSize: SIZES.large,
    fontFamily: "semibold"
  },
  totalPriceValue: {
    fontFamily: 'regular',
    color: COLORS.black,
    fontSize: 16
  },
  checkoutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginLeft: 15,
    alignItems: "center", 
    justifyContent: "center", 
  },
  checkoutButtonText: {
    color: COLORS.white, 
    fontSize: SIZES.medium,
    fontWeight: "bold",
  },
  
});

export default Cart;
