# COMO CRIAR PAGINAÇÃO NO LISTAR COM REACT NATIVE
Para implementar a **paginaçăo** em uma lista no React Native, você pode usar o **`FlatList`** combinado com a lógica de paginação. A ideia é carregar os dados de forma incremental, exibindo uma quantidade limitada de itens por vez e permitindo que o usuário carregue mais itens conforme a rolagem da lista (infinite scroll).

Aqui está um exemplo detalhado de como implementar a paginação em uma lista usando **`FlatList`**.

## **1. Estrutura do Projeto:**
Neste exemplo, vamos simular uma API que retorna um conjunto de dados e paginar a resposta.


## **Passo a Passo para Implementar a Paginação**
### **1. Configuração Inicial**
Antes de começar, vamos criar um projeto React Native simples (se você não tiver um):

```bash
npx react-native init PaginaçãoApp
cd PaginaçãoApp
```

### **2. Lógica da Paginação com `FlatList`**
Vamos criar a lógica de **infinite scrolling**. Neste exemplo, vamos simular uma API que retorna dados paginados.

#### Exemplo de código:
```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

// Simulando uma API com dados paginados
const fetchData = (page, limit) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [];
      for (let i = 1; i <= limit; i++) {
        data.push({ id: (page - 1) * limit + i, title: `Item ${((page - 1) * limit + i)}` });
      }
      resolve(data);
    }, 1000); // Simulando o tempo de resposta da API
  });
};

const App = () => {
  const [data, setData] = useState([]); // Armazenando os dados
  const [loading, setLoading] = useState(false); // Indicador de carregamento
  const [page, setPage] = useState(1); // Página atual
  const [hasMore, setHasMore] = useState(true); // Verifica se há mais dados

  useEffect(() => {
    loadData(); // Carregar dados ao iniciar
  }, []);

  // Função para carregar dados
  const loadData = async () => {
    if (loading) return; // Impede o carregamento de dados enquanto estiver carregando
    setLoading(true);
    try {
      const newData = await fetchData(page, 10); // Limite de 10 itens por página
      if (newData.length === 0) {
        setHasMore(false); // Não há mais dados
      } else {
        setData((prevData) => [...prevData, ...newData]); // Adiciona os dados à lista existente
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Função para carregar mais dados ao rolar para o final
  const handleEndReached = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // Avançar para a próxima página
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleEndReached} // Chama a função quando a lista chega no fim
        onEndReachedThreshold={0.1} // Define o quão perto do final a função deve ser chamada
        ListFooterComponent={() => {
          return loading ? <ActivityIndicator size="large" color="#0000ff" /> : null; // Exibe o carregamento
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 18,
  },
});

export default App;
```

## **Explicação do Código:**
1. **`fetchData(page, limit)`**:
   - Simula uma API que retorna dados paginados. Ela recebe a página atual (`page`) e o número de itens por página (`limit`).
   - Usa o `setTimeout` para simular o tempo de resposta da API.

2. **Estado (`useState`)**:
   - `data`: Armazena os dados exibidos na lista.
   - `loading`: Indica se a lista está carregando mais itens.
   - `page`: A página atual da API.
   - `hasMore`: Verifica se há mais dados para carregar.

3. **`useEffect`**:
   - Quando o componente é montado, ele chama `loadData` para carregar os dados iniciais.

4. **Função `loadData`**:
   - Faz a requisição à "API" (simulada) e adiciona os novos dados à lista existente.
   - Quando não há mais dados (`newData.length === 0`), define `hasMore` como `false`.

5. **Função `handleEndReached`**:
   - Quando o usuário rola até o final da lista (determinada por `onEndReachedThreshold`), ele chama `setPage` para avançar para a próxima página.
   - A função `onEndReachedThreshold={0.1}` define o quanto o usuário precisa rolar até o fim para disparar a carga dos próximos itens (aqui, 10% do final da lista).

6. **Exibição do Carregamento**:
   - A `ListFooterComponent` exibe um indicador de carregamento (`ActivityIndicator`) enquanto novos itens estão sendo carregados.

