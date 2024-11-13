import styled from "styled-components";
import TextoCorpo from "../textoCorpo";
import checklist from "../../arquivos/Checkpontelist.pdf";
import pdfIcon from "../../imagens/checklist/pdf-icon.png";
import ItemChecklist from "../ItemChecklist";

const Container = styled.section`
    width: 100%;
    padding: 0px 10px 0px 10px;
    min-height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Link = styled.a`
    text-decoration: none;
    color: #797FBB;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 700;
    margin-top: 20px;
    text-align: center;
`;

const TituloChecklist = styled.p`
    text-decoration: none;
    color: #797FBB;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 800;
    margin-top: 20px;
    text-align: center;
`

const ListaChecklist = styled.ul`
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.tamanho || '24px'};
    font-weight: ${props => props.peso || '400'};
    color: ${props => props.cor || '#637285'};
    text-align: ${props => props.alinhamento || 'left'};
    padding: 0px 0px 0px 20px;
`

const ItemLista = styled.ul`
    font-family: 'Montserrat', sans-serif;
    font-size: ${props => props.tamanho || '28px'};
    font-weight: ${props => props.peso || '400'};
    color: ${props => props.cor || '#637285'};
    text-align: ${props => props.alinhamento || 'left'};
`

function CheckListContainer() {
    return (
        <Container>
            <TituloChecklist>Checkponte List</TituloChecklist>
            <TextoCorpo tamanho='28px' alinhamento='center'>Uma maneira fácil de organizar sua vida de vestibulando e universitário de primeira viagem sem arrancar os cabelos!</TextoCorpo>
            <Link href={checklist} download>
                <img src={pdfIcon} width="50px"/>
                Baixar checklist completo
            </Link>
            <TextoCorpo tamanho='28px' peso='600'>Para vestibulandos...</TextoCorpo>
            <ListaChecklist>
                <ItemLista>"Preparar, apontar e..."
                    <ItemChecklist texto="Leia o edital nos seus mínimos detalhes, caso o edital não tenha saído ainda busque por informações dos processos mais recentes e baseie-se neste edital até que saia o novo."/>
                    <ItemChecklist texto="Um calendário organizado pode salvar vidas, então deixe bem marcado as datas mais importantes do ano, não só dos vestibulares, mas também datas importantes para você, para que as coisas não acabem por se misturar."/>
                    <ItemChecklist texto="Deixe o calendário bem amostra no seu cotidiano."/>
                </ItemLista>
                <ItemLista>"Foi dada a largada!"
                    <ItemChecklist texto="Verifique o local da prova antes do dia da prova, se possível, assim como as condições de trânsito e outras variáveis que possam te desestabilizar."/>
                    <ItemChecklist texto="Faça um checklist do que você precisará para realizar a prova, melhor prevenir do que remediar."/>
                    <ItemChecklist texto="Verifique com alguns meses de antecedência se os documentos necessários para a prova estão em dia e nos conformes."/>
                </ItemLista>
                <ItemLista>"Passei, e agora?"
                    <ItemChecklist texto="Agora um suplício por Ana, Verônica e toda a equipe do IP: comunique sua conquista, caçarolas, queremos vibrar com você!"/>
                    <ItemChecklist texto="Programe os custos da faculdade, verifique custos como moradia, alimentação e coisas essenciais."/>
                    <ItemChecklist texto="Busque as redes, sites e informações sobre o seu curso, os veteranos sempre estão procurando por seus calouros!"/>
                </ItemLista>
            </ListaChecklist>
            <TextoCorpo tamanho='28px' peso='600'>Para universitários de primeira viagem...</TextoCorpo>
            <ListaChecklist>
                <ItemLista>"Agora só falta..."
                    <ItemChecklist texto="Aí o primeiro período, aproveite cada momento de uma das melhores experiências da sua vida, mas não beba líquidos duvidosos."/>
                    <ItemChecklist texto="Jamais exceda seus limites, faça o que tiver vontade de fazer e que não te incomode e sinta-se tranquilo com relação a isso."/>
                    <ItemChecklist texto="Procure não reprovar em nenhuma das matérias do primeiro período, elas são as mais cruciais, as vagas sempre são dos calouros que virão logo após você, então conseguí-las para repetir essas matérias é uma burocracia danada."/>
                </ItemLista>
            </ListaChecklist>

        </Container>
    );
}

export default CheckListContainer;