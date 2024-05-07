import styled from "styled-components";
import MelhoriaIndividual from "../melhoriaIndividual/MelhoriaIndividual";

const MelhoriasListaContainer = styled.div`
width: 50%;
height: calc(100% - 20px);
padding: 10px;
overflow-x: hidden;
overflow-y: auto;
&::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar{
    border-radius: 3px;
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3b2610;
    border-radius: 3px;
  }

  /* Firefox */
  //scrollbar-width: thin;
  //scrollbar-color: dark;
`;

function MelhoriasLista(props){
     const exibirMelhoriasDisponiveis = ()=>{
         return Object.entries(props.herois[props.heroiSelecionado].melhorias).map(([melhoria,propriedades])=>{
            return <MelhoriaIndividual comprarMelhoria={props.comprarMelhoria} heroiSelecionado={props.heroiSelecionado} herois={props.herois} melhoria={propriedades} />
        })
    }

    return(
        <MelhoriasListaContainer>
            {props.heroiSelecionado ? exibirMelhoriasDisponiveis() : "Selecione algum herói!"}
        </MelhoriasListaContainer>
    )
}

export default MelhoriasLista;