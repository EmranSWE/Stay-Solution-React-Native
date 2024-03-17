import { Button, Divider, Input, Text, useTheme } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import * as React from "react";
import { ScrollView, View } from "react-native";
const SignUpScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleLogin = () => {
    console.log("Username/Email:", username);
    console.log("Password:", password);
    // Example: fetch('your-backend-url/login', { method: 'POST', body: { username, password }})
  };
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 20 }}>
          {/* Header Sections */}
          <Text h3>Let’s explore together!</Text>
          <Text>
            Create your Place account to explore your dream place to live
            across the whole world!
          </Text>
          {/* Username/Email Input Field */}
          <View style={{ flex: 1, marginVertical: 20 }}>
            <Input
              label={"Username"}
              value={username}
              onChangeText={(text) => setUsername(text)}
              placeholder="Username/Email"
              // containerStyle={{ marginBottom: 10,borderColor:"2px solid red" }}
              style={{ borderColor: "green", borderRadius: 50 }}
            />
            {/* Password Input Field */}
            <Input
              label={"Password"}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              secureTextEntry={true}
              containerStyle={{ marginBottom: 10 }}
            />

             {/* Password Input Field */}
             <Input
              label={"Phone Number"}
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Phone Number"
              containerStyle={{ marginBottom: 10 }}
            />
            {/* Login Button */}
            <Button
              title="Create account"
              onPress={handleLogin}
              titleStyle={{ fontSize: 23, color: "#fff" }}
              buttonStyle={{ borderRadius: 20, backgroundColor: "#917AFD" }}
            />
          
          </View>
          <View style={{ marginVertical: 20 }}>
            <Divider width={5} color={theme?.colors?.primary} />
            <Button
              title="Sign In With Apple"
              onPress={handleLogin}
              titleStyle={{ fontSize: 23, color: "#fff" }}
              buttonStyle={{
                borderRadius: 20,
                backgroundColor: "#111",
                marginTop: 20,
              }}
            >
              {" "}
              <Icon
                name="apple"
                color="white"
                size={24}
                style={{ marginHorizontal: 20 }}
              />
              Sign in with Apple{" "}
            </Button>
            <Button
              title=""
              onPress={handleLogin}
              titleStyle={{ fontSize: 23, color: "#111" }}
              buttonStyle={{
                borderRadius: 20,
                backgroundColor: "#fff",
                marginTop: 20,
              }}
            >
              <Icon
                name="google"
                color="black"
                size={24}
                style={{ marginHorizontal: 20 }}
              />
              Sign in with Google
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
