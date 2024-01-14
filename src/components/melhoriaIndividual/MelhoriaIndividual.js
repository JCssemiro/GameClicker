import styled from 'styled-components';
import ouro from '../../imagens/misc/ouro.png';
import madeira from '../../imagens/misc/madeira.png';
import pedra from '../../imagens/misc/pedra.png';
import metais from '../../imagens/misc/metais.png';
import comida from '../../imagens/misc/comida.png';
import especiarias from '../../imagens/misc/especiarias.png';
import tecidos from '../../imagens/misc/tecidos.png';
import polvora from  '../../imagens/misc/polvora.png';

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

const MelhoriaIndividualContainer = styled.div`
display: flex;
align-items: center;
justify-content: left;
margin-bottom: 10px;
padding: 0 10px;
width: 80%;
min-width: 225px;
max-width: 550px;
border: 5px solid #734414;
border-radius: 3px;
background-color: #945c22;
min-height: 120px;
height: auto;
transition: .2s;
&:hover{
    background-color: #85511c;
}
`;


const BoxInformacoes = styled.div`

width: 100%;
height: 100%;
padding: 0 15px;
`;

const TituloMelhoria = styled.h2`
color: white;
font-weight: normal;
font-size: 22px;
text-decoration: underline;
margin: 0;
`;

const DescricaoMelhoria = styled.p`
color: white;
text-align: justify;
margin-top: 5px;
`;

const BotaoComprarMelhoria = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 3px;
    outline: none;
    color: white;
    cursor: pointer;

    font-size: 16px;
    ${props => props.comprado ? `
    background-color: #b8250d;
    border: 3px solid #851b0b;
    ` : 
    `border: 3px solid #186106;
    background-color: #269e08;`}
    
    ${props => !props.desbloqueado ? `
    background-color: #0854cf;
    border: 3px solid #073c91;
    ` : ""}

    margin-bottom: 5px;

`;

const InformacoesCusto = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
justify-content: right;
`;

const CustoBox = styled.div`
    padding: 0 5px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: right;
`;

const IconeCusto = styled.img`
    width: 20px;
    height: 20px;
`;

function MelhoriaIndividual(props){

    const verificarDesbloqueio = (requisito)=>{
        if(!requisito){
            return true;
        }
        let flag = true;
        requisito.map((elemento)=>{
             if(!props.herois[props.heroiSelecionado].melhorias[elemento].comprado){
                 flag = false;
             }
             return flag;
        })
        return flag;
    }
    const desbloqueado = verificarDesbloqueio(props.melhoria.requisito);

    return(
        <MelhoriaIndividualContainer>
            <BoxInformacoes>
                <TituloMelhoria>{props.melhoria.nome}</TituloMelhoria>
                <DescricaoMelhoria>{props.melhoria.descricao}</DescricaoMelhoria>
                <InformacoesCusto>
                    {Object.entries(props.melhoria.custo).map(([recurso,quantidade])=>{
                        if(quantidade > 0){
                            return (<CustoBox>
                                <IconeCusto src={recursosImg[recurso]}/>
                                {quantidade}
                            </CustoBox>)
                        }else{
                            return ("");
                        }
                    })}
                </InformacoesCusto>
                <BotaoComprarMelhoria onClick={()=>props.comprarMelhoria(desbloqueado,props.melhoria.id)} desbloqueado={desbloqueado} comprado={props.melhoria.comprado}>{props.melhoria.comprado ? "Comprado" : (desbloqueado ? "Comprar" : "Bloqueado")}</BotaoComprarMelhoria>
            </BoxInformacoes>
        </MelhoriaIndividualContainer>
    )
}

export default MelhoriaIndividual;

