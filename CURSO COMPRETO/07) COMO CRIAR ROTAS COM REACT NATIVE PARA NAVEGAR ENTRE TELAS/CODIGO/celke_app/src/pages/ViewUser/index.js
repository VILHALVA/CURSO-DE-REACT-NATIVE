// Incluir os componentes utilizado para estruturar o conteúdo
import {  ScrollView } from "react-native";

// Importar o arquivo com os componentes CSS
import { Container, TitleList } from '../../styles/custom_adm';

// Criar e exportar a função detalhes do usuário
export default function ViewUser(){

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Container>
        <TitleList>Detalhes do Usuário</TitleList>

      </Container>
    </ScrollView>
  );
};