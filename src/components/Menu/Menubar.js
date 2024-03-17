import { useNavigation } from '@react-navigation/native';
import { Button, Tab } from '@rneui/themed';
import React from 'react';

function Menubar({ tabs }) {
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();

  return (
    <Tab value={index} onChange={setIndex} dense>
      {tabs?.map((tab, idx) => (
        <Tab.Item key={idx} icon={tab.icon}>
          <Button
            loading={false}
            containerStyle={{
              margin: 5,
            }}
            style={{ backgroundColor: "#fff" }}
            onPress={() => navigation.navigate(tab.screen)}
          >
            {tab.label}
          </Button>
        </Tab.Item>
      ))}
    </Tab>
  );
}

export default Menubar;