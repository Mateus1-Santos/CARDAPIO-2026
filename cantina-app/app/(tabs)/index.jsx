import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function HomeScreen() { 
  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert("quicou")} 
      >
        <Text>cadastro</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert("quico")} 
      >
        <Text>login</Text>
      </TouchableOpacity>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
<<<<<<< HEAD
    backgroundColor: '#fff',  
  }, 

  botao: { 
    padding: 15,              
    backgroundColor: '#DDDDDD', 
    borderRadius: 8,          
    width: '80%',             
    alignItems: 'center',
    border: red
=======
    
>>>>>>> 62b1fcd033523ff7553aacc874ce00d32675ac9d
  },
  botao: {
    padding : 10
    
  }
});
0
