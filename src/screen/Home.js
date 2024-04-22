import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { useSelector } from 'react-redux';
import Count from './Count';

const Home = (props) => {
  const loginData = useSelector(state=>state.reducer.auth.value)
  console.log('login',loginData);
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>props.navigation.goBack('')}>
      <Text> &larr; Back</Text>
      </TouchableOpacity>
      <Text style={{fontSize:40}}>HOME</Text>
      <Count/>
    </View>
  );
};
export default Home;
