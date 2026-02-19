import {Text, View, TouchableOpacity, StyleSheet, Image, ScrollView,} from 'react-native';

 
export default function HomeScreen() { 
  return (
    <View style={styles.container}>
      <Text style={styles.textBemVindo}>Bem Vindo!</Text>
      <Text>Fazer login</Text>


    
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBemVindo:{
    fontWeigth: 'bold',
    fontSize: 60,
  }

  botao:{
    padding : 10
    
  }
});
