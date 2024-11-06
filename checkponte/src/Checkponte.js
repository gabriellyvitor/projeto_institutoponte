import Banner from './componentes/bannerContainer';
import styled from 'styled-components';

const ButtonsContainer = styled.section`
  width: 100%;
  height: 300px;
  background-color: white;
`;

const FaculContainer = styled.section`
  height: 300px;
  width: 100%;
  background-color: #AAEE9C;
`;

const DepoimentosContainer = styled.section`
  height: 300px;
  width: 100%;
  background-color: #f55d67;
`;



const ChecklistContainer = styled.section`
  height: 300px;
  width: 100%;
  background-color: white;
`;

function Checkponte() {
  return (
    <div>
        <Banner />
        <ButtonsContainer>
        </ButtonsContainer>
        <FaculContainer>
        </FaculContainer>
        <DepoimentosContainer>
        </DepoimentosContainer>
        <ChecklistContainer>
        </ChecklistContainer>
    </div>
  );
}

export default Checkponte;