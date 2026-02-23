import {View, Text, FlatList, StyleSheet} from 'react-native'
import { unstable_styles } from '*.module.sass';

export default function BebidasScreen (){

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
        <View>
            <FlatList
                data={bebidas}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                <Text style={styles.texto}>{item.nome} - R${item.preco}</Text>
                )}
            >
            </FlatList>
        </View>
    );
}