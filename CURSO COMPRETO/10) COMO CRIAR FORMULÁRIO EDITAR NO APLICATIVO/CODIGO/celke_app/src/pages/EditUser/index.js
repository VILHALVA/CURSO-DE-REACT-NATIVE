// useEffect - Criar efeitos colaterais em componentes funcionais
// useState - Adicionar estado ao componente
import { useEffect, useState } from "react";

// Incluir os componentes utilizado para estruturar o conteúdo
import { Alert, ScrollView } from "react-native";

// Importar o arquivo com os componentes CSS
import { BtnSubmitFormDash, Container, InputFormDash, LabelFormDash, TxtRequiredFormDash, TxtSubmitFormDash } from '../../styles/custom_adm';

// Incluir a função navegar entre as telas
import { useNavigation } from "@react-navigation/native";

// Arquivo com as configurações da API
import api from "../../config/api";

// Criar e exportar a função editar usuário
export default function EditUser({ route }) {

  // Navegar entre as telas
  const navigation = useNavigation();

  // Armazenar as informações do usuário
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Função para recuperar os detalhes do usuário
  const getUser = async () => {

    // Receber como parâmetro o id registro
    const userId = route.params.userId;

    // Requisição para a API indicando a rota
    await api.get(`/users/${userId}`)
      .then((response) => { // Acessar o then quando a API retornar status sucesso

        // Setar os dados do usuário retornado da API
        //console.log(response.data.user);
        setId(response.data.user.id);
        setName(response.data.user.name);
        setEmail(response.data.user.email);

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

  // Executar quando o usuário carregar a tela e chamar a função getUser
  useEffect(() => {
    getUser();
  }, []);

  // Processar/submeter os dados do formulário
  const editUser = async () => {

    // Requisição para a API indicando a rota e os dados
    await api.put('/users', { id, name, email })
      .then((response) => { // Acessar o then quando a API retornar status sucesso

        Alert.alert("Sucesso", response.data.mensagem);

        // Redirecionar o usuário para tela visualizar usuário
        navigation.navigate('ViewUser');

      }).catch((err) => {// Acessar o catch quando a API retornar status erro

        if (err.response) {  // Acessa o IF quando a API retornar erro

          Alert.alert("Ops", err.response.data.mensagem);

        } else { // Acessa o ELSE quando a API não responder

          Alert.alert("Ops", "Erro: Tente novamente!");

        }

      })
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>

        <LabelFormDash>* Nome</LabelFormDash>
        <InputFormDash
          placeholder='Nome completo'
          autoCorrect={false}
          value={name}
          onChangeText={text => setName(text)}
        />

        <LabelFormDash>* E-mail</LabelFormDash>
        <InputFormDash
          placeholder='Melhor e-mail'
          autoCorrect={false}
          keyboardType='email-address'
          autoCapitalize='none'
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TxtRequiredFormDash>* Campo obrigatório</TxtRequiredFormDash>

        <BtnSubmitFormDash onPress={editUser}>
          <TxtSubmitFormDash>
            Salvar
          </TxtSubmitFormDash>
        </BtnSubmitFormDash>

      </Container>
    </ScrollView>
  );
};