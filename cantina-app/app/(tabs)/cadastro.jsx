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
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#1dad31',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold',
  },
});