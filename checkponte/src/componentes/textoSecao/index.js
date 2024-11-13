import styled from 'styled-components';

/*const TextoSecao = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.tamanho || '30px'};
    font-weight: ${props => props.peso || '400'};
    color: ${props => props.cor || '#637285'};
    padding: ${props => props.espacamento || '0'};
    text-align: ${props => props.alinhamento || 'left'};
    text-decoration: ${props => props.decoracao || 'none'};
`
*/

const TextoSecao = styled.span`
    font-family: 'Montserrat', sans-serif;
    position: relative;
    text-align: ${(props) => props.alinhamento};
    color: ${(props) => props.cor};
    font-size: 30px;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.3s ease;

    &:after {
        content: '';
        position: absolute;
        width: ${(props) => (props.decoracao === 'underline' ? '100%' : '0')};
        height: 2px;
        background-color: #8B5DFF;
        left: 0;
        bottom: -4px;
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: ${(props) => (props.decoracao !== 'underline' ? '100%' : '0')};
    }
`;

export default TextoSecao;