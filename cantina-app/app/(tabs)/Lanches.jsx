import { View, FlatList, Text, StyleSheet } from 'react-native';

export default function Lanches (){
    const lanches = [
        {id: '1', nome: 'X-tudo', preco: 'R$12.00'},
        {id: '2', nome: 'Dogao da casa', preco: 'R$14.00'},
        {id: '3', nome: 'X-salada', preco: 'R$10.00'},
        {id: '4', nome: 'Porcao de Batatas', preco:'R$8.00'},
        {id: '5', nome: 'Cebola fritas', preco: 'R$7.00'}
    ]

    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Lanches</Text>
          <FlatList
            data={lanches}
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