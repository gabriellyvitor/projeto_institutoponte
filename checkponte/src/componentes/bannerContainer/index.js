import imagem from '../../imagens/banner.png'
import styled from 'styled-components';

const BannerContainer = styled.div`
    display: flex;
    font-size: 30px;
    text-align: center;
    position: relative;
`
const BannerImage = styled.img`
    width: 100%;
`
const PageTitle = styled.div`
    font-family: Montserrat, sans-serif;
    font-size: 96px;
    font-weight: 550;
    line-height: 117.02px;
    text-align: left;
    position: absolute;
    text-shadow: 0px 12px 4px #000000;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`


function Banner({titulo}) {
    return (
        <BannerContainer>
            <BannerImage
                src={imagem}
                alt='banner' 
            />
            <PageTitle>{titulo}</PageTitle>
       </BannerContainer>
    )
}

export default Banner