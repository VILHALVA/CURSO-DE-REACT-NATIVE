// Gerenciar a navegação, atua como o contêiner na pilha de telas
import { NavigationContainer } from "@react-navigation/native";

// Importar os ícones
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Importa os componentes de tela
import Home from "./app/home";
import Revenues from "./app/revenues";
import Expenses from "./app/expenses";

// Importar a função para criar barra de navegação na parte inferior da tela
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Executar a função para criar a barra de navegação na parte inferior da tela
const Tab = createBottomTabNavigator();

// Função principal do aplicativo que define a estrutura de navegação
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name="Revenues"
          component={Revenues}
          options={{
            headerShown: false,
            tabBarLabel: 'Receitas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cash" color={color} size={size} />
            )
          }}
        />

        <Tab.Screen
          name="Expenses"
          component={Expenses}
          options={{
            headerShown: false,
            tabBarLabel: 'Despesas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="currency-usd-off" color={color} size={size} />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}