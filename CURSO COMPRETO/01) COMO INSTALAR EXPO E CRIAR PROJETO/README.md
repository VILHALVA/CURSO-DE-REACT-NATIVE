# COMO INSTALAR EXPO E CRIAR PROJETO
## INSTALAÇÃO DO EXPO  
1. **Instale o Node.js:**  
   - Baixe e instale o [Node.js](https://nodejs.org) (LTS recomendado).  
   - Após a instalação, verifique a versão do `Node.js` e do `npm` para garantir que estão instalados:  
     ```bash
     node -v
     npm -v
     ```  

2. **Instale o Expo CLI:**  
   - No terminal, execute o seguinte comando para instalar o CLI do Expo globalmente:  
     ```bash
     npm install -g expo-cli
     ```  
   - Verifique se a instalação foi bem-sucedida:  
     ```bash
     expo --version
     ```  

## CRIAÇÃO DO PRIMEIRO PROJETO  
1. **Criar um novo projeto Expo:**  
   - No terminal, execute:  
     ```bash
     expo init MeuPrimeiroProjeto
     ```  
   - O CLI do Expo solicitará que você escolha um template. Você pode selecionar:  
     - **Blank**: Para começar do zero.  
     - **Blank (TypeScript)**: Para usar TypeScript.  
     - **Templates com exemplos adicionais**, se necessário.  

2. **Entre no diretório do projeto:**  
   ```bash
   cd MeuPrimeiroProjeto
   ```  

3. **Inicie o servidor de desenvolvimento:**  
   ```bash
   expo start
   ```  
   - Este comando abrirá uma interface no navegador e exibirá um QR code no terminal.  

## EXECUTANDO O PROJETO NO DISPOSITIVO  
1. **No dispositivo físico (Android ou iOS):**  
   - Instale o aplicativo **Expo Go**:  
     - [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)  
     - [Apple App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)  

   - Abra o aplicativo **Expo Go** e escaneie o QR code exibido no terminal ou navegador.  

2. **No emulador ou simulador:**  
   - Para Android, instale o [Android Studio](https://developer.android.com/studio) e configure um AVD (opcional para o Expo).  
   - Para iOS, use o simulador integrado no macOS, caso tenha o Xcode instalado.  

