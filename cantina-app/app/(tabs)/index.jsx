import {Text, View, TouchableOpacity, StyleSheet, Image, ScrollView,} from 'react-native';

 
export default function HomeScreen() { 
  return (
    <View>
    <TouchableOpacity
    style={styles.botao}
    onPress={() => alert=("clicou")}
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
    
  }

  botao: {
    padding : 10
    
  }
});
0