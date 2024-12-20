# COMO CRIAR ROTAS COM REACT NATIVE PARA NAVEGAR ENTRE TELAS
Para criar rotas e navegar entre telas em um aplicativo **React Native**, você pode usar uma biblioteca de navegação chamada **React Navigation**. Essa biblioteca fornece uma maneira simples de configurar e gerenciar navegação entre telas em seu aplicativo.

## 1. **Instalar o React Navigation e suas dependências**
Primeiro, você precisa instalar o pacote principal do **React Navigation** e as dependências necessárias para navegação entre telas.

Para instalar o React Navigation, execute:

```bash
npm install @react-navigation/native
```

Em seguida, instale as dependências necessárias para a navegação, como o `react-native-screens` e o `react-native-safe-area-context`:

```bash
npm install react-native-screens react-native-safe-area-context
```

Para usar a navegação baseada em pilha (a navegação de tela para tela), você também precisa instalar o **stack navigator**:

```bash
npm install @react-navigation/stack
```

Se você estiver usando **Expo**, as dependências de navegação podem ser instaladas de forma diferente:

```bash
expo install react-native-screens react-native-safe-area-context
```

## 2. **Configurar o Navegador**
Agora, crie e configure o navegador para gerenciar as telas do aplicativo.

1. **Importe as dependências**:

   No arquivo principal do seu aplicativo (geralmente `App.js`), importe as bibliotecas necessárias:

   ```javascript
   import React from 'react';
   import { NavigationContainer } from '@react-navigation/native'; // Contêiner de navegação
   import { createStackNavigator } from '@react-navigation/stack'; // Navegador de pilha
   import HomeScreen from './screens/HomeScreen'; // Tela inicial
   import DetailsScreen from './screens/DetailsScreen'; // Tela de detalhes
   ```

2. **Crie o navegador de pilha**:

   O **createStackNavigator** é usado para criar uma navegação do tipo "pilha", onde você pode empurrar e tirar telas da pilha de navegação.

   ```javascript
   const Stack = createStackNavigator(); // Criar o navegador de pilha
   ```

3. **Configure o `NavigationContainer`**:

   O `NavigationContainer` é um componente que envolve toda a navegação. Ele deve envolver todo o conteúdo de navegação do seu aplicativo.

   ```javascript
   const App = () => {
     return (
       <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Details" component={DetailsScreen} />
         </Stack.Navigator>
       </NavigationContainer>
     );
   };

   export default App;
   ```

## 3. **Criar as telas (HomeScreen e DetailsScreen)**
Agora, crie duas telas simples para navegação.

1. **Tela Inicial (HomeScreen)**:

   Crie uma nova pasta chamada `screens` e dentro dela crie o arquivo `HomeScreen.js`.

   ```javascript
   // screens/HomeScreen.js
   import React from 'react';
   import { View, Text, Button } from 'react-native';

   const HomeScreen = ({ navigation }) => {
     return (
       <View>
         <Text>Home Screen</Text>
         <Button
           title="Ir para Detalhes"
           onPress={() => navigation.navigate('Details')} // Navega para a tela de detalhes
         />
       </View>
     );
   };

   export default HomeScreen;
   ```

2. **Tela de Detalhes (DetailsScreen)**:

   Crie o arquivo `DetailsScreen.js` dentro da pasta `screens`.

   ```javascript
   // screens/DetailsScreen.js
   import React from 'react';
   import { View, Text, Button } from 'react-native';

   const DetailsScreen = ({ navigation }) => {
     return (
       <View>
         <Text>Detalhes da Tela</Text>
         <Button
           title="Voltar para Home"
           onPress={() => navigation.goBack()} // Volta para a tela anterior
         />
       </View>
     );
   };

   export default DetailsScreen;
   ```

## 4. **Navegação entre as telas**
No exemplo acima:

- O botão na tela `HomeScreen` usa o método `navigation.navigate('Details')` para navegar para a tela de detalhes.
- O botão na tela `DetailsScreen` usa `navigation.goBack()` para voltar para a tela anterior (HomeScreen).

## 5. **Executando o aplicativo**
Agora, basta rodar seu aplicativo:

```bash
npm start
```

Ou, se você estiver usando o Expo:

```bash
expo start
```

Isso deve abrir seu aplicativo no navegador ou em um emulador, e você será capaz de navegar entre a tela inicial e a tela de detalhes.

## **Navegação com Parâmetros**
Você pode passar parâmetros entre as telas. Aqui está um exemplo de como passar e receber parâmetros ao navegar:

## Passando Parâmetros:
Na tela **HomeScreen**, passe um parâmetro ao navegar para a tela de detalhes:

```javascript
navigation.navigate('Details', { itemId: 86, otherParam: 'qualquer coisa' });
```

## Recebendo Parâmetros:
Na tela **DetailsScreen**, você pode acessar os parâmetros com `route.params`:

```javascript
const DetailsScreen = ({ route, navigation }) => {
  const { itemId, otherParam } = route.params; // Acessando os parâmetros passados

  return (
    <View>
      <Text>Item ID: {itemId}</Text>
      <Text>Outro Parâmetro: {otherParam}</Text>
    </View>
  );
};
```

## **Conclusão**
Com o React Navigation, é muito simples configurar navegação entre telas em um aplicativo React Native. Você pode criar uma navegação baseada em pilha, passar parâmetros entre telas, e muito mais. Se precisar de navegação mais complexa (por exemplo, com guias, abas ou menus), o React Navigation também oferece essas funcionalidades.