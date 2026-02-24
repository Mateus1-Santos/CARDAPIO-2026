import {View, Text, FlatList, StyleSheet} from 'react-native'

export default function Bebidas (){

    const bebidas = [
        {id: '1', nome: 'Coca-Cola Lata', preco: '6.50'},
        {id: '2', nome: 'Água', preco: '1.99'},
        {id: '3', nome: 'Suco de Laranja', preco: '5.00'},
        {id: '4', nome: 'Pepsi', preco: '5.50'},
        {id: '5', nome: 'Laranjinha', preco: '4.50'},
        {id: '6', nome: 'Guaraná', preco:'7.00'},
        {id: '7', nome: 'Monster', preco: '10.00'}
    ]

    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Bebidas</Text>
          <FlatList
            data={bebidas}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.lista}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.preco}>R$ {item.preco}</Text>
              </View>
            )}
          />
        </View>
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
      });