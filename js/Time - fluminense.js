window.onload = function () {

    let savelg = localStorage.getItem('LG');
    if (savelg == 'true') {
        ptbr(true);
    } else if (savelg == 'false') {
        ptbr(false);
    } else {
        localStorage.setItem('LG', 'false');
    };
}

function seachtheme() {
    let saveTH = localStorage.getItem('TH');

    if (saveTH == 'true') {
        darktheme(true);
    } else if (saveTH == 'false') {
        darktheme(false);
    } else {
        localStorage.setItem('TH', 'true');
    }
}


function darktheme(verifica) {
    const boxwhite1 = document.getElementById('boxwhite');
    const thm = document.getElementById('THEME');
    const h3 = document.getElementsByTagName('h1');
    const p1 = document.getElementsByTagName('p');
    const FT = document.getElementsByTagName('footer')[0];
    const cc = document.getElementsByClassName('text-center')[0];

    if (verifica == true) {
        boxwhite1.classList.add('dark');
        thm.classList.add('dark');
        thm.innerHTML = '<img src="img/dark_mode.svg" onclick="darktheme(false)">'
        for (let i = 2; i < h3.length; i++) {
            h3[i].style.color = 'white';
        }
        for (let i = 0; i < p1.length; i++) {
            p1[i].style.color = 'white';
        }
        FT.style.backgroundColor = 'rgb(13, 13, 41)';
        FT.style.color = 'rgb(248, 248, 255)';
        cc.style.color = 'rgb(248, 248, 255)';
        localStorage.setItem('TH', 'true');
    } else if (verifica == false) {
        boxwhite1.classList.remove('dark');
        thm.classList.add('dark');
        thm.innerHTML = '<img src="img/light_mode.svg" onclick="darktheme(true)">'
        for (let i = 2; i < h3.length; i++) {
            h3[i].style.color = 'black';
        }
        for (let i = 1; i < p1.length; i++) {
            if (i <= 9 || i >= 13) {
                p1[i].style.color = 'black';
            }
        }
        FT.style.backgroundColor = 'black';
        FT.style.color = 'rgb(248, 248, 255)';
        cc.style.color = 'rgb(39, 39, 39)';
        localStorage.setItem('TH', 'false');
    }
}



function ptbr(view) {
    const DD1 = document.getElementById('D1');
    const DD2 = document.getElementById('D2');
    const DD3 = document.getElementById('D3');
    const DD4 = document.getElementById('D4');
    const DD5 = document.getElementById('D5');
    const DD6 = document.getElementById('D6');
    const DD7 = document.getElementById('D7');
    const DD8 = document.getElementById('D8');
    const DD9 = document.getElementById('D9');
    const DD10 = document.getElementById('D10');
    const DD11 = document.getElementById('D11');
    const DD12 = document.getElementById('D12');
    const DD13 = document.getElementById('D13');
    const DD14 = document.getElementById('D14');
    const DD15 = document.getElementById('D15');
    const DD16 = document.getElementById('D16');
    const DD17 = document.getElementById('D17');
    const DD18 = document.getElementById('D18');
    const DD19 = document.getElementById('D19');
    const DD20 = document.getElementById('D20');


    const TT1 = document.getElementById('T1');
    const TT2 = document.getElementById('T2');
    const TT3 = document.getElementById('T3');
    const TT4 = document.getElementById('T4');
    const TT5 = document.getElementById('T5');
    const TT6 = document.getElementById('T6');
    const TT7 = document.getElementById('T7');
    const TT8 = document.getElementById('T8');
    const TT9 = document.getElementById('T9');
    const TT10 = document.getElementById('T10');
    const TT11 = document.getElementById('T11');
    const TT12 = document.getElementById('T12');
    const TT13 = document.getElementById('T13');
    const TT14 = document.getElementById('T14');
    const TT15 = document.getElementById('T15');
    const TT16 = document.getElementById('T16');
    const TT17 = document.getElementById('T17');
    const TT18 = document.getElementById('T18');
    const TT19 = document.getElementById('T19');
    const TT20 = document.getElementById('T20');
    const TT21 = document.getElementById('T21');
    const TT22 = document.getElementById('T22');
    const TT23 = document.getElementById('T23');
    const TT24 = document.getElementById('T24');
    const TT25 = document.getElementById('T25');
    const TT26 = document.getElementById('T26');
    const TT27 = document.getElementById('T27');
    const TT28 = document.getElementById('T28');
    const TT29 = document.getElementById('T29');
    const TT30 = document.getElementById('T30');
    const TT31 = document.getElementById('T31');
    const TT32 = document.getElementById('T32');

    if (view === false) {
        if (DD1) DD1.textContent = 'Início';
        if (DD2) DD2.textContent = 'Quem somos';
        if (DD3) DD3.textContent = 'Times';
        if (DD4) DD4.textContent = 'Sugestões';
        if (DD5) DD5.textContent = 'Contato';
        if (DD6) DD6.textContent = 'Time de Guerreiros';
        if (DD7) DD7.textContent = 'História';
        if (DD8) DD8.innerHTML = '<p>Fundado em 21 de julho de 1902 por Oscar Cox, o Fluminense Football Club inicialmente vestia cinza e branco. Cox, figura crucial na introdução do futebol no Brasil, trouxe inovações da Inglaterra e foi campeão Carioca em 1906, ano em que o clube já havia adotado as icônicas cores verde, branco e grená devido a dificuldades na aquisição do tecido cinza original. O Fluminense também é pioneiro na construção do primeiro estádio de cimento da América Latina, o Estádio de Laranjeiras, que sediou eventos de grande relevância internacional e o primeiro título significativo da Seleção Brasileira.</p><p>Reconhecido mundialmente, o Fluminense é o único clube da América Latina a possuir a Taça Olímpica, concedida em 1949 pelo Comitê Olímpico Internacional por seus serviços ao esporte, e o único clube de futebol com seu nome inscrito nesta honraria. Ao longo de sua história, o clube revelou e acolheu inúmeros craques, incluindo Preguinho, autor do primeiro gol da Seleção Brasileira em Copas do Mundo, e ídolos como Pinheiro, Castilho, Carlos Alberto Torres, Gerson, Rivellino, Romário, Deco, Conca, Fred, entre muitos outros, que encantaram a torcida tricolor.</p><p>Com um palmarés invejável, o clube ostenta o título da Conmebol Libertadores 2023, da Conmebol Recopa 2024, além de ser tetracampeão brasileiro (1970, 1984, 2010 e 2012), campeão da Copa do Brasil (2007), da Copa da Primeira Liga (2016) e 33 vezes campeão Estadual. Além da histórica sede de Laranjeiras e do Maracanã, seu palco de jogos, o Fluminense mantém dois Centros de Treinamento, com destaque para o de Xerém, em Duque de Caxias, dedicado à formação de suas divisões de base.</p>';
        if (DD9) DD9.textContent = 'Era Maracanã';
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
        if (DD11) DD11.innerHTML = '<p>O Fluminense conquistaria o seu primeiro título no Maracanã ao se sagrar campeão carioca de 1951, a primeira taça oficial levantada por um time que conquistaria uma grande glória no ano seguinte. Em 1952, quando a população ainda lamentava a perda da Copa do Mundo de 1950, o Fluminense elevou a autoestima do povo carioca, conquistando no Maracanã, de forma invicta, a Copa Rio de 1952, embrião da atual Copa do Mundo de Clubes da FIFA. Com Castilho, Píndaro, Pinheiro, Bigode, Didi, Telê e Orlando Pingo de Ouro, entre outros, tendo o exponencial Zezé Moreira no comando, o Tricolor passou por Sporting, Grasshopper, Peñarol, Austria Viena e, ao vencer o Corinthians por 2-0 no primeiro jogo e segurando o empate por 2-2 ambos no Maracanã, conquistou essa importante taça para o Brasil.</p><p>Em 1957 conquistaria o Torneio Rio-São Paulo, embrião do Campeonato Brasileiro, invicto, e em 1960 chegaria ao segundo título, com apenas uma derrota, quando estes eram os campeonatos mais competitivos do Brasil. Além da inacabada edição de 1940, chegaria a última rodada precisando apenas de uma vitória para ser campeão, em 1952 e 1954, sem ter conseguido o seu intento nestas ocasiões, alcançando o pioneirismo carioca em 1957.</p><p>Além do time de 1951-1954 ter sido campeão da Copa Rio de 1952 e do Campeonato Carioca de 1951, foi vice carioca em 1952 e 1953 e do Torneio Rio-São Paulo de 1954. Merecem destaques também no time de 1956-1960, além dos dois títulos do Torneio Rio-São Paulo, a conquista do Campeonato Carioca de 1959, os vices em 1956, 1957 e 1960, tendo sido eliminado da Taça Brasil de 1960 na semifinal tomando um gol em chute de longe aos 44 do segundo tempo. Castilho, Pinheiro e Telê jogaram durante toda a década de 1950, fazendo parte da base do time nos dois momentos mais vitoriosos dessa década, com Jair Marinho, Altair, Escurinho e Waldo, o maior artilheiro da História do Fluminense, brilhando no segundo momento.</p>';
        if (DD12) DD12.textContent = 'A Máquina Tricolor';
        if (DD13) DD13.innerHTML = '<p>O período de 1975-1977 marcou a era da "Máquina Tricolor", um time bicampeão carioca e semifinalista do Campeonato Brasileiro, conhecido pela técnica refinada e conquistas internacionais. Este elenco contava com talentos como Félix, Carlos Alberto Torres, Edinho, Marinho Chagas, Paulo César Caju, Gil, Dirceu, e era orquestrado pelo craque Roberto Rivellino, eleito na Seleção de Futebol da América do Sul do Século XX, com a maioria de seus membros tendo passado pela Seleção Brasileira.</p><p>Em 1984, o Fluminense conquistaria o Campeonato Brasileiro com um time estelar que incluía o meia paraguaio Romerito (Melhor Jogador da América do Sul em 1985), a potente dupla ofensiva Assis e Washington, e o ponta Tato. A defesa, com Paulo Vítor, Ricardo Gomes e Branco, era protegida por Jandir e liderada por Deley, sob o comando técnico de Carlos Alberto Parreira, futuro campeão mundial pela Seleção Brasileira.</p>';
        if (DD14) DD14.textContent = 'Como Classificou';
        if (DD15) DD15.textContent = 'Os campeões da Copa Libertadores entre 2021 e 2024 se classificam automaticamente para o novo Mundial de Clubes FIFA 25™. Portanto, o Fluminense garantiu vaga quando ergueu o troféu em 2023, após vitória por 2 a 1 na final contra o argentino Boca Juniors.No primeiro tempo, Keno tabelou com Arias, avançou pela direita e cruzou rasteiro (e para trás) para Germán Cano, que, na marca do pênalti, chutou de primeira e balançou a rede. O goleiro Romero não alcançou o cantinho e não conseguiu impedir o gol.';
        if (DD16) DD16.innerHTML = '<h5>Fluminense Campeão da Libertadores 2023</h5><p>Celebração do título inédito da Libertadores 2023 no Maracanã, após a vitória do Fluminense sobre o Boca Juniors em 4 de novembro. A equipe vibra com a taça sob confetes dourados.</p>';
        if (DD17) DD17.innerHTML = '<h5>conquista da Taça Rio de 2012 pelo Fluminense.</h5><p>Naquele ano, o Fluminense venceu o Botafogo na final da Taça Rio, que faz parte do Campeonato Carioca. A partida foi disputada no Engenhão (Estádio Nilton Santos)</p>';
        if (DD18) DD18.innerHTML = '<h5>comemoração do título do Campeonato Brasileiro de 2012</h5><p>Entre confetes e a alegria dos jogadores, destaca-se a presença de Frederico Chaves Guedes (Fred), que surge no centro segurando a taça, simbolizando a atmosfera vitoriosa pós-conquista do torneio.</p>';
        if (DD19) DD19.textContent = 'Elenco';
        if (DD20) DD20.textContent = 'Títulos';
        if (TT1) TT1.textContent = 'Goleiro';
        if (TT2) TT2.textContent = 'Goleiro';
        if (TT3) TT3.textContent = 'Goleiro';
        if (TT4) TT4.textContent = 'Goleiro';
        if (TT5) TT5.textContent = 'Defensor';
        if (TT6) TT6.textContent = 'Defensor';
        if (TT7) TT7.textContent = 'Defensor';
        if (TT8) TT8.textContent = 'Defensor';
        if (TT9) TT9.textContent = 'Defensor';
        if (TT10) TT10.textContent = 'Defensor';
        if (TT11) TT11.textContent = 'Defensor';
        if (TT12) TT12.textContent = 'Defensor';
        if (TT13) TT13.textContent = 'Defensor';
        if (TT14) TT14.textContent = 'Meio-Campo';
        if (TT15) TT15.textContent = 'Meio-Campo';
        if (TT16) TT16.textContent = 'Meio-Campo';
        if (TT17) TT17.textContent = 'Meio-Campo';
        if (TT18) TT18.textContent = 'Meio-Campo';
        if (TT19) TT19.textContent = 'Meio-Campo';
        if (TT20) TT20.textContent = 'Meio-Campo';
        if (TT21) TT21.textContent = 'Meio-Campo';
        if (TT22) TT22.textContent = 'Meio-Campo';
        if (TT23) TT23.textContent = 'Meio-Campo';
        if (TT24) TT24.textContent = 'Meio-Campo';
        if (TT25) TT25.textContent = 'Meio-Campo';
        if (TT26) TT26.textContent = 'Atacante';
        if (TT27) TT27.textContent = 'Atacante';
        if (TT28) TT28.textContent = 'Atacante';
        if (TT29) TT29.textContent = 'Atacante';
        if (TT30) TT30.textContent = 'Atacante';
        if (TT31) TT31.textContent = 'Atacante';
        if (TT32) TT32.textContent = 'Atacante';
        localStorage.setItem('LG', 'false');
        BT2.classList.remove('ativo');
        BT1.classList.add('ativo');
    } else if (view === true) {
        if (DD1) DD1.textContent = 'Home';
        if (DD2) DD2.textContent = 'About Us';
        if (DD3) DD3.textContent = 'Teams';
        if (DD4) DD4.textContent = 'Suggestions';
        if (DD5) DD5.textContent = 'Contact';
        if (DD6) DD6.textContent = 'Time de Guerreiros';
        if (DD7) DD7.textContent = 'History';
        if (DD8) DD8.innerHTML = '<p>Founded on July 21, 1902, by Oscar Cox, the Fluminense Football Club initially wore gray and white. Cox, a crucial figure in the introduction of football to Brazil, brought innovations from England and was the Carioca champion in 1906, the year the club had already adopted the iconic green, white, and maroon colors due to difficulties in acquiring the original gray fabric. Fluminense is also a pioneer in building the first concrete stadium in Latin America, Estádio de Laranjeiras, which hosted internationally relevant events and the first significant title of the Brazilian National Team.</p><p>Globally recognized, Fluminense is the only club in Latin America to possess the Olympic Cup, awarded in 1949 by the International Olympic Committee for its services to sports, and the only football club in the world to have its name inscribed on this honor. Throughout its history, the club has revealed and welcomed countless stars, including Preguinho, scorer of the Brazilian National Team\'s first goal in World Cups, and idols like Pinheiro, Castilho, Carlos Alberto Torres, Gerson, Rivellino, Romário, Deco, Conca, Fred, among many others, who delighted the "tricolor" fans.</p><p>With an enviable trophy cabinet, the club holds the Conmebol Libertadores 2023 title, the Conmebol Recopa 2024, in addition to being four-time Brazilian champion (1970, 1984, 2010, and 2012), Copa do Brasil champion (2007), Copa da Primeira Liga champion (2016), and 33-time State champion. Besides the historic Laranjeiras headquarters and the Maracanã, its home stadium, Fluminense maintains two Training Centers, with emphasis on Xerém, in Duque de Caxias, dedicated to the formation of its youth divisions.</p>';
        if (DD9) DD9.textContent = 'Maracanã Era';
        if (DD10) DD10.innerHTML = '<div>All rights reserved &#169; WebDev 2025 </div>';
        if (DD11) DD11.innerHTML = '<p>Fluminense would win its first title at Maracanã by becoming the Carioca champion in 1951, the first official trophy lifted by a team that would achieve great glory the following year. In 1952, when the population still mourned the loss of the 1950 World Cup, Fluminense boosted the morale of the Carioca people, winning the 1952 Copa Rio at Maracanã, undefeated, the embryo of the current FIFA Club World Cup. With Castilho, Píndaro, Pinheiro, Bigode, Didi, Telê, and Orlando Pingo de Ouro, among others, with the phenomenal Zezé Moreira in command, the Tricolor passed Sporting, Grasshopper, Peñarol, Austria Vienna and, by beating Corinthians 2-0 in the first game and holding a 2-2 draw in both matches at Maracanã, won this important trophy for Brazil.</p><p>In 1957, they would win the Torneio Rio-São Paulo, an embryo of the Brazilian Championship, undefeated, and in 1960 they would reach their second title, with only one defeat, when these were the most competitive championships in Brazil. In addition to the unfinished 1940 edition, they would reach the last round needing only one victory to be champion in 1952 and 1954, without having achieved their goal on these occasions, reaching Carioca pioneering in 1957.</p><p>In addition to the 1951-1954 team having won the 1952 Copa Rio and the 1951 Carioca Championship, it was Carioca runner-up in 1952 and 1953 and Torneio Rio-São Paulo runner-up in 1954. Also noteworthy in the 1956-1960 team, besides the two Torneio Rio-São Paulo titles, are the 1959 Carioca Championship conquest, runner-up finishes in 1956, 1957, and 1960, having been eliminated from the 1960 Taça Brasil in the semifinal by conceding a long-range goal at 44\' of the second half. Castilho, Pinheiro, and Telê played throughout the 1950s, forming the base of the team in the two most victorious moments of that decade, with Jair Marinho, Altair, Escurinho, and Waldo, the greatest goal scorer in Fluminense\'s history, shining in the second period.</p>';
        if (DD12) DD12.textContent = 'The Tricolor Machine';
        if (DD13) DD13.innerHTML = '<p>The 1975-1977 period was remembered for the refined technique of the players, two-time Carioca champions and Brazilian Championship semifinalists, known for their refined technique and international conquests. This squad featured talents such as Félix, Carlos Alberto Torres, Edinho, Marinho Chagas, Paulo César Caju, Gil, Dirceu, and was orchestrated by the star Roberto Rivellino, elected to the South American Football Team of the 20th Century, with most of its members having played for the Brazilian National Team.</p><p>In 1984, Fluminense would win the Brazilian Championship with a stellar team that included the Paraguayan midfielder Romerito (Best Player in South America in 1985), the powerful offensive duo Assis and Washington, and the winger Tato. The defense, with Paulo Vítor, Ricardo Gomes, and Branco, was protected by Jandir and led by midfielder Deley, under the technical command of Carlos Alberto Parreira, future World Cup champion with the Brazilian National Team.</p>';
        if (DD14) DD14.textContent = 'How They Qualified';
        if (DD15) DD15.textContent = 'The Copa Libertadores champions between 2021 and 2024 automatically qualify for the new FIFA Club World Cup 25™. Therefore, Fluminense secured its spot when it lifted the trophy in 2023, after a 2-1 victory in the final against Argentina\'s Boca Juniors. In the first half, Keno played a one-two with Arias, advanced down the right, and crossed low (and backwards) to Germán Cano, who, from the penalty spot, shot first-time and found the net. Goalkeeper Romero couldn\'t reach the corner and couldn\'t prevent the goal.';
        if (DD16) DD16.innerHTML = '<h5>Fluminense Libertadores Champion 2023</h5><p>Celebration of the unprecedented 2023 Libertadores title at Maracanã, after Fluminense\'s victory over Boca Juniors on November 4. The team celebrates with the trophy under golden confetti.</p>';
        if (DD17) DD17.innerHTML = '<h5>Fluminense\'s 2012 Taça Rio conquest.</h5><p>That year, Fluminense defeated Botafogo in the Taça Rio final, which is part of the Carioca Championship. The match was played at Engenhão (Nilton Santos Stadium).</p>';
        if (DD18) DD18.innerHTML = '<h5>2012 Brazilian Championship title celebration</h5><p>Amidst confetti and the joy of the players, the presence of Frederico Chaves Guedes (Fred) stands out, seen in the center holding the trophy, symbolizing the victorious atmosphere after the tournament\'s conquest.</p>';
        if (DD19) DD19.textContent = 'Squad';
        if (DD20) DD20.textContent = 'Titles';
        if (TT1) TT1.textContent = 'Goalkeeper';
        if (TT2) TT2.textContent = 'Goalkeeper';
        if (TT3) TT3.textContent = 'Goalkeeper';
        if (TT4) TT4.textContent = 'Goalkeeper';
        if (TT5) TT5.textContent = 'Defender';
        if (TT6) TT6.textContent = 'Defender';
        if (TT7) TT7.textContent = 'Defender';
        if (TT8) TT8.textContent = 'Defender';
        if (TT9) TT9.textContent = 'Defender';
        if (TT10) TT10.textContent = 'Defender';
        if (TT11) TT11.textContent = 'Defender';
        if (TT12) TT12.textContent = 'Defender';
        if (TT13) TT13.textContent = 'Defender';
        if (TT14) TT14.textContent = 'Midfielder';
        if (TT15) TT15.textContent = 'Midfielder';
        if (TT16) TT16.textContent = 'Midfielder';
        if (TT17) TT17.textContent = 'Midfielder';
        if (TT18) TT18.textContent = 'Midfielder';
        if (TT19) TT19.textContent = 'Midfielder';
        if (TT20) TT20.textContent = 'Midfielder';
        if (TT21) TT21.textContent = 'Midfielder';
        if (TT22) TT22.textContent = 'Midfielder';
        if (TT23) TT23.textContent = 'Midfielder';
        if (TT24) TT24.textContent = 'Midfielder';
        if (TT25) TT25.textContent = 'Midfielder';
        if (TT26) TT26.textContent = 'Forward';
        if (TT27) TT27.textContent = 'Forward';
        if (TT28) TT28.textContent = 'Forward';
        if (TT29) TT29.textContent = 'Forward';
        if (TT30) TT30.textContent = 'Forward';
        if (TT31) TT31.textContent = 'Forward';
        if (TT32) TT32.textContent = 'Forward';
        localStorage.setItem('LG', 'true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}
