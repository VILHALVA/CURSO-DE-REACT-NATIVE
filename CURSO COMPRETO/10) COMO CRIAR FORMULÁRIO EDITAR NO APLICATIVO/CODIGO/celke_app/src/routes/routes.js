// Gerenciar a navegação, atua como o contêiner na pilha de telas
import { NavigationContainer } from "@react-navigation/native";

// Gerenciar a navegação entre as telas
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Configuração e gestão da navegação entre as telas
const Stack = createNativeStackNavigator();

// Importar as páginas
import ListUsers from '../pages/ListUsers';
import ViewUser from '../pages/ViewUser';
import EditUser from '../pages/EditUser';

// Criar e exportar a função com as rotas
export default function Routes(){
    return (
        // Agrupar as rotas
        <NavigationContainer>
            {/* Criar uma pilha de páginas */}
            <Stack.Navigator>
            {/* Carregar a tela listar usuários */}
            <Stack.Screen 
                name="ListUsers"
                component={ListUsers}
                // options={{ headerTitle: "Listar Usuários"}}
                options={{ headerShown: false }}
            />

            {/* Carregar a tela detalhes do usuário */}
            <Stack.Screen 
                name="ViewUser"
                component={ViewUser}
                options={{ headerTitle: "Detalhes do Usuário"}}
                // options={{ headerShown: false }}
            />

            {/* Carregar a tela editar usuário */}
            <Stack.Screen 
                name="EditUser"
                component={EditUser}
                options={{ headerTitle: "Editar Usuário"}}
                // options={{ headerShown: false }}
            />

            </Stack.Navigator>
        </NavigationContainer>
    )
}