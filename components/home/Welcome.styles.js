import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginHorizontal: 12
    },
    welcomeTxt : {
        fontSize: SIZES.xxLarge -20,
        fontFamily: "bold",
        marginHorizontal: 9,
        marginBottom: -12
       
    },
   searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 45,
    marginHorizontal:12
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
    marginHorizontal: 9
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.black,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -2,
    marginRight: 5
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
    
  },



})

export default styles