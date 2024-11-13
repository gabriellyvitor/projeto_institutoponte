import styled from "styled-components";
import checkbox from "../../imagens/checklist/Checkbox.png"

const TextoItem = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.tamanho || '24px'};
    font-weight: ${props => props.peso || '400'};
    color: ${props => props.cor || '#637285'};
    padding: ${props => props.espacamento || '0'};
    padding-left: 30px;
    text-align: ${props => props.alinhamento || 'left'};
    display: flex;
    align-items: center;
    padding-top: 8px;
`

const Checkbox = styled.img`
    width: 30px;
    height: 30px;
    float: left;
    margin-right: 10px;
`

function ItemChecklist( { texto }) {
    return(
        <TextoItem>
            <Checkbox src={checkbox} />
            {texto}
        </TextoItem>
    )
}

export default ItemChecklist;