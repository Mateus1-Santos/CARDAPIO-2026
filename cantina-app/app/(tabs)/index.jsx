import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground 
} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('./lanche.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titulo}>
            Bem vindo a lanchonete, o que deseja fazer?
          </Text>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  textContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },

  botao: {
    padding: 15,
    backgroundColor: '#ffffffaa', 
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    borderColor: '#FF0000',
    borderWidth: 1,
  },
});
