import styled from 'styled-components';
import ouro from '../../imagens/misc/ouro.png';
import madeira from '../../imagens/misc/madeira.png';
import pedra from '../../imagens/misc/pedra.png';
import metais from '../../imagens/misc/metais.png';
import comida from '../../imagens/misc/comida.png';
import especiarias from '../../imagens/misc/especiarias.png';
import tecidos from '../../imagens/misc/tecidos.png';
import polvora from  '../../imagens/misc/polvora.png';

const PinInformativoContainer = styled.div`
    position: absolute;
    top: -5px;
    right: -260px;
    background-color: transparent;
`;

const recursosImg = {
    ouro:ouro,
    madeira:madeira,
    pedra:pedra,
    metais:metais,
    comida:comida,
    especiarias:especiarias,
    tecidos:tecidos,
    polvora:polvora
}

const BoxInformacaoPin = styled.div`
    position: relative;
    ${props => props.renderUp ? `
    bottom: 100px;
    left: 25px;
    ` : `
    top: 25px;
    `}
    opacity: 0;
    width: 250px;
    height: auto;
    background-color: #9e4f1e;
    border-radius: 3px;
    border: 3px solid #3b2610;
    z-index: -1;
`;

const AreaPin = styled.div`
    position: absolute;
    font-weight: bold;
    font-size: 22px;
    line-height: 20px;
    text-align: center;
    border-radius: 3px;
    width: 20px;
    height: 20px;
    border: 3px solid #ddd;
    background-color: #1c42eb;
    cursor: pointer;
    z-index: 1;
    &:hover + ${BoxInformacaoPin}{
        opacity: 1;
        z-index: 2;
    }
    &:hover{
        z-index: 99;
    }
`;

const Titulo = styled.h2`
    font-size: 16px;
    text-align: center;
    font-weight: normal;
`;

const Lista = styled.ul`
list-style-type: none; 
margin: 0;
padding: 0;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`;

const ListaItem = styled.li`
display: flex;
font-size: 18px;
align-items: center;
margin-bottom: 5px;
`;

const IconeRecurso = styled.img`
    width: 28px;
    height: 28px;
`;


function PinInformativo(props){

    const {gera,custoEvolucao} = props.informacoes;

    const renderRecursos = ()=>{
        return Object.entries(gera).map(([recurso,quantidade]) =>{
            if(quantidade > 0){
                return(
                    <ListaItem>
                        <IconeRecurso src={recursosImg[recurso]} />
                        {Math.round(quantidade*props.informacoes.multiplicador)}
                    </ListaItem>
                );
            }
            return null;
        });
    };

    const renderCustoEvolução = ()=>{
        return Object.entries(custoEvolucao).map(([recurso,quantidade])=>{
            if(quantidade > 0){
                return(
                    <ListaItem>
                        <IconeRecurso src={recursosImg[recurso]} />
                        {Math.round(quantidade)}
                    </ListaItem>
                );
            }
            return null;
        });
    };

    return(
            <PinInformativoContainer >
                <AreaPin>i</AreaPin>
                <BoxInformacaoPin renderUp={props.renderUp}>
                    <Titulo>Gerando em {(props.informacoes.tempo/1000).toFixed(2)}s :</Titulo>
                    <Lista>
                        {renderRecursos()}
                    </Lista>
                    <Titulo>Custo para Evoluir:</Titulo>
                    <Lista>
                        {renderCustoEvolução()}
                    </Lista>
                </BoxInformacaoPin>
            </PinInformativoContainer>

    )
}

export default PinInformativo;