import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preencha os campos obrigatórios</Text>
    </View>
  );
}

export default function Login() {
  const [form, setForm] = useState({ email: '', senha: '' });


  const handleInput = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <SafeAreaView style={styles.background}>
      <HomeScreen />
      
      <TextInput 
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(val) => handleInput('email', val)}
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true} // 
        value={form.senha}
        onChangeText={(val) => handleInput('senha', val)}
      />
       <Button
       style={styles.botao}
       placeholder="entrar"
       />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  container: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd'
  }
});