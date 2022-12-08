import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/Home';
import ProductsPage from './src/pages/Product';
import ScannerPage from './src/pages/Scanner';
import CreateProductPage from './src/pages/Product/Create';
import ProductPage from './src/pages/Product/Product';
import PrinterPage from './src/pages/Printer';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Produtos" component={ProductsPage} />
        <Stack.Screen name="Buscar" component={ScannerPage} />
        <Stack.Screen name="Cadastrar produto" component={CreateProductPage} />
        <Stack.Screen name="Produto" component={ProductPage} />
        <Stack.Screen name="Impressora" component={PrinterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;