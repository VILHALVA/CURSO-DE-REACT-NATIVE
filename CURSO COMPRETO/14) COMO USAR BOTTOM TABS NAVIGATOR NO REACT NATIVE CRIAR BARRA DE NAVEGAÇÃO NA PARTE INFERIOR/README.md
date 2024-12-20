# COMO USAR BOTTOM TABS NAVIGATOR NO REACT NATIVE CRIAR BARRA DE NAVEGAÇÃO NA PARTE INFERIOR
Para criar uma **barra de navegação na parte inferior** (Bottom Tabs Navigator) em um aplicativo React Native, você pode usar o pacote `@react-navigation/bottom-tabs` do `react-navigation`. O **Bottom Tabs Navigator** é ideal para aplicações com navegação baseada em abas, onde cada aba fica na parte inferior da tela.

Aqui está um passo a passo detalhado de como usar o **Bottom Tabs Navigator** para criar a barra de navegação inferior:

## 1. **Instalar as dependências**
Primeiro, instale as dependências necessárias para a navegação com abas (Bottom Tabs):

```bash
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler react-native-reanimated
```

## 2. **Configuração do Bottom Tabs Navigator**
Depois de instalar as dependências, configure o **Bottom Tabs Navigator** em seu aplicativo.

### Exemplo de implementação do Bottom Tabs Navigator
```javascript
// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Telas de exemplo
function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
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

// Criando o Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
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

## Explicação do código:
1. **HomeScreen, SettingsScreen, ProfileScreen**: São três telas simples que exibem texto, mas podem ser substituídas por qualquer componente que você deseje para suas telas principais.

2. **createBottomTabNavigator**: O `createBottomTabNavigator()` cria o componente de navegação com abas na parte inferior. Usamos `Tab.Screen` para adicionar as telas ao Tab Navigator.

3. **NavigationContainer**: O componente `NavigationContainer` é necessário para encapsular a navegação do aplicativo.

## 3. **Personalizar ícones nas abas**
Para personalizar as abas com ícones, você pode usar a biblioteca `react-native-vector-icons` para adicionar ícones nas abas. Instale a biblioteca primeiro:

```bash
npm install react-native-vector-icons
```

Em seguida, modifique o código para adicionar ícones às abas:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Telas de exemplo
function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
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

// Criando o Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
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

## Explicação:
1. **Ionicons**: Usamos o `Ionicons` da biblioteca `react-native-vector-icons` para exibir ícones nas abas. O nome do ícone é selecionado com base no nome da rota.
   
2. **screenOptions**: A função `screenOptions` permite personalizar a aparência das abas. O ícone é configurado através da propriedade `tabBarIcon`. A função recebe `color` e `size`, que são passados automaticamente pela biblioteca de navegação.

## 4. **Personalizar a barra de navegação (opcional)**
Se quiser personalizar mais a aparência da barra de navegação, como as cores, você pode adicionar opções de estilo ao `Tab.Navigator`. Por exemplo, para mudar a cor de fundo e a cor dos ícones:

```javascript
<Tab.Navigator
  initialRouteName="Home"
  screenOptions={{
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: { backgroundColor: '#fff' },
  }}
>
  <Tab.Screen name="Home" component={HomeScreen} />
  <Tab.Screen name="Settings" component={SettingsScreen} />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>
```

- **tabBarActiveTintColor**: Define a cor dos ícones quando a aba está ativa.
- **tabBarInactiveTintColor**: Define a cor dos ícones quando a aba está inativa.
- **tabBarStyle**: Define o estilo da barra de navegação (por exemplo, cor de fundo).

## 5. **Conclusão**
Agora você tem um **Bottom Tabs Navigator** funcional no seu aplicativo React Native, com a possibilidade de adicionar ícones e personalizar a aparência da barra de navegação. Essa é uma solução ideal para aplicativos com várias seções que os usuários podem acessar rapidamente.