import * as React from "react";
import styles from "./HomeScreen.styles";
import { Button, Card, Icon, Input, Tab, Text } from "@rneui/themed";
import { View } from "react-native";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <View>
      <ScrollView>
      {/* Header Section */}
      <View>
        <Text>Find your place in</Text>
        <Text h4>Dhaka,Bangladesh</Text>
        <Input label={"Search"}></Input>
      </View>
      <View>
        <Text h4>What do you need?</Text>
        <Tab value={index} onChange={setIndex} dense>
          <Tab.Item>I need to rent</Tab.Item>
          <Tab.Item>I need to buy</Tab.Item>
        </Tab>
      </View>

      {/* Your near locations  */}
      <View>
        <Text h4>Near your locations</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>243 properties in Dhaka</Text>
          <Text>See all</Text>
        </View>
        <View>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
        </View>
      </View>
       {/* Your near locations  */}
       <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text h4>Top rated in Dhaka in Dhaka</Text>
          <Text>See all</Text>
        </View>
        <View>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
        </View>
      </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
