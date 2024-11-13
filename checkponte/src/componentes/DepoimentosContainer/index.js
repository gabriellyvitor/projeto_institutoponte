import React from 'react';
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import escolhasJson from './escolhas.json';
import depoimentosJson from './depoimentos.json';

const Container = styled.section`
    width: 100%;
    min-height: 20px;
    background-color: white;
    display: ${props => props.display || 'flex'};
    flex-direction: column;
    align-items: center;
`;

const DivConteudo = styled.div`
    margin: 10px 30px 10px 30px;
`

const ImagemDepoimento = styled.img`
    width: ${props => props.largura || '448px'};
    height: ${props => props.altura || '448px'};
    float: ${props => props.lado || 'left'};
    gap: 0px;
    opacity: 0px;
    margin: 15px 20px 15px 20px;
    
    gap: 0px;
    border-radius: 401.5px;
    border: 5px solid #FCB040;
    opacity: 0px;

`

const TextoParagrafo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.tamanho || '28px'};
    font-weight: ${props => props.peso || '400'};
    color: ${props => props.cor || '#637285'};
    padding: ${props => props.espacamento || '0'};
    text-align: ${props => props.alinhamento || 'left'};
    display: ${props => props.display || 'flex'};
    align-items: center;
    white-space: pre-wrap;
`

const CustomDropdownButton = styled(DropdownButton)`
    background-color: white; /* Cor de fundo do botão */
    border-radius: 5px; /* Arredondamento das bordas */
    text-align: center; 

    &:hover, &:focus, &.active, &.show, &.dropdown-toggle::after {
        background-color: #EEEEEE; /* Cor de fundo do botão no estado hover, focus, etc. */
    }

    /* Estilizando o menu de dropdown */
    .dropdown-menu {
        background-color: white; /* Nova cor de fundo do menu */
    }

    /* Estilizando os itens do dropdown */
    .dropdown-item {
        color: #595959; /* Cor do texto dos itens */
        text-align: center;

        &:hover {
            background-color: #EEEEEE; /* Cor de fundo dos itens ao passar o mouse */
            color: black; /* Cor do texto dos itens ao passar o mouse */
        }
    }
`;

function DepoimentosContainer({ visibilidadeDepoimentos }) {

    const [escolhas, setEscolhas] = useState(escolhasJson);
    const [escolhido, setEscolhido] = useState("Escolha um Universitário");

    function escolherItem(escolha){
        setEscolhido(escolha);
    }

    return (
        <Container display={visibilidadeDepoimentos}>
            <CustomDropdownButton drop='down-centered' variant='' id="dropdown-basic-button" title={escolhido}>
                { escolhas.map( escolha => (
                    <Dropdown.Item onClick={() => escolherItem(escolha)}>{escolha}</Dropdown.Item>    
                )) }
            </CustomDropdownButton>
            { escolhido != 'Escolha um Universitário' ? 
            <div>
                <DivConteudo>
                    <TextoParagrafo display='block' alinhamento='center' peso='500' tamanho='48px'>{depoimentosJson[escolhido]["Nome"]}</TextoParagrafo>
                    <TextoParagrafo display='block' alinhamento='center' peso='500' tamanho='40px'>{depoimentosJson[escolhido]["Curso"]}</TextoParagrafo>
                    <TextoParagrafo>
                        <ImagemDepoimento src={depoimentosJson[escolhido]["Imagem"]} />
                        {depoimentosJson[escolhido]["Texto"]}
                    </TextoParagrafo>
                </DivConteudo>
            </div>
             : null}
            
        </Container>
    );
}

export default DepoimentosContainer;