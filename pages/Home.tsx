import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Finder from './../components/Finder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
    color: '#FFF',
  },
});

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.content}>
          <Text style={{fontSize: 40, textAlign: 'center', padding: 20}}>
            Stargazers App
          </Text>
          <Finder />
        </View>
        <View />
      </View>
    </SafeAreaView>
  );
}
