$(document).ready(function() {

    const mysteries = {
        joyful: [
            {
                title: "A Anunciação do Anjo a Maria",
                bibleText: "O anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem desposada com um homem chamado José, da casa de Davi; e o nome da virgem era Maria. Entrando o anjo onde ela estava, disse: “Alegra-te, cheia de graça, o Senhor está contigo!” Ela, porém, ao ouvir essa palavra, perturbou-se muito e pôs-se a pensar no que significaria essa saudação. O anjo disse-lhe: “Não temas, Maria! Encontraste graça junto de Deus. Eis que conceberás e darás à luz um filho, e tu o chamarás com o nome de Jesus. Ele será grande e será chamado Filho do Altíssimo; e o Senhor Deus lhe dará o trono de seu pai Davi; ele reinará para sempre sobre a casa de Jacó, e o seu reino não terá fim.” Maria perguntou ao anjo: “Como se fará isso, pois não conheço homem?” O anjo respondeu-lhe: “O Espírito Santo virá sobre ti, e o poder do Altíssimo te cobrirá com a sua sombra; por isso, aquele que vai nascer será chamado Santo, Filho de Deus. Também Isabel, tua parenta, concebeu um filho na sua velhice, e este já é o sexto mês daquela que era chamada estéril, porque para Deus nada é impossível.” Então, disse Maria: “Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra.” E o anjo retirou-se de junto dela.",
                bibleReference: "Lucas 1:26–38",
                prayer: "Rezemos para que, como Maria, tenhamos a coragem de dizer 'sim' à vontade de Deus em nossas vidas, confiando em Sua providência e amor."
            },
            {
                title: "A Visitação de Maria a Santa Isabel",
                bibleText: "Maria levantou-se e foi às pressas às montanhas, a uma cidade de Judá. Entrou na casa de Zacarias e saudou Isabel. Quando Isabel ouviu a saudação de Maria, a criança saltou no seu seio, e Isabel ficou cheia do Espírito Santo. Exclamou em alta voz: “Bendita és tu entre as mulheres e bendito é o fruto do teu ventre! Donde me vem esta honra de vir a mim a mãe do meu Senhor? Pois assim que a voz da tua saudação chegou aos meus ouvidos, a criança pulou de alegria no meu seio. Bem-aventurada aquela que acreditou, pois o que lhe foi dito da parte do Senhor será cumprido.” Então Maria disse: “A minha alma engrandece ao Senhor e o meu espírito se alegra em Deus, meu Salvador, porque olhou para a humildade de sua serva. De agora em diante todas as gerações me chamarão bem-aventurada, porque o Todo-poderoso fez em mim maravilhas, santo é o seu nome.",
                bibleReference: "Lucas 1:39-49",
                prayer: "Rezemos para que, como Maria, sejamos portadores da alegria de Cristo aos outros, visitando e servindo aos necessitados com caridade."
            },
            {
                title: "O Nascimento de Jesus em Belém",
                bibleText: "Naqueles dias, saiu um decreto da parte de César Augusto, ordenando o recenseamento de todo o império. Este foi o primeiro recenseamento realizado quando Quirino era governador da Síria. Todos iam alistar-se, cada um na sua cidade. José também subiu da Galileia, da cidade de Nazaré, para a Judeia, à cidade de Davi chamada Belém, porque era da casa e da linhagem de Davi, a fim de alistar-se com Maria, sua esposa, que estava grávida. Enquanto estavam ali, completaram-se os dias dela. E deu à luz o seu filho primogênito, envolveu-o em panos e deitou-o numa manjedoura, porque não havia lugar para eles na estalagem.",
                bibleReference: "Lucas 2:1–7",
                prayer: "Rezemos para que, como Jesus, sejamos humildes e simples, encontrando Deus na simplicidade e na pobreza de coração."
            },
            {
                title: "A Apresentação de Jesus no Templo",
                bibleText: "Quando se completaram os dias da purificação, segundo a lei de Moisés, levaram Jesus a Jerusalém para apresentá-lo ao Senhor, conforme está escrito na lei do Senhor: “Todo primogênito do sexo masculino será consagrado ao Senhor”; e para oferecer em sacrifício um par de pombas ou dois pombinhos, como está prescrito na lei do Senhor.",
                bibleReference: "Lucas 2:22–24",
                prayer: "Rezemos para que, como Maria e José, ofereçamos tudo a Deus com gratidão e obediência, reconhecendo que tudo vem d'Ele."
            },
            {
                title: "O Encontro de Jesus no Templo",
                bibleText: "Os pais de Jesus iam todos os anos a Jerusalém, à festa da Páscoa. Quando ele atingiu doze anos, subiram a Jerusalém, segundo o costume da festa. Terminados os dias, quando voltavam, ficou o menino Jesus em Jerusalém, sem que seus pais o percebessem. Pensando que estivesse na caravana, caminharam o caminho de um dia e o procuravam entre parentes e conhecidos. Mas, não o encontrando, voltaram a Jerusalém à sua procura. Três dias depois, encontraram-no no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam maravilhados com sua inteligência e suas respostas. Ao vê-lo, seus pais ficaram admirados, e sua mãe lhe disse: “Filho, por que agiste assim conosco? Olha, teu pai e eu andávamos aflitos à tua procura.” Ele lhes respondeu: “Por que me procuráveis? Não sabíeis que devo estar na casa de meu Pai?” Eles, porém, não compreenderam a palavra que lhes disse. Então desceu com eles, voltou para Nazaré e lhes era submisso. Sua mãe guardava todas essas coisas em seu coração. E Jesus crescia em sabedoria, estatura e graça diante de Deus e dos homens.",
                bibleReference: "Lucas 2:41–52",
                prayer: "Rezemos para que, como Jesus, cresçamos em sabedoria e graça, buscando sempre a vontade do Pai e dedicando-nos ao estudo da Palavra de Deus."
            }
        ],
        sorrowful: [
            {
                title: "A Agonia de Jesus no Horto das Oliveiras",
                bibleText: "E, posto em agonia, orava mais intensamente. E o seu suor tornou-se como gotas de sangue caindo sobre a terra.",
                bibleReference: "Lucas 22:44",
                prayer: "Rezemos para que, como Jesus, tenhamos a força de aceitar os sofrimentos da vida com paciência e confiança na vontade do Pai."
            },
            {
                title: "A Flagelação de Jesus",
                bibleText: "Então Pilatos tomou Jesus e mandou açoitá-lo. Os soldados teceram uma coroa de espinhos e puseram-na na sua cabeça.",
                bibleReference: "João 19:1-2",
                prayer: "Rezemos para que tenhamos a coragem de suportar as provações e perseguições por amor a Cristo, oferecendo nossos sofrimentos pela conversão dos pecadores."
            },
            {
                title: "A Coroação de Espinhos",
                bibleText: "E, tecendo uma coroa de espinhos, puseram-lha na cabeça, e na mão direita uma cana; e, ajoelhando diante dele, o escarneciam.",
                bibleReference: "Mateus 27:29",
                prayer: "Rezemos para que, como Jesus, tenhamos a humildade de aceitar as humilhações e ofensas, oferecendo-as pela salvação das almas."
            },
            {
                title: "Jesus Carrega a Cruz",
                bibleText: "E, obrigando um certo Simão, cireneu, pai de Alexandre e de Rufo, que por ali passava, vindo do campo, a que lhe levasse a cruz.",
                bibleReference: "Marcos 15:21",
                prayer: "Rezemos para que tenhamos a força de carregar nossas cruzes diárias com amor e paciência, ajudando também os outros a carregar suas dificuldades."
            },
            {
                title: "A Crucificação e Morte de Jesus",
                bibleText: "E, clamando Jesus com grande voz, disse: Pai, nas tuas mãos entrego o meu espírito. E, havendo dito isso, expirou.",
                bibleReference: "Lucas 23:46",
                prayer: "Rezemos para que, como Jesus, tenhamos a coragem de entregar nossa vida completamente a Deus, confiando em Sua misericórdia e amor."
            }
        ],
        glorious: [
            {
                title: "A Ressurreição de Jesus",
                bibleText: "No primeiro dia da semana, de manhã bem cedo, as mulheres foram ao sepulcro levando os perfumes que haviam preparado. Encontraram a pedra removida, mas não acharam o corpo do Senhor Jesus. Enquanto estavam perplexas, dois homens com vestes resplandecentes lhes disseram: 'Por que buscais entre os mortos aquele que vive? Não está aqui, mas ressuscitou. Lembrai-vos de como vos falou, estando ainda na Galileia.'",
                bibleReference: "Lucas 24:1-6",
                prayer: "Rezemos para que, como Jesus ressuscitado, tenhamos a esperança da vida eterna e a alegria de anunciar a Boa Nova da salvação."
            },
            {
                title: "A Ascensão de Jesus ao Céu",
                bibleText: "Jesus disse aos discípulos que era necessário que se cumprisse tudo o que estava escrito sobre Ele na Lei de Moisés, nos Profetas e nos Salmos. Então abriu o entendimento deles para compreenderem as Escrituras, explicando que o Cristo devia padecer, ressuscitar ao terceiro dia e que em Seu nome se pregaria o arrependimento e o perdão dos pecados a todas as nações. E acrescentou: 'Vós sois testemunhas destas coisas. Eu envio sobre vós a promessa de meu Pai; permanecei, pois, na cidade até que sejais revestidos de poder do alto.' Então os levou até Betânia e, levantando as mãos, os abençoou. Enquanto os abençoava, afastou-se deles e foi elevado ao céu. Eles, depois de O adorarem, voltaram para Jerusalém com grande alegria e estavam sempre no templo, louvando a Deus.",
                bibleReference: "Lucas 24:44-53",
                prayer: "Rezemos para que, como os apóstolos, sejamos testemunhas de Cristo no mundo, anunciando Sua mensagem de amor e salvação."
            },
            {
                title: "A Descida do Espírito Santo",
                bibleText: "Ao cumprir-se o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um som, como de um vento impetuoso, e encheu toda a casa onde estavam sentados. E apareceram distribuídas entre eles línguas como de fogo, e pousou uma sobre cada um deles. Todos ficaram cheios do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito lhes concedia.",
                bibleReference: "Atos 2:1-4",
                prayer: "Rezemos para que o Espírito Santo nos encha com Seus dons e frutos, guiando-nos em toda verdade e santidade."
            },
            {
                title: "A Assunção de Maria ao Céu",
                bibleText: "A minha alma engrandece ao Senhor, e o meu espírito se alegra em Deus, meu Salvador, porque atentou na humildade da sua serva. Pois eis que, desde agora, todas as gerações me chamarão bem-aventurada.",
                bibleReference: "Lucas 1:46-48",
                prayer: "Rezemos para que, como Maria, tenhamos a graça de ser elevados ao céu, corpo e alma, para viver eternamente com Deus."
            },
            {
                title: "A Coroação de Maria como Rainha do Céu",
                bibleText: "Apareceu no céu um grande sinal: uma mulher vestida do sol, com a lua debaixo dos pés, e uma coroa de doze estrelas sobre a cabeça. Estava grávida e gritava com as dores de parto, sofrendo tormentos para dar à luz. ⁵ E deu à luz um filho homem que há de reger todas as nações com cetro de ferro; e o seu filho foi arrebatado para Deus e para o seu trono",
                bibleReference: "Apocalipse 12:1-2, 12:5",
                prayer: "Rezemos para que, como Maria, sejamos coroados com a glória eterna, participando da vitória de Cristo sobre o pecado e a morte."
            }
        ],
        luminous: [
            {
                title: "O Batismo de Jesus no Jordão",
                bibleText: "E aconteceu que, como todo o povo se batizava, sendo batizado também Jesus, orando ele, o céu se abriu.",
                bibleReference: "Lucas 3:21",
                prayer: "Rezemos para que, como Jesus, sejamos batizados no Espírito Santo e vivamos como filhos amados de Deus, cumprindo Sua vontade."
            },
            {
                title: "As Bodas de Caná",
                bibleText: "Sua mãe disse aos serventes: Fazei tudo quanto ele vos disser.",
                bibleReference: "João 2:5",
                prayer: "Rezemos para que, como Maria, tenhamos a confiança de interceder pelos outros e a obediência de fazer tudo o que Jesus nos pedir."
            },
            {
                title: "A Proclamação do Reino de Deus",
                bibleText: "O tempo está cumprido, e o reino de Deus está próximo. Arrependei-vos e crede no evangelho.",
                bibleReference: "Marcos 1:15",
                prayer: "Rezemos para que, como Jesus, sejamos anunciadores do Reino de Deus, chamando todos ao arrependimento e à conversão."
            },
            {
                title: "A Transfiguração de Jesus",
                bibleText: "E foi transfigurado diante deles; e o seu rosto resplandeceu como o sol, e as suas vestes se tornaram brancas como a luz.",
                bibleReference: "Mateus 17:2",
                prayer: "Rezemos para que, como os apóstolos, tenhamos a graça de contemplar a glória de Cristo e sermos transformados por Sua luz."
            },
            {
                title: "A Instituição da Eucaristia",
                bibleText: "E, tomando o pão, e havendo dado graças, partiu-o e deu-lho, dizendo: Isto é o meu corpo, que por vós é dado; fazei isto em memória de mim.",
                bibleReference: "Lucas 22:19",
                prayer: "Rezemos para que, como os apóstolos, tenhamos a graça de receber Jesus na Eucaristia e de celebrar este sacramento com devoção e amor."
            }
        ]
    };

    // Prayers
    const prayers = {
        cross: {
            title: "Sinal da Cruz",
            text: "Em nome do Pai, do Filho e do Espírito Santo. Amém."
        },
        offering: {
            title: "Oferecimento",
            text: "Divino Jesus, nós vos oferecemos este Terço que vamos rezar, meditando nos mistérios da vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Mãe de Deus e nossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganhar as indulgências anexas a esta santa devoção.\n\nOferecemos particularmente:\n– em desagravo dos pecados cometidos contra o Santíssimo Coração de Jesus e o Imaculado Coração de Maria;\n– pela paz no mundo;\n– pela conversão dos pecadores;\n– pelas almas do purgatório;\n– pelas intenções do Santo Padre, o papa Leão XIV;\n– e pelo aumento e santificação do clero.\ne por... (suas intenções)"
        },
        creed: {
            title: "Credo",
            text: "Creio em Deus Pai todo-poderoso, criador do Céu e da terra, e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado, desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos Céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na Santa Igreja Católica, na comunhão dos Santos, na remissão dos pecados, na ressurreição da carne e na vida eterna. Amém."
        },
        pater: {
            title: "Pai Nosso",
            text: "Pai Nosso que estais nos Céus, santificado seja o vosso Nome, venha a nós o vosso Reino, seja feita a vossa vontade assim na terra como no Céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém."
        },
        ave: {
            title: "Ave Maria",
            text: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém."
        },
        gloria: {
            title: "Glória",
            text: "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém."
        },
        fatima: {
            title: "Ó meu Jesus",
            text: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem da vossa misericórdia."
        },
        thanksgiving: {
            title: "Agradecimento Final",
            text: "Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossa mão liberais. Dignai-vos, agora e para sempre, tomar-nos debaixo do vosso poderoso amparo e para mais vos agradecer, vos saudamos com uma Salve Rainha."
        },
        salve: {
            title: "Salve Rainha",
            text: "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém."
        }
    };

    // Application state
    let currentScreen = 'welcome';
    let currentDecade = 1;
    let currentBead = 'cross';
    let currentMysteries = [];
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    let rosaryProgress = {
        cross: false,
        offering: false,
        creed: false,
        initialPater: false,
        initialAve1: false,
        initialAve2: false,
        initialAve3: false,
        initialGloria: false,
        thanksgiving: false,
        salve: false,
        finalCross: false,
        decades: {}
    };

    // Initialization
    function init() {
        loadProgress();
        setDarkMode(isDarkMode);
        updateCurrentDate();
        setupEventListeners();
        initializeRosaryProgress();
        
        // Ensuring that only one card is shown at the initialization
        if (currentScreen === 'rosary') {
            showCurrentMystery();
        }
    }

    // Configuring event listeners
    function setupEventListeners() {
        // Buttons of the welcome screen
        $('#start-btn').click(startRosary);
        $('#guide-btn').click(showGuide);

        // Buttons of the guide screen
        $('#close-guide').click(hideGuide);

        // Buttons of the main screen
        $('#prev-btn').click(previousBead);
        $('#next-btn').click(nextBead);
        $('#dark-mode-toggle').click(toggleDarkMode);
        $('#back-to-welcome').click(backToWelcome);
        $('#restart-btn').click(restartRosary);

        // Progress points
        $('.dot').click(function() {
            const decadeIndex = parseInt($(this).data('decade'));
            goToDecade(decadeIndex);
        });

        // Click on the beads of the third
        setupBeadClickListeners();

        // Keyboard navigation
        $(document).keydown(function(e) {
            if (currentScreen === 'rosary') {
                if (e.key === 'ArrowLeft') {
                    previousBead();
                } else if (e.key === 'ArrowRight') {
                    nextBead();
                }
            }
        });
    }

    // Configuring listeners of the beads
    function setupBeadClickListeners() {
        // Cross
        $('#cross-bead').click(() => goToBead('cross'));
        
        // Initial beads
        $('#large-bead-1').click(() => goToBead('initialPater'));
        $('#small-bead-1').click(() => goToBead('initialAve1'));
        $('#small-bead-2').click(() => goToBead('initialAve2'));
        $('#small-bead-3').click(() => goToBead('initialAve3'));
        $('#large-bead-2').click(() => goToBead('initialGloria'));

        // Decades
        for (let decade = 1; decade <= 5; decade++) {
            $(`#pater-${decade}`).click(() => goToBead(`decade${decade}Pater`));
            $(`#gloria-${decade}`).click(() => goToBead(`decade${decade}Gloria`));
            
            for (let ave = 1; ave <= 10; ave++) {
                $(`#ave-${decade}-${ave}`).click(() => goToBead(`decade${decade}Ave${ave}`));
            }
        }
    }

    // Determining the mysteries of the day
    function getMysteriesOfDay() {
        const today = new Date();
        const dayOfWeek = today.getDay();

        switch (dayOfWeek) {
            case 0: // Sunday
            case 3: // Wednesday
                return mysteries.glorious;
            case 1: // Monday
            case 6: // Saturday
                return mysteries.joyful;
            case 2: // Tuesday
            case 5: // Friday
                return mysteries.sorrowful;
            case 4: // Thursday
                return mysteries.luminous;
            default:
                return mysteries.joyful;
        }
    }

    // Getting the name of the mystery type
    function getMysteryTypeName() {
        const today = new Date();
        const dayOfWeek = today.getDay();

        switch (dayOfWeek) {
            case 0:
            case 3:
                return "Mistérios Gloriosos";
            case 1:
            case 6:
                return "Mistérios Gozosos";
            case 2:
            case 5:
                return "Mistérios Dolorosos";
            case 4:
                return "Mistérios Luminosos";
            default:
                return "Mistérios Gozosos";
        }
    }

    // Updating the current date
    function updateCurrentDate() {
        const today = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const dateString = today.toLocaleDateString('pt-BR', options);
        $('#current-date').text(dateString);
        $('#day-title').text(getMysteryTypeName());
    }

    // Initializing the Rosary progress
    function initializeRosaryProgress() {
        for (let decade = 1; decade <= 5; decade++) {
            rosaryProgress.decades[decade] = {
                pater: false,
                aves: Array(10).fill(false),
                gloria: false,
                fatima: false
            };
        }
    }

    // Starting the Rosary
    function startRosary() {
        currentMysteries = getMysteriesOfDay();
        currentDecade = 1;
        currentBead = 'cross';
        
        showScreen('rosary');
        updateMysteryTitles();
        updateBeadDisplay();
        showCurrentMystery();
        updateMysteryContent();
    }

    // Showing guide
    function showGuide() {
        showScreen('guide');
    }

    // hiding guide
    function hideGuide() {
        showScreen('welcome');
    }

    // going back to welcome screen
    function backToWelcome() {
        showScreen('welcome');
    }

    // showing specific screen
    function showScreen(screenName) {
        $('.screen').removeClass('active');
        $(`#${screenName}-screen`).addClass('active');
        currentScreen = screenName;
    }

    // updating mystery titles
    function updateMysteryTitles() {
        // checking if currentMysteries is initialized
        if (!currentMysteries || currentMysteries.length === 0) {
            currentMysteries = getMysteriesOfDay();
        }
        
        for (let i = 1; i <= 5; i++) {
            const mystery = currentMysteries[i - 1];
            if (mystery) {
                $(`#mystery-title-${i}`).text(`${i}º ${mystery.title}`);
            }
        }
    }

    // showing only the current mystery
    function showCurrentMystery() {
        // hiding all mystery cards using CSS directly
        $('.decade').css('display', 'none');
        
        // determining which mystery to show based on the current bead
        if (currentBead.startsWith('decade')) {
            const parts = currentBead.replace('decade', '').match(/(\d+)(Pater|Gloria|Ave\d+|Fatima)/);
            if (parts) {
                const decade = parseInt(parts[1]);
                $(`.decade[data-decade="${decade}"]`).css('display', 'block');
            }
        } else if (currentBead === 'cross' || currentBead === 'offering' || currentBead === 'creed' || 
                   currentBead === 'initialPater' || currentBead.startsWith('initialAve') || currentBead === 'initialGloria') {
            // if it's in the initial prayers, showing the first mystery
            $('.decade[data-decade="1"]').css('display', 'block');
        } else if (currentBead === 'thanksgiving' || currentBead === 'salve' || currentBead === 'finalCross') {
            // if it's in the final prayers, showing the last mystery
            $('.decade[data-decade="5"]').css('display', 'block');
        } else {
            // fallback: showing the first mystery
            $('.decade[data-decade="1"]').css('display', 'block');
        }
    }

    // updating bead display
    function updateBeadDisplay() {
        // ensuring that rosaryProgress.decades exists
        if (!rosaryProgress.decades) {
            rosaryProgress.decades = {};
        }
        
        // resetting all beads
        $('.cross-bead, .large-bead, .small-bead, .decade-pater, .decade-ave, .decade-gloria').removeClass('active completed');
        $('.decade').removeClass('active completed');

        // marking beads completed
        if (rosaryProgress.cross) $('#cross-bead').addClass('completed');
        if (rosaryProgress.initialPater) $('#large-bead-1').addClass('completed');
        if (rosaryProgress.initialAve1) $('#small-bead-1').addClass('completed');
        if (rosaryProgress.initialAve2) $('#small-bead-2').addClass('completed');
        if (rosaryProgress.initialAve3) $('#small-bead-3').addClass('completed');
        if (rosaryProgress.initialGloria) $('#large-bead-2').addClass('completed');

        // marking decades completed
        for (let decade = 1; decade <= 5; decade++) {
            const decadeProgress = rosaryProgress.decades[decade];
            if (decadeProgress && decadeProgress.pater) $(`#pater-${decade}`).addClass('completed');
            if (decadeProgress && decadeProgress.gloria) $(`#gloria-${decade}`).addClass('completed');
            
            if (decadeProgress && decadeProgress.aves) {
                decadeProgress.aves.forEach((completed, index) => {
                    if (completed) $(`#ave-${decade}-${index + 1}`).addClass('completed');
                });
            }

            // marking decade as completed if all prayers were said (including 'Ó meu Jesus')
            if (decadeProgress && decadeProgress.pater && decadeProgress.aves && decadeProgress.aves.every(ave => ave) && decadeProgress.gloria && decadeProgress.fatima) {
                $(`.decade[data-decade="${decade}"]`).addClass('completed');
            }
        }

        // marking current bead
        markCurrentBead();
    }

    // marking current bead
    function markCurrentBead() {
        switch (currentBead) {
            case 'cross':
                $('#cross-bead').addClass('active');
                break;
            case 'offering':
            case 'creed':
            case 'thanksgiving':
            case 'salve':
            case 'finalCross':
                // These prayers don't have a visual representation in the third
                break;
            case 'initialPater':
                $('#large-bead-1').addClass('active');
                break;
            case 'initialAve1':
                $('#small-bead-1').addClass('active');
                break;
            case 'initialAve2':
                $('#small-bead-2').addClass('active');
                break;
            case 'initialAve3':
                $('#small-bead-3').addClass('active');
                break;
            case 'initialGloria':
                $('#large-bead-2').addClass('active');
                break;
            default:
                if (currentBead.startsWith('decade')) {
                    const parts = currentBead.replace('decade', '').match(/(\d+)(Pater|Gloria|Ave\d+|Fatima)/);
                    if (parts) {
                        const decade = parts[1];
                        const type = parts[2];
                        
                        $(`.decade[data-decade="${decade}"]`).addClass('active');
                        
                        if (type === 'Pater') {
                            $(`#pater-${decade}`).addClass('active');
                        } else if (type === 'Gloria') {
                            $(`#gloria-${decade}`).addClass('active');
                        } else if (type.startsWith('Ave')) {
                            const aveNum = type.replace('Ave', '');
                            $(`#ave-${decade}-${aveNum}`).addClass('active');
                        } else if (type === 'Fatima') {
                            // 'Ó meu Jesus' doesn't have a specific visual representation
                            // It can be represented by the active decade
                        }
                    }
                }
                break;
        }
    }

    // Atualizar conteúdo do mistério
    function updateMysteryContent() {
        let prayer, title, text;
        let showBibleVerse = false;

        if (currentBead === 'cross') {
            prayer = prayers.cross;
            title = "Sinal da Cruz";
            text = "Faça o sinal da cruz e reze:";
        } else if (currentBead === 'offering') {
            prayer = prayers.offering;
            title = "Oferecimento";
            text = "Reze o Oferecimento:";
        } else if (currentBead === 'creed') {
            prayer = prayers.creed;
            title = "Credo";
            text = "Reze o Credo:";
        } else if (currentBead === 'initialPater') {
            prayer = prayers.pater;
            title = "Pai Nosso";
            text = "Reze o Pai Nosso:";
        } else if (currentBead.startsWith('initialAve')) {
            prayer = prayers.ave;
            title = "Ave Maria";
            text = "Reze a Ave Maria:";
        } else if (currentBead === 'initialGloria') {
            prayer = prayers.gloria;
            title = "Glória";
            text = "Reze o Glória:";
        } else if (currentBead === 'thanksgiving') {
            prayer = prayers.thanksgiving;
            title = "Agradecimento Final";
            text = "Reze o Agradecimento Final:";
        } else if (currentBead === 'salve') {
            prayer = prayers.salve;
            title = "Salve Rainha";
            text = "Reze a Salve Rainha:";
        } else if (currentBead === 'finalCross') {
            prayer = prayers.cross;
            title = "Sinal da Cruz Final";
            text = "Faça o sinal da cruz e reze:";
        } else if (currentBead.startsWith('decade')) {
            const parts = currentBead.replace('decade', '').match(/(\d+)(Pater|Gloria|Ave\d+|Fatima)/);
            if (parts) {
                const decade = parseInt(parts[1]);
                const type = parts[2];
                const mystery = currentMysteries[decade - 1];

                if (type === 'Pater') {
                    prayer = prayers.pater;
                    title = "Pai Nosso";
                    text = `Reze o Pai Nosso pelo ${decade}º mistério: ${mystery.title}`;
                    showBibleVerse = true; // Mostrar versículo apenas no Pai Nosso
                } else if (type === 'Gloria') {
                    prayer = prayers.gloria;
                    title = "Glória";
                    text = `Reze o Glória pelo ${decade}º mistério: ${mystery.title}`;
                } else if (type.startsWith('Ave')) {
                    prayer = prayers.ave;
                    title = "Ave Maria";
                    text = `Reze a Ave Maria pelo ${decade}º mistério: ${mystery.title}`;
                } else if (type === 'Fatima') {
                    prayer = prayers.fatima;
                    title = "Ó meu Jesus";
                    text = `Reze o Ó meu Jesus pelo ${decade}º mistério: ${mystery.title}`;
                }

                // showing bible verse only at the beginning of the mystery (Pai Nosso)
                if (showBibleVerse && mystery) {
                    $('#bible-text').text(mystery.bibleText);
                    $('#bible-reference').text(`- ${mystery.bibleReference}`);
                    $('.bible-verse').show();
                } else {
                    $('.bible-verse').hide();
                }
            }
        } else {
            // for initial and final prayers, hide the verse
            $('.bible-verse').hide();
        }

        if (prayer) {
            $('#current-mystery-title').text(title);
            $('#current-prayer-title').text(title);
            $('#prayer-text').text(prayer.text);
        }

        // updating decade number
        if (currentBead.startsWith('decade')) {
            const decade = currentBead.replace('decade', '').match(/(\d+)/)[1];
            $('#current-decade').text(decade);
        } else if (currentBead === 'cross' || currentBead === 'offering' || currentBead === 'creed') {
            $('#current-decade').text('Início');
        } else if (currentBead === 'thanksgiving' || currentBead === 'salve' || currentBead === 'finalCross') {
            $('#current-decade').text('Final');
        } else {
            $('#current-decade').text('Início');
        }

        // updating navigation buttons
        updateNavigationButtons();
    }

    // updating navigation buttons
    function updateNavigationButtons() {
        const beadOrder = getBeadOrder();
        const currentIndex = beadOrder.indexOf(currentBead);
        
        $('#prev-btn').prop('disabled', currentIndex === 0);
        $('#next-btn').prop('disabled', currentIndex === beadOrder.length - 1);
    }

    // getting bead order
    function getBeadOrder() {
        const order = ['cross', 'offering', 'creed', 'initialPater', 'initialAve1', 'initialAve2', 'initialAve3', 'initialGloria'];
        
        for (let decade = 1; decade <= 5; decade++) {
            order.push(`decade${decade}Pater`);
            for (let ave = 1; ave <= 10; ave++) {
                order.push(`decade${decade}Ave${ave}`);
            }
            order.push(`decade${decade}Gloria`);
            order.push(`decade${decade}Fatima`);
        }
        
        // adding final prayers
        order.push('thanksgiving', 'salve', 'finalCross');
        
        return order;
    }

    // next bead
    function nextBead() {
        const beadOrder = getBeadOrder();
        const currentIndex = beadOrder.indexOf(currentBead);
        
        if (currentIndex < beadOrder.length - 1) {
            markBeadAsCompleted(currentBead);
            currentBead = beadOrder[currentIndex + 1];
            updateBeadDisplay();
            showCurrentMystery();
            updateMysteryContent();
            saveProgress();
        } else {
            showCompletionMessage();
        }
    }

    // previous bead
    function previousBead() {
        const beadOrder = getBeadOrder();
        const currentIndex = beadOrder.indexOf(currentBead);
        
        if (currentIndex > 0) {
            currentBead = beadOrder[currentIndex - 1];
            updateBeadDisplay();
            showCurrentMystery();
            updateMysteryContent();
        }
    }

    // going to specific bead
    function goToBead(beadId) {
        currentBead = beadId;
        updateBeadDisplay();
        showCurrentMystery();
        updateMysteryContent();
    }

    // going to specific decade
    function goToDecade(decadeIndex) {
        currentBead = `decade${decadeIndex}Pater`;
        updateBeadDisplay();
        showCurrentMystery();
        updateMysteryContent();
    }

    // marking bead as completed
    function markBeadAsCompleted(beadId) {
        switch (beadId) {
            case 'cross':
                rosaryProgress.cross = true;
                break;
            case 'offering':
                rosaryProgress.offering = true;
                break;
            case 'creed':
                rosaryProgress.creed = true;
                break;
            case 'initialPater':
                rosaryProgress.initialPater = true;
                break;
            case 'initialAve1':
                rosaryProgress.initialAve1 = true;
                break;
            case 'initialAve2':
                rosaryProgress.initialAve2 = true;
                break;
            case 'initialAve3':
                rosaryProgress.initialAve3 = true;
                break;
            case 'initialGloria':
                rosaryProgress.initialGloria = true;
                break;
            case 'thanksgiving':
                rosaryProgress.thanksgiving = true;
                break;
            case 'salve':
                rosaryProgress.salve = true;
                break;
            case 'finalCross':
                rosaryProgress.finalCross = true;
                break;
            default:
                if (beadId.startsWith('decade')) {
                    const parts = beadId.replace('decade', '').match(/(\d+)(Pater|Gloria|Ave\d+|Fatima)/);
                    if (parts) {
                        const decade = parseInt(parts[1]);
                        const type = parts[2];
                        
                        // Verificar se a década existe no progresso
                        if (!rosaryProgress.decades[decade]) {
                            rosaryProgress.decades[decade] = {
                                pater: false,
                                aves: Array(10).fill(false),
                                gloria: false,
                                fatima: false
                            };
                        }
                        
                        if (type === 'Pater') {
                            rosaryProgress.decades[decade].pater = true;
                        } else if (type === 'Gloria') {
                            rosaryProgress.decades[decade].gloria = true;
                        } else if (type.startsWith('Ave')) {
                            const aveNum = parseInt(type.replace('Ave', '')) - 1;
                            if (rosaryProgress.decades[decade].aves && aveNum >= 0 && aveNum < 10) {
                                rosaryProgress.decades[decade].aves[aveNum] = true;
                            }
                        } else if (type === 'Fatima') {
                            rosaryProgress.decades[decade].fatima = true;
                        }
                    }
                }
                break;
        }
    }

    // showing completion message
    function showCompletionMessage() {
        $('#completion-message').show();
    }

    // restarting rosary
    function restartRosary() {
        currentDecade = 1;
        currentBead = 'cross';
        rosaryProgress = {
            cross: false,
            offering: false,
            creed: false,
            initialPater: false,
            initialAve1: false,
            initialAve2: false,
            initialAve3: false,
            initialGloria: false,
            thanksgiving: false,
            salve: false,
            finalCross: false,
            decades: {}
        };
        initializeRosaryProgress();
        localStorage.removeItem('rosaryProgress');
        $('#completion-message').hide();
        updateBeadDisplay();
        showCurrentMystery();
        updateMysteryContent();
    }

    // toggling dark mode
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        setDarkMode(isDarkMode);
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Aplicar modo escuro
    function setDarkMode(dark) {
        if (dark) {
            $('body').attr('data-theme', 'dark');
            $('#dark-mode-toggle i').removeClass('fa-moon').addClass('fa-sun');
        } else {
            $('body').removeAttr('data-theme');
            $('#dark-mode-toggle i').removeClass('fa-sun').addClass('fa-moon');
        }
    }

    // saving progress
    function saveProgress() {
        const progress = {
            rosaryProgress: rosaryProgress,
            currentBead: currentBead,
            date: new Date().toDateString(),
            mysteryType: getMysteryTypeName()
        };
        localStorage.setItem('rosaryProgress', JSON.stringify(progress));
    }

    // loading progress
    function loadProgress() {
        const saved = localStorage.getItem('rosaryProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            const today = new Date().toDateString();
            
            if (progress.date === today) {
                rosaryProgress = progress.rosaryProgress || {};
                currentBead = progress.currentBead || 'cross';
            } else {
                currentBead = 'cross';
                rosaryProgress = {
                    cross: false,
                    offering: false,
                    creed: false,
                    initialPater: false,
                    initialAve1: false,
                    initialAve2: false,
                    initialAve3: false,
                    initialGloria: false,
                    thanksgiving: false,
                    salve: false,
                    finalCross: false,
                    decades: {}
                };
                localStorage.removeItem('rosaryProgress');
            }
        }
        
        // Garantir que decades sempre existe
        if (!rosaryProgress.decades) {
            rosaryProgress.decades = {};
        }
    }

    // Inicializar aplicação
    init();
}); 