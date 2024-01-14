
const melhoriasDados = {
    Agricultora: {
        arado1: {
            id: "arado1",
            nome: "Arado I",
            descricao: "Utiliza técnicas de plantio melhorando a eficiência do cultivo. Diminui o tempo de produção em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo: {
                ouro: 200,
                comida: 0,
                madeira: 100,
                pedra: 100,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        arado2: {
            id: "arado2",
            nome: "Arado II",
            descricao: "Melhora as técnicas de plantio utilizadas melhorando a eficiência do cultivo. Diminui o tempo de produção em 30%",
            comprado: false,
            requisito: ["arado1"],
            tipo: 'multiplicador',
            custo: {
                ouro: 1000,
                comida: 0,
                madeira: 250,
                pedra: 250,
                metais: 50,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 7/10,
            }
        },
        arado3: {
            id: "arado3",
            nome: "Arado III",
            descricao: "Melhora as técnicas de plantio ainda mais. Diminui o tempo de produção em 50%",
            comprado: false,
            requisito: ["arado1","arado2"],
            tipo: 'multiplicador',
            custo: {
                ouro: 1500,
                comida: 0,
                madeira: 500,
                pedra: 500,
                metais: 100,
                especiarias: 25,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 5/10,
            }
        },
        aradoMecanizado: {
            id: "aradoMecanizado",
            nome: "Arado Mecanizado",
            descricao: "Utiliza ferramentas mágicas e automatiza a produção na fazenda",
            comprado: false,
            requisito: ["arado1","arado2","arado3"],
            tipo: 'somador',
            custo: {
                ouro: 2000,
                comida: 500,
                madeira: 500,
                pedra: 500,
                metais: 200,
                especiarias: 50,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                automatico: true
            }
        },
        melhoresSementes1: {
            id: "melhoresSementes1",
            nome: "Melhores Sementes",
            descricao: "Utiliza sementes de melhor qualidade aumentando a qualidade das colheitas. Aumenta a produção de comida em 10%",
            comprado: false,
            requisito: [],
            tipo: 'multiplicador',
            custo: {
                ouro: 100,
                comida: 0,
                madeira: 50,
                pedra: 50,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        melhoresSementes2: {
            id: "melhoresSementes2",
            nome: "Melhores Sementes II",
            descricao: "Utiliza sementes de qualidade superior aumentando a qualidade das colheitas. Aumenta a produção de comida em 20%",
            comprado: false,
            requisito: ["melhoresSementes1"],
            tipo: 'multiplicador',
            custo: {
                ouro: 500,
                comida: 500,
                madeira: 250,
                pedra: 250,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        melhoresSementes3: {
            id: "melhoresSementes3",
            nome: "Melhores Sementes III",
            descricao: "Utiliza sementes de qualidade mágica melhorando as colheitas. Aumenta a produção de comida em 30%",
            comprado: false,
            requisito: ["melhoresSementes1","melhoresSementes2"],
            tipo: 'multiplicador',
            custo: {
                ouro: 1000,
                comida: 1000,
                madeira: 500,
                pedra: 500,
                metais: 100,
                especiarias: 100,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.3
            }
        }
    },
    Minerador:{
        utilizacaoCarrinhos:{
            id:"utilizacaoCarrinhos",
            nome: "Utilização de Carrinhos",
            descricao: "Utiliza carrinhos de mineração para coleta de minérios. Diminui o tempo de produção em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 200,
                comida: 100,
                madeira: 100,
                pedra: 0,
                metais: 10,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        utilizacaoCarrinhos2:{
            id:"utilizacaoCarrinhos2",
            nome: "Utilização de Carrinhos II",
            descricao: "Utiliza carrinhos de mineração melhores para coleta de minérios. Diminui o tempo de produção em 30%",
            comprado: false,
            requisito: ['utilizacaoCarrinhos'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 250,
                madeira: 250,
                pedra: 0,
                metais: 50,
                especiarias: 0,
                tecidos: 0,
                polvora: 10
            },
            efeito: {
                tempo: 7/10,
            }
        },
        utilizacaoCarrinhos3:{
            id:"utilizacaoCarrinhos3",
            nome: "Utilização de Carrinhos III",
            descricao: "Utiliza carrinhos de mineração ainda melhores para coleta de minérios. Diminui o tempo de produção em 50%",
            comprado: false,
            requisito: ['utilizacaoCarrinhos','utilizacaoCarrinhos2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 500,
                madeira: 500,
                pedra: 0,
                metais: 100,
                especiarias: 0,
                tecidos: 0,
                polvora: 25
            },
            efeito: {
                tempo: 1/2,
            }
        },
        esteiras:{
            id:"esteiras",
            nome: "Esteiras automáticas",
            descricao: "Substitui os carrinhos por esteiras automáticas. Automatiza a produção na mina",
            comprado: false,
            requisito: ['utilizacaoCarrinhos','utilizacaoCarrinhos2','utilizacaoCarrinhos3'],
            tipo: "somador",
            custo:{
                ouro: 2000,
                comida: 1000,
                madeira: 1000,
                pedra: 0,
                metais: 200,
                especiarias: 0,
                tecidos: 0,
                polvora: 50
            },
            efeito: {
                automatico: true
            }
        },
        picaretasMelhores:{
            id:"picaretasMelhores",
            nome: "Picaretas Melhores",
            descricao: "Substitui as antigas picaretas enferrujadas por picaretas de ferro. Aumenta a produção na mina em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 100,
                comida: 50,
                madeira: 50,
                pedra: 100,
                metais: 10,
                especiarias: 0,
                tecidos: 5,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        picaretasMelhores2:{
            id:"picaretasMelhores2",
            nome: "Picaretas Melhores II",
            descricao: "Substitui as picaretas de ferro por picaretas de aço. Aumenta a produção na mina em 20%",
            comprado: false,
            requisito: ["picaretasMelhores"],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 250,
                madeira: 250,
                pedra: 500,
                metais: 50,
                especiarias: 0,
                tecidos: 25,
                polvora: 0
            },
            efeito: {
                tempo: 1.2,
            }
        },
        picaretasMelhores3:{
            id:"picaretasMelhores3",
            nome: "Picaretas Melhores III",
            descricao: "Adiciona revestimento de diamante às picaretas de aço. Aumenta a produção na mina em 30%",
            comprado: false,
            requisito: ["picaretasMelhores","picaretasMelhores2"],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 500,
                madeira: 500,
            pedra: 1000,
                metais: 150,
                especiarias: 0,
                tecidos: 50,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.3
            }
        },
        
    },
    Lenhador:{
        tecnicasReflorestamento:{
            id:"tecnicasReflorestamento",
            nome: "Técnicas de Reflorestamento",
            descricao: "Utiliza técnicas de reflorestamento nas zonas de coleta de madeira. Diminui o tempo de produção em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 200,
                comida: 100,
                madeira: 0,
                pedra: 100,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        tecnicasReflorestamento2:{
            id:"tecnicasReflorestamento2",
            nome: "Técnicas de Reflorestamento II",
            descricao: "Melhora as técnicas utilizadas e as árvores nascem crescem mais rápido. Diminui o tempo de produção em 30%",
            comprado: false,
            requisito: ["tecnicasReflorestamento"],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 250,
                madeira: 0,
                pedra: 250,
                metais: 0,
                especiarias: 0,
                tecidos: 10,
                polvora: 0
            },
            efeito: {
                tempo: 7/10,
            }
        },
        tecnicasReflorestamento3:{
            id:"tecnicasReflorestamento3",
            nome: "Técnicas de Reflorestamento III",
            descricao: "Melhora as técnicas e nascem árvores maiores. Diminui o tempo de produção em 50%",
            comprado: false,
            requisito: ["tecnicasReflorestamento","tecnicasReflorestamento2"],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 500,
                madeira: 0,
                pedra: 500,
                metais: 50,
                especiarias: 0,
                tecidos: 25,
                polvora: 0
            },
            efeito: {
                tempo: 1/2,
            }
        },
        serralheria:{
            id:"serralheria",
            nome: "Serralheria",
            descricao: "Costrói uma serralheria. Automatiza a produção de madeira",
            comprado: false,
            requisito: ["tecnicasReflorestamento","tecnicasReflorestamento2","tecnicasReflorestamento3"],
            tipo: "somador",
            custo:{
                ouro: 2000,
                comida: 500,
                madeira: 500,
                pedra: 500,
                metais: 150,
                especiarias: 0,
                tecidos: 50,
                polvora: 0
            },
            efeito: {
                automatico: true,
            }
        },
        machadosMelhores:{
            id:"machadosMelhores",
            nome: "Machados Melhores",
            descricao: "Substitui os antigos machados enferrujados por machados de ferro. Aumenta a produção de madeira em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 100,
                comida: 50,
                madeira: 50,
                pedra: 50,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        machadosMelhores2:{
            id:"machadosMelhores2",
            nome: "Machados Melhores II",
            descricao: "Substitui os machados de ferro por machados de aço. Aumenta a produção de madeira em 20%",
            comprado: false,
            requisito: ["machadosMelhores"],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 250,
                madeira: 500,
                pedra: 250,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        machadosMelhores3:{
            id:"machadosMelhores3",
            nome: "Machados Melhores III",
            descricao: "Adiciona revestimento de diamante aos machados. Aumenta a produção de madeira em 30%",
            comprado: false,
            requisito: ['machadosMelhores','machadosMelhores2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 500,
                madeira: 1000,
                pedra: 500,
                metais: 100,
                especiarias: 0,
                tecidos: 100,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.3
            }
        },
    },
    Comerciante:{
        melhoresRotas:{
            id:"melhoresRotas",
            nome: "Melhores Rotas",
            descricao: "Utiliza rotas mais rápidas e seguras para o comércio. Diminui tempo de produção em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 10,
                especiarias: 10,
                tecidos: 10,
                polvora: 0,
            },
            efeito: {
                tempo: 9/10,
            }
        },
        melhoresRotas2:{
            id:"melhoresRotas2",
            nome: "Melhores Rotas II",
            descricao: "Utiliza rotas ainda mais rápidas e seguras para o comércio. Diminui tempo de produção em 30%",
            comprado: false,
            requisito: ["melhoresRotas"],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 25,
                especiarias: 25,
                tecidos: 25,
                polvora: 10
            },
            efeito: {
                tempo: 7/10,
            }
        },
        melhoresRotas3:{
            id:"melhoresRotas3",
            nome: "Melhores Rotas III",
            descricao: "Utiliza a rota mais rápida e segura para o comércio. Diminui tempo de produção em 50%",
            comprado: false,
            requisito: ["melhoresRotas","melhoresRotas2"],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 100,
                especiarias: 50,
                tecidos: 50,
                polvora: 25
            },
            efeito: {
                tempo: 7/10,
            }
        },
        rotaDoOuro:{
            id:"rotaDoOuro",
            nome: "Rota do Ouro",
            descricao: "Estabelece uma rota comercial internacional. Automatiza a coleta de ouro",
            comprado: false,
            requisito: ['melhoresRotas','melhoresRotas2','melhoresRotas3'],
            tipo: "somador",
            custo:{
                ouro: 2000,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 200,
                especiarias: 100,
                tecidos: 150,
                polvora: 50
            },
            efeito: {
                automatico: true
            }
        },
        propaganda:{
            id:"propaganda",
            nome: "Propaganda",
            descricao: "Utiliza panfletos e banners para promoção dos produtos disponíveis no mercado. Aumenta o ouro arrecadado em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 200,
                comida: 100,
                madeira: 100,
                pedra: 100,
                metais: 10,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        propaganda2:{
            id:"propaganda2",
            nome: "Propaganda II",
            descricao: "Contrata anunciadores e promove peças de teatro patrocinadas. Aumenta o ouro arrecadado em 20%",
            comprado: false,
            requisito: ["propaganda"],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 250,
                madeira: 250,
                pedra: 250,
                metais: 50,
                especiarias: 50,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        propaganda3:{
            id:"propaganda3",
            nome: "Propaganda III",
            descricao: "Realiza eventos semanais com promoções e ofertas de produtos. Aumenta o ouro arrecadado em 30%",
            comprado: false,
            requisito: ["propaganda","propaganda2"],
            tipo: "multiplicador",
            custo:{
                ouro: 2000,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 250,
                especiarias: 250,
                tecidos: 250,
                polvora: 250
            },
            efeito: {
                multiplicador: 1.3
            }
        },
    },
    Cavaleiro:{
        montaria:{
            id:"montaria",
            nome: "Montaria",
            descricao: "Uma égua acompanha o cavaleiro nas expedições. Diminui o tempo de expedição em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 250,
                comida: 250,
                madeira: 100,
                pedra: 0,
                metais: 0,
                especiarias: 0,
                tecidos: 10,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        montaria2:{
            id:"montaria2",
            nome: "Montaria II",
            descricao: "Adiciona equipamentos para a égua melhorando sua agilidade e velocidade. Diminui o tempo de expedição em 30%",
            comprado: false,
            requisito: ["montaria"],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 500,
                madeira: 200,
                pedra: 0,
                metais: 50,
                especiarias: 0,
                tecidos: 50,
                polvora: 0
            },
            efeito: {
                tempo: 7/10,
            }
        },
        montaria3:{
            id:"montaria3",
            nome: "Montaria III",
            descricao: "Melhora ainda mais os equipamentos equipados na égua. Diminui o tempo de expedição em 50%",
            comprado: false,
            requisito: ["montaria","montaria2"],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 1000,
                madeira: 500,
                pedra: 0,
                metais: 150,
                especiarias: 0,
                tecidos: 100,
                polvora: 50
            },
            efeito: {
                tempo: 1/2,
            }
        },
        sinalizadores:{
            id:"sinalizadores",
            nome: "Sinalizadores",
            descricao: "Utiliza sinalizadores para marcar pontos de encontro com comerciantes da vila para a coleta dos espólios. Automatiza as expedições",
            comprado: false,
            requisito: ["montaria","montaria2","montaria3"],
            tipo: "somador",
            custo:{
                ouro: 2500,
                comida: 0,
                madeira: 500,
                pedra: 500,
                metais: 150,
                especiarias: 0,
                tecidos: 0,
                polvora: 50
            },
            efeito: {
                automatico: true
            }
        },
        equipamentos:{
            id:"equipamentos",
            nome: "Equipamentos",
            descricao: "Melhora o equipamento levado em suas expedições. Aumenta os espólios em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 0,
                madeira: 150,
                pedra: 150,
                metais: 50,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        equipamentos2:{
            id:"equipamentos2",
            nome: "Equipamentos II",
            descricao: "Utiliza equipamentos melhores nas expedições. Aumenta os espólios em 20%",
            comprado: false,
            requisito: ['equipamentos'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 0,
                madeira: 300,
                pedra: 300,
                metais: 100,
                especiarias: 0,
                tecidos: 25,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        equipamentos3:{
            id:"equipamentos3",
            nome: "Equipamentos III",
            descricao: "Utiliza equipamentos ainda melhores nas expedições. Aumenta os espólios em 30%",
            comprado: false,
            requisito: ['equipamentos','equipamentos2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 0,
                madeira: 500,
                pedra: 500,
                metais: 200,
                especiarias: 0,
                tecidos: 50,
                polvora: 50
            },
            efeito: {
                multiplicador: 1.3
            }
        },
    },
    Druida:{
        animaiscarga:{
            id:"animaiscarga",
            nome: "Animais de Carga",
            descricao: "Solicita ajuda de pequenos animais como esquilos e castores para carregar os espólios para a vila. Diminui o tempo de expedição em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 250,
                comida: 250,
                madeira: 250,
                pedra: 100,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        animaisCarga2:{
            id:"animaiscarga2",
            nome: "Animais de Carga II",
            descricao: "Solicita ajuda de animais médios como cervos e lobos para carregar os espólios para a vila. Diminui o tempo de expedição em 30%",
            comprado: false,
            requisito: ['animaiscarga'],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 500,
                madeira: 500,
                pedra: 250,
                metais: 0,
                especiarias: 10,
                tecidos: 25,
                polvora: 0
            },
            efeito: {
                tempo: 7/10,
            }
        },
        animaisCarga3:{
            id:"animaiscarga3",
            nome: "Animais de Carga III",
            descricao: "Solicita ajuda de animais pesados como ursos e alces para carregar espólios para a vila. Diminui o tempo de expedição em 50%",
            comprado: false,
            requisito: ["animaiscarga","animaiscarga2"],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 1000,
                madeira: 1000,
                pedra: 500,
                metais: 0,
                especiarias: 50,
                tecidos: 100,
                polvora: 0
            },
            efeito: {
                tempo: 1/2,
            }
        },
        tropaSilvestre:{
            id:"tropaSilvestre",
            nome: "Tropa Silvestre",
            descricao: "Com ajuda dos conhecimentos druidas é feito o treinamento de um grupo de animais para carregamento dos espólios marcados magicamente. Automatiza as expedições",
            comprado: false,
            requisito: ['animaiscarga','animaiscarga2','animaiscarga3'],
            tipo: "somador",
            custo:{
                ouro: 2500,
                comida: 1500,
                madeira: 1500,
                pedra: 1500,
                metais: 0,
                especiarias: 100,
                tecidos: 200,
                polvora: 0
            },
            efeito: {
                automatico: true
            }
        },
        guiasSelvagens:{
            id:"guiasSelvagens",
            nome: "Guias Selvagens",
            descricao: "Utiiza alguns poucos animais rastreadores para ajudar na expedição. Aumenta os espólios em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 150,
                madeira: 150,
                pedra: 0,
                metais: 0,
                especiarias: 10,
                tecidos: 10,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        guiasSelvagens2:{
            id:"guiasSelvagens2",
            nome: "Guias Selvagens II",
            descricao: "Utiliza ajuda de mais animais na localização de espólios. Aumenta os espólios em 20%",
            comprado: false,
            requisito: ['guiasSelvagens'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 300,
                madeira: 300,
                pedra: 0,
                metais: 0,
                especiarias: 25,
                tecidos: 25,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        guiasSelvagens3:{
            id:"guiasSelvagens3",
            nome: "Guias Selvagens III",
            descricao: "Utiliza a ajuda de grandes rastreadores na localização de espólios. Aumenta os espólios em 30%",
            comprado: false,
            requisito: ['guiasSelvagens','guiasSelvagens2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 500,
                madeira: 500,
                pedra: 0,
                metais: 0,
                especiarias: 50,
                tecidos: 50,
                polvora: 10
            },
            efeito: {
                multiplicador: 1.3
            }
        },
    },
    Arqueira:{
        treinamento:{
            id:"treinamento",
            nome: "Treinamento de Arquearia",
            descricao: "Realiza um treinamento de agilidade e destreza. Dimiui o tempo de expedição em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 250,
                comida: 0,
                madeira: 250,
                pedra: 250,
                metais: 10,
                especiarias: 0,
                tecidos: 10,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        treinamento2:{
            id:"treinamento2",
            nome: "Treinamento de Arquearia II",
            descricao: "Realiza um treinamento de agilidade e destreza mais completo. Dimiui o tempo de expedição em 20%",
            comprado: false,
            requisito: ['treinamento'],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 0,
                madeira: 500,
                pedra: 500,
                metais: 25,
                especiarias: 0,
                tecidos: 25,
                polvora: 0
            },
            efeito: {
                tempo: 7/10,
            }
        },
        treinamento3:{
            id:"treinamento3",
            nome: "Treinamento de Arquearia III",
            descricao: "Realiza um treinamento de agilidade e destreza ainda mais completo. Dimiui o tempo de expedição em 30%",
            comprado: false,
            requisito: ['treinamento','treinamento2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 0,
                madeira: 1000,
                pedra: 1000,
                metais: 50,
                especiarias: 25,
                tecidos: 50,
                polvora: 0
            },
            efeito: {
                tempo: 1/2,
            }
        },
        passosAgeis:{
            id:"passosAgeis",
            nome: "Passos Ágeis",
            descricao: "Devido ao seu alto treinamento consegue realizar grandes caminhadas em tempos mínimos. Automatiza as expedições",
            comprado: false,
            requisito: ['treinamento','treinamento2','treinamento3'],
            tipo: "somador",
            custo:{
                ouro: 2500,
                comida: 0,
                madeira: 1500,
                pedra: 1500,
                metais: 150,
                especiarias: 50,
                tecidos: 50,
                polvora: 0
            },
            efeito: {
                automatico: true
            }
        },
        arcoMelhorado:{
            id:"arcoMelhorado",
            nome: "Arco Melhorado",
            descricao: "Melhora a precisão e manuseio do arco possibilitando melhores caças. Aumenta os espólios em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 300,
                madeira: 300,
                pedra: 300,
                metais: 0,
                especiarias: 0,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        arcoMelhorado2:{
            id:"arcoMelhorado2",
            nome: "Arco Melhorado II",
            descricao: "Troca as hastes do arco para um composto mágico, melhorando ainda mais a precisão. Aumenta os espólios em 20%",
            comprado: false,
            requisito: ['arcoMelhorado'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 500,
                madeira: 500,
                pedra: 500,
                metais: 50,
                especiarias: 50,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        arcoMelhorado3:{
            id:"arcoMelhorado3",
            nome: "Arco Melhorado III",
            descricao: "A corda do arco é trançada gerando maior potência de disparo. Aumento os espólios em 30%",
            comprado: false,
            requisito: ['arcoMelhorado','arcoMelhorado2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 1000,
                madeira: 1000,
                pedra: 1000,
                metais: 0,
                especiarias: 0,
                tecidos: 150,
                polvora: 25
            },
            efeito: {
                multiplicador: 1.3
            }
        },
    },
    Paladino:{
        ajudaDaFe:{
            id:"ajudaDaFe",
            nome: "Ajuda da Fé",
            descricao: "Solicita auxílio de companheiros de fé na coleta dos espólios. Diminui o tempo de expedição em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 250,
                madeira: 0,
                pedra: 0,
                metais: 100,
                especiarias: 50,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        ajudaDaFe2:{
            id:"ajudaDaFe2",
            nome: "Ajuda da Fé II",
            descricao: "Os companheiros coletam os espólios acompanhados de mulas de carga. Diminui o tempo de expedição em 30%",
            comprado: false,
            requisito: ['ajudaDaFe'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 500,
                madeira: 0,
                pedra: 0,
                metais: 200,
                especiarias: 100,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                tempo: 7/10,
            }
        },
        ajudaDaFe3:{
            id:"ajudaDaFe3",
            nome: "Ajuda da Fé III",
            descricao: "Solicita ajuda de ainda mais companheiros de fé. Diminui o tempo de expedição em 50%",
            comprado: false,
            requisito: ['ajudaDaFe','ajudaDaFe2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 1000,
                madeira: 0,
                pedra: 0,
                metais: 300,
                especiarias: 150,
                tecidos: 0,
                polvora: 50
            },
            efeito: {
                tempo: 1/2,
            }
        },
        rotaDeFe:{
            id:"rotaDeFe",
            nome: "Rota de Fé",
            descricao: "É organizado junto aos companheiros de fé pequenos acampamentos para a coleta de espólios para serem coletados regularmente. Automatiza as expedições",
            comprado: false,
            requisito: [],
            tipo: "somador",
            custo:{
                ouro: 3000,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 500,
                especiarias: 250,
                tecidos: 250,
                polvora: 100
            },
            efeito: {
                automatico: true
            }
        },
        guiaCelestial:{
            id:"guiaCelestial",
            nome: "Guia Celestial",
            descricao: "Fortalece a crença e misteriosamente melhores espólios são coletados nas expedições. Aumenta os espólios em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 750,
                comida: 500,
                madeira: 0,
                pedra: 0,
                metais: 100,
                especiarias: 10,
                tecidos: 0,
                polvora: 10
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        guiaCelestial2:{
            id:"guiaCelestial2",
            nome: "Guia Celestial II",
            descricao: "Fortalece ainda mais a crença e os espólios são ainda maiores. Aumenta os espólios em 20%",
            comprado: false,
            requisito: ['guiaCelestial'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 1000,
                madeira: 0,
                pedra: 500,
                metais: 0,
                especiarias: 50,
                tecidos: 0,
                polvora: 50
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        guiaCelestial3:{
            id:"guiaCelestial3",
            nome: "Guia Celestial III",
            descricao: "Torna a crença inabalável. Aumenta os espólios em 30%",
            comprado: false,
            requisito: ['guiaCelestial','guiaCelestial2'],
            tipo: "multiplicador",
            custo:{
                ouro: 2000,
                comida: 1500,
                madeira: 0,
                pedra: 1000,
                metais: 0,
                especiarias: 100,
                tecidos: 50,
                polvora: 100
            },
            efeito: {
                multiplicador: 1.3
            }
        },
    },
    Ladina:{
        equipamentoFurtivo:{
            id:"equipamentoFurtivo",
            nome: "Equipamento Furtivo",
            descricao: "Utiliza equipamento furtivo para melhorar a exploração e movimentação. Diminui o tempo de expedição em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 500,
                comida: 0,
                madeira: 250,
                pedra: 250,
                metais: 100,
                especiarias: 0,
                tecidos: 100,
                polvora: 0
            },
            efeito: {
                tempo: 9/10,
            }
        },
        equipamentoFurtivo2:{
            id:"equipamentoFurtivo2",
            nome: "Equipamento Furtivo II",
            descricao: "Melhora o equipamento furtivo utilizado. Diminui o tempo de expedição em 30%",
            comprado: false,
            requisito: ['equipamentoFurtivo'],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 0,
                madeira: 500,
                pedra: 500,
                metais: 200,
                especiarias: 0,
                tecidos: 200,
                polvora: 25
            },
            efeito: {
                tempo: 7/10,
            }
        },
        equipamentoFurtivo3:{
            id:"equipamentoFurtivo3",
            nome: "Equipamento Furtivo III",
            descricao: "Utiliza o melhor equipamento furtivo, tornando quase imperceptível o usuário. Diminui o tempo de expedição em 50%",
            comprado: false,
            requisito: ['equipamentoFurtivo','equipamentoFurtivo2'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 0,
                madeira: 1000,
                pedra: 1000,
                metais: 500,
                especiarias: 0,
                tecidos: 300,
                polvora: 100
            },
            efeito: {
                tempo: 1/2,
            }
        },
        pontosDeColeta:{
            id:"pontosDeColeta",
            nome: "Pontos de Coleta",
            descricao: "Deixa os espólios marcados em pontos de coleta para que os comerciantes da vila coletem os espólios. Automatiza as expedições",
            comprado: false,
            requisito: ['equipamentoFurtivo','equipamentoFurtivo2','equipamentoFurtivo3'],
            tipo: "somador",
            custo:{
                ouro: 3000,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 500,
                especiarias: 250,
                tecidos: 100,
                polvora: 100
            },
            efeito: {
                automatico: true
            }
        },
        adagasMelhores:{
            id:"adagasMelhores",
            nome: "Adagas Melhores",
            descricao: "Substitui as adagas antigas por adagas de aço. Aumenta os espólios em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 750,
                comida: 750,
                madeira: 750,
                pedra: 0,
                metais: 50,
                especiarias: 25,
                tecidos: 50,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        adagasMelhores2:{
            id:"adagasMelhores2",
            nome: "adagas Melhores II",
            descricao: "Substitui as adagas antigas por adagas de diamante. Aumenta os espólios em 20%",
            comprado: false,
            requisito: ['adagasMelhores'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 1000,
                madeira: 1000,
                pedra: 0,
                metais: 150,
                especiarias: 50,
                tecidos: 100,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        adagasMelhores3:{
            id:"adagasMelhores3",
            nome: "Adagas Melhores III",
            descricao: "Encanta magicamente as adagas. Aumenta os espólios em 30%",
            comprado: false,
            requisito: ['adagasMelhores','adagasMelhores2'],
            tipo: "multiplicador",
            custo:{
                ouro: 3000,
                comida: 1500,
                madeira: 1500,
                pedra: 0,
                metais: 500,
                especiarias: 150,
                tecidos: 300,
                polvora: 50
            },
            efeito: {
                multiplicador: 1.3
            }
        },
    },
    Mago:{
        conhecimentoArcano:{
            id:"conhecimentoArcano",
            nome: "Conhecimento Arcano",
            descricao: "Realiza o estudo de magias antigas e pergaminhos de encantamentos de teletransporte. Diminui o tempo de expedição em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 0,
                madeira: 1000,
                pedra: 1000,
                metais: 100,
                especiarias: 100,
                tecidos: 100,
                polvora: 50
            },
            efeito: {
                tempo: 9/10,
            }
        },
        conhecimentoArcano2:{
            id:"conhecimentoArcano2",
            nome: "Conhecimento Arcano II",
            descricao: "Realiza o estudo de ainda magias antigas e outros pergaminhos de teletransporte. Diminui o tempo de expedição em 30%",
            comprado: false,
            requisito: ['conhecimentoArcano'],
            tipo: "multiplicador",
            custo:{
                ouro: 2000,
                comida: 0,
                madeira: 2000,
                pedra: 2000,
                metais: 250,
                especiarias: 250,
                tecidos: 250,
                polvora: 100
            },
            efeito: {
                tempo: 7/10,
            }
        },
        conhecimentoArcano3:{
            id:"conhecimentoArcano3",
            nome: "Conhecimento Arcano III",
            descricao: "Domina a habilidade de teletransportar itens pouco massivos. Diminui o tempo de expedição em 50%",
            comprado: false,
            requisito: ['conhecimentoArcano','conhecimentoArcano2'],
            tipo: "multiplicador",
            custo:{
                ouro: 3000,
                comida: 0,
                madeira: 3000,
                pedra: 3000,
                metais: 500,
                especiarias: 500,
                tecidos: 500,
                polvora: 200
            },
            efeito: {
                tempo: 1/2
            }
        },
        teletransporte:{
            id:"teletransporte",
            nome: "Teletransporte",
            descricao: "Adquire a habilidade de teletransportar para a vila os espólios coletados. Automatiza as expedições",
            comprado: false,
            requisito: ['conhecimentoArcano','conhecimentoArcano2','conhecimentoArcano3'],
            tipo: "somador",
            custo:{
                ouro: 5000,
                comida: 0,
                madeira: 0,
                pedra: 0,
                metais: 1000,
                especiarias: 500,
                tecidos: 500,
                polvora: 500
            },
            efeito: {
                automatico: true
            }
        },
        pocoes:{
            id:"pocoes",
            nome: "Poções",
            descricao: "Cria novas receitas e poções para auxiliar nas expedições. Aumenta os espólios em 10%",
            comprado: false,
            requisito: [],
            tipo: "multiplicador",
            custo:{
                ouro: 1000,
                comida: 1000,
                madeira: 1000,
                pedra: 1000,
                metais: 250,
                especiarias: 100,
                tecidos: 0,
                polvora: 0
            },
            efeito: {
                multiplicador: 1.1
            }
        },
        pocoes2:{
            id:"pocoes2",
            nome: "Poções II",
            descricao: "Cria poções capazes de multiplicar os espólios. Aumenta os espólios em 20%",
            comprado: false,
            requisito: ['pocoes'],
            tipo: "multiplicador",
            custo:{
                ouro: 1500,
                comida: 1500,
                madeira: 1500,
                pedra: 1500,
                metais: 500,
                especiarias: 250,
                tecidos: 0,
                polvora: 50
            },
            efeito: {
                multiplicador: 1.2
            }
        },
        pocoes3:{
            id:"pocoes3",
            nome: "Poções III",
            descricao: "Cria poções capazes de multiplicar ainda mais os espólios. Aumenta os espólios em 30%",
            comprado: false,
            requisito: ['pocoes','pocoes2'],
            tipo: "multiplicador",
            custo:{
                ouro: 2000,
                comida: 2000,
                madeira: 2000,
                pedra: 2000,
                metais: 1000,
                especiarias: 500,
                tecidos: 250,
                polvora: 100
            },
            efeito: {
                multiplicador: 1.3,
            }
        },
    }

}

export default melhoriasDados;