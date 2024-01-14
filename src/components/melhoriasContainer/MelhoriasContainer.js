import styled from 'styled-components';
import HeroisLista from '../heroisLista/HeroisLista';
import MelhoriasLista from '../melhoriasLista/MelhoriasLista';
import BoxRecursos from '../boxRecursos/BoxRecursos';

const MelhoriaBoxContainer = styled.div`
position: relative;
top: 25px;
width: 95%;
height: 600px;
background-color: #9e4f1e;
border: 5px solid #3b2610;
border-radius: 3px;
margin: 0 auto;
display: flex;
align-items: start;
user-select: none;
`;


function MelhoriaContainer(props){



    return(
        <MelhoriaBoxContainer>
            <HeroisLista herois={props.herois} heroiSelecionado={props.heroiSelecionado} selecionarHeroi={props.selecionarHeroi}/>
            <MelhoriasLista herois={props.herois} comprarMelhoria={props.comprarMelhoria} heroiSelecionado={props.heroiSelecionado}/>
            <BoxRecursos insideMelhorias={true} recursos={props.recursos}/>
        </MelhoriaBoxContainer>
    )
}

export default MelhoriaContainer;