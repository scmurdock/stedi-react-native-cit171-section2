import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icons from './Icons.js';
import Bar  from './Bar.js';

const Home = (props) => {
  return (
    <View>
      <Bar loggedInUser={props.loggedInUser}/>
      <Icons />
    </View>
  );
};

export default Home;
