import styled from 'styled-components';
import setaParaCima from '../../imagens/misc/setaCima.png';
const BotaoEvoluirContainer = styled.button`
    position: relative;
    background-color: #269e08;
    color: white;
    cursor: pointer;
    width: 25%;
    height: 100%;
    border-radius: 5px;
    border: 3px solid #186106;
    text-align: center;

    &:hover{
        background-color: #25910a;
    }
    `;

const ImgSeta = styled.img`
    position: relative;
    bottom: 2px;
    width: 30px;
    heigth: 30px;
`;

function BotaoEvoluir(props){
    const handleEvoluir = ()=>{
        props.evoluir(props.heroi);
    }

    return(
        <BotaoEvoluirContainer onClick={handleEvoluir}>
        <ImgSeta src={setaParaCima}/>
        </BotaoEvoluirContainer>
        )
}

export default BotaoEvoluir;