import { React, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/authSlice';

const Home = (props) => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state?.reducer?.auth?.user);
  const updateUserData = useSelector(state => state?.reducer?.auth);

  console.log('updated data', updateUserData);

 const [updatedUserData, setUpdatedUserData] = useState(loginData || {});

   useEffect(() => {
    setUpdatedUserData(loginData);
  }, [loginData]);

    const handleUpdate = (field, value) => {
    setUpdatedUserData({ ...updatedUserData, [field]: value });
    };

  const handleSave = () => {
    dispatch(updateUser(updatedUserData));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>props.navigation.goBack('')} style={styles.text}>
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
         //  placeholder={loginData.firstName}
         placeholderTextColor={'black'}
         value={updatedUserData?.firstName || ''}
         onChangeText={(value) => handleUpdate('firstName', value)}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>lastName:</Text>
         <TextInput
         style={styles.input}
        //  placeholder={loginData.lastName}
         placeholderTextColor={'black'}
         value={updatedUserData?.lastName || ''}
         onChangeText={(value) => handleUpdate('lastName', value)}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>UserName:</Text>
         <TextInput
         style={styles.input}
        //  placeholder={loginData.username}
         placeholderTextColor={'black'}
          value={updatedUserData?.username || ''}
          onChangeText={(value) => handleUpdate('username', value)}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>Email:</Text>
         <TextInput
         style={styles.input}
        //  placeholder={loginData.email}
          placeholderTextColor={'black'}
          value={updatedUserData?.email || ''}
          onChangeText={(value) => handleUpdate('email', value)}
         />
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.fields}>gender:</Text>
         <TextInput
         style={styles.input}
        //  placeholder={loginData.gender}
         placeholderTextColor={'black'}
         value={updatedUserData?.gender || ''}
          onChangeText={(value) => handleUpdate('gender', value)}
         />
         </View>
         <TouchableOpacity style={styles.buttonContainer} onPress={handleSave}>
          <Text style={styles.button}>Update</Text>
         </TouchableOpacity>
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
  },
  button:{
      fontSize:20
  },
  buttonContainer:{
    padding:15,
    borderWidth:1
  }
})
