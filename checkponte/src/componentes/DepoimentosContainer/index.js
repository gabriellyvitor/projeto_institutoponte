import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    min-height: 300px;
    background-color: white;
    display: ${props => props.display || 'flex'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function DepoimentosContainer({ visibilidadeDepoimentos }) {
    return (
        <Container display={visibilidadeDepoimentos}>
            <p>AAAAAAAAAAAAAAAA</p>
            {/* Aqui vão os componentes que compõem a seção */}
        </Container>
    );
}

export default DepoimentosContainer;