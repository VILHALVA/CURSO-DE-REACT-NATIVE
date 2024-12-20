// useCallback - A função não será recriada a cada renderização, somente quando a dependências
// useEffect - Criar efeitos colaterais em componentes funcionais
// useState - Adicionar estado ao componente
import { useCallback, useState } from "react";

// Incluir os componentes utilizado para estruturar o conteúdo
import { Alert, ScrollView } from "react-native";

// Importar o arquivo com os componentes CSS
import { Container, Content, TitleViewContent, ViewContent, BtnActionEdit, TxtBtnAction, BtnActionDelete } from '../../styles/custom_adm';

// Incluir a função navegar entre as telas
// useFocusEffect para executar um efeito quando o componente recebe o foco
import { useFocusEffect, useNavigation } from "@react-navigation/native";

// Arquivo com as configurações da API
import api from "../../config/api";

// Criar e exportar a função detalhes do usuário
export default function ViewUser({ route }) {

  // Navegar entre as telas
  const navigation = useNavigation();

  // Armazenar as informações do usuário
  const [user, setUser] = useState([]);

  // Função para recuperar os detalhes do usuário
  const getUser = async () => {

    // Receber como parâmetro o id registro
    const userId = route.params.userId;

    // Requisição para a API indicando a rota
    await api.get(`/users/${userId}`)
      .then((response) => { // Acessar o then quando a API retornar status sucesso

        // Setar os dados do usuário retornado da API
        setUser(response.data.user);

      }).catch((err) => { // Acessar o catch quando a API retornar status erro
        if (err.response) {  // Acessa o IF quando a API retornar erro

          Alert.alert("Ops", err.response.data.mensagem);

          // Redirecionar o usuário para tela listar usuários 
          navigation.navigate('ListUsers');

        } else { // Acessa o ELSE quando a API não responder

          Alert.alert("Ops", "Erro: Tente novamente!");

          // Redirecionar o usuário para tela listar usuários 
          navigation.navigate('ListUsers');
        }
      });
  }

  // Apagar o usuário
  const deleteUser = async (userId) => {

    // Requisição para a API indicando a rota
    await api.delete(`/users/${userId}`)
      .then((response) => { // Acessar o then quando a API retornar status sucesso

        Alert.alert("Sucesso", response.data.mensagem);

        // Redirecionar o usuário para tela listar usuários 
        navigation.navigate('ListUsers');

      }).catch((err) => {// Acessar o catch quando a API retornar status erro
        if (err.response) {  // Acessa o IF quando a API retornar erro

          Alert.alert("Ops", err.response.data.mensagem);

        } else { // Acessa o ELSE quando a API não responder

          Alert.alert("Ops", "Erro: Tente novamente!");
        }
      });
  }

  // Executar quando o usuário carregar a tela e chamar a função getUser
  // useEffect(() => {
  //   getUser();
  // }, []);
  useFocusEffect(
    useCallback(() => {
      getUser();
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>

        <Content>
          <TitleViewContent>ID: </TitleViewContent>
          <ViewContent>{user.id}</ViewContent>
        </Content>

        <Content>
          <TitleViewContent>Nome: </TitleViewContent>
          <ViewContent>{user.name}</ViewContent>
        </Content>

        <Content>
          <TitleViewContent>E-mail: </TitleViewContent>
          <ViewContent>{user.email}</ViewContent>
        </Content>

        <BtnActionEdit onPress={() => navigation.navigate('EditUser', { userId: user.id })}>
          <TxtBtnAction>
            Editar
          </TxtBtnAction>
        </BtnActionEdit>

        <BtnActionDelete onPress={() => deleteUser(user.id)}>
          <TxtBtnAction>
            Apagar
          </TxtBtnAction>
        </BtnActionDelete>

      </Container>
    </ScrollView>
  );
};