// useEffect - Criar efeitos colaterais em componentes funcionais
// useState - Adicionar estado ao componente
import { useEffect, useState } from "react";

// Incluir os componentes utilizado para estruturar o conteúdo
import { Alert, ScrollView } from "react-native";

// Importar o arquivo com os componentes CSS
import { Container, TitleList, List, RowData, InfoData, ValueData, BtnView } from './src/styles/custom_adm';

// Arquivo com as configurações da API
import api from "./src/config/api";

// Criar e exportar a função com a tela inicial 
const App = () => {

  const [users, setUsers] = useState([]);

  // Função para recuperar os usuários
  const getUsers = async () => {

    // Requisição para a API indicando a rota
    await api.get("/users")
      .then((response) => { // Acessar o then quando a API retornar status sucesso

        //console.log(response.data.users);
        // Atribuir os dados retornado da API
        setUsers(response.data.users);

      }).catch((err) => { // Acessar o catch quando a API retornar status erro

        if (err.response) { // Acessa o IF quando a API retornar erro
          Alert.alert("Ops", err.response.data.mensagem);
        } else { // Acessa o ELSE quando a API não responder
          Alert.alert("Ops", "Erro: Tente mais tarde!");
        }

      });
  }

  // Executar quando o usuário carregar a tela e chamar a função getUsers
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <TitleList>Usuários</TitleList>

        <List>
          {users.map((user) => {
            return (
              <RowData key={user.id}>
                <InfoData>
                  <ValueData>{user.name}</ValueData>
                </InfoData>
                <BtnView>
                  Detalhes
                </BtnView>
              </RowData>
            )
          })}
        </List>

      </Container>
    </ScrollView>
  );
};

export default App;