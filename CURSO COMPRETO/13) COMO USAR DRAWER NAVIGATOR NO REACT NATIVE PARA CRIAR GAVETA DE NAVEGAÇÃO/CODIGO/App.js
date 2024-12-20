// Importa a função para criar um drawer navigator
import { createDrawerNavigator } from '@react-navigation/drawer';
// Importa o container de navegação, necessário para gerenciar o estado da navegação
import { NavigationContainer } from '@react-navigation/native';

// Cria um drawer navigator que será usado para gerenciar as telas do menu lateral
const Drawer = createDrawerNavigator();

// Importa os componentes de tela
import Home from './app/home';
import Revenues from './app/revenues';
import Expenses from './app/expenses';

// Função principal do aplicativo que define a estrutura de navegação
export default function App() {
  return (

    // NavigationContainer é necessário para envolver todo o sistema de navegação
    <NavigationContainer>
      {/* Drawer.Navigator define o navegador de drawer e suas telas filhas */}
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Receitas' component={Revenues} />
        <Drawer.Screen name='Despesas' component={Expenses} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}