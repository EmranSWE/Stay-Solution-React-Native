// styles.js
import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const imageWidth = width / 3;
const imageHeight = 110;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    margin: 3,
  },
  text :{
    fontSize:24,
    textAlign:"center",
    fontWeight:"bold"
  }
});

export default styles;
