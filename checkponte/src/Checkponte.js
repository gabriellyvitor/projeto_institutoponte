import Banner from './componentes/bannerContainer';
import styled from 'styled-components';
import CheckListContainer from './componentes/CheckListContainer';
import DepoimentosContainer from './componentes/DepoimentosContainer';
import FaculdadesContainer from './componentes/FaculdadesContainer';
import SecoesContainer from './componentes/SecoesContainer';
import { useState } from 'react';

function Checkponte() {
  const [secaoAtual, setSecaoAtual] = useState('Faculdades');
  const [visibilidadeFaculdades, setVisibilidadeFaculdades] = useState('flex')
  const [visibilidadeDepoimentos, setVisibilidadeDepoimentos] = useState('none')

  function mudarSecaoFaculdades() {
      setSecaoAtual('Faculdades');
      setVisibilidadeFaculdades('flex');
      setVisibilidadeDepoimentos('none');
    }
    
    function mudarSecaoDepoimentos() {
      setSecaoAtual('Depoimentos');
      setVisibilidadeFaculdades('none');
      setVisibilidadeDepoimentos('flex');
  }

  return (
    <div>
        <Banner />
        <SecoesContainer 
            secaoAtual={secaoAtual}
            mudarSecaoFaculdades={mudarSecaoFaculdades}
            mudarSecaoDepoimentos={mudarSecaoDepoimentos}
        />
        <FaculdadesContainer 
          visibilidadeFaculdades={visibilidadeFaculdades}
        />
        <DepoimentosContainer 
          visibilidadeDepoimentos={visibilidadeDepoimentos}
        />
        <CheckListContainer />
    </div>
  );
}

export default Checkponte;