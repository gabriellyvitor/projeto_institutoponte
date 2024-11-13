import styled from "styled-components";
import TextoCorpo from "../textoCorpo";
import checklist from "../../arquivos/Checkpontelist.pdf";
import pdfIcon from "../../imagens/checklist/pdf-icon.png";

const Container = styled.section`
    width: 100%;
    min-height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Link = styled.a`
    text-decoration: none;
    color: #797FBB;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
`;

const TituloChecklist = styled.p`
    text-decoration: none;
    color: #797FBB;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 800;
    margin-top: 20px;
`

function CheckListContainer() {
    return (
        <Container>
            <TituloChecklist>Checkponte List</TituloChecklist>
            <Link href={checklist} download>
                <img src={pdfIcon} width="50px"/>
                Baixar checklist completo
            </Link>
        </Container>
    );
}

export default CheckListContainer;