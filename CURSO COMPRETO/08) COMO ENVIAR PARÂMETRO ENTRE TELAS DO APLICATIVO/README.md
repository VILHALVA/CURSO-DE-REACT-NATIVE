# COMO ENVIAR PARÂMETRO ENTRE TELAS DO APLICATIVO COM REACT NATIVE
Para enviar parâmetros entre telas no React Native usando **React Navigation**, você pode usar a navegação baseada em **pilha** (Stack Navigation). Quando você navega de uma tela para outra, pode passar parâmetros que podem ser acessados na tela de destino.

Aqui está um passo a passo para enviar e receber parâmetros entre telas em React Native:

## 1. **Instalar o React Navigation**
Se você ainda não configurou o React Navigation, siga estas etapas para instalá-lo:

1. **Instalar o pacote principal do React Navigation**:

   ```bash
   npm install @react-navigation/native
   ```

2. **Instalar as dependências necessárias**:

   ```bash
   npm install react-native-screens react-native-safe-area-context
   ```

3. **Instalar o navegador de pilha**:

   ```bash
   npm install @react-navigation/stack
   ```

## 2. **Criar a Navegação entre as Telas**
Agora, configure a navegação entre as telas, passando parâmetros de uma tela para outra.

### Exemplo de Navegação com Parâmetros
1. **Configuração Inicial do React Navigation:**

   Primeiro, crie o arquivo `App.js` com o seguinte código:

   ```javascript
   import React from 'react';
   import { NavigationContainer } from '@react-navigation/native';
   import { createStackNavigator } from '@react-navigation/stack';
   import HomeScreen from './screens/HomeScreen';
   import DetailsScreen from './screens/DetailsScreen';

   const Stack = createStackNavigator();

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

2. **Tela Inicial (HomeScreen):**

   No arquivo `screens/HomeScreen.js`, adicione um botão para navegar para a tela de detalhes e enviar parâmetros.

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
           onPress={() => 
             navigation.navigate('Details', {
               itemId: 42,
               itemName: 'Nome do Item'
             })
           }
         />
       </View>
     );
   };

   export default HomeScreen;
   ```

   No código acima, quando o botão for pressionado, a navegação vai para a tela **Details**, e dois parâmetros (`itemId` e `itemName`) são passados.

3. **Tela de Detalhes (DetailsScreen):**

   Agora, crie a tela **DetailsScreen** onde os parâmetros serão recebidos e exibidos.

   ```javascript
   // screens/DetailsScreen.js
   import React from 'react';
   import { View, Text, Button } from 'react-native';

   const DetailsScreen = ({ route, navigation }) => {
     // Recebe os parâmetros passados
     const { itemId, itemName } = route.params;

     return (
       <View>
         <Text>Detalhes da Tela</Text>
         <Text>ID do Item: {itemId}</Text>
         <Text>Nome do Item: {itemName}</Text>
         <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
       </View>
     );
   };

   export default DetailsScreen;
   ```

   No código acima, a tela **DetailsScreen** acessa os parâmetros através de `route.params` e exibe-os. O botão "Voltar para Home" usa `navigation.goBack()` para retornar à tela anterior.

## 3. **Explicando a Navegação com Parâmetros**
- **Navegação com Parâmetros**: Quando você chama `navigation.navigate('Details', { itemId: 42, itemName: 'Nome do Item' })`, você está passando os parâmetros para a tela **Details**.
- **Recebendo Parâmetros**: Na tela **DetailsScreen**, você acessa os parâmetros passados utilizando `route.params`. O objeto `route.params` contém todos os parâmetros que foram enviados.

## 4. **Exemplo Completo do Código**
Aqui está o código completo do exemplo com as duas telas e a navegação com parâmetros:

### `App.js`
```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator();

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

### `screens/HomeScreen.js`
```javascript
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 42,
            itemName: 'Nome do Item'
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
```

### `screens/DetailsScreen.js`
```javascript
import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ route, navigation }) => {
  const { itemId, itemName } = route.params;

  return (
    <View>
      <Text>Detalhes da Tela</Text>
      <Text>ID do Item: {itemId}</Text>
      <Text>Nome do Item: {itemName}</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
```

## 5. **Conclusão**
Passar parâmetros entre telas no React Native é muito fácil usando **React Navigation**. Você pode passar qualquer tipo de dado, como números, strings ou objetos, e acessá-los facilmente nas telas de destino utilizando `route.params`. Isso permite que você crie aplicativos dinâmicos com navegação entre telas e personalização de conteúdo com base em parâmetros.