import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useCart } from '../../context/CartContext';

export default function Bebidas (){
    const { addToCart } = useCart();

    const bebidas = [
        {id: 'b1', nome: 'Coca-Cola Lata', preco: '6.50', image: require('../../assets/images/coca.png')},
        {id: 'b2', nome: 'Água', preco: '1.99', image: require('../../assets/images/agua.png')},
        {id: 'b3', nome: 'Suco de Laranja', preco: '5.00', image:require('../../assets/images/Suco-Laranja-Integral-Suq-Garrafa-270ml.png')},
        {id: 'b4', nome: 'Pepsi Lata', preco: '5.50', image: require ('../../assets/images/pepsi.png')},
        {id: 'b5', nome: 'Laranjinha', preco: '4.50', image: require('../../assets/images/laranjinha-200-ml-12-unidades-65117f8535919-836 (1).png')},
        {id: 'b6', nome: 'Guaraná Lata', preco:'7.00', image: require('../../assets/images/guarana (1).png')},
        {id: 'b7', nome: 'Monster', preco: '10.00', image: require('../../assets/images/energetico-monster-energy-lata-473ml-1.png')}
    ]

    return (
          <FlatList
            data={bebidas}
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
