import styled from 'styled-components';

const BoxRecursoIndividualContainer = styled.div`
    padding: 5px;
    border-bottom: 3px solid #703d08;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
`;
const TextoQuantidade = styled.p`
    color: white;
    font-weight: normal;
    font-size: 18px;
`;

const IconeRecurso = styled.img`
    width: 50px;
    height: 50px;
`;

function BoxRecursoIndividual(props){

    return(
        <BoxRecursoIndividualContainer>
            <TextoQuantidade>{(props.quantidade).toLocaleString('pt-BR')}</TextoQuantidade>
            <IconeRecurso title={props.nome} src={props.imagem} alt={props.nome} />
        </BoxRecursoIndividualContainer>        
    )
}

export default BoxRecursoIndividual;