import React from 'react';
import {Text, TouchableOpacity, View,StyleSheet, Image, TextInput, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import Count from './Count';
import { loginUser } from '../store/authSlice';

const Home = (props) => {
  
  // const loginData = useSelector(state=>state.reducer.auth.user)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
     <TouchableOpacity onPress={()=>props.navigation.goBack('')} style={styles.text}>
      <Text> &larr; Back</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={()=>props.navigation.goBack('')} style={styles.text}>
      <Text> &larr; Back</Text>
      </TouchableOpacity>
      <View style={styles.dataContainer}>
        <View style={styles.imageContainer}>
       <Image
        style={styles.tinyLogo}
        source={{ uri: loginData.image }}
      />
      </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>firstName:</Text>
         <TextInput
         style={styles.input}
         placeholder={loginData.firstName}
         placeholderTextColor={'black'}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>lastName:</Text>
         <TextInput
         style={styles.input}
         placeholder={loginData.lastName}
         placeholderTextColor={'black'}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>UserName:</Text>
         <TextInput
         style={styles.input}
         placeholder={loginData.username}
         placeholderTextColor={'black'}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>Email:</Text>
         <TextInput
         style={styles.input}
         placeholder={loginData.email}
         placeholderTextColor={'black'}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>gender:</Text>
         <TextInput
         style={styles.input}
         placeholder={loginData.gender}
         placeholderTextColor={'black'}
         />
         </View>
      </View> */}
      <View>
        <Text>
          Home
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container:{
    margin:20,
    marginTop:60
  },
  dataContainer:{
    marginTop:30,
    alignItems:'center'
  },
  imageContainer:{
   width:160,
   height:160,
   backgroundColor:'black',
   borderRadius:80,
   justifyContent:'center',
   borderWidth:1,
   marginBottom:100
  },
  tinyLogo:{
    width:110,
    height:110,
    alignSelf:'center',
  },
  inputContainer:{
    width:'100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    paddingHorizontal:20,
    borderRadius:12,
    fontSize:18
  },
  fields:{
    marginHorizontal:30,
    fontSize:20
  }
})
