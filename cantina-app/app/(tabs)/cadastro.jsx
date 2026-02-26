import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Alert, ScrollView } from 'react-native';
import {useRouter} from 'expo-router'

export default function CadastroScreen() {
  const router = useRouter();
  
  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função para realizar o cadastro com os requisitos
  const realizarCadastro = async () => {
    if (nome === '' || email === '' || senha === '') {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    try {
      const response = await fetch('http://192.168.0.180:3000/cadastro', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha
        })
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
        router.back();
      } else {
        Alert.alert("Erro", data.message || "Erro ao realizar cadastro");
      }

    } catch (error) {
      console.log(error);
      Alert.alert("Aviso", "Servidor offline, mas os dados foram validados localmente!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Criar Nova Conta</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome Completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}

        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Mínimo 6 caracteres"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botaoSalvar} onPress={realizarCadastro}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
//estilização quase pronta!
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingTop: 60,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#d58516',
    marginBottom: 20,
  },
  botaoSalvar: {
    backgroundColor: '#FF8400',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#FF8400',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});