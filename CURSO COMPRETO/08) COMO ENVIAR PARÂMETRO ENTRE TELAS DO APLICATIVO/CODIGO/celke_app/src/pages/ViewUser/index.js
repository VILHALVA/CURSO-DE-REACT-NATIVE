// Incluir os componentes utilizado para estruturar o conteúdo
import {  Alert, ScrollView } from "react-native";

// Importar o arquivo com os componentes CSS
import { Container, TitleList } from '../../styles/custom_adm';

// Criar e exportar a função detalhes do usuário
export default function ViewUser( { route }){

  // console.log(route);
  // console.log(route.params.userId);

  const userId = route.params.userId;

  Alert.alert("ID do usuário", `${userId}`);  

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <TitleList>Detalhes do Usuário</TitleList>

      </Container>
    </ScrollView>
  );
};