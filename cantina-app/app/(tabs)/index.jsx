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
        onPress={() => alert("quicou")} 
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
    
  },
  botao: {
    padding : 10
    
  }
});
0
