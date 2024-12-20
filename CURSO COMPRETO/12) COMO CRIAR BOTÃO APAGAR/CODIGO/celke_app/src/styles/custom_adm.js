import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: #742fc2;
    padding: 8px;
`;

// Listar
export const TitleList = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 15px 5px 15px;
    width: 100%;
`;

export const TitleTextList = styled.Text`
    color: #f5f5f5;
    font-size: 22px;
    padding-top: 7px;
    flex: 1;
    justify-content: flex-start;
`;

export const TitleBtnList = styled.View`
    justify-content: flex-end;
    align-self: flex-end;
`;

export const BtnAddTitleList = styled.View`
    margin-top: 5px;
    background-color: #5004a7;
    padding: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: #f5f5f5;
`;

export const TxtAddTitleList = styled.Text`
    color: #fff;
    font-size: 19px;
`;



export const List = styled.View`
    width: 100%;
`;

export const RowData = styled.View`
    background-color: #f5f5f5;
    padding: 10px;
    margin: 5px 0;
    border-radius: 6px;
    flex-direction: row;
    justify-content: flex-start;
`;

export const InfoData = styled.Text`
    color: #111;
    flex: 1;
    flex-direction: column;
`;

export const ValueData = styled.Text`
    font-size: 16px;
    flex: 0;
`;

export const BtnView = styled.Text`
    justify-content: flex-end;
`;

// Paginação
export const Pagination = styled.View`
    padding: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PaginationText = styled.Text`
    background-color: #f5f5f5;
    font-size: 16px;
    padding: 12px;
    margin: 3px;
    border-radius: 6px;
`;

export const PaginationTextActive = styled.Text`
    background-color: #c5c5c5;
    font-size: 16px;
    padding: 12px;
    margin: 3px;
    border-radius: 6px;
`;

// Visualizar
export const Content = styled.View`
    flex-direction: row;
    border-bottom-color: #c0c0c0;
    border-bottom-width: 1px;
`;

export const TitleViewContent = styled.Text`
    padding-top: 15px;
    color: #c0c0c0;
    font-size: 18px;
`;

export const ViewContent = styled.Text`
    padding-bottom: 15px;
    color: #f5f5f5;
    font-size: 18px;
    padding-top: 15px;
`;

export const BtnActionEdit = styled.TouchableOpacity`
    margin-top: 15px;
    background-color: #5004a7;
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: #f5f5f5;
`;

export const BtnActionDelete = styled.TouchableOpacity`
    margin-top: 15px;
    background-color: #dc3545;
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: #f5f5f5;
`;

export const TxtBtnAction = styled.Text`
    color: #fff;
    font-size: 19px;
`;

// Formulário
export const LabelFormDash = styled.Text`
    color: #f5f5f5;
    font-size: 18px;
    margin-bottom: 5px;
`;

export const InputFormDash = styled.TextInput`
    background-color: #fff;
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    color: #222;
    font-size: 18px;
    border-radius: 6px;
    border-color: #1f51fe;
    border-width: 1px;
`;

export const TxtRequiredFormDash = styled.Text`
    padding-bottom: 5px;
    color: #f5f5f5;
    font-size: 12px;
`;

export const BtnSubmitFormDash = styled.TouchableOpacity`
    background-color: #1f51fe;
    width: 100%;
    height: 45px;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;

export const TxtSubmitFormDash = styled.Text`
    color: #fff;
    font-size: 19px;
`;

