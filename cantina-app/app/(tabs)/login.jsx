import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen() {
  return (
      <view>
      styles={Styles.text}
        <text>prencha os campos obrigatorios</text>
    </view>
      );
    }
 export default function login(){
const [form, setForm] = useState({email:'', senha:''});

const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
    return(
    
    );
 }


const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});