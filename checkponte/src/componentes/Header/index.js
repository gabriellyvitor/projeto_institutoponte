import styled from 'styled-components';
import logo from '../../imagens/header/logo-ip.png';
import doe_agora from '../../imagens/header/doe-agora.png';
import icon_header from '../../imagens/header/icon-header.png';
import premios from '../../imagens/header/premios.png';
import OpcoesHeader from '../opcoesHeader';

const NavBox = styled.div`
    width: 100%;
    height: 110px;
    position: fixed;
    top: 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px 0px #757575B2;
    display: flex;
    justify-content: space-around;
    z-index: 1;
`

const Logo = styled.img`
    opacity: 0px;
    width: 135px;
    height: 117px;
    vertical-align: middle;
    margin: 20px 0 0 0;
    z-index: 2;
`

const DoeAgora = styled.img`
    opacity: 0px;
    width: 130px;
    height: 130px;  
    margin: 20px 0 0 0; 
    z-index: 2;
`

const PremiosImg = styled.img`
    width: 258px;
    height: 260px;
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