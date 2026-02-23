import { View, FlatList, Text, StyleSheet } from 'react-native';

export default function LanchesScreens (){
    const lanches = [
        {id: '1', Nome: 'X-tudo', Preço: 'R$12.00'},
        {id: '2', Nome: 'Dogao da casa', Preço: 'R$14.00'},
        {id: '3', Nome: 'X-salada', Preço: 'R$10.00'},
        {id: '4', Nome: 'Porcao de Batatas', Preço:'R$8.00'},
        {id: '5', Nome: 'Cebola fritas', Preço: 'R$7.00'}
    ]

    return (
        <View>
            <FlatList
                data ={lanches}
                keyExtractor={(item) => (item.id)}
                renderItem={({item}) => (
                    <Text style={styles.texto}>{item.lanches} {item['preço']}</Text>
                )} 
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet. create({

})