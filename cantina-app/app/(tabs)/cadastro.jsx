import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


      const realizarCadastro = async () => {
      if (!nome === '' || !email === '' || !senha === '') {
        Alert.alert("Erro", "Por favor, preencha todos os campos!");
        return;
      }
    
      try {
        const response = await fetch('http://192.168.0.180:3000/cadastro', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome,
            email,
            senha
          })
        });
    
        const data = await response.json();
    
        if (response.ok) {
          Alert.alert("Sucesso", data.message);
        } else {
          Alert.alert("Erro", data.message);
        }
    
      } catch (error) {
        Alert.alert("Erro", "Não foi possível conectar ao servidor");
        console.log(error);
      }
    };

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
  
        <TouchableOpacity style={styles.botao} onPress={realizarCadastro}>
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