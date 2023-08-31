import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('./jk.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./medical-logo-png-897.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to HealthCare Community</Text>
          <Text style={styles.subtitle}>Your Health is Our Priority</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    padding: 30,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
    marginTop: 10,
    color:'#0661FE',
    textAlign:'center'
    
  },
  subtitle: {
    fontSize: 20,
    color: '#0FFE06',
    marginTop: 5,
    fontWeight:'bold'
  },
  buttonsContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
