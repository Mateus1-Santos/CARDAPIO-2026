import {View, Text, FlatList, StyleSheet} from 'react-native';

export default function Salgados (){

    const salgados = [
        {id: '1', nome: 'Coxinha', preco: '5.00'},
        {id: '2', nome: 'Salsicha', preco: '5.00'},
        {id: '3', nome: 'Ovo Empanado', preco: '4.50'},
        {id: '4', nome: 'Kalzone', preco: '7.00'},
        {id: '5', nome: 'Patel', preco: '8.00'}
    ]

    return (
        <View>
            <FlatList
                data={salgados}
                keyExtractor={(item) => item.id}
                renderItem={({item}) =>(
                    <Text>{item.nome} - R${item.preco}</Text>
                )}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
    }
})