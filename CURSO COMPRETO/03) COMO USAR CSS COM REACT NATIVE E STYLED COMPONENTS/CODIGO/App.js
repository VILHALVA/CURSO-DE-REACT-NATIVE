import React from "react";
import { Container, TitleList, List, RowData, InfoData, ValueData, BtnView } from './src/styles/custom_adm';

const App = () => {
  return (
    <Container>
      <TitleList>Usuários</TitleList>

      <List>

        <RowData>
          <InfoData>
            <ValueData>Cesar</ValueData>
          </InfoData>
          <BtnView>
            Detalhes
          </BtnView>
        </RowData>

        <RowData>
          <InfoData>
            <ValueData>Kelly</ValueData>
          </InfoData>
          <BtnView>
            Detalhes
          </BtnView>
        </RowData>

        <RowData>
          <InfoData>
            <ValueData>Jessica</ValueData>
          </InfoData>
          <BtnView>
            Detalhes
          </BtnView>
        </RowData>

        <RowData>
          <InfoData>
            <ValueData>Gabrielly</ValueData>
          </InfoData>
          <BtnView>
            Detalhes
          </BtnView>
        </RowData>

      </List>
    </Container>
  );
};

export default App;