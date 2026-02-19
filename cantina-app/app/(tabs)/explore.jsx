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
    width: 250,
    height: 150,
    borderRadius: 20,
    marginTop: 100,
  }
})