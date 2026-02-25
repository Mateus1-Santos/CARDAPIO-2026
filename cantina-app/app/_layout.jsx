import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import { useColorScheme } from '../hooks/use-color-scheme';
import { CartProvider, useCart } from '../context/CartContext';
import CartSidebar from '../components/CartSidebar';
import { IconSymbol } from '../components/ui/icon-symbol';

export const unstable_settings = {
  anchor: '(tabs)',
};

function HeaderCartButton({ onOpen }) {
  const { cartCount } = useCart();
  return (
    <TouchableOpacity onPress={onOpen} style={styles.cartButton}>
      <IconSymbol name="cart" size={24} color="#007AFF" />
      {cartCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

function RootLayoutContent() {
  const colorScheme = useColorScheme();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: true, 
            title: 'Cantina 2026',
            headerRight: () => <HeaderCartButton onOpen={() => setIsCartOpen(true)} />
          }} 
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <CartProvider>
      <RootLayoutContent />
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    marginRight: 15,
    padding: 5,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#ff4444',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
