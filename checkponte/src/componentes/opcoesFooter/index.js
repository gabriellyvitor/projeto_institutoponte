import styled from 'styled-components';
import { Link } from 'react-router-dom';

const OpcoesContainer = styled.div`
    display: table;
    margin: 0 auto;
`

const Opcao = styled.li`
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #797FBB;
    display: table-cell;
    height: 100%;
    line-height: 10px;
    padding: 10px 20px;
    cursor: pointer;
    min-width: 120px;
`;

const OpcaoMenor = styled.p`
font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Opcoes = styled.ul`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: table-row;
    justify-content: center;
`;

const textoOpcoes = ['CONTATO', 'OUVIDORIA', 'INFORMAÇÕES', 'ASSESSORIA DE IMPRENSA', 'TRABALHE CONOSCO', 'POLÍTICA DE COOKIES E PRIVACIDADE'];

function OpcoesFooter() {
    return (
        <OpcoesContainer>
            <Opcoes>
                { textoOpcoes.map( (texto) => {
                    if (texto == 'ASSESSORIA DE IMPRENSA'){ return(
                    <StyledLink to={`/${texto.toLowerCase()}`} >
                        <Opcao>
                            <p>{texto}</p>
                            <OpcaoMenor>Mile4 Comunicação</OpcaoMenor>
                        </Opcao>
                    </StyledLink>);
                    } else { return(
                        <StyledLink to={`/${texto.toLowerCase()}`} >
                        <Opcao>
                            <p>{texto}</p>
                        </Opcao>
                    </StyledLink>);
                    }
                } ) }
            </Opcoes>
        </OpcoesContainer>
    )
}

export default OpcoesFooter;