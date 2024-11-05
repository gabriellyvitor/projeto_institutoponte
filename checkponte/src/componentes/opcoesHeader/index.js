import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcao = styled.li`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #797FBB;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Opcoes = styled.ul`
    display: flex;
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