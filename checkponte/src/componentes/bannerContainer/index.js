import banner from '../../imagens/banner.png';
import styled from 'styled-components';

const BannerContainer = styled.div`
    display: flex;
    font-size: 30px;
    text-align: center;
    position: relative;
    z-index: 0;
`;

const BannerImage = styled.img`
    width: 100%;
`;

const PageTitle = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;


function Banner({titulo}) {
    return (
        <BannerContainer>
            <PageTitle
                src={titulo}
            />
            <BannerImage
                src={banner}
                alt='banner' 
            />
       </BannerContainer>
    )
}

export default Banner;