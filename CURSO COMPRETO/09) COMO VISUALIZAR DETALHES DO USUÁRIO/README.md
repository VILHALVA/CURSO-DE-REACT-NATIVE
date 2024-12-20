# COMO VISUALIZAR DETALHES DO USUÁRIO COM REACT NATIVE
Para visualizar os detalhes de um usuário em um aplicativo React Native, você pode criar uma interface simples que exibe informações do usuário em uma tela específica. Vamos passar por um exemplo onde você tem uma tela de lista de usuários e, ao clicar em um usuário, você navega para outra tela para mostrar seus detalhes.

1. **Configurar navegação com React Navigation**.
2. **Criar uma lista de usuários**.
3. **Passar os detalhes do usuário para a tela de detalhes**.
4. **Exibir os detalhes do usuário na tela de detalhes**.

## 1. **Instalar React Navigation**
Se você ainda não instalou o React Navigation, siga as etapas abaixo:

```bash
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-safe-area-context
```

Após a instalação, configure o React Navigation no seu arquivo `App.js`:

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
```

## 2. **Tela de Lista de Usuários (HomeScreen)**
Aqui, vamos criar uma lista simples de usuários. Quando um usuário é selecionado, vamos passar os detalhes para a tela de detalhes.

```javascript
// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const users = [
  { id: '1', name: 'João Silva', email: 'joao@example.com' },
  { id: '2', name: 'Maria Oliveira', email: 'maria@example.com' },
  { id: '3', name: 'Carlos Pereira', email: 'carlos@example.com' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Lista de Usuários</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="Ver Detalhes"
              onPress={() =>
                navigation.navigate('UserDetails', { userId: item.id })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
```

Neste código, estamos criando uma lista de usuários usando `FlatList`. Cada item da lista possui um botão que, ao ser pressionado, navega para a tela `UserDetails` passando o `userId` como parâmetro.

## 3. **Tela de Detalhes do Usuário (UserDetailsScreen)**
Agora, vamos criar a tela de detalhes, onde mostraremos as informações do usuário selecionado.

```javascript
// screens/UserDetailsScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const users = [
  { id: '1', name: 'João Silva', email: 'joao@example.com', phone: '123456789' },
  { id: '2', name: 'Maria Oliveira', email: 'maria@example.com', phone: '987654321' },
  { id: '3', name: 'Carlos Pereira', email: 'carlos@example.com', phone: '1122334455' },
];

const UserDetailsScreen = ({ route }) => {
  const { userId } = route.params;

  // Encontrar o usuário com base no userId
  const user = users.find(u => u.id === userId);

  if (!user) {
    return <Text>Usuário não encontrado</Text>;
  }

  return (
    <View>
      <Text>Detalhes do Usuário</Text>
      <Text>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Telefone: {user.phone}</Text>
    </View>
  );
};

export default UserDetailsScreen;
```

Aqui estamos usando o parâmetro `userId` para localizar o usuário na lista e exibir seus detalhes.

## 4. **Explicação do Fluxo**
- **HomeScreen:** Exibe uma lista de usuários. Cada usuário tem um botão "Ver Detalhes", que ao ser pressionado, navega para a tela `UserDetailsScreen` passando o `userId` como parâmetro.
- **UserDetailsScreen:** Recebe o `userId` através de `route.params`, encontra o usuário correspondente na lista e exibe seus detalhes.

## 5. **Resultado**
- **Tela inicial:** Aparece uma lista de usuários com o nome e o botão "Ver Detalhes".
- **Tela de detalhes:** Exibe as informações do usuário selecionado (nome, email e telefone).

## 6. **Aprimorando a Navegação**
Você pode, por exemplo, integrar esse fluxo com uma API para buscar usuários dinamicamente. Neste caso, ao invés de ter uma lista fixa, você faria uma requisição HTTP (com `fetch` ou `axios`) para obter os dados do usuário.

Aqui está um exemplo de como você poderia buscar os detalhes do usuário a partir de uma API:

```javascript
// Fetching user details in UserDetailsScreen
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const UserDetailsScreen = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar usuário:', error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!user) {
    return <Text>Usuário não encontrado</Text>;
  }

  return (
    <View>
      <Text>Detalhes do Usuário</Text>
      <Text>Nome: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Telefone: {user.phone}</Text>
    </View>
  );
};

export default UserDetailsScreen;
```

Esse exemplo simula a requisição para obter os detalhes do usuário de uma API e exibe um carregamento enquanto aguarda a resposta.

Com isso, você consegue criar um fluxo completo de navegação para visualizar os detalhes de um usuário no seu aplicativo React Native.