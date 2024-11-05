import styled from 'styled-components';
import logo from '../../imagens/logo-ip.png';
import doe_agora from '../../imagens/doe-agora.png';
import icon_header from '../../imagens/icon-header.png';
import premios from '../../imagens/premios.png';
import OpcoesHeader from '../opcoesHeader';

const NavBox = styled.div`
    width: 100%;
    height: 200px;
    opacity: 0px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px 0px #757575B2;
    display: flex;
    justify-content: space-around;
    padding: 0 20px;
    z-index: 1;
`

const Logo = styled.img`
    opacity: 0px;
    transform: translateY(33px);
    z-index: 2;
`

const DoeAgora = styled.img`
    opacity: 0px;
    transform: translateY(60px);   
    z-index: 2;
`

const PremiosImg = styled.img`
    padding: 20px;
    opacity: 0px;
    transform: translateY(35px);
    z-index: 2;
`

function Header() {
    return (
        <NavBox>
            <Logo src={logo} alt="Logo IP" />
            <OpcoesHeader />
            <DoeAgora src={doe_agora} alt="Doe agora" />
            <PremiosImg src={premios} alt="Premios" />
        </NavBox>
    );
}

export default Header;