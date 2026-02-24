import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react'


export default function Salgados() {

    const salgados = [
        {id: '1', nome: 'Coxinha', preco: '5.00',image: require ('../../assets/images/coxinha.png')},
        {id: '2', nome: 'Salsicha', preco: '5.00', image: require('../../assets/images/salsicha (1).png')},
        {id: '4', nome: 'Calzone', preco: '7.00', image: require('../../assets/images/calzone.png')},
        {id: '5', nome: 'Patel', preco: '8.00', image: require('../../assets/images/pastel (1).png')}
    ]

    const [carrinho, setCarrinho] = useState([]);
    const adicionarAoCarrinho = (item) => {
      setCarrinho([...carrinho, item]);
    };


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
                    onPress={() => adicionarAoCarrinho(item)}
                  >
                    <Text style={styles.botaoTexto}>Adicionar</Text>
                </TouchableOpacity>


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
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#eee',
        borderRadius: 8
    },
    botao: {
      backgroundColor: '#2ecc71',
      padding: 8,
      borderRadius: 5,
      marginLeft: 40,
    },
    botaoTexto: {
      color: '#fff',
      fontWeight: 'bold'
    }
});