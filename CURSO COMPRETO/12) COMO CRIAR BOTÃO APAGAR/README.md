# COMO CRIAR BOTÃO APAGAR COM REACT NATIVE
Para criar um botão de "Apagar" em um aplicativo React Native, você pode utilizar o componente `Button` ou personalizar o botão usando o `TouchableOpacity` ou `TouchableHighlight` para um estilo mais customizado. O botão de apagar pode ser usado para excluir um item da lista ou até mesmo limpar o conteúdo de um formulário.

Aqui está um exemplo simples de como criar um botão de apagar que limpa os campos de um formulário.

## 1. **Criando o botão de apagar para limpar campos**
Vamos criar um formulário com três campos (nome, email, telefone) e um botão de "Apagar" que vai limpar todos esses campos quando pressionado.

```javascript
// screens/ClearFormScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ClearFormScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Função para limpar os campos
  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    Alert.alert('Sucesso', 'Campos apagados!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário de Cadastro</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formData.name}
        onChangeText={text => setFormData({ ...formData, name: text })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={text => setFormData({ ...formData, email: text })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        keyboardType="phone-pad"
        value={formData.phone}
        onChangeText={text => setFormData({ ...formData, phone: text })}
      />
      
      <Button title="Cadastrar" onPress={() => Alert.alert('Formulário enviado!')} />

      {/* Botão de Apagar */}
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>Apagar Campos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  clearButton: {
    marginTop: 15,
    backgroundColor: '#FF6347', // Cor vermelha
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ClearFormScreen;
```

## Explicação do código:
1. **Estado (`useState`)**: O estado `formData` mantém os valores dos campos `name`, `email` e `phone`.

2. **Campos de entrada (`TextInput`)**: Usamos o componente `TextInput` para que o usuário possa inserir o nome, e-mail e telefone. O estado é atualizado a cada mudança de texto usando o `onChangeText`.

3. **Botão de Apagar (`TouchableOpacity`)**: O componente `TouchableOpacity` é utilizado para criar um botão estilizado de "Apagar". Ele chama a função `handleClear` quando pressionado, que limpa o estado (limpando os campos).

4. **Alert**: O `Alert.alert` é utilizado para mostrar uma mensagem quando os campos são apagados ou quando o botão de "Cadastrar" é pressionado.

5. **Estilo**: O estilo do botão de apagar é personalizado com uma cor de fundo vermelha (`#FF6347`) e um texto branco. Você pode ajustar a cor e o estilo conforme suas preferências.

## Como funciona:
- Quando o usuário pressionar o botão **Apagar Campos**, a função `handleClear` será chamada. Ela atualiza o estado `formData` para valores vazios, apagando assim os campos de entrada.
- O alerta será mostrado informando que os campos foram apagados.

## 2. **Botão de Apagar para deletar um item da lista**
Se você quiser criar um botão de apagar para remover um item de uma lista (como excluir um item de um banco de dados ou de um array), você pode fazer algo assim:

```javascript
// Exemplo para deletar item de uma lista
const handleDelete = (itemId) => {
  const updatedList = data.filter(item => item.id !== itemId);
  setData(updatedList);
  Alert.alert('Sucesso', 'Item excluído com sucesso!');
};
```

Neste caso, `data` é a lista de itens e `handleDelete` é a função chamada quando o botão de apagar é pressionado. O item com o `id` correspondente será removido da lista.

## Conclusão
Agora você tem um exemplo básico de como criar um **botão de apagar** no React Native para diferentes casos de uso, seja para limpar um formulário ou para excluir um item de uma lista.