# MANUAL  
## INSTALAÇÃO E CONFIGURAÇÃO:  
### **OPÇÃO 1: USANDO EXPO**  
1. **Instale o Node.js:**  
   Baixe e instale o [Node.js](https://nodejs.org) para configurar o ambiente de desenvolvimento JavaScript.  

2. **Instale o Expo CLI:**  
   Instale o CLI do Expo globalmente:  
   ```bash  
   npm install -g expo-cli  
   ```  

3. **Configure o dispositivo móvel:**  
   - Baixe o aplicativo **Expo Go** no seu dispositivo:  
     - [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)  
     - [Apple App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)  

### **OPÇÃO 2: USANDO REACT NATIVE CLI E ANDROID STUDIO**  
1. **Instale o Node.js:**  
   Baixe e instale o [Node.js](https://nodejs.org).  

2. **Instale o React Native CLI:**  
   Instale o CLI do React Native:  
   ```bash  
   npm install -g react-native-cli  
   ```  

3. **Instale o Android Studio e configure o SDK:**  
   - Baixe o [Android Studio](https://developer.android.com/studio) e instale.  
   - Configure o SDK Manager no Android Studio para instalar as versões necessárias.  
   - Configure variáveis de ambiente:  
     Adicione as seguintes linhas ao arquivo `~/.bashrc`, `~/.zshrc` ou equivalente:  
     ```bash  
     export ANDROID_HOME=$HOME/Library/Android/sdk  
     export PATH=$PATH:$ANDROID_HOME/emulator  
     export PATH=$PATH:$ANDROID_HOME/tools  
     export PATH=$PATH:$ANDROID_HOME/tools/bin  
     export PATH=$PATH:$ANDROID_HOME/platform-tools  
     ```  

4. **Configure o emulador ou use um dispositivo físico:**  
   - Crie um AVD (Android Virtual Device) no Android Studio.  
   - Ative a depuração USB em seu dispositivo Android para testá-lo diretamente.  

5. **Verifique as dependências:**  
   Confirme que todas as dependências estão instaladas:  
   ```bash  
   npx react-native doctor  
   ```  

## PRIMEIRO PROJETO:  
### **OPÇÃO 1: CRIANDO O PROJETO COM EXPO**  
1. **Criar o projeto:**  
   ```bash  
   expo init MeuPrimeiroProjeto  
   cd MeuPrimeiroProjeto  
   ```  

2. **Iniciar o servidor de desenvolvimento:**  
   ```bash  
   expo start  
   ```  
   Escaneie o QR code exibido no terminal com o aplicativo **Expo Go** no seu celular.  

### **OPÇÃO 2: CRIANDO O PROJETO COM REACT NATIVE CLI**  
1. **Criar o projeto:**  
   ```bash  
   npx react-native init MeuPrimeiroProjeto  
   cd MeuPrimeiroProjeto  
   ```  

2. **Executar o projeto:**  
   - Para Android:  
     ```bash  
     npx react-native run-android  
     ```  
   - Para iOS (no macOS com Xcode instalado):  
     ```bash  
     npx react-native run-ios  
     ```  

## EDITANDO O PROJETO:  
1. **Abra o projeto:**  
   Use um editor de texto como o Visual Studio Code:  
   ```bash  
   code .  
   ```  

2. **Edite o arquivo inicial:**  
   Modifique o arquivo `App.js` para personalizar seu aplicativo.  

