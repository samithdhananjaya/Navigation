import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {
    alert('Logged in!');
    navigation.navigate('Dashboard');
  };

  return (
    <ImageBackground
      source={require('./ab.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>User Login</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.Login1}>
          <Button title="Login" onPress={handleLogin} />
        </View>
        <View style={styles.Reguster1}>
          <Button title="Register" onPress={handleRegister} />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Button title="Forgot Password?" onPress={handleForgotPassword} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 44,
    marginBottom: 20,
    fontWeight:'bold',
    color:'blue'

  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  forgotPasswordContainer: {
    marginTop: 20,
    width: '60%',
    
  },
  Login1: {
    margin: 10,
    width: '80%',
  },
  Reguster1: {
    margin: 10,
    width: '80%',
  },
});

export default LoginScreen;
