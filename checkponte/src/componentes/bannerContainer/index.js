import banner from '../../imagens/banner.png';
import styled from 'styled-components';
import titulo from '../../imagens/CheckPonte.png';

const BannerContainer = styled.div`
    margin-top: 200px;
    display: flex;
    font-size: 30px;
    text-align: center;
    position: relative;
    z-index: 0;
    box-shadow: 0px 8px 8px 0px #757575B2;
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


function Banner() {
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