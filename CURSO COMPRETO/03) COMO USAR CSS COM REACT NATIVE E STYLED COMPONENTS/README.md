# COMO USAR CSS COM REACT NATIVE E STYLED COMPONENTS
O React Native não utiliza diretamente o CSS como fazemos no desenvolvimento web. Em vez disso, ele utiliza o **JavaScript** para estilizar componentes por meio de objetos de estilo. No entanto, frameworks como **styled-components** oferecem uma abordagem mais próxima ao CSS tradicional. Abaixo está um guia completo para usar estilos com **React Native** e **styled-components**.

## **Usando CSS "nativo" com React Native**
O React Native utiliza a API `StyleSheet`. Veja como funciona:

1. **Criando estilos básicos**:
   ```javascript
   import React from 'react';
   import { StyleSheet, Text, View } from 'react-native';

   const App = () => {
     return (
       <View style={styles.container}>
         <Text style={styles.text}>Olá, React Native!</Text>
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#f0f0f0',
     },
     text: {
       fontSize: 20,
       color: '#333',
     },
   });

   export default App;
   ```

## **Usando styled-components no React Native**
### **1. Instale o styled-components**
No terminal, dentro do projeto, instale o pacote:
```bash
npm install styled-components
```

### **2. Como usar styled-components**
O `styled-components` permite escrever CSS diretamente no React Native. Veja como fazer:

```javascript
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #333;
`;

const App = () => {
  return (
    <Container>
      <Text>Olá, React Native com styled-components!</Text>
    </Container>
  );
};

export default App;
```

### **3. Adicionando props aos estilos**
Você pode usar **props** para criar estilos dinâmicos:
```javascript
const Button = styled.TouchableOpacity`
  background-color: ${(props) => (props.primary ? '#007BFF' : '#CCC')};
  padding: 10px 20px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: ${(props) => (props.primary ? '#FFF' : '#000')};
  font-size: 16px;
`;

const App = () => {
  return (
    <Container>
      <Button primary>
        <ButtonText primary>Clique Aqui</ButtonText>
      </Button>
      <Button>
        <ButtonText>Cancelar</ButtonText>
      </Button>
    </Container>
  );
};
```

## **Diferenças principais entre CSS tradicional e React Native com styled-components**
1. **Unidades de medida**:
   - No React Native, não usamos `px`, `%` ou outras unidades explícitas.
   - Valores numéricos são sempre tratados como `dp` (device-independent pixels).

2. **Propriedades exclusivas**:
   - Propriedades como `flex`, `alignItems`, `justifyContent` seguem o modelo de layout **Flexbox**.
   - Não há suporte direto para algumas propriedades CSS (como `box-shadow` ou `z-index`).

