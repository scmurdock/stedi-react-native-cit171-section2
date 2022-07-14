import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function Setting(props) {
    return(
      <View>
      <Text>Welcome {props.loggedInUser}</Text>

      </View>
    )
  }

export default Setting;