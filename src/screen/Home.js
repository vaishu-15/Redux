import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Home = (props) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>props.navigation.goBack('')}>
      <Text> &larr; Back</Text>
      </TouchableOpacity>
      <Text style={{fontSize:40}}>HOME</Text>
    </View>
  );
};
export default Home;
