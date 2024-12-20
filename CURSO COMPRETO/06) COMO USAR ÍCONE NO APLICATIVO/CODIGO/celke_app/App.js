// useEffect - Criar efeitos colaterais em componentes funcionais
// useState - Adicionar estado ao componente
import { useEffect, useState } from "react";

// Incluir os componentes utilizado para estruturar o conteúdo
import { Alert, ScrollView, TouchableOpacity } from "react-native";

// Importar o arquivo com os componentes CSS
import { Container, TitleList, List, RowData, InfoData, ValueData, BtnView, Pagination, PaginationText, PaginationTextActive } from './src/styles/custom_adm';

// Importar os ícones
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Arquivo com as configurações da API
import api from "./src/config/api";

// Criar e exportar a função com a tela inicial 
const App = () => {

  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState('');

  // Função para recuperar os usuários
  const getUsers = async (page) => {

    // Requisição para a API indicando a rota
    await api.get(`/users?page=${page}`)
      .then((response) => { // Acessar o then quando a API retornar status sucesso

        //console.log(response.data);
        // Atribuir os dados retornado da API
        setUsers(response.data.users);
        setPagination(response.data.pagination);

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
    getUsers(1);
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
                  <MaterialCommunityIcons
                    name="eye-arrow-right-outline"
                    size={20}
                    color={'#c0c0c0'}
                  />
                </BtnView>
              </RowData>
            )
          })}
          <Pagination>

            {pagination.prev_page_url &&
              <TouchableOpacity onPress={() => getUsers(1)}>
                <PaginationText>
                  <MaterialCommunityIcons
                    name="chevron-double-left"
                    size={20}
                    color={'#c0c0c0'}
                  />
                </PaginationText>
              </TouchableOpacity>
            }

            {pagination.prev_page_url &&
              <TouchableOpacity onPress={() => getUsers(+pagination.page - 1)}>
                <PaginationText>
                  <MaterialCommunityIcons
                    name="chevron-left"
                    size={20}
                    color={'#c0c0c0'}
                  />
                </PaginationText>
              </TouchableOpacity>
            }

            {pagination.prev_page_url &&
              <TouchableOpacity onPress={() => getUsers(pagination.prev_page_url)}>
                <PaginationText>{pagination.prev_page_url}</PaginationText>
              </TouchableOpacity>
            }

            <PaginationTextActive>
              {pagination.page}
            </PaginationTextActive>

            {pagination.next_page_url &&
              <TouchableOpacity onPress={() => getUsers(pagination.next_page_url)}>
                <PaginationText>{pagination.next_page_url}</PaginationText>
              </TouchableOpacity>
            }

            {pagination.next_page_url &&
              <TouchableOpacity onPress={() => getUsers(+pagination.page + 1)}>
                <PaginationText>
                <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color={'#c0c0c0'}
                  />
                </PaginationText>
              </TouchableOpacity>
            }

            {pagination.next_page_url &&
              <TouchableOpacity onPress={() => getUsers(pagination.lastPage)}>
                <PaginationText>
                  <MaterialCommunityIcons
                    name="chevron-double-right"
                    size={20}
                    color={'#c0c0c0'}
                  />
                </PaginationText>
              </TouchableOpacity>
            }

          </Pagination>
        </List>

      </Container>
    </ScrollView>
  );
};

export default App;