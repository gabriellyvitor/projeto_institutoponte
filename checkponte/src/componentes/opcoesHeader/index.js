import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcao = styled.li`
    font-family: 'Montserrat', Arial, Tahoma, sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #797FBB;
    display: flex;
    padding: 10px 10px 0 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    min-width: 75px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Opcoes = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
`;

const textoOpcoes = ['HOME', 'COMO ATUAMOS', 'SELEÇÃO DE ALUNOS', 'PARCEIROS', 'CONTRIBUA', 'NOTÍCIAS'];

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <StyledLink to={`/${texto.toLowerCase()}`} >
                    <Opcao>
                        <p>{texto}</p>
                    </Opcao>
                </StyledLink>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader;