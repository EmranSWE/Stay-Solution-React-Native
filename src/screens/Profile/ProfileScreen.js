import React from "react";
import { Image, ScrollView } from "react-native";
import images from "../../utils/images";
import { View } from "react-native";
import { Button, Divider, Text, useTheme } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Menubar from "../../components/Menu/Menubar";
const ProfileScreen = () => {
  const profileData = [
    { icons: "user", text: "Profile Details", link: "personal-details" },
    { icons: "cog", text: "Settings", link: "settings" },
    { icons: "credit-card", text: "Payment details", link: "payment-details" },
    { icons: "question", text: "FAQ", link: "faq" },
  ];
  const { theme } = useTheme();
  const navigation = useNavigation();

  const tabs = [
    { icon: 'home', label: 'Home', screen: 'Home' },
    { icon: 'search', label: 'Explore', screen: 'Login' },
    { icon: 'chat', label: 'Chat', screen: 'SignUp' },
    // { icon: 'bookmark', label: 'Save', screen: 'SaveScreen' },
    { icon: 'person', label: 'Profile', screen: 'Profile' }
  ];
  return (
    <View>
      <ScrollView>
        {/* Profile Pic Section */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <Image source={images.avatar} />

          <View>
            <Text h3 style={{ marginVertical: 10 }}>
              Lucy Bond
            </Text>
            <Text>lucybond08@gmail.co</Text>
          </View>
        </View>
        {/* Link Section */}
        <Divider width={5} color={theme?.colors?.primary} />
        <View style={{ marginTop: 50 }}>
          {profileData.map((profile, index) => (
            <View
              key={index}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Icon
                name={profile.icons}
                color="black"
                size={24}
                style={{ marginHorizontal: 20 }}
              />
              <Text>{profile.text}</Text>
              <Button
                title=">"
                loading={false}
                containerStyle={{
                  margin: 5,
                }}
                style={{ backgroundColor: "#fff" }}
                onPress={() => navigation.navigate(profile.link)}
              />
            </View>
          ))}
        </View>

        {/* Link Section */}
        <Divider width={5} color={theme?.colors?.primary} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <Icon
            name="user"
            color="black"
            size={24}
            style={{ marginHorizontal: 20 }}
          />
          <Text>Switch to Hosting</Text>
          <Button
            title=">"
            loading={false}
            containerStyle={{}}
            style={{ backgroundColor: "#fff" }}
            onPress={() => navigation.navigate(profile.link)}
          />
        </View>

        {/* Menubar */}
        <Menubar tabs={tabs} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
