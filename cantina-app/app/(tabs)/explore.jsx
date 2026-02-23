import { View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View>
      <Image source={require('../../assets/images/Salgado-Joelho-Receita-Facil-e-Saborosa-Para-Vender-ou-Saborear-em-Casa.webp')}
      style={styles.containerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerImage:{
    width: 450,
    height: 300,
    marginTop: 25,


  }
})