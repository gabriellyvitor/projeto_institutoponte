import Banner from './componentes/bannerContainer';
import styled from 'styled-components';
import CheckListContainer from './componentes/CheckListContainer';

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

function Checkponte() {
  return (
    <body>
        <Banner />
        <ButtonsContainer />
        <FaculContainer />
        <DepoimentosContainer />
        <CheckListContainer />
    </body>
  );
}

export default Checkponte;