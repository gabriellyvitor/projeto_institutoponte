// SecoesContainer.js

import React from 'react';
import styled from 'styled-components';
import TextoSecao from '../textoSecao';

const Container = styled.section`
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 0;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const SubContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #f0f4f8;
    }
`;

const Border = styled.div`
    width: 1px;
    height: 60%;
    background-color: #d9d9d9;
    margin: 0 20px;
    border-radius: 5px;
    box-shadow: 4px 4px 6px #757575B2;
`;

function SecoesContainer({ secaoAtual, mudarSecaoFaculdades, mudarSecaoDepoimentos }) {
    return (
        <Container>
            <SubContainer 
                onClick={mudarSecaoFaculdades} 
                active={secaoAtual === 'Faculdades'}
            >
                <TextoSecao 
                    alinhamento="center" 
                    cor={secaoAtual === 'Faculdades' ? "#8B5DFF" : "#595959"} 
                    decoracao={secaoAtual === 'Faculdades' ? "underline" : "none"}
                >
                    Faculdades
                </TextoSecao>
            </SubContainer>
            <Border />
            <SubContainer 
                onClick={mudarSecaoDepoimentos} 
                active={secaoAtual === 'Depoimentos'}
            >
                <TextoSecao 
                    alinhamento="center" 
                    cor={secaoAtual === 'Depoimentos' ? "#8B5DFF" : "#595959"} 
                    decoracao={secaoAtual === 'Depoimentos' ? "underline" : "none"}
                >
                    Depoimentos
                </TextoSecao>
            </SubContainer>
        </Container>
    );
}

export default SecoesContainer;