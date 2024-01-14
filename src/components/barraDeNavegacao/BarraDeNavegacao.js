import styled from 'styled-components';

const guias = ['coleta','expedicao','melhorias',];

const BarraDeNavegacaoContainer = styled.div`
    position: fixed;
    bottom: 10px;
    background-color: #9e4f1e;
    border: 5px solid #3b2610;
    border-radius: 3px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 325px;
`;

const Botao = styled.button`
height: 50px;
padding: 15px;
cursor: pointer;
outline: none;
border-radius: 3px;
background-color: #945c22;
color: white;
border: 3px solid #734414;
transition: .2s;
&:hover{
    background-color: #85511c;
}
`;

function BarraDeNavegacao(props){



    return(
        <BarraDeNavegacaoContainer>
                    {guias.map((value)=>{
                        return(
                            <Botao key={value} onClick={()=> props.onAbaChange(value)}>{value}</Botao>
                        )
                    })}
        </BarraDeNavegacaoContainer>
    )
}

export default BarraDeNavegacao;