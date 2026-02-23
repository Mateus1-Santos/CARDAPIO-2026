import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Alert } from 'react-native';

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

  // Função que será executada ao clicar no botão
  const realizarLogin = () => {
    if (form.email === '' || form.senha === '') {
      Alert.alert("Erro", "Por favor, preencha todos os campos!");
      return;
    }
    console.log("Dados enviados:", form);
    Alert.alert("Sucesso", `Logado com: ${form.email}`);
  };

  return (
    <SafeAreaView style={styles.background}>
      <HomeScreen />
      
      <TextInput 
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address" 
        autoCapitalize="none"        
        value={form.email}
        onChangeText={(val) => handleInput('email', val)}
      />
      
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true} 
        value={form.senha}
        onChangeText={(val) => handleInput('senha', val)}
      />

      <TouchableOpacity 
        style={styles.botao} 
        onPress={realizarLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.botaoTexto}>ENTRAR</Text>
      </TouchableOpacity>

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
    alignItems: 'center', 
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
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  botao: {
    backgroundColor: '#4CAF50',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});