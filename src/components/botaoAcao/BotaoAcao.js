import styled,{keyframes,css} from 'styled-components';
import {useState, useEffect} from 'react';

const BarraDeProgresso = styled.div`
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: ${props => props.automatico ? '#1c42eb' : '#269e08'};
font-size: 14px;
line-height: 30px;
${({ iscarregando,tempoAnimacao }) =>
    iscarregando &&
    css`
      animation: ${Carregar} ${tempoAnimacao}ms ease-out;
      animation-fill-mode: forwards;
    `}
z-index: 1;

`;

const BotaoAcaoContainer = styled.button`
    position: relative;
    background-color: transparent;
    color: white;
    cursor: pointer;
    width: 75%;
    height: 100%;
    border-radius: 5px;
    border: 3px solid ${props => props.automatico ? '#0f268a' : '#186106'};
    &:hover{
        ${BarraDeProgresso}{
            background-color: ${props => props.automatico ? "#1839cc" : "#25910a"};
        }
    }
`;

const Carregar = keyframes`
    from {
        width: 0;
        background-color: #0f76d1;
        }
    to { width: 100%;

        background-color: ${props => props.automatico ? '#1c42eb' : '#269e08'};}
`;


const TextoBarraDeProgresso = styled.span`
    position: absolute;
    font-size: 12px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: center;
    z-index: 2;
`;





function BotaoAcao(props){
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        let intervalId;

        const handleAutoGenerate = () => {
            if (!carregando) {
                setCarregando(true);

                setTimeout(() => {
                    setCarregando(false);
                    props.atualizarRecursos(props.gerado, props.multiplicador);
                }, props.tempoCarregamento);
            }
        };

        if (props.automatico) {
            // Inicia a geração automática ao montar o componente
            intervalId = setInterval(handleAutoGenerate, props.tempoCarregamento);
        }

        // Limpa o intervalo ao desmontar o componente
        return () => clearInterval(intervalId);
    }, [carregando, props]);

    const handleBotaoAcaoClick = () => {
        if (!carregando && !props.automatico) {
            setCarregando(true);

            setTimeout(() => {
                setCarregando(false);
                props.atualizarRecursos(props.gerado, props.multiplicador);
            }, props.tempoCarregamento);
        }
    };

    return(
        <BotaoAcaoContainer automatico={props.automatico} onClick={handleBotaoAcaoClick}>
            <TextoBarraDeProgresso>{props.automatico ? "Em terras distantes" : "Mandar em Expedição"}</TextoBarraDeProgresso>
            <BarraDeProgresso tempoAnimacao={props.tempoCarregamento} automatico={props.automatico} iscarregando={carregando}></BarraDeProgresso>
        </BotaoAcaoContainer>
    )
}



export default BotaoAcao;