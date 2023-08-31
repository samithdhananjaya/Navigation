import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Financial Account Registration</Text>
      <Text style={styles.intro}>Your Financial Security Matters!</Text>
      <View style={styles.image}>
        <Image
          source={{
            width: 340,
            height: 200,
            marginBottom: 40,
            resizeMode: 'contain',
            uri: "https://img.freepik.com/fotos-gratis/diagnostico-e-prevencao-tratamento-de-doencas-cardiovasculares-cardiograma-de-coracao-estetoscopio-frasco-de-comprimidos-em-um-fundo-azul-coracao-saudavel-vista-do-topo_175682-12292.jpg?size=626&ext=jpg"
          }}
        />
      </View>
      
      <TextInput
        placeholder="Full Name"
        style={styles.input}
      />
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
      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
      />
      <View style={styles.registerButtonContainer}>
        <Button title="Create Account" onPress={() => alert('Account Created!')} />
      </View>
      <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  welcome: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  intro: {
    fontSize: 14,
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registerButtonContainer: {
    marginVertical: 10,
    width: '70%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    marginTop: 10,
  },
  loginText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegisterScreen;
