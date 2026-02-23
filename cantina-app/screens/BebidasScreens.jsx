import {View, Text, FlatList, StyleSheet} from 'react-native'

export default function BebidasScreen (){

    const bebidas = [
        {id: '1', Nome: 'Coca-Cola Lata', Preço: '6.50'},
        {id: '2', Nome: 'Água', Preço: '1.99'},
        {id: '3', Nome: 'Suco de Laranja', Preço: '5.00'},
        {id: '4', Nome: 'Pepsi', Preço: '5.50'},
        {id: '5', Nome: 'Laranjinha', Preço: '4.50'},
        {id: '6', Nome: 'Guaraná', Preço:'7.00'},
        {id: '7', Nome: 'Monster', Preço: 'R$'}
    ]

    return (
        <FlatList>

        </FlatList>
    );
}