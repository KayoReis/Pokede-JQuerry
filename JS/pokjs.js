$(document).ready(function () {
    //Array com os nomes
    const pokName = ["Bulbassauro", "Ivyssauro", "Venossauro", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
        "Cartepie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pigeot", "Rattata", "Raticate", "Spearow",
        "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking",
        "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect",
        "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl",
        "Poliwrath", "Abra", "Kadabra", "Alakazan", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebell", "Tentacool", "Tentacruel",
        "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong",
        "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute",
        "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rydon", "Chansey", "Tangela", "Kangaskhan", "Horsea",
        "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr.Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
        "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini",
        "Dragonair", "Dragonite", "Mewtwo", "Mew"];
    //Array de tipo primario
    const tipPri = ["Grama", "Grama", "Grama", "Fogo", "Fogo", "Fogo", "Água", "Água", "Água", "Inseto", "Inseto", "Inseto", "Inseto", "Inseto", "Inseto", "Normal", "Normal", "Normal", "Normal", "Normal",
        "Normal", "Normal", "Veneno", "Veneno", "Elétrico", "Elétrico", "Solo", "Solo", "Veneno", "Veneno", "Veneno", "Veneno", "Veneno", "Veneno", "Fada", "Fada", "Fogo", "Fogo", "Normal", "Normal", "Veneno", "Veneno",
        "Grama", "Grama", "Grama", "Inseto", "Inseto", "Inseto", "Inseto", "Solo", "Solo", "Normal", "Normal", "Água", "Água", "Lutador", "Lutador", "Fogo", "Fogo", "Água", "Água", "Água", "Psíquico", "Psíquico", "Psíquico", "Lutador",
        "Lutador", "Lutador", "Grama", "Grama", "Grama", "Água", "Água", "Pedra", "Pedra", "Pedra", "Fogo", "Fogo", "Água", "Água", "Elétrico", "Elétrico", "Normal", "Normal", "Normal", "Água", "Água", "Veneno", "Veneno",
        "Água", "Água", "Fantasma", "Fantasma", "Fantasma", "Pedra", "Psíquico", "Psíquico", "Água", "Água", "Elétrico", "Elétrico", "Grama", "Grama", "Solo", "Solo", "Lutador", "Lutador", "Normal", "Veneno", "Veneno", "Solo",
        "Solo", "Normal", "Grama", "Normal", "Água", "Água", "Água", "Água", "Água", "Água", "Psíquico", "Inseto", "Gelo", "Elétrico", "Fogo", "Inseto", "Normal", "Água", "Água", "Água", "Normal", "Normal", "Água", "Elétrico",
        "Fogo", "Normal", "Pedra", "Pedra", "Pedra", "Pedra", "Pedra", "Normal", "Gelo", "Elétrico", "Fogo", "Dragão", "Dragão", "Dragão", "Psíquico", "Psíquico"];
    //Array de tipo secundario
    const tipSeg = ["Veneno", "Veneno", "Veneno", "", "", "Voador", "", "", "", "", "", "Voador", "Veneno", "Veneno", "Veneno", "Voador", "Voador", "Voador", "", "", "Voador", "Voador", "", "", "", "", "", "", "",
        "", "Solo", "", "", "Solo", "", "", "", "", "Fada", "Fada", "Voador", "Voador", "Veneno", "Veneno", "Veneno", "Grama", "Grama", "Veneno", "Veneno", "", "", "", "", "", "", "", "", "", "", "", "", "Lutador", "", "", "", "", "", "",
        "Veneno", "Veneno", "Veneno", "Veneno", "Veneno", "Solo", "Solo", "Solo", "", "", "Psíquico", "Psíquico", "Aço", "Aço", "Voador", "Voador", "Voador", "", "Gelo", "", "", "", "Gelo", "Veneno", "Veneno", "Veneno", "Solo",
        "", "", "", "", "", "", "Psíquico", "Psíquico", "", "", "", "", "", "", "", "Pedra", "Pedra", "", "", "", "", "", "", "", "", "Psíquico", "Fada", "Voador", "Psíquico", "", "", "", "", "", "Voador", "Gelo", "", "", "", "", "", "", "Água",
        "Água", "Água", "Água", "Voador", "", "Voador", "Voador", "Voador", "", "", "Voador", "", ""];
    //Array de altura
    const pokAlt = ["0.7m", "1.0m", "2.0m", "0.6m", "1.1m", "1.7m", "0.5m", "1,0m", "1.6m", "0.3m", "0.7m", "1.1m", "0.3", "0.6m", "1.0m", "0.3m", "1.1m", "1.5m", "0.3m", "0.7m", "0.3m",
        "1.2m", "2.0m", "3.5m", "0.4m", "0.8m", "0.6m", "1.0m", "0.4m", "0.8m", "1.3m", "0.5m", "0.9m", "1.4m", "0.6m", "1.3m", "0.6m", "1.1m", "0.5m", "1.0m", "0.8m", "1.6m", "0.5m", "0.8m", "1.2m",
        "0.3m", "1.0m", "1.0m", "1.5m", "0.2m", "0.7m", "0.4m", "1.0m", "0.8m", "1.7m", "0.5m", "1.0m", "0.7m", "1.9m", "0.6m", "1.0m", "1.3m", "0.9m", "1.3m", "1.5m", "0.8m", "1.5m", "1.6m", "0.7m",
        "1.0m", "1.7m", "0.9m", "1.6m", "0.4m", "1.0m", "1.4m", "1.0m", "1.7m", "1.2m", "1.6m", "0.3m", "1.0m", "0.8m", "1.4m", "1.8m", "1.1m", "1.7m", "0.9m", "1.2m", "0.3m", "1.5m", "1.3m", "1.6m",
        "1.5m", "8.8m", "1.0m", "1.6m", "0.4m", "1.3m", "0.5m", "1.2m", "0.4m", "2.0m", "0.4m", "1.0m", "1.5m", "1.4m", "1.2m", "1.0m", "1.2m", "1.0m", "1.9m", "1.1m", "1.0m", "2.2m", "0.4m", "1.2m",
        "0.6m", "1.3m", "0.8m", "1.1m", "1.3m", "1.5m", "1.4m", "1.1m", "1.3m", "1.5m", "1.4m", "0.9m", "6.5m", "2.5m", "0.3m", "0.3m", "1.0m", "0.8m", "0.9m", "0.8m", "0.4m", "1.0m", "0.5m", "1.3m",
        "1.8m", "2.1m", "1.7m", "1.6m", "2.0m", "1.8m", "4.0m", "2.2m", "2.0m", "0.4m"];
    //Array de peso
    const pokPeso = ["6.9kg", "13.0kg", "100.0kg", "8.5kg", "19.0kg", "90.5kg", "9.0kg", "22.5kg", "85.5kg", "2.9kg", "9.9kg", "32.0kg", "3.2kg", "10.0kg", "29.5kg", "1.8kg", "30.0kg", "39.5kg", "3.5kg", "18.5kg", "2.0kg",
        "38.0kg", "6.9kg", "65.0kg", "6.0kg", "30.0kg", "12.0kg", "29.5kg", "7.0kg", "20.0kg", "60.0kg", "9.0kg", "19.5kg", "62.0kg", "7.5kg", "40.0kg", "9.9kg", "19.9kg", "5.5kg", "12.0kg", "7.5kg", "55.0kg", "5.4kg", "8.6kg", "18.6kg",
        "5.4kg", "29.5kg", "30.0kg", "12.5kg", "0.8kg", "33.3kg", "4.2kg", "32.0kg", "19.6kg", "76.6kg", "28.0kg", "32.0kg", "19.0kg", "155.0kg", "12.4kg", "20.0kg", "54.0kg", "19.5kg", "56.5kg", "48.0kg", "19.5kg", "70.5kg", "130.0kg",
        "4.0kg", "6.4kg", "15.5kg", "45.5kg", "55.0kg", "20.0kg", "105.0kg", "300.0kg", "30.0kg", "95.0kg", "36.0kg", "78.5kg", "6.0kg", "60.0kg", "15.0kg", "39.2kg", "85.2kg", "90.0kg", "120.0kg", "30.0kg", "30.0kg", "4.0kg", "132.5kg",
        "0.1kg", "0.1kg", "40.5kg", "210.0kg", "32.4kg", "75.6kg", "6.5kg", "60.0kg", "10.4kg", "66.6kg", "2.5kg", "120.0kg", "6.5kg", "45.0", "49.8kg", "50.2kg", "65.5kg", "1.0kg", "9.5kg", "115.0kg", "120.0kg", "34.6kg", "35.0kg", "80.0kg",
        "8.0kg", "25.0kg", "15.0kg", "39.0kg", "34.5kg", "80.0kg", "54.5kg", "56.0kg", "40.6kg", "30.0kg", "44.5kg", "55.0kg", "88.4kg", "10.0kg", "265.0kg", "220.0kg", "4.0kg", "6.5kg", "29.0kg", "24.5kg", "25.0kg", "36.5kg", "7.5kg", "35.0kg",
        "11.5kg", "40.5kg", "59.0kg", "460.0kg", "55.4kg", "52.6kg", "60.0kg", "3.3kg", "16.5kg", "210.0kg", "122.0kg", "4.0kg"];
    //Array de descrição
    const pokDesc = ["Pokémon semente.<br /> O bulbo em suas costas está cheio de nutrientes. Nele, Bulbasauro armazena suas energias. O bulbo vai crescendo à medida que envelhece porque ele absorve os raios de sol", "Pokémon semente.<br/> Quando o bulbo nas suas costas cresce, parece perder a capacidade de ficar de pé nas patas traseiras.Se o bulbo nas costas começar a cheirar bem, é uma evidência de que a grande flor logo florescerá.", "Pokémon semente.<br/> Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz do sol. Um aroma fascinante exala de sua flor. A fragrância acalma aqueles envolvidos em uma batalha.",
        "Pokémon lagarto.<br/> A chama que possui na ponta de seu rabo mostra a força de sua vida. Se ele estiver fraco, a chama irá diminuir. Quando está saudável, a chama brilhará intensamente. Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.", "Pokémon chama,<br/> Gosta muito de brigas, por isso busca constantemente por adversários. Ele ataca com suas garras afiadas e usando sua cauda como chicote de fogo. Pode soltar chamas azuis quando muito animado.",
        "Pokémon chama.<br/> Seu fogo é quente o suficiente para derreter rochas. Quando nervoso, a chama em sua cauda queimará intensamente. É orgulhoso e voa pelos céus em busca de adversários poderosos.", "Pokemon tartaruguinha.<br/> Após o nascimento, suas costas incham e endurecem em uma concha. Ele pulveriza poderosamente espuma de sua boca. Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa", "Pokémon tartaruga.<br/> Este pokémon é muito popular como animal de estimação. Sua cauda coberta de pelos é um símbolo de sua longevidade. Muitas vezes se esconde na água para perseguir presas incautos. Para nadar rápido, move as orelhas para manter o equilíbrio.",
        "Pokémon crustáceo.<br/> O casco em suas costas possui canhões que jorram água pressurizada forte o suficiente para perfurar uma parede de concreto. Também usa o seu casco pesado para ataca", "Pokémon verme.<br/> Como forma de proteção, Caterpie libera um cheiro horrível através de suas antenas. Suas patas pegajosas são capazes de andar em qualquer tipo de superfície.É coberto com uma pele verde. Quando cresce, muda de pele, cobre-se de seda e torna-se um casulo.", "Pokémon casulo.<br/> Este pokémon é totalmente vulnerável a ataques enquanto seu casulo é mole, correndo risco de expor seu corpo frágil e sensível. Por isso, fica endurecendo o seu casulo para se proteger.",
        "Pokémon borboleta.<br/> As asas são protegidas por poeira repelente de chuva. Como resultado, este pokémon pode voar mesmo na chuva. Na batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar.", "Pokémon inseto peludo.<br/> Frequentemente encontrado em florestas, comendo folhas. Tem um ferrão afiado na cabeça que injeta veneno.", "Pokémon casulo.<br/> Este pokémon está em um estágio temporário enquanto faz seu corpo. É quase completamente incapaz de se mover por conta própria, os Kakunas vivem agarrados em árvores para se esconder dos predadores.", "Pokémon abelha venenosa.<br/> Ele voa em alta velocidade e ataca usando os grandes ferrões venenosos em suas patas dianteiras e cauda. Pode aparecer em um enxame.",
        "Pokémon passarinho.<br/> Não gosta muito de lutar. Em vez disso, prefere bater as asas próximo ao chão para levantar uma poeira de areia e com isso afastar o inimigo. Possui um ótimo senso de direção. Ele se esconde na grama alta e assim por diante, procurando comida, como pequenos insetos.", "Pokémon pássaro.<br/> Muito protetor de sua extensa área territorial, este Pokémon bicará ferozmente qualquer intruso. Possui uma ótima visão e garras bastante desenvolvidas, essenciais para caçar suas presas.", " Pokémon pássaro.<br/> Ele abre suas lindas asas amplamente para intimidar os inimigos. Ele corre pelos céus na velocidade Mach-2.Com seus músculos bem desenvolvidos, consegue fazer fortes furacões ao bater suas asas",
        "Pokémon rato.<br/> Morde qualquer coisa quando ataca. Pequeno e muito rápido, é uma visão comum em muitos lugares. Vive procurando objetos duros para roer. Consegue viver em qualquer lugar e reproduzir muito depressa.", "Pokémon rato.<br/> Ele usa seus bigodes para manter o equilíbrio. Aparentemente fica mais lento se eles forem cortados. Para assustar os adversários, ele posiciona-se de pé e mostra as presas de sua boca. Suas presas são fortes, capazes até mesmo de roer uma parede de concreto.", "Pokémon passarinho.<br/> Ele bate suas asas sobre a grama para encontrar insetos. Quando encontra, puxa-os do chão com o seu bico. Suas asas são curtas, por isso não pode voar por longas distâncias.",
        "Pokémon bico.<br/> Fearow é famoso por seu pescoço longo e bico comprido. Eles foram desenvolvidos especialmente para ajudá-lo a apanhar presas no solo ou na água. Pode ficar voando um dia inteiro sem pousar.", "Pokémon serpente.<br/> Rasteja silenciosamente pelo chão. Alimenta-se de ovos nos ninhos de pokémons pássaros. Ele sente o cheiro com sua língua. Suas mandíbulas são capazes de devorar seres bem maiores que ele.", " Pokémon cobra.<br/> O padrão em sua barriga parece ser um rosto assustador. Inimigos fracos fugirão apenas ao ver o padrão. As marcas no pescoço de Arbok podem ser diferentes de região para região. Elas indicam o quão venenoso este pokémon é.",
        "Pokémon rato elétrico.<br/> Para ter uma melhor percepção de tudo o que está à sua volta, mantém o seu rabo levantado. Ele armazena energia elétrica dentro de suas bochechas vermelhas. Quando vários desses pokémon se reúnem, sua eletricidade pode aumentar e causar tempestades elétricas.", "Pokémon rato elétrico.<br/> Suas cargas elétricas podem atingir até 100.000 volts. Sua longa cauda serve como um aterramento para se proteger de sua própria energia de alta tensão. Pode tornar-se agressivo caso acumule muita eletricidade no corpo.", " Pokémon tatuzinho,<br/> Ele se enterra e vive no subsolo saindo apenas para caçar presas. Se ameaçado, ele se enrola em uma bola para proteção.",
        "Pokémon tatu.<br/> É habilidoso para fazer arranhões com suas garras. Se elas quebrarem, irão crescer de novo em um dia. Suas costas possuem espinhos muito duros, usados como sua defesa. Se enrola em uma bola espinhosa quando ameaçado para atacar ou escapar.", "Pokémon agulha venenosa.<br/> As Nidoran fêmeas possuem chifres menores. Embora pequena, deve-se ter muito cuidado com os espinhos venenosos de seu corpo. Ela não gosta muito de lutar.", "Pokémon agulha venenosa.<br/> O chifre em sua cabeça desenvolve-se lentamente. Ela prefere golpear com ataques físicos, como mordidas e arranhões. É dócil, mas não hesita em atacar quando perturbada. Ela emite gritos ultrassônicos que têm o poder de confundir os inimigos.",
        "Pokémon broca.</br> Duras escamas crescem no corpo robusto deste pokémon. Isso lhe permite realizar movimentos brutais. Se ficar excitado, as agulhas se eriçaram para fora. Ela defende a sua cria com sua própria vida.", "Pokémon agulha venenosa.<br/> Ele endurece suas orelhas para sentir o perigo. Com elas, consegue escutar o mais leve dos sons. Quanto maior for o seu chifre, mais venenoso ele será.", "Pokémon agulha venenosa.<br/> Possui um chifre mais duro que diamante.Um pokemon agressivo que é rápido para atacar. Caso ele sinta alguma presença hostil, todas as farpas de suas costas irão erguer-se de uma só vez. Suas picadas podem ser fatais.", "Pokémon broca.<br/> Ele usa sua cauda poderosa em batalha para esmagar, contrair e quebrar os ossos da presa.É reconhecido por sua pele dura como pedra e seu chifre estendido. Tenha cuidado com o chifre, pois contém veneno.",
        "Pokémon fada.<br/> A luz lunar que pode absorver com suas asas aparentemente lhe dá a capacidade de voar. Raramente é encontrado, vive em locais específicos. Costumam sair de seus esconderijos em noites de lua cheia para dançar.", " Pokémon fada.<br/> Um pokémon muito tímido, foge sempre que percebe estar sendo observado. Possui uma audição bem aguçada. Ele dá leves saltos para se locomover, permitindo-o passear sobre lagos em noites de luar.", "Pokémon raposa.<br/> Quando nasce, possui apenas um rabo. Ele vai se dividindo conforme for envelhecendo. Para fugir do perigo, finge estar debilitado e engana o adversário.", "Pokémon raposa.<br/> É extremamente vingativo. Dizem que cairá uma maldição de mil anos sobre aquele que puxar uma de suas caudas por brincadeira. Acredita-se que cada uma de suas nove caudas possui um poder místico especial.",
        "Pokémon balão.<br/> Seus grandes olhos são usados para encantar o inimigo. Depois, canta uma bela melodia que coloca o adversário para dormir. Ele pode inflar o corpo como um balão e sair flutuando.", "Pokémon balão.<br/> Sua pelagem é extremamente fina, densa e farta. A pele requintadamente agradável transmite uma imagem de luxo. Seu corpo é bastante flexível. Quando está com raiva, consegue inalar o ar repetidas vezes, inflando seu corpo cada vez mais.", "Pokémon morcego.<br/> Sua audição é bem apurada. Para identificar aquilo que estiver em seu caminho, Zubat solta ondas ultra-sônicas. Isso lhe permite voar com segurança mesmo em locais escuros. Ele formar colônias em locais permanentemente escuros.", "Pokémon morcego.<br/> Com os dentes bastante afiados, morde suas vítimas para sugar o sangue. Ele não irá parar de drenar a energia da vítima até estar satisfeito. Se chupa muito sangue, fica pesado e voa desajeitadamente.",
        "Pokémon erva daninha.<br/> Durante o dia costuma ficar enterrado no chão, deixando apenas as suas folhas expostas. Ele irá berrar caso alguém tente arrancá-lo de lá. Seu nome científico é “Oddium Wanderus”. À noite, diz-se que caminha cerca de 1.000 pés em suas duas raízes, semeando suas sementes.", " Pokémon erva daninha.<br/> O odor proveniente da flor de sua cabeça pode ser sentido à distância. Ele fede mais ainda quando se sente ameaçado. A baba que escorre de sua boca na verdade é um néctar.", "Pokémon flor.<br/> Quanto maiores forem as suas pétalas, mais tóxico será o pólen contido nelas. Elas são tão pesadas que é difícil de aguentar. Ao sacudir as pétalas, o ar ao seu redor fica amarelo.",
        "Pokémon cogumelo.<br/> Cogumelos parasitas crescem nas costas de Paras. Eles absorvem nutrientes deste hospedeiro. São altamente valorizados como remédios para prolongar a vida.", "Pokémon cogumelo.<br/> Parasect é controlado pelo cogumelo que cresceu em suas costas. Graças a ele, vive em locais úmidos e escuros. Ele solta esporos venenosos por onde passa.", "Pokémon inseto.<br/> Seus olhos grandes podem atuar como radares. Eles são compostos por diversos outros olhos menores. São ótimos para enxergar no escuro ou ver coisas minúsculas. Vive nas sombras de árvores altas onde se alimenta de insetos. É atraído pela luz à noite.", "Pokémon mariposa venenosa.<br/> Quando ele ataca, bate suas grandes asas escuras violentamente para espalhar seu pó venenoso por todos os lados. Se suas asas tiverem uma coloração mais clara, seu pó é paralisante.",
        "Pokémon toupeira.<br/> Passa a maior parte do tempo enterrado no subsolo. Seu método de escavação pode deixar um campo perfeito para o cultivo. Ele se alimenta das raízes das árvores.", " Pokémon toupeira.<br/> Dugtrio são realmente trigêmeos que surgiram de um corpo. Como resultado, cada trigêmeo pensa exatamente como os outros dois trigêmeos. Eles trabalham cooperativamente para escavar sem parar. Ele desencadeia terremotos gigantes cavando à 96 km abaixo da terra.", "Pokémon gato arisco.<br/> Meowth retira suas garras afiadas das patas para silenciosamente esgueirar-se furtivamente sem deixar nenhum rastro. Por alguma razão, este pokémon ama moedas brilhantes. Tudo que faz durante o dia é dormir.",
        "Pokémon gato elegante.<br/> Tem um temperamento vicioso. Cuidado se ele levantar a cauda para cima. É um sinal de que está prestes a atacar e morder. Embora seu pelo tenha muitos admiradores, é difícil criar como um animal de estimação por causa de sua mesquinhez.", "Pokémon pato.<br/> Oprimido por habilidades enigmáticas, ele sofre uma dor de cabeça constante. Quando sua dor de cabeça chega ao ápice, ele usa seus misteriosos poderes psíquicos para mandar para longe o que está o irritando.", "Pokémon pato.<br/> As patas dianteiras são palmadas, ajudando a torná-lo um ótimo nadador. Pode ser visto nadando elegantemente em lagos, etc. Muitas vezes é confundido com o monstro Kappa.",
        "Pokémon macaco porco.<br/> Vive em colônias nas copas das árvores. Se você enfurecer um deles, vai ter que lidar com um bando furioso de Mankey. Não é seguro se aproximar dele quando está violento e furioso por nenhum motivo, pois quando isso acontece, ele não consegue distinguir amigos de inimigos.", " Pokémon macaco porco.<br/> É sempre escandalosamente furioso. Se ele o perseguir, rastreará tenazmente o alvo, não importa a distância. Ele para de ficar com raiva apenas quando ninguém mais está por perto. Ver esse momento é muito difícil.", "Pokémon cachorrinho.<br/> Um pokémon naturalmente leal, fiel e obediente. Ele permanece imóvel até receber ordem de seu treinador. Se ordenado, ele não hesitará em atacar inimigos maiores e mais fortes, porém seu senso de justiça impede que ele ataque imediatamente oponentes mais fracos e menores. Growlithes têm um excelente olfato. Uma vez que cheira qualquer coisa, estes pokémons não vão esquecer o cheiro, não importa o quê. Ele usa seu sentido olfativo avançado para determinar as emoções de outros seres vivos.",
        "Pokémon lendário.<br/> Este lendário pokémon é considerado magnífico. Muitas pessoas se encantam por sua enorme juba. Seu imponente latido transmite uma ideia de líder. Todos que ouvem não podem fazer nada além de se ajoelhar para sua majestade. Dizem que este pokémon corre a uma velocidade inacreditável.", "Pokémon girino.<br/>  Sua pele é tão fina que se você prestar bastante atenção você consegue enxergar seus órgãos internos. Tem dificuldade para andar com seus pés recém-crescidos e por isso ele tropeça frequentemente. Por isso, parece preferir nadar a caminhar.", "Pokémon girino.<br/> A espiral na sua barriga gira sutilmente. Olhar para essa espiral pode te deixar desde sonolento até, no máximo, hipnotizado. Suas duas pernas são bem desenvolvidas, logo ele não tropeça mais. Pode viver tranquilamente na terra, mas ele prefere viver na água.",
        "Pokémon girino.<br/> Poliwrath tem um corpo altamente desenvolvido e não importa o quão exaustivo é o trabalho, seus músculos nunca ficam cansados. É tão incansavelmente forte que ele pode nadar de um lado ao outro do Oceano Pacífico sem fazer muito esforço.", " Pokémon psíquico.<br/> Usar poderes psíquicos causa tanta tensão em seu cérebro que ele precisa dormir 18 horas por dia. Por essa razão, é difícil ver um Abra usando qualquer golpe diferente do Teleportar.", "Pokémon psíquico.<br/> Logo após evoluir seu poder mental aumenta deixando ele utilizar vários golpes psíquicos poderosos, porém que precisam de maior concentração. Uma teoria afirma que esse Pokémon se trata de um menino que não conseguia controlar seus poderes psíquicos e acabou se transformando em Kadabra",
        "Pokémon psíquico.<br/> Dizem que as colheres em suas mãos são frutos de seus poderes psíquicos. Seu cérebro é tão grande que dizem que é o pokémon mais inteligente que já existiu.", "Pokémon super poderoso.<br/> Todo o seu corpo é composto por músculos. Mesmo sendo do tamanho de uma criança humana, pode arremessar 100 adultos. Adora construir seus músculos. Ele treina em todos os estilos de artes marciais para se tornar ainda mais forte.", "Pokémon super poderoso.<br/> O poder ilimitado de Machoke é muito perigoso, por isso usa um cinto que suprime a sua energia. Usando esse poder, ele ajuda as pessoas com trabalhos pesados. Ele é muito procurado por pedreiros e engenheiros.", " Pokémon super poderoso.<br/> Seus quatro braços musculosos acertam seus inimigos com socos potentes e cortes em uma velocidade estonteante. Ele pode dar até mil socos em apenas dois segundos.",
        "Pokémon flor.<br/> Ele planta seus pés profundamente no subsolo para se reabastecer com água. Prefere ambientes quentes e úmidos. Ele rapidamente captura sua presa com suas vinhas.", "Pokémon papa-mosca.<br/> Um pokémon que parece ser uma planta para capturar presas desavisadas nocauteando-as com um pó venenoso. Os músculos de sua boca são bastante desenvolvidos. As partes folhosas atuam como cortadores para cortar carnes.Ele cospe veneno em pó para imobilizar o inimigo e depois finaliza com um spray de ácido.", "Pokémon papa-mosca.<br/> Ele tem uma “piscina” em sua boca com um fluido com cheiro de mel que é na verdade um ácido que digere qualquer coisa. O ácido que dissolveu muitas presas se torna mais doce, tornando ainda mais eficiente para atraí-las. Dizem que vivem em enormes colônias nas profundezas das selvas, embora ninguém jamais tenha retornado de lá.",
        "Pokémon água-viva.<br/> Seu corpo é praticamente composto de água. Ele dispara feixes estranhos de seus olhos que parecem cristais. Incontáveis pescadores são feridos por seu ferrão todo dia.", "Pokémon água-viva.<br/> Ele estende seus 80 tentáculos para formar redes de cerco venenoso que é difícil escapar. Seus tentáculos absorvem a água e esticam quase infinitamente para prender suas presas e inimigos.", "Pokémon rocha.<br/> Muitos vivem por trilhas das montanhas e permanecem semi-enterrados, mantendo um olho em escaladores. Essa atitude faz com que sejam confundidos por pedras na maioria das vezes.A sua forma redonda torna-o fácil de apanhar. Algumas pessoas os usaram para atirar umas nas outras em uma guerra de bolas de neve.", "Pokémon rocha.<br/> Ele caminha muito devagar, logo ele rola para se locomover. Ele não presta atenção em nenhum objeto que passa em seu caminho. Com uma natureza livre e indiferente, ele não se importaria se pedaços quebram enquanto ele desce montanhas.",
        "Pokémon megaton.<br/> Nem o dinamite pode explodir seu resistente corpo de pedra. Quando está rolando, nada pode pará-lo e ele não para por nada. Ele pode facilmente rolar por cima da lava sem se queimar ou afundar.", " Pokémon cavalo de fogo.<br/> Exímios corredores, eles sempre ganham corridas de velocidade. Porém se competir com um Ponyta bebê dificilmente irá perder. Um ponyta é muito fraco ao nascer. Mal consegue ficar em pé. Suas pernas ficam mais fortes conforme ele tropeça e cai enquanto tenta acompanhar seus pais.", "Pokémon cavalo de fogo.<br/> Com uma grande aceleração, ele alcança sua velocidade máxima, 67 m/s, em apenas 10 passos. Com a sua juba flamejante, ele corre como se fosse uma flecha. este pokémon irá perseguir qualquer coisa que se mova rápido na esperança de competir em uma corrida.",
        "Pokémon pateta.<br/> Apesar de lerdo, ele é muito habilidoso com sua cauda. Não sente dor se alguém morder sua cauda. Está sempre vagamente perdido em pensamentos, mas ninguém sabe no que está pensando. Ele pega a presa mergulhando a cauda na água à beira de um rio. Mas muitas vezes esquece o que está fazendo e passa dias inteiros vagando na beira da água.", " Pokémon caranguejo eremita.<br/> Quando um Shellder morde a cauda de Slowpoke ele se torna um lesado Slowbro, se o shellder é retirado durante uma batalha ele volta a ser um Slowpoke. Embora geralmente estúpido, parece ficar inspirado se o shellder em sua cauda morder.", "Pokémon imã.<br/> Ele usa ondas eletromagnéticas para flutuar, porém isso não impede que ele receba um enorme dano de golpes terrestres. As unidades em seus lados são ímãs extremamente poderosos. Eles geram magnetismo suficiente para atrair objetos de ferro a mais de 300 pés de distância.",
        "Pokémon imã.<br/> Algumas lendas dizem que ele é resultado de uma junção de três Magnemite unidos pelo magnetismo da Pedra do Trovão. Um grupo de Magneton pode causar uma tempestade magnética. Evolui ao entrar em contato com o magnetismo de certos lugares. Magneton emite uma poderosa força magnética que é fatal para instrumentos eletrônicos e de precisão. Por causa disso, dizem que algumas cidades alertam as pessoas para manter esse Pokémon dentro de uma Pokébola.", "Pokémon pato selvagem.<br/> Seu alho-poró o permite usar golpes como Furry Cutter, Poison Jab e Leaf Blade. Ele nunca vai a luta sem seu fiel toco de alho-poró. Ele só come seu alho-poró em casos de emergência e mesmo assim logo acha um substituto.", "Pokémon pássaros gêmeos.<br/> Os cérebros de sua cabeça compartilham emoções por telepatia. Eles também compartilham a fome e estão constantemente brigando entre si por comida. Um pássaro que compensa seu voo ruim com sua velocidade em solo.",
        "Pokémon pássaro triplo.<br/> Quando Doduo evolui, uma de suas cabeças se divide em duas. Essas duas cabeças compartilham as mesmas memórias. Ele pode correr até uns 18 m/s. Suas cabeças representam alegria, fúria e tristeza. Aparentemente, as cabeças não são as únicas partes do corpo que Dodrio tem três.", "Pokémon leão marinho.<br/> O chifre de sua cabeça é bastante duro, capaz de perfurar o mar congelado. Adora viver num clima frio. Não consegue andar bem em terra, porém é um ótimo nadador.", "Pokémon leão marinho.<br/> Armazena uma energia térmica em seu corpo. Mesmo num frio intenso permanece ileso, conseguindo nadar poderosamente em águas geladas. Consegue se camuflar bem na neve.", "Pokémon lodo.<br/> As plantas deixarão de nascer por onde passar. Enquanto caminha, pedaços de seu corpo podem ficar para trás, formando novos Grimers. Gosta de viver nos esgotos das cidades. Dizem que lodos expostos aos raios X da lua se transformam em grimers",
        "Pokémon lodo.<br/> Um pokémon sujo e feito de lama. É tão tóxico que mesmo suas pegadas contém veneno. Seu cheiro é tão horrível que pode causar desmaios. Prefere habitats quentes e úmidos. No verão, as substâncias tóxicas em seu corpo se intensificam, fazendo com que muks cheirem como lixo pútrido de cozinha.", "Pokémon bivalve.<br/> Sua concha dura repele qualquer tipo de ataque. É vulnerável somente quando sua concha é aberta. Grãos de areia que caem em sua concha podem se tornar pérolas com os fluídos de seu corpo. À noite, cava um buraco no fundo do mar com sua língua larga para fazer um lugar para dormir. Durante o sono, fecha a concha, mas deixa a língua para fora.", "Pokémon bivalve.<br/> Sua concha é tão dura quanto o diamante, ele a utiliza como forma de defesa. Ele agarra seus inimigos fechando a concha. Pode lançar vários espinhos a partir dela. Ninguém nunca viu como são suas entranhas.",
        "Pokémon gás.<br/> Seu corpo é todo feito de gás. Nunca irão surgir quando venta muito. Sua pele é venenosa e pode enfraquecer qualquer um que entrar em contato. Quase invisível, este pokémon gasoso encobre o alvo e o coloca para dormir sem aviso prévio.", "Pokémon gás.<br/> Consegue atravessar paredes e usar sua língua para paralisar os outros. Se você tropeçar do nada ou escutar um ruído quando ninguém está por perto, pode ser um haunter aprontando. Nas noites sem lua, Haunter procura alguém para amaldiçoar, então é melhor não sair andando por aí.", "Pokémon sombra.<br/> Em noites de lua cheia, este pokémon sai para imitar as sombras das pessoas e assustá-las. Caso você sinta um calafrio repentino, quer dizer que há um Gengar por perto. Ele se esconde na sombra da presa para roubar a vida de seu alvo.", "Pokémon cobra rochosa.<br/> Conforme vai crescendo, seu corpo rochoso vai ficando cada vez mais duro. Ele consegue cavar no solo em uma alta velocidade, girando e contorcendo as pedras de seu corpo para isso. Há um ímã em seu cérebro que impede que um onix perca a direção durante o túnel.",
        "Pokémon hipnótico.<br/> Coloca seus oponentes para dormir e em seguida come os seus sonhos. Algumas vezes acaba ficando doente por comer sonhos ruins. Se o seu nariz coçar enquanto você dorme, é um sinal claro de que um drowzee está parado acima do seu travesseiro e tentando engolir seu sonho pelas narinas.", "Pokémon hipnótico.<br/> Caso você encontre um desses, evite o contato olho a olho. Ele vai tentar te fazer dormir usando seu pêndulo. Seus poderes hipnóticos são bastante desenvolvidos. Houve um incidente em que ele raptou uma criança que hipnotizou.", "Pokémon caranguejo do rio.<br/> Suas pinças, além de serem uma arma poderosa, servem de equilíbrio para andar de lado. Se uma pinça cair, irá nascer uma nova e mais resistente. Ele fica espumando a boca quando se sente ameaçado.", "Pokémon pinça.<br/> Sua garra cresceu maciçamente e tão duro quanto o aço. Porém, por ser muito pesada, é difícil manuseá-la. Ela tem uma potência de dez mil cavalos.",
        "Pokémon bola.<br/> Normalmente encontrados em usinas de energia. Muitas vezes é confundido com uma pokébola e acaba dando choque em pessoas. Ele pode até explodir em alguns casos. Voltorb foi visto pela primeira vez em uma empresa que fabrica Pokébolas. A ligação entre esse avistamento e o fato de que este Pokémon se parece muito com uma Pokébola permanece um mistério.", " Pokémon bola.<br/> Ele armazena uma quantidade abundante de energia elétrica dentro de seu corpo. Mesmo um pequeno choque pode fazê-lo explodir. São muito usados como geradores de energia em usinas de força. É temido, com o apelido de 'A bola Bomba'.", "Pokémon ovo.<br/> Este pokémon é formado por seis ovos que se comunicam entre si por telepatia. Quando aparecem cada vez mais rachaduras nos ovos, é sinal que Exeggcute está para evoluir. Suas cascas são muito duráveis. Mesmo que quebrem, podem sobreviver sem derramar seu conteúdo.",
        "Pokémon coco.<br/> Exeggutor pode ter de 3 a 6 cabeças, dependendo do ambiente onde vive. Apesar de pensarem independentemente, suas cabeças nunca vão brigar. Se uma de suas cabeças crescer muito, ela cai e se torna um Exeggcute.", "Pokémon solitário.<br/> Sua cabeça é coberta pelo crânio de sua falecida mãe. Ele chora sempre que se lembra de sua mãe. As marcas desse crânio foram causadas pelas lágrimas de Cubone que escorreram.", " Pokémon guarda ossos.<br/> Este pokémon guarda ossos desde que nasceu. Possui uma grande habilidade para usá-los como armas. Manda mensagens para outros de sua espécie dando marretadas em pedras com o osso que carrega.", "Pokémon chutador.<br/> Suas pernas podem se esticar para o dobro do tamanho. Quando está com pressa, pode correr dando passos bem largos. Consegue dar vários chutes consecutivos sem sair do lugar. Pode aprender qualquer tipo de chute.", "Pokémon socador.<br/> Seus socos são tão velozes que rasgam o ar. Possui um espírito indomável de nunca desistir perante as adversidades. Precisa de um tempo para descansar a cada 3 minutos de batalha. Pode aprender qualquer tipo de soco.",
        "Pokémon lambedor.<br/> Sua língua tem mais de dois metros de comprimento. Quando ele a estica por completo, sua cauda balança. Acredita-se que língua e cauda estão de alguma forma conectados.", "Pokémon gás venenoso.<br/> Este pokémon consegue soltar gases explosivos. O seu gás venenoso é mais leve que o ar, o que mantém ele flutuando. Seu gás é ainda mais tóxico em ambientes quentes.", "Pokémon gás venenoso.<br/> Onde dois tipos de gases venenosos se encontram, dois koffings podem se fundir em um weezing durante muitos anos. Quando uma cabeça infla, a outra murcha. Ele mistura substâncias tóxicas em seu corpo.", "Pokémon espinho.<br/> Ele é lento e tem dificuldade para virar o corpo para o lado devido às suas patas curtas. Seus ossos são mil vezes mais duros do que os dos homens. Não é muito cauteloso, podendo destruir o que estiver em seu caminho.", "Pokémon broca.<br/> Seu cérebro se desenvolveu depois que passou a andar sobre duas patas. A pele grossa que possui pode protegê-lo ainda que esteja sob o magma. Seu chifre pode girar como uma broca, sendo capaz de quebrar até mesmo diamantes.",
        "Pokémon ovo.<br/> Sendo raros e de difícil captura, é dito que ela traz felicidade para o treinador que a pega. Seus ovos são nutritivos e recomendados para uma alimentação balanceada. Anda com cautela para evitar ter seu ovo quebrado.", "Pokémon vinhas.<br/> Seu corpo é coberto por um emaranhado de vinhas. Elas são compostas por finos fios de cabelo. Sua tática é enrolar os adversários com suas vinhas.", "Pokémon materno.<br/> Este pokémon guarda seus filhotes em sua bolsa marsupial. Ela fará de tudo para proteger o bebê, ainda que judiada em batalha. Raramente o bebê sai da bolsa, eles permanecem lá até completarem 3 anos de idade.", "Pokémon dragão.<br/> Ele faz o seu ninho entre corais. Quando está assustado, esguicha um jato de tinta. Se cair em uma correnteza, enrola sua cauda numa pedra ou planta para não ser levado. Consegue nadar de costas com a sua nadadeira dorsal.",
        "Pokémon dragão.<br/> A barriga dele possui grossas cerdas que são venenosas, responsáveis por fornecer-lhe proteção. Geralmente são os machos da espécie que cuidam dos filhotes. Os ossos e nadadeiras deste pokémon são ingredientes de uma medicina caseira.", "Pokémon peixe dourado.<br/> Em época de desova, eles são vistos nadando em rios e cachoeiras em grandes grupos. São ótimos e belos nadadores. Se colocados em um grande aquário de vidros resistentes, irão quebrá-lo com a força de seu chifre para escapar.", "Pokémon peixe dourado.<br/> Com o seu poderoso chifre, faz buracos nas pedras dos leitos dos rios para fazer o ninho de seus ovos. Ele dá a própria vida para defender seus ovos.", "Pokémon forma de estrela.<br/> Mesmo que seus membros sejam cortados, Staryu conseguirá regenerá-los desde que a jóia no centro de seu corpo não tenha sido danificada. Quando está muito fraco, a jóia de Staryu começa a piscar.",
        "Pokémon misterioso.<br/> Seu corpo se desenvolve num formato geometricamente simétrico. Ela se movimenta nas águas, girando o corpo como uma hélice. A jóia no núcleo de seu corpo brilha nas sete cores do arco-íris.", "Pokémon barreira.<br/> Ele cria paredes invisíveis vibrando os seus dedos minuciosamente para parar as moléculas no ar. Seus gestos de mímico acabam enganando os outros que pensam que não há nada no caminho.", "Pokémon louva-a-deus.<br/> As foices afiadas em seus braços ficam ainda mais afiadas quando cortam objetos duros. Ele é tão rápido e veloz quanto um ninja. Ele se esconde pelo gramado, pois a cor de seu corpo ajuda a camuflá-lo.", "Pokémon forma humana.<br/> Ela fala uma linguagem semelhante à dos seres humanos. No entanto, ela parece usar a dança para se comunicar. Ela rebola os quadris enquanto anda.",
        "Pokémon elétrico.<br/> O corpo dele descarrega energia constantemente. Ao chegar perto dele, os cabelos de uma pessoa irão se arrepiar. Electabuzz gosta de se alimentar da energia de usinas de força, causando grandes apagões nas cidades.", "Pokémon cuspidor de fogo.<br/> Magmar não gosta de lugares frios, por isso, sopra um fogo abrasador para tornar o ambiente adequado para si. Quando respira profundamente, emana ondas de calor de seu corpo. Vive próximo às bocas de vulcões, seu corpo resiste à lava.", "Pokémon besouro lucano.<br/> Pinsir possui grandes chifres com espinhos. Com eles, agarra seus adversários como uma pinça e os aperta. Também utiliza os chifres para cavar buracos onde dorme à noite. Além disso, Pinsir detesta o frio.", "Pokémon touro selvagem.<br/> É um pokémon de natureza violenta. Ele chicoteia a si mesmo usando seus três rabos para incentivá-lo a batalhar. Quando corre junto com a manada, não para até colidir com algo.",
        "Pokémon peixe.<br/> Dizem que este é um dos pokémons mais fracos que existem. Seu golpe de respingar água é simplesmente inútil. Tem dificuldade mesmo para nadar. Em raras ocasiões, consegue dar grandes saltos.", "Pokémon atroz.<br/> Uma vez que fique irado, não irá se acalmar até ter destruído tudo que estiver pelo seu caminho. Ele tem um instinto agressivo. É conhecido por ter incendiado cidades com seus raios.", "Pokémon transporte.<br/> Adora atravessar os mares carregando pessoas e pokémons em suas costas. Lapras é capaz de entender a fala humana. Ele é gentil e tem o hábito de cantar graciosamente quando está de bom humor.", "Pokémon transformação.<br/> Tem a capacidade de reconstituir sua estrutura celular para se transformar em qualquer coisa que esteja vendo. Se tentar se transformar em algo baseando-se no que tem na memória, acaba errando vários detalhes. Dizem que é resultado de uma clonagem de Mew que falhou.",
        "Pokémon evolução.<br/> Por possuir uma composição genética irregular, eevee pode evoluir seu corpo para as mais diversificadas formas, dependendo daquilo que o cerca. Por esta razão, consegue adaptar-se facilmente a qualquer tipo de ambiente.", "Pokémon jato de bolhas.<br/> Sua composição celular é semelhante às moléculas de água. Quando suas barbatanas começam a vibrar, é sinal que uma chuva está para cair. Ele pode fundir o seu corpo na água, ficando completamente invisível.", " Pokémon relâmpago.<br/> Ele pode descarregar uma força de dez mil volts. Os pelos de seu corpo são tão espetados quanto uma agulha afiada. Ele arruma sua pelugem com eletricidade.", "Pokémon chama.<br/> As chamas que ele dispara são tão quentes que podem chegar a mais de 1600ºC. Sua temperatura corporal ultrapassa os 800ºC. Ele afofa sua pelugem com a temperatura do corpo.",
        "Pokémon virtual.<br/> Este pokémon artificial foi criado por tecnologias científicas avançadas. Ele pode mover-se livremente no ciberespaço. Está programado apenas com emoções básicas e não precisa respirar para sobreviver.", "Pokémon espiral.<br/> Este pokémon nadava pelos mares torcendo os seus dez tentáculos desde os tempos antigos. Ele usa o ar armazenado em sua concha para emergir e submergir na água. Eles são revividos de fósseis por cientistas.", "Pokémon espiral.<br/> Acredita-se que este pokémon tenha se extinguido por sua concha espiral ter crescido muito e ficado pesado demais para suportar. Ele agarra suas vítimas com seus tentáculos e as tritura com seus dentes.", "Pokémon crustáceo. Acredita-se que ele tenha habitado praias 300 anos atrás. Seu corpo é protegido por um duro casco. Ele também possui olhos nesse casco. Já foram encontrados alguns exemplares de seu fóssil ainda vivos.",
        "Pokémon crustáceo.<br/> Estudos dizem que esse pokémon deixou os mares porque suas presas adaptaram-se a viver em terra firme. Ele ataca suas presas cortando-as com as lâminas de suas garras afiadas.", "Pokémon fóssil.<br/> O extinto pokémon percorria os céus na era dos dinossauros. Seus dentes se movem como uma serra ao mastigar. Cientistas conseguem ressuscitá-lo a partir de um material genético de dinossauro extraído de um velho âmbar.", "Pokémon dorminhoco.<br/> Se torna muito preguiçoso quando está de estômago cheio. Sua barriga se torna elástica, fazendo pular qualquer coisa que cair sobre ela. Seu estômago pode digerir qualquer tipo de veneno. Dorme por um longo período após comer bastante.", " Pokémon congelante.<br/> Pode criar nevascas congelando a umidade do ar. Dizem que suas asas são feitas de gelo. Com uma cauda longa e brilhante, sua forma de voar é magnífica. Ele aparece para pessoas perdidas em montanhas congeladas.",
        "Pokémon eletrizante.<br/> É dito que esse pokémon vive em nuvens de trovão. Ele consegue controlar livremente os relâmpagos. Ganha forças quando é atingido por um raio. Costuma soltar alguns estrondos enquanto voa.", "Pokémon flamejante.<br/> A aparição de moltres indica a chegada da primavera. Quando ele é ferido, mergulha seu corpo no magma de um vulcão para queimar e curar o seu corpo. Atletas carregam uma tocha com sua chama em algumas ligas pokémon.", "Pokémon dragão.<br/> É conhecido como 'pokémon miragem' pois poucos já o viram. Ele troca de pele continuamente e fica cada vez maior. Ele faz isso porque sua energia vital aumenta constantemente, atingindo níveis incontroláveis.", "Pokémon dragão.<br/> Se o seu corpo adquire uma aura, o tempo muda instantaneamente. As jóias cristalinas que possui dão a ele o poder de controlar o clima. Diz-se que vive em mares e lagos, mas também é visto voando.",
        "Pokémon dragão.<br/> Ele constrói sua casa em algum lugar do oceano. O formato de seu corpo permite que consiga voar tranquilamente sobre mares agitados. Ele ajuda os navios a encontrar terra firme em tempestades. Ele é capaz de dar a volta ao mundo em 16 horas.", "Pokémon genético.<br/> Um pokémon que foi clonado geneticamente de Mew. O poder científico dos humanos não conseguiu dar a ele um coração compassivo. Geralmente ele permanece imóvel para conservar sua energia, de forma que possa liberar seu poder total em batalha.", "Pokémon nova espécie.<br/> Se mostra apenas para pessoas de coração puro. Seu DNA contém códigos genéticos de todos os pokémons. Como é capaz de aprender qualquer tipo de golpe, muitos cientistas acreditam que ele é o antepassado de todos os pokémons."]
    //Array de audio descrição
    const audDesc = ['Audio/Descricoes/1.mp3', 'Audio/Descricoes/2.mp3', 'Audio/Descricoes/3.mp3', 'Audio/Descricoes/4.mp3', 'Audio/Descricoes/5.mp3', 'Audio/Descricoes/6.mp3', 'Audio/Descricoes/7.mp3', 'Audio/Descricoes/8.mp3', 'Audio/Descricoes/9.mp3', 'Audio/Descricoes/10.mp3', 'Audio/Descricoes/11.mp3', 'Audio/Descricoes/12.mp3', 'Audio/Descricoes/13.mp3', 'Audio/Descricoes/14.mp3', 'Audio/Descricoes/15.mp3', 'Audio/Descricoes/16.mp3', 'Audio/Descricoes/17.mp3', 'Audio/Descricoes/18.mp3', 'Audio/Descricoes/19.mp3', 'Audio/Descricoes/20.mp3',
        'Audio/Descricoes/21.mp3', 'Audio/Descricoes/22.mp3', 'Audio/Descricoes/23.mp3', 'Audio/Descricoes/24.mp3', 'Audio/Descricoes/25.mp3', 'Audio/Descricoes/26.mp3', 'Audio/Descricoes/27.mp3', 'Audio/Descricoes/28.mp3', 'Audio/Descricoes/29.mp3', 'Audio/Descricoes/30.mp3', 'Audio/Descricoes/31.mp3', 'Audio/Descricoes/32.mp3', 'Audio/Descricoes/33.mp3', 'Audio/Descricoes/34.mp3', 'Audio/Descricoes/35.mp3', 'Audio/Descricoes/36.mp3', 'Audio/Descricoes/37.mp3', 'Audio/Descricoes/38.mp3', 'Audio/Descricoes/39.mp3', 'Audio/Descricoes/40.mp3', 'Audio/Descricoes/41.mp3',
        'Audio/Descricoes/42.mp3', 'Audio/Descricoes/43.mp3', 'Audio/Descricoes/44.mp3', 'Audio/Descricoes/45.mp3', 'Audio/Descricoes/46.mp3', 'Audio/Descricoes/47.mp3', 'Audio/Descricoes/48.mp3', 'Audio/Descricoes/49.mp3', 'Audio/Descricoes/50.mp3', 'Audio/Descricoes/51.mp3', 'Audio/Descricoes/52.mp3', 'Audio/Descricoes/53.mp3', 'Audio/Descricoes/54.mp3', 'Audio/Descricoes/55.mp3', 'Audio/Descricoes/56.mp3', 'Audio/Descricoes/57.mp3', 'Audio/Descricoes/58.mp3', 'Audio/Descricoes/59.mp3', 'Audio/Descricoes/60.mp3', 'Audio/Descricoes/61.mp3',
        'Audio/Descricoes/62.mp3', 'Audio/Descricoes/63.mp3', 'Audio/Descricoes/64.mp3', 'Audio/Descricoes/65.mp3', 'Audio/Descricoes/66.mp3', 'Audio/Descricoes/67.mp3', 'Audio/Descricoes/68.mp3', 'Audio/Descricoes/69.mp3', 'Audio/Descricoes/70.mp3', 'Audio/Descricoes/71.mp3', 'Audio/Descricoes/72.mp3', 'Audio/Descricoes/73.mp3', 'Audio/Descricoes/74.mp3', 'Audio/Descricoes/75.mp3', 'Audio/Descricoes/76.mp3', 'Audio/Descricoes/77.mp3', 'Audio/Descricoes/78.mp3', 'Audio/Descricoes/79.mp3', 'Audio/Descricoes/80.mp3', 'Audio/Descricoes/81.mp3',
        'Audio/Descricoes/82.mp3', 'Audio/Descricoes/83.mp3', 'Audio/Descricoes/84.mp3', 'Audio/Descricoes/85.mp3', 'Audio/Descricoes/86.mp3', 'Audio/Descricoes/87.mp3', 'Audio/Descricoes/88.mp3', 'Audio/Descricoes/89.mp3', 'Audio/Descricoes/90.mp3', 'Audio/Descricoes/91.mp3', 'Audio/Descricoes/92.mp3', 'Audio/Descricoes/93.mp3', 'Audio/Descricoes/94.mp3', 'Audio/Descricoes/95.mp3', 'Audio/Descricoes/96.mp3', 'Audio/Descricoes/97.mp3', 'Audio/Descricoes/98.mp3', 'Audio/Descricoes/99.mp3', 'Audio/Descricoes/100.mp3', 'Audio/Descricoes/101.mp3',
        'Audio/Descricoes/102.mp3', 'Audio/Descricoes/103.mp3', 'Audio/Descricoes/104.mp3', 'Audio/Descricoes/105.mp3', 'Audio/Descricoes/106.mp3', 'Audio/Descricoes/107.mp3', 'Audio/Descricoes/108.mp3', 'Audio/Descricoes/109.mp3', 'Audio/Descricoes/110.mp3', 'Audio/Descricoes/111.mp3', 'Audio/Descricoes/112.mp3', 'Audio/Descricoes/113.mp3', 'Audio/Descricoes/114.mp3', 'Audio/Descricoes/115.mp3', 'Audio/Descricoes/116.mp3', 'Audio/Descricoes/117.mp3', 'Audio/Descricoes/118.mp3', 'Audio/Descricoes/119.mp3', 'Audio/Descricoes/120.mp3', 'Audio/Descricoes/121.mp3',
        'Audio/Descricoes/122.mp3', 'Audio/Descricoes/123.mp3', 'Audio/Descricoes/124.mp3', 'Audio/Descricoes/125.mp3', 'Audio/Descricoes/126.mp3', 'Audio/Descricoes/127.mp3', 'Audio/Descricoes/128.mp3', 'Audio/Descricoes/129.mp3', 'Audio/Descricoes/130.mp3', 'Audio/Descricoes/131.mp3', 'Audio/Descricoes/132.mp3', 'Audio/Descricoes/133.mp3', 'Audio/Descricoes/134.mp3', 'Audio/Descricoes/135.mp3', 'Audio/Descricoes/136.mp3', 'Audio/Descricoes/137.mp3', 'Audio/Descricoes/138.mp3', 'Audio/Descricoes/139.mp3', 'Audio/Descricoes/140.mp3', 'Audio/Descricoes/141.mp3',
        'Audio/Descricoes/142.mp3', 'Audio/Descricoes/143.mp3', 'Audio/Descricoes/144.mp3', 'Audio/Descricoes/145.mp3', 'Audio/Descricoes/146.mp3', 'Audio/Descricoes/147.mp3', 'Audio/Descricoes/148.mp3', 'Audio/Descricoes/149.mp3', 'Audio/Descricoes/150.mp3', 'Audio/Descricoes/151.mp3']
    //Array de cries
    const pokCrie = ["Audio/Cries/001.mp3", "Audio/Cries/002.mp3", "Audio/Cries/003.mp3", "Audio/Cries/004.mp3", "Audio/Cries/005.mp3", "Audio/Cries/006.mp3", "Audio/Cries/007.mp3", "Audio/Cries/008.mp3", "Audio/Cries/009.mp3", "Audio/Cries/010.mp3", "Audio/Cries/011.mp3", "Audio/Cries/012.mp3", "Audio/Cries/013.mp3", "Audio/Cries/014.mp3", "Audio/Cries/015.mp3", "Audio/Cries/016.mp3", "Audio/Cries/017.mp3", "Audio/Cries/018.mp3", "Audio/Cries/019.mp3", "Audio/Cries/020.mp3", "Audio/Cries/021.mp3", "Audio/Cries/022.mp3", "Audio/Cries/023.mp3", "Audio/Cries/024.mp3", "Audio/Cries/025.mp3", "Audio/Cries/026.mp3", "Audio/Cries/027.mp3", "Audio/Cries/028.mp3", "Audio/Cries/029.mp3", "Audio/Cries/030.mp3"
        , "Audio/Cries/031.mp3", "Audio/Cries/032.mp3", "Audio/Cries/033.mp3", "Audio/Cries/034.mp3", "Audio/Cries/035.mp3", "Audio/Cries/036.mp3", "Audio/Cries/037.mp3", "Audio/Cries/038.mp3", "Audio/Cries/039.mp3", "Audio/Cries/040.mp3", "Audio/Cries/041.mp3", "Audio/Cries/042.mp3", "Audio/Cries/043.mp3", "Audio/Cries/044.mp3", "Audio/Cries/045.mp3", "Audio/Cries/046.mp3", "Audio/Cries/047.mp3", "Audio/Cries/048.mp3", "Audio/Cries/049.mp3", "Audio/Cries/050.mp3"
        , "Audio/Cries/051.mp3", "Audio/Cries/052.mp3", "Audio/Cries/053.mp3", "Audio/Cries/054.mp3", "Audio/Cries/055.mp3", "Audio/Cries/056.mp3", "Audio/Cries/057.mp3", "Audio/Cries/058.mp3", "Audio/Cries/059.mp3", "Audio/Cries/060.mp3", "Audio/Cries/061.mp3", "Audio/Cries/062.mp3", "Audio/Cries/063.mp3", "Audio/Cries/064.mp3", "Audio/Cries/065.mp3", "Audio/Cries/066.mp3", "Audio/Cries/067.mp3", "Audio/Cries/068.mp3", "Audio/Cries/069.mp3", "Audio/Cries/070.mp3"
        , "Audio/Cries/071.mp3", "Audio/Cries/072.mp3", "Audio/Cries/073.mp3", "Audio/Cries/074.mp3", "Audio/Cries/075.mp3", "Audio/Cries/076.mp3", "Audio/Cries/077.mp3", "Audio/Cries/078.mp3", "Audio/Cries/079.mp3", "Audio/Cries/080.mp3", "Audio/Cries/081.mp3", "Audio/Cries/082.mp3", "Audio/Cries/083.mp3", "Audio/Cries/084.mp3", "Audio/Cries/085.mp3", "Audio/Cries/086.mp3", "Audio/Cries/087.mp3", "Audio/Cries/088.mp3", "Audio/Cries/089.mp3", "Audio/Cries/090.mp3"
        , "Audio/Cries/091.mp3", "Audio/Cries/092.mp3", "Audio/Cries/093.mp3", "Audio/Cries/094.mp3", "Audio/Cries/095.mp3", "Audio/Cries/096.mp3", "Audio/Cries/097.mp3", "Audio/Cries/098.mp3", "Audio/Cries/099.mp3", "Audio/Cries/100.mp3"
        , "Audio/Cries/101.mp3", "Audio/Cries/102.mp3", "Audio/Cries/103.mp3", "Audio/Cries/104.mp3", "Audio/Cries/105.mp3", "Audio/Cries/106.mp3", "Audio/Cries/107.mp3", "Audio/Cries/108.mp3", "Audio/Cries/109.mp3", "Audio/Cries/110.mp3", "Audio/Cries/111.mp3"
        , "Audio/Cries/112.mp3", "Audio/Cries/113.mp3", "Audio/Cries/114.mp3", "Audio/Cries/115.mp3", "Audio/Cries/116.mp3", "Audio/Cries/117.mp3", "Audio/Cries/118.mp3", "Audio/Cries/119.mp3", "Audio/Cries/120.mp3", "Audio/Cries/121.mp3"
        , "Audio/Cries/122.mp3", "Audio/Cries/123.mp3", "Audio/Cries/124.mp3", "Audio/Cries/125.mp3", "Audio/Cries/126.mp3", "Audio/Cries/127.mp3", "Audio/Cries/128.mp3", "Audio/Cries/129.mp3", "Audio/Cries/130.mp3", "Audio/Cries/131.mp3"
        , "Audio/Cries/132.mp3", "Audio/Cries/133.mp3", "Audio/Cries/134.mp3", "Audio/Cries/135.mp3", "Audio/Cries/136.mp3", "Audio/Cries/137.mp3", "Audio/Cries/138.mp3", "Audio/Cries/139.mp3", "Audio/Cries/140.mp3", "Audio/Cries/141.mp3"
        , "Audio/Cries/142.mp3", "Audio/Cries/143.mp3", "Audio/Cries/144.mp3", "Audio/Cries/145.mp3", "Audio/Cries/146.mp3", "Audio/Cries/147.mp3", "Audio/Cries/148.mp3", "Audio/Cries/149.mp3", "Audio/Cries/150.mp3", "Audio/Cries/151.mp3"];
    console.log(audDesc.length)
    // musicas
    const song = new Audio('Audio/Captura.mp3');
    const all = new Audio('Audio/botãoA.mp3');
    var butad = document.getElementById("ad");
    //select
    const select = document.getElementById("pokemo");
    var quantCap = 0;
    pokName.forEach((name) => {
        option = new Option(name, pokName.indexOf(name) + 1);
        select.options[select.options.length] = option;
    });
    //configurações da tabela
    $("input[type=checkbox]").removeAttr("checked");
    $("#grupos").tabs();
    var activeTab = 0;
    $("#Addpokemon").hide();
    $("#main").click(function () {
        activeTab = $("#grupos").tabs("option", "active");
        if (activeTab >= 0 && activeTab <= 2) {
            $("#Addpokemon").hide();

        } else {

            $("#Addpokemon").show();
        }

    })
    $("#show").hide()
    $("#grupos ul").sortable({ axis: "x", items: "li:not(.grup)" });
    //fechar grupos
    $("#grupos").on("click", "span.ui-icon-close", function () {
        var index = $(this).closest("li").index();
        var ida = $("#main li:eq(" + index + ") a").attr("href");
        $(this).closest("li").slideUp(function () {
            $("#main li:eq(" + index + ")").remove();
            $(ida).remove();
            $("#grupos").tabs("refresh");
        })
        activeTab = $("#grupos").tabs("option", "active");
        if (activeTab - 1 == 2) {
            $("#Addpokemon").hide();

        } else {


        }

    })


    //funções para os checkboxes visto e capturado funcionarem
    //classe visto
    $("#grupos").on("click", ".visto", function () {
        $(this).closest("li").slideUp(function () {
            var index = $(this).index();
            var id = index + 1;
            if ((index + 1) < 10) {
                $("#vistos").append("<li id='viu" + (id) + "' value='" + (index + 1) + "'>00" + (index + 1) + "&nbsp&nbsp<img src='Images/pokemon/00" + (index + 1) + ".png'> ??? <input type='checkbox' class='captu'> Capturado</li>")
                $("#vistos li").sort(numOrdCres).appendTo('#vistos');
            } else if ((index + 1) == 10 || (index + 1) < 100) {
                $("#vistos").append("<li id='viu" + (id) + "' value='" + (index + 1) + "'>0" + (index + 1) + "&nbsp&nbsp<img src='Images/pokemon/0" + (index + 1) + ".png'> ??? <input type='checkbox' class='captu'> Capturado</li>")
                $("#vistos li").sort(numOrdCres).appendTo('#vistos');
            } else {
                $("#vistos").append("<li id='viu" + (id) + "' value='" + (index + 1) + "'>" + (index + 1) + "&nbsp&nbsp<img src='Images/pokemon/" + (index + 1) + ".png'> ??? <input type='checkbox' class='captu'> Capturado</li>")
                $("#vistos li").sort(numOrdCres).appendTo('#vistos');
            }
            //confirmar captura de um pokémon já visto.
            $("#viu" + id).on("click", ".captu", function () {
                song.play();
                song.volume = 0.5;
                $(this).closest("li").slideUp(function () {
                    var val = $(this).val();

                    if (val < 10) {
                        $("#capturados").append("<li id='peg" + (val) + "' value='" + (val) + "' class='peguei'> 00" + (val) + "&nbsp&nbsp<img src='Images/pokemon/00" + (val) + ".png'>" + pokName[val - 1] + "</li>");
                        $("#capturados li").sort(numOrdCres).appendTo('#capturados');

                    } else if (val == 10 || val < 100) {
                        $("#capturados").append("<li id='peg" + (val) + "' value='" + (val) + "' class='peguei'> 0" + (val) + "&nbsp&nbsp<img src='Images/pokemon/0" + (val) + ".png'>" + pokName[val - 1] + "</li>");
                        $("#capturados li").sort(numOrdCres).appendTo('#capturados');

                    } else {
                        $("#capturados").append("<li id='peg" + (val) + "' value='" + (val) + "' class='peguei'> " + (val) + "&nbsp&nbsp<img src='Images/pokemon/" + (val) + ".png'>" + pokName[val - 1] + "</li>");
                        $("#capturados li").sort(numOrdCres).appendTo('#capturados');

                    }
                    //certificado
                    quantCap++
                    certificado()
                    console.log(quantCap)
                    //abrir pokedex
                    $("#peg" + val).click(function () {
                        var valor = $(this).val();
                        troca(valor);
                        trocaAudio(valor)
                        trocarShiny(valor)
                        $("#grid").dialog({
                            width: 1000,
                            resizable: false, modal: true, draggable: false, show: {
                                effect: "fold",
                                duration: 350,
                            },
                            hide: {
                                effect: "clip",
                                duration: 290
                            },
                            close: function () {
                                descriaudio.pause();
                                descriaudio.currentTime = 0;
                                butad.src = 'Images/play.png'
                                tocando = false
                                $("#grito").click(function () {
                                    gri.play()
                                })
                            }
                        })
                    })

                })
            })
        })
    })
    //classe cap
    $("#grupos").on("click", ".cap", function () {
        song.play();
        song.volume = 0.5;
        $(this).closest("li").slideUp(function () {
            var index = $(this).index();
            var id = index + 1;
            if ((index + 1) < 10) {
                $("#capturados").append("<li id='peg" + (id) + "' value='" + (index + 1) + "' class='peguei'> 00" + (index + 1) + "&nbsp&nbsp<img src='Images/pokemon/00" + (index + 1) + ".png'>" + pokName[index] + "</li>");
                $("#capturados li").sort(numOrdCres).appendTo('#capturados');


            } else if ((index + 1) == 10 || (index + 1) < 100) {
                $("#capturados").append("<li id='peg" + (id) + "' value='" + (index + 1) + "' class='peguei'> 0" + (index + 1) + "&nbsp&nbsp<img src='Images/pokemon/0" + (index + 1) + ".png'>" + pokName[index] + "</li>");
                $("#capturados li").sort(numOrdCres).appendTo('#capturados');

            } else {
                $("#capturados").append("<li id='peg" + (id) + "' value='" + (index + 1) + "' class='peguei'> " + (index + 1) + "&nbsp&nbsp<img src='Images/pokemon/" + (index + 1) + ".png'>" + pokName[index] + "</li>");
                $("#capturados li").sort(numOrdCres).appendTo('#capturados');

            }
            //certificado
            quantCap++;
            certificado()
            console.log(quantCap)
            //abrir pokedex
            $("#peg" + id).click(function () {
                var valor = $(this).val();
                troca(valor);
                trocaAudio(valor)
                trocarShiny(valor)
                $("#grid").dialog({
                    width: 1000,
                    resizable: false, modal: true, draggable: false, show: {
                        effect: "fold",
                        duration: 350,
                    },
                    hide: {
                        effect: "clip",
                        duration: 290
                    },
                    close: function () {
                        descriaudio.pause();
                        descriaudio.currentTime = 0;
                        butad.src = 'Images/play.png'
                        tocando = false
                        $("#grito").click(function () {
                            gri.play()
                        })
                    }
                })


            })
        })
    })
    //configurando o select para o botão Addpokemon
    $("#pokemo").change(function () {
        console.log(select.selectedIndex)
        if (select.selectedIndex < 10) {
            $("#Sel img").replaceWith($("<img class='Selec' src='Images/pokemon/00" + select.selectedIndex + ".png'>"))
            $("#Sel p").replaceWith($("<p class='pik'> 00" + select.selectedIndex + "&nbsp&nbsp" + pokName[select.selectedIndex - 1] + "</p>"))
        } else if (select.selectedIndex == 10 || select.selectedIndex < 100) {
            $("#Sel img").replaceWith($("<img class='Selec' src='Images/pokemon/0" + select.selectedIndex + ".png'>"))
            $("#Sel p").replaceWith($("<p class='pik'> 0" + select.selectedIndex + "&nbsp&nbsp" + pokName[select.selectedIndex - 1] + "</p>"))
        } else {
            $("#Sel img").replaceWith($("<img class='Selec' src='Images/pokemon/" + select.selectedIndex + ".png'>"))
            $("#Sel p").replaceWith($("<p class='pik'> " + select.selectedIndex + "&nbsp&nbsp" + pokName[select.selectedIndex - 1] + "</p>"))
        }
    })
    //botão add pokemon
    $("#Addpokemon").click(function () {
        $("#pokemon-dilaog").dialog({
            width: 400, resizable: false, modal: true, draggable: false, show: {
                effect: "fold",
                duration: 350
            },
            hide: {
                effect: "clip",
                duration: 290
            }, buttons: {
                "Adicionar Pokémon": function () {
                    if (select.selectedIndex != 0) {
                        $("#grupos").tabs("refresh");
                        activeTab = $("#grupos").tabs("option", "active");
                        var titulo = $("#main > li:nth-child(" + (activeTab + 1) + ") >a").attr("href");
                        var numpo = select.selectedIndex;
                        if (numpo < 10) {
                            $(titulo).append("<li> 00" + numpo + "&nbsp&nbsp<img src='Images/pokemon/00" + numpo + ".png'>" + pokName[numpo - 1] + "</li>")
                        } else if (numpo == 10 || numpo < 100) {
                            $(titulo).append("<li> 0" + numpo + "&nbsp&nbsp<img src='Images/pokemon/0" + numpo + ".png'>" + pokName[numpo - 1] + "</li>")
                        } else {
                            $(titulo).append("<li> " + numpo + "&nbsp&nbsp<img src='Images/pokemon/" + numpo + ".png'>" + pokName[numpo - 1] + "</li>")
                        }
                        select.selectedIndex = 0;
                        $("#Sel img").replaceWith($("<img class='Selec' src='Images/MissingNo.png'>"))
                        $("#Sel p").replaceWith($("<p class='pik'>000 MissingNo</p>"))
                        $(this).dialog("close")
                    } else {
                        //fazer uma caixa de alerta de errro
                        $("#erpok-dialog").dialog({
                            width: 400, resizable: false, modal: true, draggable: false, show: {
                                effect: "fold",
                                duration: 290
                            },
                            hide: {
                                effect: "clip",
                                duration: 250
                            },
                            buttons: {
                                "Fechar": function () {
                                    $(this).dialog("close");
                                }
                            }
                        })
                    }
                },
                "Cancelar": function () {
                    select.selectedIndex = 0;
                    $("#Sel img").replaceWith($("<img class='Selec' src='Images/MissingNo.png'>"))
                    $("#Sel p").replaceWith($("<p class='pik'>000 MissingNo</p>"))
                    $(this).dialog("close")

                }
            }
        })
    })
    //botão add grupo
    $("#Addgrupo").click(function () {
        $("#grupo-dialog").dialog({
            width: 400, resizable: false, modal: true, draggable: false, show: {
                effect: "fold",
                duration: 350
            },
            hide: {
                effect: "clip",
                duration: 290
            }, buttons: {
                "Adicionar Grupo": function () {
                    var grupoNome = $("#novo-grupo").val();
                    if (grupoNome != "") {
                        var replaceName = grupoNome.split(" ").join("_");
                        $("<li class='sortable'><a href='#" + replaceName + "'>" + grupoNome + "</a><span class='ui-icon ui-icon-close'></span></li>").appendTo("#main");
                        $("<ol class='ols' id='" + replaceName + "'></ol>").appendTo("#grupos").sortable({ axis: "y", containment: "#grupos" });
                        $("#grupos").tabs("refresh");
                        var tabCount = $("#grupos .ui-tabs-nav li").lenght;
                        $("#grupos").tabs("option", "active", tabCount - 1);
                        $("#novo-grupo").val("")
                        $(this).dialog("close");
                    } else {
                        //fazer uma caixa de alerta de erro
                        $("#ergrup-dialog").dialog({
                            width: 250, resizable: false, modal: true, draggable: false, show: {
                                effect: "fold",
                                duration: 290
                            },
                            hide: {
                                effect: "clip",
                                duration: 250
                            },
                            buttons: {
                                "Fechar": function () {
                                    $(this).dialog("close");
                                }
                            }
                        })
                    }

                },
                "Cancelar": function () {
                    $("#novo-grupo").val("");
                    $(this).dialog("close");
                }

            }
        })
    })
    //função para mostrar o certificado de captura
    function certificado() {
        if (quantCap == 151) {
            all.play();
            $("#certpok-dialog").dialog({
                width: 600, resizable: false, modal: true, draggable: false, show: {
                    effect: "fold",
                    duration: 400
                },
                hide: {
                    effect: "clip",
                    duration: 390
                },
                buttons: {
                    "Fechar": function () {
                        quantCap = 0;

                        $(this).dialog("close")

                    }
                }
            })


        }
    }
    //função para ordenar as listas
    function numOrdCres(a, b) {
        return ($(b).val()) < ($(a).val()) ? 1 : -1;
    }
    function troca(a) {
        if (a < 10) {
            $(".gridimg").replaceWith($("<img class='gridimg' src='Images/pokemon/00" + (a) + ".png'>"))
            $(".gridp").replaceWith($("<p class='gridp'>00" + a + " " + pokName[a - 1] + "</p>"))
        } else if (a == 10 || a < 100) {
            $(".gridimg").replaceWith($("<img class='gridimg' src='Images/pokemon/0" + (a) + ".png'>"))
            $(".gridp").replaceWith($("<p class='gridp'>0" + a + " " + pokName[a - 1] + "</p>"))
        } else {
            $(".gridimg").replaceWith($("<img class='gridimg' src='Images/pokemon/" + (a) + ".png'>"))
            $(".gridp").replaceWith($("<p class='gridp'>" + a + " " + pokName[a - 1] + "</p>"))
        }
        $("#tip1").replaceWith($("<li id='tip1'>" + tipPri[a - 1] + "</li>"))
        if (tipSeg[a - 1] == "") {
            $("#tip2").replaceWith($("<li id='tip2'></li>"))
        } else {
            $("#tip2").replaceWith($("<li id='tip2'>" + tipSeg[a - 1] + "</li>"))
        }
        $("#altura").replaceWith($("<li id='altura'>Altura: " + pokAlt[a - 1] + "</li>"))
        $("#peso").replaceWith($("<li id='peso'>Peso: " + pokPeso[a - 1] + "</li>"))
        $("#descri p").replaceWith($("<p>" + pokDesc[a - 1] + "</p>"))


    }
    var gri = document.getElementById("crie");
    var descriaudio = document.getElementById("aduiodescricao")
    function trocaAudio(a) {
        gri.src = pokCrie[a - 1]
        descriaudio.src = audDesc[a - 1]
    }

    $("#grito").click(function () {
        gri.play()
    })
    var tocando = false

    $("#ad").click(function () {
       
        if (tocando == false) {
            descriaudio.play();
            butad.src = 'Images/pause.png'
            tocando = true
            $("#grito").off('click')
        } else if (tocando == true) {
            descriaudio.pause();
            descriaudio.currentTime = 0;
            butad.src = 'Images/play.png'
            tocando = false
            $("#grito").click(function () {
                gri.play()
            })
        }
        $("#aduiodescricao").on('ended', function () {
            butad.src = 'Images/play.png'
            tocando = false
            $("#grito").click(function () {
                gri.play()
            })
        })
    })
    function trocarShiny(a) {
        var shny = false
        $("#shiny").click(function () {
            if (shny == false) {
                $(".gridimg").replaceWith($("<img class='gridimg' src='Images/Shiny/" + a + ".png'>"))
                shny = true;
            } else if (shny == true) {
                if (a < 10) {
                    $(".gridimg").replaceWith($("<img class='gridimg' src='Images/pokemon/00" + (a) + ".png'>"))

                } else if (a == 10 || a < 100) {
                    $(".gridimg").replaceWith($("<img class='gridimg' src='Images/pokemon/0" + (a) + ".png'>"))

                } else {
                    $(".gridimg").replaceWith($("<img class='gridimg' src='Images/pokemon/" + (a) + ".png'>"))

                }
                shny = false
            }
        })
    }
    function avançar(a){
        a++;
    }
})


/**Lmebretes
 * Fazer array das audio descrições;
 * Fazer uma variavel para que os audios funcionem com os arrays;
 * Fazer caixa de dialogo da pokédex contendo informações de cada um dos pokémon;
 */