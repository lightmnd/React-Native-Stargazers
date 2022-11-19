import {View, Text, Button} from 'react-native';
import React from 'react';

type Route = {
  route: object;
  navigation: any;
};

export default function DetailsPage({route, navigation}: Route) {
  /* 2. Get the param */
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
