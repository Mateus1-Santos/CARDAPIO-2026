import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleCadastro() {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    console.log({ nome, email, senha });
    Alert.alert('Sucesso', 'Cadastro realizado!');
  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#000"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9e5312',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#f8a835',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    color: '#d31206',
    borderWidth: 1,
    borderColor: '#f8a835',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#d31206',
    color: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
});