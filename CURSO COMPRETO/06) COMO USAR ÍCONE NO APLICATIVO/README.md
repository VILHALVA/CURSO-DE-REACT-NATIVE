# COMO USAR ÍCONE NO APLICATIVO COM REACT NATIVE
Para usar ícones em um aplicativo React Native, você pode usar bibliotecas como **react-native-vector-icons** ou **Expo Icons** (se estiver utilizando Expo). Ambas oferecem uma ampla gama de ícones prontos para uso.

## **1. Usando `react-native-vector-icons` (para projetos sem Expo)**
### Passo a Passo para Instalar e Usar Ícones:
1. **Instalar a biblioteca**:

   Primeiro, você precisa instalar a biblioteca `react-native-vector-icons`:

   ```bash
   npm install react-native-vector-icons
   ```

2. **Linkando (se necessário)**:

   Para versões do React Native anteriores à 0.60, pode ser necessário linkar a biblioteca manualmente. No entanto, para versões mais recentes (0.60 ou superior), o React Native usa o autolinking e a instalação deve ser suficiente.

   Se você estiver usando o React Native 0.59 ou inferior, execute:

   ```bash
   react-native link react-native-vector-icons
   ```

3. **Usando ícones**:

   Após a instalação, você pode usar ícones em seu aplicativo. A biblioteca oferece uma variedade de ícones, como os de FontAwesome, Material Icons, etc.

   **Exemplo de código:**

   ```javascript
   import React from 'react';
   import { View, Text, StyleSheet } from 'react-native';
   import Icon from 'react-native-vector-icons/FontAwesome'; // Pode escolher o ícone de sua preferência

   const App = () => {
     return (
       <View style={styles.container}>
         <Text style={styles.text}>Exemplo de Ícone:</Text>
         <Icon name="rocket" size={30} color="#900" />
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     text: {
       fontSize: 20,
       marginBottom: 10,
     },
   });

   export default App;
   ```

   No exemplo acima:
   - `Icon` é importado de `react-native-vector-icons/FontAwesome`.
   - O ícone é exibido com o nome `rocket`, tamanho 30 e cor vermelha (`#900`).

### **2. Usando Expo Icons (para projetos com Expo)**
Se você estiver usando o Expo, é mais simples usar os ícones, pois a biblioteca já vem embutida.

#### Passo a Passo para Usar Ícones com Expo:
1. **Instalar a biblioteca**:

   Se você estiver usando Expo, a biblioteca de ícones chamada `@expo/vector-icons` já está instalada por padrão. Mas, caso precise instalar ou atualizá-la, use o seguinte comando:

   ```bash
   expo install @expo/vector-icons
   ```

2. **Usando ícones**:

   Agora você pode usar ícones diretamente no seu código.

   **Exemplo de código:**

   ```javascript
   import React from 'react';
   import { View, Text, StyleSheet } from 'react-native';
   import { Ionicons } from '@expo/vector-icons'; // Exemplo com Ionicons

   const App = () => {
     return (
       <View style={styles.container}>
         <Text style={styles.text}>Exemplo de Ícone com Expo:</Text>
         <Ionicons name="md-checkmark-circle" size={50} color="green" />
       </View>
     );
   };

   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     text: {
       fontSize: 20,
       marginBottom: 10,
     },
   });

   export default App;
   ```

   Neste exemplo:
   - O ícone `md-checkmark-circle` da biblioteca **Ionicons** é usado.
   - A cor do ícone é verde e o tamanho é 50.

### **3. Usando Ícones com FontAwesome (para Expo ou React Native sem Expo)**
FontAwesome é uma das bibliotecas mais populares para ícones. Ela pode ser usada tanto no Expo quanto no React Native puro.

#### Exemplo de código usando FontAwesome:
Para **Expo**:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // FontAwesome no Expo

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ícone FontAwesome com Expo:</Text>
      <FontAwesome name="home" size={50} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default App;
```

Para **React Native sem Expo**:

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // FontAwesome no React Native

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ícone FontAwesome:</Text>
      <Icon name="home" size={50} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default App;
```

## **Conclusão:**
Você pode facilmente adicionar ícones ao seu aplicativo React Native usando as bibliotecas `react-native-vector-icons` ou `@expo/vector-icons` (se estiver utilizando Expo). Ambas oferecem uma ampla variedade de ícones de diferentes conjuntos, como **FontAwesome**, **Ionicons**, **MaterialIcons**, e outros. Basta escolher a biblioteca que melhor atende às suas necessidades e integrá-la ao seu projeto.