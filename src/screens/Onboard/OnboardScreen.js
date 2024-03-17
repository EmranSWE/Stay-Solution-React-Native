import * as React from "react";
import styles from "./OnboardScreen.styles";
import { FlatList, Image, ScrollView, View } from "react-native";
import images from "../../utils/images";
import { Button, Text } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const imageArray = [
  images.onboard1,
  images.onboard2,
  images.onboard3,
  images.onboard4,
  images.onboard5,
  images.onboard6,
  images.onboard7,
  images.onboard8,
  images.onboard9,
];

const OnboardScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => <Image source={item} style={styles.image} />;
  return (
    <View>
      <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
        {/* Onboard Image Gallery */}
          <ScrollView horizontal={true} style={{ width: "95%",position:"fixed" }}>
            <View style={{ padding: 10, margin: 5 }}>
              <FlatList
                data={imageArray}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
              />
            </View>
          </ScrollView>

        <Text style={styles.text}>New Place, New Home!</Text>
        <Text style={{ textAlign: "center", marginBottom: 20 }}>
          Are you ready to uproot and start over in a new area? Place will help
          you on your journey!
        </Text>
        {/* Button */}
        <Button
          title="Log in"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "#917AFD",
            borderRadius: 50,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23, color: "#fff" }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 200,
            marginVertical: 10,
            width: "full",
          }}
          onPress={() => navigation.navigate("Login")}
        />

        <Button
          title="Sign Up"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "#fff",
            borderRadius: 50,
          }}
          titleStyle={{ fontSize: 23, color: "#111" }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 200,
            marginVertical: 10,
            width: "full",
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button
          title="Home"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "#fff",
            borderRadius: 50,
          }}
          titleStyle={{ fontSize: 23, color: "#111" }}
          containerStyle={{
            marginHorizontal: 50,
            height: 50,
            width: 200,
            marginVertical: 10,
            width: "full",
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("Profile")}
        />
      </ScrollView>
    </View>
  );
};

export default OnboardScreen;
