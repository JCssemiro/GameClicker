import styled from 'styled-components';
import {useState} from 'react';
import BoxPersonagem from './components/boxPersonagem/BoxPersonagem.js';
import imgBackground from "./imagens/misc/vila3.jpeg";
import BoxRecursos from './components/boxRecursos/BoxRecursos.js';
import heroisDados from './dados/heroisDados.js';
import BarraDeNavegacao from './components/barraDeNavegacao/BarraDeNavegacao.js';
import MelhoriaContainer from './components/melhoriasContainer/MelhoriasContainer.js';


const AppContainer = styled.div`
  position: relative;
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${imgBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;


function App() {
  const [herois,setHerois] = useState(heroisDados);
  const [heroiSelecionado,setHeroiSelecionado] = useState(null);
  const [abaSelecionada, setAbaSelecionada] = useState("coleta");
  const [recursos,setRecursos] = useState({
    ouro : 0,
    comida: 0,
    madeira: 0,
    pedra: 0,
    metais: 0,
    especiarias: 0,
    tecidos: 0,
    polvora: 0

  });

  const renderHerois = ()=>{
    return Object.entries(herois).map(([heroi,propriedade]) =>{
            return(
              <BoxPersonagem display={propriedade.tipo !== abaSelecionada ? "none" : "flex" } heroi={herois[heroi]} evoluir={evoluirPersonagem} atualizarRecursos={aumentarRecursos}/>
            );
        
    });
};

  const verificarRecursos = (custos) =>{
    return (recursos.ouro >= custos.ouro &&
       recursos.comida >= custos.comida &&
       recursos.madeira >= custos.madeira &&
       recursos.pedra >= custos.pedra &&
       recursos.metais >= custos.metais &&
       recursos.especiarias >= custos.especiarias &&
       recursos.tecidos >= custos.tecidos &&
       recursos.polvora >= custos.polvora);
  }

  const aumentarRecursos = (quantidades,multiplicador) => {
    setRecursos((prevRecursos) => ({
      ...prevRecursos,
      ouro: prevRecursos.ouro + Math.round((quantidades.ouro)*multiplicador),
      comida: prevRecursos.comida + Math.round((quantidades.comida)*multiplicador),
      madeira: prevRecursos.madeira + Math.round((quantidades.madeira)*multiplicador),
      pedra: prevRecursos.pedra + Math.round((quantidades.pedra)*multiplicador),
      metais: prevRecursos.metais + Math.round((quantidades.metais)*multiplicador),
      especiarias: prevRecursos.especiarias + Math.round((quantidades.especiarias)*multiplicador),
      tecidos: prevRecursos.tecidos + Math.round((quantidades.tecidos)*multiplicador),
      polvora: prevRecursos.polvora + Math.round((quantidades.polvora)*multiplicador)
    }));
  };


  const diminuirRecursos = (quantidades) =>{
    setRecursos((prevRecursos) => ({
      ...prevRecursos,
      ouro: prevRecursos.ouro - quantidades.ouro,
      comida: prevRecursos.comida - quantidades.comida,
      madeira: prevRecursos.madeira - quantidades.madeira,
      pedra: prevRecursos.pedra - quantidades.pedra,
      metais: prevRecursos.metais - quantidades.metais,
      especiarias: prevRecursos.especiarias - quantidades.especiarias,
      tecidos: prevRecursos.tecidos - quantidades.tecidos,
      polvora: prevRecursos.polvora - quantidades.polvora
    }));
  }

  const evoluirPersonagem = (heroi)=>{
    console.log(herois);
    if(verificarRecursos(heroi.custoEvolucao)){
      diminuirRecursos(heroi.custoEvolucao);

        setHerois((prevHerois)=>({...prevHerois,[heroi.nome]: {
          ...heroi,
          nivel: (heroi.nivel+1),
          custoEvolucao: {
            ...heroi.custoEvolucao,
             ouro: prevHerois[heroi.nome].custoEvolucao.ouro+Math.round((prevHerois[heroi.nome].custoEvolucao.ouro*2/10)),
             comida: prevHerois[heroi.nome].custoEvolucao.comida+Math.round((prevHerois[heroi.nome].custoEvolucao.comida*2/10)),
             madeira: prevHerois[heroi.nome].custoEvolucao.madeira+Math.round((prevHerois[heroi.nome].custoEvolucao.madeira*2/10)),
             pedra: prevHerois[heroi.nome].custoEvolucao.pedra+Math.round((prevHerois[heroi.nome].custoEvolucao.pedra*2/10)),
             metais: prevHerois[heroi.nome].custoEvolucao.metais+Math.round((prevHerois[heroi.nome].custoEvolucao.metais*2/10)),
             especiarias: prevHerois[heroi.nome].custoEvolucao.especiarias+Math.round((prevHerois[heroi.nome].custoEvolucao.especiarias*2/10)),
             tecidos: prevHerois[heroi.nome].custoEvolucao.tecidos+Math.round((prevHerois[heroi.nome].custoEvolucao.tecidos*2/10)),
             polvora: prevHerois[heroi.nome].custoEvolucao.polvora+Math.round((prevHerois[heroi.nome].custoEvolucao.polvora*2/10)),
            },
          gera: (heroi.nivel !== 0) ? {...heroi.gera,
            ouro: prevHerois[heroi.nome].gera.ouro+Math.round((prevHerois[heroi.nome].gera.ouro*35/100)),
            madeira: prevHerois[heroi.nome].gera.madeira+Math.round((prevHerois[heroi.nome].gera.madeira*35/100)),
            comida: prevHerois[heroi.nome].gera.comida+Math.round((prevHerois[heroi.nome].gera.comida*35/100)),
            pedra: prevHerois[heroi.nome].gera.pedra+Math.round((prevHerois[heroi.nome].gera.pedra*35/100)),
            metais: prevHerois[heroi.nome].gera.metais+Math.round((prevHerois[heroi.nome].gera.metais*35/100)),
            especiarias: prevHerois[heroi.nome].gera.especiarias+Math.round((prevHerois[heroi.nome].gera.especiarias*35/100)),
            tecidos: prevHerois[heroi.nome].gera.tecidos+Math.round((prevHerois[heroi.nome].gera.tecidos*35/100)),
            polvora: prevHerois[heroi.nome].gera.polvora+Math.round((prevHerois[heroi.nome].gera.polvora*35/100)),
          } : {...heroi.gera}
        }}))
       }
  }
  const selecionarHeroi = (heroi)=>{
    setHeroiSelecionado(heroi);
}

const comprarMelhoria = (desbloqueado, melhoriaId) => {
  if(desbloqueado && !herois[heroiSelecionado].melhorias[melhoriaId].comprado && verificarRecursos(herois[heroiSelecionado].melhorias[melhoriaId].custo)){
    diminuirRecursos(herois[heroiSelecionado].melhorias[melhoriaId].custo);
    const listaHerois = {...herois};
    const heroi = {...herois[heroiSelecionado]};
    listaHerois[heroiSelecionado].melhorias[melhoriaId].comprado = true;
    if(heroi.melhorias[melhoriaId].tipo === "multiplicador"){
    Object.entries(heroi.melhorias[melhoriaId].efeito).forEach(([propriedade,fator])=>{
      listaHerois[heroiSelecionado][propriedade] *= fator;
      
    })
    
    }else if(heroi.melhorias[melhoriaId].tipo === "somador"){
      Object.entries(heroi.melhorias[melhoriaId].efeito).forEach(([propriedade,fator])=>{
        listaHerois[heroiSelecionado][propriedade] += fator;
      })
    }
    setHerois(listaHerois);
  }else{
  }
  console.log(herois);
};



  return (
    <AppContainer>
      
      {abaSelecionada !== "melhorias" ? <BoxRecursos insideMelhorias={false} recursos={recursos} /> : ""}
      {renderHerois()}
      <BarraDeNavegacao onAbaChange={setAbaSelecionada}/>
      {abaSelecionada === "melhorias" ? <MelhoriaContainer recursos={recursos} comprarMelhoria={comprarMelhoria} heroiSelecionado={heroiSelecionado} selecionarHeroi={selecionarHeroi} herois={herois}/> : ""}
    </AppContainer>
  );
}

export default App;
