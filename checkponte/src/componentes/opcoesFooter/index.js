import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TextoCorpo from '../textoCorpo';

const OpcoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 20px;
    /*
    margin-left: 250px;
    margin-right: 250px;
    */
    margin-left: 17%;
    width: 60%;
`

const Opcao = styled.li`
    font-family: 'Montserrat', Arial, Tahoma, sans-serif;
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
    padding-bottom: 40px;
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
            <address>
                <TextoCorpo tamanho='19px'>
                    Av. Fernando Ferrari, 1080, Torre Central, sala 604, Mata da Praia, Vitória/ES, 29066-380 | CNPJ: 21.181.264/0001-69
                </TextoCorpo>
            </address>
        </OpcoesContainer>
    )
}

export default OpcoesFooter;