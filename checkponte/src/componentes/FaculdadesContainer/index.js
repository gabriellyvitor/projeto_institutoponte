import React from 'react';
import styled from "styled-components";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';
import escolhasJson from './escolhas.json';
import faculdadesJson from './faculdades.json';
import TextoCorpo from '../textoCorpo';

const Container = styled.section`
    width: 100%;
    min-height: 20px;
    background-color: white;
    display: ${props => props.display || 'flex'};
    flex-direction: column;
    align-items: center;
`;

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

function FaculdadesContainer({ visibilidadeFaculdades }) {

    const [escolhas, setEscolhas] = useState(escolhasJson);
    const [escolhido, setEscolhido] = useState("Escolha uma Faculdade");

    function escolherItem(escolha){
        setEscolhido(escolha);
    }

    return (
        <Container display={visibilidadeFaculdades}>
            <CustomDropdownButton drop='down-centered' variant='' id="dropdown-basic-button" title={escolhido}>
                { escolhas.map( escolha => (
                    <Dropdown.Item onClick={() => escolherItem(escolha)}>{escolha}</Dropdown.Item>    
                )) }
            </CustomDropdownButton>
            { escolhido != 'Escolha uma Faculdade' ? <TextoCorpo>{faculdadesJson[escolhido]["Texto1"]}</TextoCorpo> : null}
            { escolhido != 'Escolha uma Faculdade' ? <TextoCorpo>{faculdadesJson[escolhido]["Texto2"]}</TextoCorpo> : null}
            
        </Container>
    );
}

export default FaculdadesContainer;