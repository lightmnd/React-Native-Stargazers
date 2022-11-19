import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ListOfUSer from './ListOfUser';
import env from './../config/env';

type Data = {
  data: object;
  stargazers_url: string;
};

export default function Finder() {
  const [name, setName] = useState('');
  const [data, setData] = useState<Data[]>([]);
  const [stars, setStars] = useState([]);

  const fetchDataStars = async () => {
    const result = await fetch(
      `https://api.github.com/repos/facebook/${name}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${
            __DEV__ ? process.env.GIT_TOKEN_DEV : process.env.GIT_TOKEN_PROD
          }`,
        },
      },
    );
    const r = await result.json();
    setData(r);
  };

  const handleInsert = async (value: string) => {
    setName(value);
  };

  const handleOnPress = async () => {
    fetchDataStars();
    console.log('press');
    try {
      const res = await fetch(data.stargazers_url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${'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'}`, // notice the Bearer before your token
        },
      });
      const r = await res.json();
      setStars(r);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 14, textAlign: 'center'}}>
        Insert the Repository Owner or the Repository Name{' '}
      </Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={newValue => handleInsert(newValue)}
        placeholder="eg: react-native"
        value={name}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#f2f2f2"
        style={styles.submitBtn}
        onPress={() => handleOnPress()}>
        <Text>Find</Text>
      </TouchableHighlight>
      <ListOfUSer stars={stars} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'blue',
    width: 290,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30%',
  },
  submitBtn: {
    height: 50,
    width: 80,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});
