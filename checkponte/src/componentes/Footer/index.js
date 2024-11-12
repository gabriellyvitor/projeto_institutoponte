import styled from 'styled-components';
import OpcoesFooter from '../opcoesFooter';
import imagemGoogle from '../../imagens/footer/google_safe_browsing.png';
import seloDoar from '../../imagens/footer/SeloDoarACMYK.png';
import resultate from '../../imagens/footer/resultate.png';

const FooterBox = styled.footer`
    width: 100%;
    background: #e8cf40;
    display: flex;
    grid-template: "div div";
    padding: 20px;
`;

const IconsFooter = styled.div`
    align-self: right;
    display: flex;
    flex-direction: column;
    width: 23%;
    align-items: center;
`;

const IconSelo = styled.img`
    padding-bottom: 20px;
    width: 75px;
`;

const IconGoogle = styled.img`
    padding-bottom: 20px;
    width: 170px;
`;

const IconResultate = styled.img`
    width: 132px;
`;

function Footer(){
    return(
        <FooterBox>
            <OpcoesFooter />
            <IconsFooter>
                <IconSelo src={seloDoar} alt="Selo Doar" />
                <IconGoogle src={imagemGoogle} alt="Google Safe Browsing" />
                <IconResultate src={resultate} alt="Resultate" />
            </IconsFooter>
        </FooterBox>
    );
}

export default Footer;