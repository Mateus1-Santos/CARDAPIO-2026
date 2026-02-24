import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function Salgados() {

    const salgados = [
        {id: '1', nome: 'Coxinha', preco: '5.00',image: require ('../../assets/images/coxinha.png')},
        {id: '2', nome: 'Salsicha', preco: '5.00'},
        {id: '3', nome: 'Ovo Empanado', preco: '4.50'},
        {id: '4', nome: 'Kalzone', preco: '7.00'},
        {id: '5', nome: 'Patel', preco: '8.00'}
    ]

    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Salgados</Text>
          <FlatList
            data={salgados}
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