import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: #742fc2;
    padding: 8px;
`;

export const TitleList = styled.Text`
    color: #f5f5f5;
    font-size: 22px;
    text-align: center;
    padding: 25px 15px 5px 15px;
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