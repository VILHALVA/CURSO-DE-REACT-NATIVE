# COMO EXECUTAR APLICATIVO CRIADO
## EXECUTANDO O APLICATIVO
### **1. Inicie o servidor de desenvolvimento**
- No diretório do seu projeto, execute:
  ```bash
  expo start
  ```
  - Isso abrirá uma interface no navegador (Metro Bundler) e exibirá um QR code no terminal.

### **2. No dispositivo físico**
#### Para Android e iOS:
1. **Instale o aplicativo Expo Go:**
   - Android: Baixe na [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent).
   - iOS: Baixe na [Apple App Store](https://apps.apple.com/app/expo-go/id982107779).

2. **Escaneie o QR Code:**
   - Abra o aplicativo Expo Go no seu dispositivo.
   - Use a câmera do aplicativo para escanear o QR code exibido no terminal ou no navegador (Metro Bundler).

3. **Execute o aplicativo:**
   - O aplicativo será carregado no Expo Go e exibido diretamente no seu dispositivo.

### **3. No emulador Android**
1. **Configure o Android Studio (opcional):**
   - Baixe e configure o [Android Studio](https://developer.android.com/studio).
   - Crie um AVD (Android Virtual Device) no SDK Manager.
   - Certifique-se de que o AVD está em execução.

2. **Execute no emulador:**
   - No Metro Bundler (aberto após `expo start`), clique em **"Run on Android device/emulator"**.
   - Certifique-se de que o AVD está ativo antes de clicar.

### **4. No simulador iOS (macOS apenas)**
1. **Configure o Xcode:**
   - Certifique-se de ter o Xcode instalado no macOS.
   - Abra o simulador do iOS via Xcode.

2. **Execute no simulador:**
   - No Metro Bundler, clique em **"Run on iOS simulator"**.

### **5. No navegador (opcional)**
- Se quiser rodar o aplicativo diretamente no navegador, o Expo oferece suporte para isso:
  - No Metro Bundler, clique em **"Run in web browser"**.

