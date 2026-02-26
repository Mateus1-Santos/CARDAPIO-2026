import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function NovoProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('Salgados');
  const router = useRouter();

  const handleSalvar = () => {
    if (!nome || !preco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // aqui tem que implementar a lógica para salvar no banco de dados ou api, por enquato só mostra um alert
    console.log('Novo Produto:', { nome, preco, categoria });
    
    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!', [
      { text: 'OK', onPress: () => router.back() }
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastrar Novo Produto</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome do Produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Coxinha de Frango"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Preço (R$)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 5.00"
          keyboardType="numeric"
          value={preco}
          onChangeText={setPreco}
        />

        <Text style={styles.label}>Categoria</Text>
        <View style={styles.categoriaContainer}>
          <TouchableOpacity
            style={[styles.categoriaBotao, categoria === 'Salgados' && styles.categoriaAtiva]}
            onPress={() => setCategoria('Salgados')}
          >
            <Text style={[styles.categoriaTexto, categoria === 'Salgados' && styles.categoriaTextoAtivo]}>Salgados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoriaBotao, categoria === 'Bebidas' && styles.categoriaAtiva]}
            onPress={() => setCategoria('Bebidas')}
          >
            <Text style={[styles.categoriaTexto, categoria === 'Bebidas' && styles.categoriaTextoAtivo]}>Bebidas</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
          <Text style={styles.botaoTexto}>Salvar Produto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoCancelar} onPress={() => router.back()}>
          <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderColor: "#FF8400"
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
    marginTop: 20,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF8400',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  categoriaContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    gap: 10,
  },
  categoriaBotao: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffa600',
    alignItems: 'center',
  },
  categoriaAtiva: {
    backgroundColor: '#ffa600',
  },
  categoriaTexto: {
    color: '#000000',
    fontWeight: 'bold',
  },
  categoriaTextoAtivo: {
    color: '#fff',
  },
  botaoSalvar: {
    backgroundColor: '#ffc400',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoCancelar: {
    padding: 15,
    alignItems: 'center',
  },
  botaoCancelarTexto: {
    color: '#e74c3c',
    fontSize: 16,
    fontWeight: '600',
  },
});
