import styled from 'styled-components';
import OpcoesFooter from '../opcoesFooter';

const FooterBox = styled.div`
    width: 100%;
    height: 400px;
    background: #e8cf40;
`

function Footer(){
    return(
        <FooterBox>
            <OpcoesFooter />
        </FooterBox>
    );
}

export default Footer;