import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() { 
  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>Bem vindo a lanchonete de Daniel Marcos, o que deseja fazer?</Text>
      </View>
      
      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert("Indo para Cadastro")} 
      >
        <Text>Cadastro</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => alert("Indo para Login")} 
      >
        <Text>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",     
    padding: 20,
    backgroundColor: '#fff',  
  }, 

  textContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },

  titulo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  botao: { 
    padding: 15,              
    backgroundColor: '#DDDDDD', 
    borderRadius: 8,          
    width: '80%',             
    alignItems: 'center',
    borderColor: '#FF0000', 
    borderWidth: 1,
  },
});