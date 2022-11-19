import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  data: Array<any>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 18,
  },
  userContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default function SingleTouchableItem({data}: Props) {
  return (
    <View style={{flex: 1}}>
      {data?.map(star => {
        return (
          <TouchableOpacity key={`${star.id}`} style={styles.userContainer}>
            <Image
              source={{
                uri: star.avatar_url,
              }}
              style={{width: 80, height: 80}}
            />
            <Text style={styles.text}>{star.login}</Text>
            <View>
              <Text>{'▶︎'}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
