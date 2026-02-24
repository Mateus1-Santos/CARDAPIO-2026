import {View, Text, FlatList, StyleSheet, Image} from 'react-native'

export default function Bebidas (){

    const bebidas = [
        {id: '1', nome: 'Coca-Cola Lata', preco: '6.50', image: require('../../assets/images/coca.png')},
        {id: '2', nome: 'Água', preco: '1.99', image: require('../../assets/images/agua.png')},
        {id: '3', nome: 'Suco de Laranja', preco: '5.00', image:require('../../assets/images/Suco-Laranja-Integral-Suq-Garrafa-270ml.png')},
        {id: '4', nome: 'Pepsi Lata', preco: '5.50', image: require ('../../assets/images/pepsi.png')},
        {id: '5', nome: 'Laranjinha', preco: '4.50', image: require('../../assets/images/laranjinha-200-ml-12-unidades-65117f8535919-836 (1).png')},
        {id: '6', nome: 'Guaraná Lata', preco:'7.00', image: require('../../assets/images/guarana (1).png')},
        {id: '7', nome: 'Monster', preco: '10.00', image: require('../../assets/images/energetico-monster-energy-lata-473ml-1.png')}
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
                        <Text style={styles.preco}>R$ {item.preco}</Text>
                    </View>
                </View>
            )}
          />
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#ffff',
          paddingTop: 60,
          paddingHorizontal: 25,
        },
        titulo: {
          fontSize: 28,
          fontWeight: '700',
          color: '#1a1a1a',
          marginBottom: 30,
        },
        lista: {
          paddingBottom: 40,
        },
        item: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 18,
          borderBottomWidth: 1,
          borderBottomColor: '#f0f0f0',
        },
        nome: {
          fontSize: 17,
          color: '#333',
          fontWeight: '500',
        },
        preco: {
          fontSize: 17,
          color: '#007AFF',
          fontWeight: '600',
        },
        image:{
            width: 70,
            height: 70,
            marginRight: 10
        },
        card:{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10
        }
      });