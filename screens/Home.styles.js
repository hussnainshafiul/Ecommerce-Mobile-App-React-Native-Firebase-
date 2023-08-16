import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const styles = StyleSheet.create({
  text: {
    fontFamily: "bold",
    fontSize: 40,
  },
  appBarWrapper: {
    marginHorizontal: 12,
    marginTop: SIZES.small-2,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  User: {
    fontFamily: "semibold",
    color: COLORS.primary,
    fontSize: 18,
    marginLeft: 7,
  },
  title:{ marginTop: SIZES.medium, marginHorizontal: 10},
  titletxt: { fontFamily: "semibold", fontSize: SIZES.xLarge - 2 , paddingHorizontal: 5, }
});

export default styles;
