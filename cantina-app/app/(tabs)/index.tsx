import {Text, View, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native';
 
export default function HomeScreen() {
  return (
    <View>
      <Text>Bem Vindo!</Text>
      <Text>Fazer login</Text>


    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    
  }
});
