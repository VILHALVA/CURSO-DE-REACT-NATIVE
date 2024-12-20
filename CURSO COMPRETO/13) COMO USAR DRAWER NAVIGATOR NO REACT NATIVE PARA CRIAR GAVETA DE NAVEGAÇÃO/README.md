# COMO USAR DRAWER NAVIGATOR NO REACT NATIVE PARA CRIAR GAVETA DE NAVEGAÇÃO
Para criar uma gaveta de navegação (Drawer Navigator) em um aplicativo React Native, você pode usar o `react-navigation`, que fornece um pacote específico para implementar navegação com gaveta.

Aqui está um passo a passo detalhado de como instalar e usar o **Drawer Navigator** no seu aplicativo React Native:

## 1. **Instalar as dependências**
Primeiro, você precisa instalar os pacotes necessários para a navegação no seu projeto. Se você ainda não instalou o `react-navigation`, faça o seguinte:

```bash
npm install @react-navigation/native
npm install @react-navigation/drawer
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler react-native-reanimated
```

Para usar a navegação, você também precisa de algumas dependências do React Native, como o `react-native-gesture-handler` e `react-native-reanimated`. Essas bibliotecas são necessárias para o funcionamento correto do Drawer.

Após instalar as dependências, execute o comando abaixo para vincular as dependências nativas:

```bash
npx react-native link
```

## 2. **Configurar o Navegador Drawer**
Depois de instalar as dependências, configure a navegação da gaveta. Vamos usar o `createDrawerNavigator` do `@react-navigation/drawer` para isso.

### Exemplo de implementação do Drawer Navigator
```javascript
// App.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Telas de exemplo
function HomeScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
      <Button
        title="Abrir Gaveta"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
}

// Criando o Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```

### Explicação do código:
1. **HomeScreen**: Esta tela possui um botão que abre o Drawer. A navegação para abrir a gaveta é feita com `navigation.openDrawer()`.

2. **SettingsScreen e ProfileScreen**: São telas adicionais para exemplo, que podem ser acessadas pela gaveta de navegação.

3. **createDrawerNavigator**: O `createDrawerNavigator()` cria o componente de navegação com gaveta. Passamos as telas que queremos que apareçam na gaveta usando o `Drawer.Screen`.

4. **NavigationContainer**: O componente `NavigationContainer` encapsula a navegação e deve envolver toda a navegação do aplicativo.

## 3. **Customizando o Drawer (opcional)**
Se você quiser personalizar o conteúdo da gaveta, você pode usar o `drawerContent` para adicionar itens personalizados. Aqui está um exemplo de como personalizar o conteúdo do Drawer:

```javascript
function CustomDrawerContent(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text>Bem-vindo à Navegação!</Text>
      <Button title="Ir para Home" onPress={() => props.navigation.navigate('Home')} />
      <Button title="Ir para Settings" onPress={() => props.navigation.navigate('Settings')} />
    </View>
  );
}

// Usando o drawerContent personalizado
<Drawer.Navigator
  initialRouteName="Home"
  drawerContent={props => <CustomDrawerContent {...props} />}
>
  <Drawer.Screen name="Home" component={HomeScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
</Drawer.Navigator>
```

## 4. **Conclusão**
Agora você tem um **Drawer Navigator** básico no seu aplicativo React Native. Com o exemplo acima, você pode facilmente personalizar as telas e adicionar itens na gaveta. Além disso, você pode adicionar funcionalidades adicionais como ícones, cabeçalhos personalizados e até mesmo controle de visibilidade das telas dentro da gaveta.