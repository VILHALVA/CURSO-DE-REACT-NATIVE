## Requisitos

* Node.js 20 ou superior
* Expo

## Como rodar o projeto baixado

Alterar no arquivo "src/config/api.js", colocando o IP onde está a API. No curso, a API é executada no próprio PC, então coloque o IP do PC. Para recuperar o IP, execute no terminal o comando.
```
ipconfig
```

Instalar todas as dependencias indicada pelo package.json
```
npm install
```

Executar o projeto
```
npx expo start
```


## Sequencia para criar o projeto
Criar o projeto com React Native usando expo
```
npx create-expo-app nome_app
```

Executar o projeto
```
npx expo start
```

Transforma o CSS em componentes
```
npm install --save styled-components
```

Realizar chamada para API
```
npm install axios
```

Biblioteca de ícones
```
npm install --save react-native-vector-icons
```

Dependência para navegar entre as página
```
npm install @react-navigation/native 
```
```
npm install @react-navigation/native-stack
```
```
npx expo install react-native-screens react-native-safe-area-context
```