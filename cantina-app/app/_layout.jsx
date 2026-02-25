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
    <TouchableOpacity onPress={onOpen} style={styles.cartButtonContainer} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <IconSymbol name="cart.fill" size={26} color="#007AFF" />
        {cartCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartCount > 99 ? '99+' : cartCount}</Text>
          </View>
        )}
      </View>
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
            headerRight: () => <HeaderCartButton onOpen={() => setIsCartOpen(true)} />,
            headerStyle: {
              backgroundColor: colorScheme === 'dark' ? '#121212' : '#fff',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            }
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
  cartButtonContainer: {
    marginRight: 20,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    position: 'relative',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    right: -8,
    top: -6,
    backgroundColor: '#FF3B30', 
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
});
