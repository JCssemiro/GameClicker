import melhoriasDados from './melhoriasDados';
import imgCavaleiro from '../imagens/personagens/cavaleiro.jpeg';
import imgDruida from '../imagens/personagens/druida.jpeg';
import imgAgricultora from '../imagens/personagens/agricultora.jpeg';
import imgArqueira from '../imagens/personagens/arqueira.jpeg';
import imgMinerador from '../imagens/personagens/minerador.jpeg';
import imgLenhador from '../imagens/personagens/lenhador.jpeg';
import imgComerciante from '../imagens/personagens/comerciante.jpeg';
import imgPaladino from '../imagens/personagens/paladino.jpeg';
import imgLadina from '../imagens/personagens/ladina.jpeg';
import imgMago from '../imagens/personagens/mago.jpeg';


const heroisDados = {
  Agricultora: {
    nome: "Agricultora",
    multiplicador: 1,
    nivel: 1,
    tempo: 2000,
    tipo: "coleta",
    imagem: imgAgricultora,
    automatico: false,
    gera: {
      ouro: 0,
      comida: 10,
      madeira: 0,
      pedra: 0,
      metais: 0,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    custoEvolucao: {
      ouro: 50,
      comida: 0,
      madeira: 100,
      pedra: 0,
      metais: 0,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    melhorias: melhoriasDados.Agricultora,
  },
  Lenhador: {
    nome: "Lenhador",
    multiplicador: 1,
    nivel: 1,
    tempo: 2000,
    tipo: "coleta",
    imagem: imgLenhador,
    automatico: false,
    gera: {
      ouro: 0,
      comida: 0,
      madeira: 10,
      pedra: 0,
      metais: 0,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    custoEvolucao: {
      ouro: 50,
      comida: 100,
      madeira: 0,
      pedra: 100,
      metais: 0,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    melhorias: melhoriasDados.Lenhador,
  },
  Minerador: {
    nome: "Minerador",
    multiplicador: 1,
    nivel: 1,
    tempo: 2000,
    tipo: "coleta",
    imagem: imgMinerador,
    automatico: false,
    gera: {
      ouro: 0,
      comida: 0,
      madeira: 0,
      pedra: 10,
      metais: 0,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    custoEvolucao: {
      ouro: 50,
      comida: 100,
      madeira: 100,
      pedra: 0,
      metais: 5,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    melhorias: melhoriasDados.Minerador,
  },

  Comerciante: {
    nome: "Comerciante",
    multiplicador: 1,
    nivel: 0,
    tempo: 3000,
    tipo: "coleta",
    imagem: imgComerciante,
    automatico: false,
    gera: {
      ouro: 100,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 0,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    custoEvolucao: {
      ouro: 500,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 5,
      especiarias: 5,
      tecidos: 5,
      polvora: 5
    },
    melhorias: melhoriasDados.Comerciante
  },

  Cavaleiro: {
    nome: "Cavaleiro",
    multiplicador: 1,
    nivel: 1,
    tempo: 3000,
    tipo: "expedicao",
    imagem: imgCavaleiro,
    automatico: false,
    gera: {
      ouro: 20,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 2,
      especiarias: 1,
      tecidos: 0,
      polvora: 0
    },
    custoEvolucao: {
      ouro: 50,
      comida: 100,
      madeira: 100,
      pedra: 0,
      metais: 10,
      especiarias: 10,
      tecidos: 0,
      polvora: 0
    },
    melhorias: melhoriasDados.Cavaleiro
  },
  Druida: {
    nome: "Druida",
    multiplicador: 1,
    nivel: 0,
    tempo: 3000,
    tipo: "expedicao",
    imagem: imgDruida,
    automatico: false,
    gera: {
      ouro: 50,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 0,
      especiarias: 2,
      tecidos: 2,
      polvora: 0
    },
    custoEvolucao: {
      ouro: 150,
      comida: 100,
      madeira: 200,
      pedra: 0,
      metais: 0,
      especiarias: 15,
      tecidos: 0,
      polvora: 0
    },
    melhorias: melhoriasDados.Druida
  },

  Arqueira: {
    nome: "Arqueira",
    multiplicador: 1,
    nivel: 0,
    tempo: 3000,
    tipo: "expedicao",
    imagem: imgArqueira,
    automatico: false,
    gera: {
      ouro: 50,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 3,
      especiarias: 3,
      tecidos: 3,
      polvora: 0
    },
    custoEvolucao: {
      ouro: 150,
      comida: 150,
      madeira: 100,
      pedra: 200,
      metais: 0,
      especiarias: 0,
      tecidos: 0,
      polvora: 0
    },
    melhorias: melhoriasDados.Arqueira
  },
  Paladino: {
    nome: "Paladino",
    multiplicador: 1,
    nivel: 0,
    tempo: 4000,
    tipo: "expedicao",
    imagem: imgPaladino,
    automatico: false,
    gera: {
      ouro: 100,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 0,
      especiarias: 0,
      tecidos: 2,
      polvora: 2
    },
    custoEvolucao: {
      ouro: 400,
      comida: 200,
      madeira: 0,
      pedra: 0,
      metais: 50,
      especiarias: 20,
      tecidos: 10,
      polvora: 0
    },
    melhorias: melhoriasDados.Paladino
  },
  Ladina: {
    nome: "Ladina",
    multiplicador: 1,
    nivel: 0,
    tempo: 2000,
    tipo: "expedicao",
    imagem: imgLadina,
    automatico: false,
    gera: {
      ouro: 50,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 0,
      especiarias: 5,
      tecidos: 5,
      polvora: 5
    },
    custoEvolucao: {
      ouro: 200,
      comida: 150,
      madeira: 0,
      pedra: 0,
      metais: 100,
      especiarias: 0,
      tecidos: 50,
      polvora: 0
    },
    melhorias: melhoriasDados.Ladina
  },
  Mago: {
    nome: "Mago",
    multiplicador: 1,
    nivel: 0,
    tempo: 4000,
    tipo: "expedicao",
    imagem: imgMago,
    automatico: false,
    gera: {
      ouro: 0,
      comida: 0,
      madeira: 0,
      pedra: 0,
      metais: 10,
      especiarias: 10,
      tecidos: 10,
      polvora: 10
    },
    custoEvolucao: {
      ouro: 500,
      comida: 500,
      madeira: 500,
      pedra: 500,
      metais: 150,
      especiarias: 150,
      tecidos: 100,
      polvora: 50
    },
    melhorias: melhoriasDados.Mago
  }

  
  }

export default heroisDados;