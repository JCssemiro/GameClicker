import styled from 'styled-components';

const HeroisListaContainer = styled.div`
width: 25%;
height: 584px;
border-right: 3px solid #703d08;
padding: 8px;
overflow-y: auto;
overflow-x: hidden;
text-align: center;
&::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar{
    border-radius: 4px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3b2610;
    border-radius: 4px;
  }

  /* Firefox */
  //scrollbar-width: thin;
  //scrollbar-color: dark;
`;;

const HeroiContainer = styled.div`
text-align: left;
width: 100%;
height: 80px;
border-bottom: 3px solid #703d08;
border-radius: 5px;
background-color: #9e4f1e;
cursor: pointer;
&:hover{
    background-color: #87441b;
}
${props => props.selecionado ? "outline: 3px solid white;border-bottom:3px solid #9e4f1e" : ""}
`;

const NomeHeroi = styled.h2`
padding: 0 10px;
color: white;
font-weight: normal;
font-size: 22px;
`;

const SubTituloHeroi = styled.h3`
color : #ddd;
font-size: 18px;
padding: 0 15px;
margin-top: -10px;
font-weight: normal;
`;





function HeroisLista(props){


    const gerarHeroiContainers = ()=>{
        return Object.entries(props.herois).map(([heroi,propriedades])=>{
          return (
            <HeroiContainer selecionado={heroi === props.heroiSelecionado ? true : false} onClick={()=> props.selecionarHeroi(heroi)}>
                <NomeHeroi>{propriedades.nome}</NomeHeroi>
                <SubTituloHeroi>Level {propriedades.nivel} - {propriedades.tipo}</SubTituloHeroi>
            </HeroiContainer>
          )  
        })
    }

    return(
        <HeroisListaContainer>
            <NomeHeroi>Heróis:</NomeHeroi>
            {gerarHeroiContainers()}
        </HeroisListaContainer>
    )
}

export default HeroisLista;