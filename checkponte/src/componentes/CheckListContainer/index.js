import styled from "styled-components";
import { ReactComponent as UpperChecklist } from "../../imagens/checklist/Checklist.svg";
import { ReactComponent as BottomChecklist } from "../../imagens/checklist/Checklist-Footer.svg";

const Container = styled.section`
    width: 100%;
    min-height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function CheckListContainer() {
    return (
        <Container>
        </Container>
    );
}

export default CheckListContainer;