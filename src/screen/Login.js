import {React, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../store/authSlice';

const Login = props => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const {status, error} = useSelector(state => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({username, password}))
      .then(() => {
        const {user} = useSelector(state => state.auth);
        if (user && user.username && user.password) {
          props.navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'Invalid username or password.');
        }
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to login. Please try again.');
      });
  };

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
      {status === 'failed' && <Text>Error: {error}</Text>}
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
