import styled from 'styled-components';
import moldura from '../../imagens/misc/moldura.png';
import BotaoAcao from '../botaoAcao/BotaoAcao.js';
import BotaoEvoluir from '../botaoEvoluir/BotaoEvoluir.js';
import PinInformativo from '../pinInformativo/PinInformativo.js';

const BoxPersonagemContainer = styled.div`
    position: relative;
    top: 25px;
    left: 25px;
    width: 280px;
    height: 70px;
    background-color: #9e4f1e;
    border-radius: 3px;
    border: 5px solid #3b2610;
    color: white;
    display: ${props => props.display};
    justify-content: left;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 25px;
    user-select: none;
`;

const BoxFotoPersonagem = styled.div`
    position: relative;
    left: -15px;
    width: 80px; 
    height: 80px;
    background-image: url(${props => props.urlImgPersonagem});
    background-size: contain;
    background-position: left
    background-repeat: no-repeat;
`;

const ImgMoldura = styled.img`
    position: absolute;
    width: 115px;
    height: 115px;
    margin: 0 auto;
    left: -25px;
    top: -25px;
`;

const NomeHeroi = styled.h2`
font-weight: normal;
font-size: 20px;
`;
const NivelHeroi = styled.h3`
font-weight: normal;
font-size: 18px;
color: #ddd;
`;

const BoxInformacoes = styled.div`
display: flex;
width: calc(100% - 80px);
height: 35px;
align-items: center;
justify-content: space-evenly;
`;




function BoxPersonagem(props){

        const atualizarRecursosLocal = (quantidades,multiplicador) => {
          props.atualizarRecursos(quantidades,multiplicador);
        };

        const evoluirPersonagemLocal = (heroi) =>{
            props.evoluir(heroi)
        }

    return(
        <BoxPersonagemContainer display={props.display}>
            <BoxFotoPersonagem urlImgPersonagem={props.heroi.imagem}>
                <ImgMoldura src={moldura} />
            </BoxFotoPersonagem>
            <BoxInformacoes>
            <PinInformativo renderUp={props.heroi.nome === "Mago" ? true : false} informacoes={props.heroi}></PinInformativo>
            <NomeHeroi>{props.heroi.nome}</NomeHeroi>
            <NivelHeroi>Lvl {props.heroi.nivel}</NivelHeroi>
            </BoxInformacoes>
            <BoxInformacoes>
                {props.heroi.nivel > 0 ? (<BotaoAcao carregando={props.carregando} atualizarRecursos={atualizarRecursosLocal} multiplicador={props.heroi.multiplicador} automatico={props.heroi.automatico} tempoCarregamento={props.heroi.tempo} gerado={props.heroi.gera}/>) : " "}
                <BotaoEvoluir heroi={props.heroi} evoluir={evoluirPersonagemLocal}/>
            </BoxInformacoes>
        </BoxPersonagemContainer>
    )
}

export default BoxPersonagem;