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
        <View>
            <FlatList
                data ={lanches}
                keyExtractor={(item) => (item.id)}
                renderItem={({item}) => (
                    <Text style={styles.texto}>{item.nome} {item.preco}</Text>
                )} 
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet. create({

})
