# COMO INTEGRAR APLICATIVO CRIADO COM REACT NATIVE COM API
Integrar um aplicativo React Native com uma API é uma tarefa comum no desenvolvimento de aplicativos móveis modernos. Aqui está um guia passo a passo sobre como fazer essa integração usando **fetch** (método nativo do JavaScript) ou **axios** (uma biblioteca popular para requisições HTTP).

## **1. Usando `fetch` para integrar com a API**
### **Passo 1: Fazer uma requisição GET**
O método `fetch` é o método nativo do JavaScript para fazer requisições HTTP. Vamos ver um exemplo de como fazer uma requisição GET para buscar dados de uma API.

#### Exemplo:
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fazendo a requisição à API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())  // Converte a resposta em JSON
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []); // Array vazio significa que a requisição será feita apenas uma vez

  // Exibindo a tela de carregamento ou os dados
  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Erro: {error.message}</Text>;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default App;
```

#### Explicação:
1. **`fetch('url')`**: Faz uma requisição GET para a URL especificada.
2. **`.then(response => response.json())`**: Converte a resposta da API para um formato JSON.
3. **`useEffect`**: Faz a requisição uma única vez quando o componente é montado.
4. **`FlatList`**: Exibe os dados da API de forma eficiente, especialmente quando você tem uma lista grande de itens.

### **Passo 2: Fazendo uma requisição POST**
Para enviar dados a uma API (como em um formulário), você pode usar o método `POST` com `fetch`.

#### Exemplo:
```javascript
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const App = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, body: 'Conteúdo aqui', userId: 1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Dados enviados:', data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Digite um título"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default App;
```

## **2. Usando `axios` para integrar com a API**
O **axios** é uma biblioteca que facilita o envio de requisições HTTP, tornando o código mais limpo e com menos detalhes para configurar.

### **Passo 1: Instalar o axios**
Execute o seguinte comando para instalar o axios no seu projeto:
```bash
npm install axios
```

### **Passo 2: Usando axios para fazer uma requisição GET**
#### Exemplo:
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Erro: {error.message}</Text>;

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default App;
```

#### Explicação:
1. **`axios.get('url')`**: Faz uma requisição GET para a URL especificada.
2. **`.then(response => ...)`**: A resposta é armazenada em `response.data`.
3. **`.catch(error => ...)`**: Caso ocorra algum erro, ele é tratado no `catch`.

### **Passo 3: Fazendo uma requisição POST com axios**
Para enviar dados com o método `POST` usando `axios`, o código é bem simples:

#### Exemplo:
```javascript
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import axios from 'axios';

const App = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: title,
      body: 'Conteúdo aqui',
      userId: 1,
    })
      .then((response) => {
        console.log('Dados enviados:', response.data);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  };

  return (
    <View>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Digite um título"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default App;
```

## **3. Considerações importantes**
- **Gerenciamento de estado**: Ao integrar com uma API, o gerenciamento de estado é crucial para lidar com a resposta, erros e carregamento. Ferramentas como **Redux** ou **Context API** podem ser úteis para gerenciar estados complexos.
- **Erro e exceções**: Sempre trate os erros adequadamente usando `try-catch` ou `.catch` para garantir que o aplicativo lide bem com falhas na API.
- **Segurança**: Nunca armazene informações sensíveis, como tokens de autenticação, diretamente no código. Utilize armazenamento seguro (como **AsyncStorage**, **Keychain**, ou variáveis de ambiente).

