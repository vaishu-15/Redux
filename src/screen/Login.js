import {React, useState,useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { loginUser } from '../store/authSlice';

const Login = props => {
  const dispatch = useDispatch();[]
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const {error,loading} = useSelector(state => state.reducer.auth);

  const user = useSelector(state => state.reducer.auth.user);

  console.log('error',error);
  console.log('loading',loading);
  console.log('user',user);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter username and password.');
      return;
    }
      dispatch(loginUser({ username, password }))
  };

    useEffect(() => {
    if (user && user.username === username) {
      props.navigation.navigate('Home');
    }
  }, [user]);

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <View>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="username"
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="password"
        />
      </View>
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          alignItems: 'center',
          backgroundColor: 'grey',
          padding: 15,
          borderRadius: 8,
          marginTop: 12,
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
      {loading === 'failed' && <Text>Error: {error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginVertical: 12,
    borderWidth: 1,
    padding: 15,
    fontSize:20
  },
});


export default Login;