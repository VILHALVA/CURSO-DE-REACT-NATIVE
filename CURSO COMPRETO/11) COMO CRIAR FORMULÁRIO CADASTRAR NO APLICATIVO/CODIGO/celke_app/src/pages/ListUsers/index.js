// useCallback - A função não será recriada a cada renderização, somente quando a dependências
// useState - Adicionar estado ao componente
import { useCallback, useState } from "react";

// Incluir os componentes utilizado para estruturar o conteúdo
import { Alert, ScrollView, TouchableOpacity } from "react-native";

// Importar o arquivo com os componentes CSS
import { Container, TitleList, List, RowData, InfoData, ValueData, BtnView, Pagination, PaginationText, PaginationTextActive, TitleTextList, TitleBtnList, BtnAddTitleList, TxtAddTitleList } from '../../styles/custom_adm';

// Importar os ícones
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Incluir a função navegar entre as telas
// useFocusEffect para executar um efeito quando o componente recebe o foco
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// Arquivo com as configurações da API
import api from "../../config/api";

// Criar e exportar a função listar usuários
export default function ListUsers() {

  // Navegar entre as telas
  const navigation = useNavigation();

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
  useFocusEffect(
    useCallback(()=> {
      getUsers(1);
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <TitleList>
          <TitleTextList>
            Usuários
          </TitleTextList>
          <TitleBtnList>
            <TouchableOpacity onPress={() => navigation.navigate('AddUser')}>
              <BtnAddTitleList>
                <TxtAddTitleList>
                  Cadastrar
                </TxtAddTitleList>
              </BtnAddTitleList>
            </TouchableOpacity>
          </TitleBtnList>
        </TitleList>

        <List>
          {users.map((user) => {
            return (
              <RowData key={user.id}>
                <InfoData>
                  <ValueData>{user.name}</ValueData>
                </InfoData>
                <TouchableOpacity onPress={() => { navigation.navigate('ViewUser', { userId: user.id }) }}>
                  <BtnView>
                    <MaterialCommunityIcons
                      name="eye-arrow-right-outline"
                      size={20}
                      color={'#c0c0c0'}
                    />
                  </BtnView>
                </TouchableOpacity>
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