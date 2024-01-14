import styled from 'styled-components';
import BoxRecursoIndividual from '../boxRecursoIndividual/BoxRecursoIndividual';
import ouro from '../../imagens/misc/ouro.png';
import madeira from '../../imagens/misc/madeira.png';
import pedra from '../../imagens/misc/pedra.png';
import metais from '../../imagens/misc/metais.png';
import comida from '../../imagens/misc/comida.png';
import especiarias from '../../imagens/misc/especiarias.png';
import tecidos from '../../imagens/misc/tecidos.png';
import polvora from  '../../imagens/misc/polvora.png';


const BoxRecursosContainer = styled.div`
    ${props => props.insideMelhorias ?
    `
    width: 25%;
    margin-left: 5px;
    `:`
    position: absolute;
    right: 0;
    top: 25px;
    text-align: right;
    width: auto;
    background-color: #9e4f1e;
    border: 5px solid #3b2610;
    border-radius: 3px;
    
    `}
    

`;

function BoxRecursos(props){
    return (
        <BoxRecursosContainer insideMelhorias={props.insideMelhorias}>
            <BoxRecursoIndividual quantidade={props.recursos.ouro} nome="Ouro" imagem={ouro}/>
            <BoxRecursoIndividual quantidade={props.recursos.comida} nome="Comida" imagem={comida}/>
            <BoxRecursoIndividual quantidade={props.recursos.madeira} nome="Madeira" imagem={madeira}/>
            <BoxRecursoIndividual quantidade={props.recursos.pedra} nome="Pedra" imagem={pedra}/>
            <BoxRecursoIndividual quantidade={props.recursos.metais} nome="Metais Preciosos" imagem={metais}/>
            <BoxRecursoIndividual quantidade={props.recursos.especiarias} nome="Especiarias" imagem={especiarias}/>
            <BoxRecursoIndividual quantidade={props.recursos.tecidos} nome="Tecidos" imagem={tecidos}/>
            <BoxRecursoIndividual quantidade={props.recursos.polvora} nome="Polvora" imagem={polvora}/>


        </BoxRecursosContainer>
    )
}

export default BoxRecursos;