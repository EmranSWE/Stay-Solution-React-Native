import * as React from "react";
import { Avatar, Button, Card, Switch, Text } from "react-native-paper";
import styles from "./HomeScreen.styles";
import { View } from "react-native";
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const HomeScreen = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.container}>
      <Text>Home Screen 1</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        Press me
      </Button>
      {/* Card */}
      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={LeftContent}
        />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      <Text variant="displayLarge">Display Large</Text>
      {/* <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />; */}
    </View>
  );
};

export default HomeScreen;
