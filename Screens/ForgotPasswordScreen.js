import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, ImageBackground } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('./hj.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter Email"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.Bu}>
          <Button title="Reset Password" onPress={() => alert('Password reset instructions sent!')} />
        </View>
        <View style={styles.Bu}>
          <Button title="Go back to Login" onPress={handleLogin} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:'#A60791',
    fontWeight:'bold'
  },
  textInputContainer: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,               
    borderColor: '#A60791',
    borderWidth: 3,
    padding: 10,
  },
  Bu:{
    padding:10,
    width:'70%'
  },
});

export default ForgotPasswordScreen;
