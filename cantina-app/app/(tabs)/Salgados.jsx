import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useCart } from '../../context/CartContext';

export default function Salgados() {
    const { addToCart } = useCart();

    const salgados = [
        {id: 's1', nome: 'Coxinha', preco: '5.00', image: require ('../../assets/images/coxinha.png')},
        {id: 's2', nome: 'Salsicha', preco: '5.00', image: require('../../assets/images/salsicha (1).png')},
        {id: 's4', nome: 'Calzone', preco: '7.00', image: require('../../assets/images/calzone.png')},
        {id: 's5', nome: 'Pastel', preco: '8.00', image: require('../../assets/images/pastel (1).png')}
    ]

    return (
          <FlatList
            data={salgados}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.lista}
            renderItem={({ item }) => (
            <View style={styles.card}>
                <Image
                    source={item.image} 
                    style={styles.image} 
                    resizeMode= 'contain'
                />
                <View style={styles.item}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.preco}> - R$ {item.preco}</Text>
                </View>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => addToCart(item)}
                  >
                    <Text style={styles.botaoTexto}>Adicionar</Text>
                </TouchableOpacity>
            </View>
            )}
          />
      );
    }

    const styles = StyleSheet.create({
        lista: {
          padding: 20,
          paddingBottom: 40,
        },
        item: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          paddingHorizontal: 10,
        },
        nome: {
          fontSize: 17,
          color: '#333',
          fontWeight: '500',
        },
        preco: {
          fontSize: 15,
          color: '#007AFF',
          fontWeight: '600',
          marginTop: 4,
        },
        image:{
          width: 70,
          height: 70,
      },
      card:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    botao: {
      backgroundColor: '#2ecc71',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
    },
    botaoTexto: {
      color: '#fff',
      fontWeight: 'bold'
    }
});
