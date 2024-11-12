import styled from 'styled-components';

const TextoCorpo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.tamanho || '30px'};
    font-weight: ${props => props.peso || '400'};
    color: ${props => props.cor || '#637285'};
    padding: ${props => props.espacamento || '0'};
    text-align: ${props => props.alinhamento || 'left'};
`

export default TextoCorpo;