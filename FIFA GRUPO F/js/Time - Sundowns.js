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
    const h1 = document.getElementsByTagName('h1')[0];
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
        for (let i = 1; i < p1.length; i++) {
            p1[i].style.color = 'white';
        }
        FT.style.backgroundColor = 'rgb(13, 13, 41)';
        FT.style.color = 'rgb(248, 248, 255)';
        cc.style.color = 'rgb(248, 248, 255)';
        h1.style.color = 'rgb(248, 248, 255)';
        localStorage.setItem('TH', 'true');
    } else if (verifica == false) {
        boxwhite1.classList.remove('dark');
        thm.classList.add('dark');
        thm.innerHTML = '<img src="img/light_mode.svg" onclick="darktheme(true)">'
        for (let i = 2; i < h3.length; i++) {
            h3[i].style.color = 'black';
        }
        for (let i = 1; i < p1.length; i++) {
            if (i <= 4 || i >= 8) {
                p1[i].style.color = 'black';
            }
        }
        FT.style.backgroundColor = 'black';
        FT.style.color = 'rgb(248, 248, 255)';
        h1.style.color = 'rgb(39, 39, 39)';
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


    const T1 = document.getElementById('T1');
    const T2 = document.getElementById('T2');
    const T3 = document.getElementById('T3');
    const T4 = document.getElementById('T4');
    const T5 = document.getElementById('T5');
    const T6 = document.getElementById('T6');
    const T7 = document.getElementById('T7');
    const T8 = document.getElementById('T8');
    const T9 = document.getElementById('T9');
    const T10 = document.getElementById('T10');
    const T11 = document.getElementById('T11');
    const T12 = document.getElementById('T12');
    const T13 = document.getElementById('T13');
    const T14 = document.getElementById('T14');
    const T15 = document.getElementById('T15');
    const T16 = document.getElementById('T16');
    const T17 = document.getElementById('T17');
    const T18 = document.getElementById('T18');
    const T19 = document.getElementById('T19');
    const T20 = document.getElementById('T20');
    const T21 = document.getElementById('T21');
    const T22 = document.getElementById('T22');
    const T23 = document.getElementById('T23');
    const T24 = document.getElementById('T24');
    const T25 = document.getElementById('T25');
    const T26 = document.getElementById('T26');
    const T27 = document.getElementById('T27');
    const T28 = document.getElementById('T28');
    const T29 = document.getElementById('T29');
    const T30 = document.getElementById('T30');
    const T31 = document.getElementById('T31');
    const T32 = document.getElementById('T32');
    const T33 = document.getElementById('T33');
    const T34 = document.getElementById('T34');
    const T35 = document.getElementById('T35');
    const T36 = document.getElementById('T36');
    const T37 = document.getElementById('T37');
    const T38 = document.getElementById('T38');

    if (view === false) {
        if (DD1) DD1.textContent = 'Início';
        if (DD2) DD2.textContent = 'Quem somos';
        if (DD3) DD3.textContent = 'Times';
        if (DD4) DD4.textContent = 'Sugestões';
        if (DD5) DD5.textContent = 'Contato';
        if (DD6) DD6.textContent = 'Os Brasileiros';
        if (DD7) DD7.textContent = 'História';
        if (DD8) DD8.textContent = `Nascimento O Sundowns foi fundada no início dos anos 1960 por um grupo de jovens que residiam em Marabastad e arredores, em Pretória (Tshwane).O clube menciona os seguintes indivíduos como parte das jovens estrelas que o estabeleceram na década de 1960: Frank "ABC" Motsepe, Roy Fischer, Ingle Singh e Bernard Hartze. 
        
        O clube ingressou na Federação da Liga de Futebol Profissional em 1967, ano em que "chegou às finais da Copa Coca Cola em um thriller de oito gols, perdendo por 5 a 3 para o Berea United". O Sundowns foi rebaixado para a segunda divisão da National Professional Soccer League em 1980. O clube permaneceu na segunda divisão por cinco anos, apenas para se recuperar em 1985 com a entrada de Cool (Zola Mahobe). Sr. Cool Anos O extravagante Zola Mahobe comprou o Sundowns em 1985 e imediatamente trabalhou seu charme para inspirar o clube à liga da segunda divisão e ganhar uma promoção para a primeira divisão. Jogadores do Mamelodi Sundowns comemoram um gol que os ajudou a vencer o Zamalek por 3 a 1 para vencer a Liga dos Campeões da África Com o Sr. Cool no controle e fazendo sua mágica, o clube alcançou a glória. Em 1986, o Sundowns conquistou sua primeira grande copa, a Mainstay Cup, desde que voltou à primeira divisão ao vencer o Jomo Cosmos por 1 a 0.

        Sundowns ficou em alta em 1987 e venceu o BP Top Eight, a JPS Cup e o Castle League Championships.
        O último sucesso foi atribuído a Zola Mahobe, que estava pingando dinheiro após as escapadas fraudulentas que dominou com sua namorada, Snowy Moshoeshoe.Em maio de 1986, Zola Mahobe deu o que falar quando levou todos os jogadores do Sundowns e seus parceiros para uma viagem com todas as despesas pagas para a final da FA Cup em Londres.Diz-se que Zola Mahobe gastou cerca de R2 milhões para impulsionar o Sundowns em seus primeiros dois anos como proprietário do clube. Ele pagou muito caro para adquirir jogadores talentosos e os recompensou com presentes caros, incluindo BMWs.

        A era pós-Zola Mahobe A prisão de Zola Mahobe em 1988 significou um mini desastre para os Sundowns voando alto. O Standard Bank, que estava na extremidade receptora do assalto Mahobe/Moshoeshoe, assumiu a propriedade da Sundown em 1988. Depois vieram os irmãos Krok que compraram o clube do Standard Bank. Mais tarde, eles se juntaram a Angelo e Natasha Tsichlas.O Sundowns se recuperou de forma espetacular na era pós-1994 para conquistar sete títulos da liga. A primeira sequência de vitórias na liga começou em 1996, com o clube chegando ao topo por três anos consecutivos. Os anos do Dr. Patrice Motsepe O Dr. Patrice Motsepe comprou a Sundowns em 2003 para fazer parceria com os Tsichlas. Ele aumentou sua participação de 51% para 100% em 2004 e renomeou o clube como 'Mamelodi' Sundowns. A renomeação do clube para Mamelodi Sundowns é descrita pelo clube como "um aceno para sua herança em Atteridgeville, Eersterus e Laudium e a casa do clube em Mamelodi".
        A magia de Motsepe prevaleceu já em 2005, com o clube vencendo a liga por duas temporadas consecutivas (2005/06 e 2006/07). O Sundowns também conquistou o campeonato em 2013/14 sob a administração do técnico local Pitso Mosimane, que então conquistou a Liga dos Campeões de 2016.

        O Mamelodi Sundowns venceu a Supercopa da CAF na primeira tentativa no sábado, derrotando o TP Mazembe, da República Democrática do Congo, por 1 a 0, em Pretória.O Dr. Patrice Motsepe sempre quis a glória continental. Ele veio depois que o Sundowns avançou em 2001 para a final da Liga dos Campeões da CAF e perdeu para o gigante do futebol egípcio Al-Ahly. A vitória por 3 a 1 sobre outro gigante egípcio Zamalek é doce demais para palavras.Os brasileiros jogam com talento, paixão e precisão, deixando muitos torcedores maravilhados e adversários com inveja, por isso o time foi apelidado de "Bafana ba Style (Meninos com estilo) devido ao apetitoso futebol atraente que exibem. Os locais se referem a esse estilo de jogo ofensivo como 'engraxate e piano', que inclui combinações de passes rápidos e curtos no chão e isso é comparado ao estilo espanhol 'tika-taka', conforme demonstrado por times espanhóis, principalmente o FC Barcelona.
        `;
        if (DD9) DD9.textContent = 'Os Brasileiros';
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
        if (DD11) DD11.innerHTML = '<p>O Mamelodi Sundowns é um clube de futebol sul-africano com sede em Pretória e joga na primeira divisão do futebol sul-africano. Eles são o time de maior sucesso na era da Premier Soccer League e são considerados um dos gigantes da África.Desde o início da Premier Soccer League em 1996, o Masandawana conquistou o título da liga onze vezes, o recorde da Liga dos Campeões da CAF em 2016 e foi eleito o Clube do Ano da CAF no mesmo ano. Eles também venceram a Nedbank Cup quatro vezes e detêm o recorde conjunto de três campeonatos da National Football League e são a única equipe sul-africana a competir na Copa do Mundo de Clubes da FIFA.</p><p>O apelido do clube, Os Brasileiros, é uma referência aos seus uniformes, que ecoam os da seleção brasileira.Os brasileiros jogam com talento, paixão e precisão, deixando muitos torcedores maravilhados e adversários com inveja, por isso o time foi apelidado de "Bafana ba Style (Meninos com estilo) devido ao apetitoso futebol atraente que exibem. Os locais se referem a esse estilo de jogo ofensivo como "engraxate e piano", que inclui combinações de passes rápidos e curtos no chão e isso é comparado ao estilo espanhol "tika-taka", conforme demonstrado por times espanhóis, principalmente o FC Barcelona.</p>';
        if (DD12) DD12.innerHTML = '<h5>Mamelodi Sundowns: Campeões da Premier Soccer League</h5><p color="white"> equipe sul-africana Mamelodi Sundowns celebra com entusiasmo a vitória e a conquista do título da Premier Soccer League, ostentando suas medalhas e a alegria da consagração.</p>';
        if (DD13) DD13.innerHTML = '<h5> Mamelodi Sundowns: A Glória da K-League</h5><p color="white">Em meio a uma chuva de confetes, o Mamelodi Sundowns levanta o troféu da K-League, consolidando mais uma conquista em sua trajetória de sucesso no futebol sul-africano.</p>';
        if (DD14) DD14.innerHTML = '<h5>Mamelodi Sundowns: Conquistadores da África - Campeões da Liga dos Campeões da CAF</h5><p color="white">O Mamelodi Sundowns exulta ao erguer o cobiçado troféu da Liga dos Campeões da CAF, celebrando sua supremacia no futebol continental africano.</p>';
        if (DD15) DD15.textContent = 'Como Classificou';
        if (DD16) DD16.textContent = 'O Mamelodi Sundowns garantiu a vaga no Mundial de Clubes da FIFA por meio do ranking da CAF. Sua regularidade na Liga dos Campeões da CAF no período classificatório de quatro anos (2020-24), quando alcançou duas vezes tanto as quartas de final quanto as semifinais, garantiu que o time se classificasse para o torneio que será disputado nos EUA.';
        if (DD17) DD17.textContent = 'Elenco';
        if (DD18) DD18.textContent = 'Títulos';
        if (T1) T1.textContent = 'Goleiro';
        if (T2) T2.textContent = 'Goleiro';
        if (T3) T3.textContent = 'Goleiro';
        if (T4) T4.textContent = 'Goleiro';
        if (T5) T5.textContent = 'Defensor';
        if (T6) T6.textContent = 'Defensor';
        if (T7) T7.textContent = 'Defensor';
        if (T8) T8.textContent = 'Defensor';
        if (T9) T9.textContent = 'Defensor';
        if (T10) T10.textContent = 'Defensor';
        if (T11) T11.textContent = 'Defensor';
        if (T12) T12.textContent = 'Defensor';
        if (T13) T13.textContent = 'Defensor';
        if (T14) T14.textContent = 'Defensor';
        if (T15) T15.textContent = 'Defensor';
        if (T16) T16.textContent = 'Defensor';
        if (T17) T17.textContent = 'Defensor';
        if (T18) T18.textContent = 'Defensor';
        if (T19) T19.textContent = 'Meio-Campo';
        if (T20) T20.textContent = 'Meio-Campo';
        if (T21) T21.textContent = 'Meio-Campo';
        if (T22) T22.textContent = 'Meio-Campo';
        if (T23) T23.textContent = 'Meio-Campo';
        if (T24) T24.textContent = 'Meio-Campo';
        if (T25) T25.textContent = 'Meio-Campo';
        if (T26) T26.textContent = 'Meio-Campo';
        if (T27) T27.textContent = 'Meio-Campo';
        if (T28) T28.textContent = 'Meio-Campo';
        if (T29) T29.textContent = 'Atacante';
        if (T30) T30.textContent = 'Atacante';
        if (T31) T31.textContent = 'Atacante';
        if (T32) T32.textContent = 'Atacante';
        if (T33) T33.textContent = 'Atacante';
        if (T34) T34.textContent = 'Atacante';
        if (T35) T35.textContent = 'Atacante';
        if (T36) T36.textContent = 'Atacante';
        if (T37) T37.textContent = 'Atacante';
        if (T38) T38.textContent = 'Atacante';
        localStorage.setItem('LG', 'false');
        BT2.classList.remove('ativo');
        BT1.classList.add('ativo');
    } else if (view === true) {
        if (DD1) DD1.textContent = 'Home';
        if (DD2) DD2.textContent = 'About Us';
        if (DD3) DD3.textContent = 'Teams';
        if (DD4) DD4.textContent = 'Suggestions';
        if (DD5) DD5.textContent = 'Contact';
        if (DD6) DD6.textContent = 'The Brazilians'; 
        if (DD7) DD7.textContent = 'History';
        if (DD8) DD8.textContent = `Birth The Sundowns were founded in the early 1960s by a group of young people residing in and around Marabastad, Pretoria (Tshwane). The club mentions the following individuals as part of the young stars who established it in the 1960s: Frank "ABC" Motsepe, Roy Fischer, Ingle Singh, and Bernard Hartze.

        The club joined the Federation Professional Football League in 1967, the year they "reached the Coca Cola Cup finals in an eight-goal thriller, losing 5-3 to Berea United." The Sundowns were relegated to the second division of the National Professional Soccer League in 1980. The club remained in the second division for five years, only to recover in 1985 with the entry of Cool (Zola Mahobe). Mr. Cool Years The flamboyant Zola Mahobe bought Sundowns in 1985 and immediately worked his charm to inspire the club to the second division league and earn promotion to the first division. Mamelodi Sundowns players celebrate a goal that helped them beat Zamalek 3-1 to win the African Champions League. With Mr. Cool in control and working his magic, the club achieved glory. In 1986, Sundowns won their first major cup, the Mainstay Cup, since returning to the first division by beating Jomo Cosmos 1-0.

        Sundowns were on a high in 1987 and won the BP Top Eight, the JPS Cup, and the Castle League Championships. The latter success was attributed to Zola Mahobe, who was dripping money after the fraudulent escapades he dominated with his girlfriend, Snowy Moshoeshoe. In May 1986, Zola Mahobe made headlines when he took all Sundowns players and their partners on an all-expenses-paid trip to the FA Cup final in London. It is said that Zola Mahobe spent about R2 million to boost Sundowns in his first two years as club owner. He paid handsomely to acquire talented players and rewarded them with expensive gifts, including BMWs.

        The post-Zola Mahobe era Zola Mahobe's arrest in 1988 meant a mini-disaster for the high-flying Sundowns. Standard Bank, which was on the receiving end of the Mahobe/Moshoeshoe heist, took ownership of Sundown in 1988. Then came the Krok brothers who bought the club from Standard Bank. They were later joined by Angelo and Natasha Tsichlas. Sundowns recovered spectacularly in the post-1994 era to win seven league titles. The first winning streak in the league began in 1996, with the club reaching the top for three consecutive years. Dr. Patrice Motsepe's years Dr. Patrice Motsepe bought Sundowns in 2003 to partner with the Tsichlas. He increased his stake from 51% to 100% in 2004 and renamed the club 'Mamelodi' Sundowns. The club's renaming to Mamelodi Sundowns is described by the club as "a nod to its heritage in Atteridgeville, Eersterus, and Laudium and the club's home in Mamelodi."

        Motsepe's magic prevailed as early as 2005, with the club winning the league for two consecutive seasons (2005/06 and 2006/07). Sundowns also won the championship in 2013/14 under the management of local coach Pitso Mosimane, who then won the 2016 Champions League.

        Mamelodi Sundowns won the CAF Super Cup on their first attempt on Saturday, defeating TP Mazembe of the Democratic Republic of Congo 1-0 in Pretoria. Dr. Patrice Motsepe had always wanted continental glory. It came after Sundowns advanced in 2001 to the CAF Champions League final and lost to Egyptian football giant Al-Ahly. The 3-1 victory over another Egyptian giant, Zamalek, is too sweet for words. The Brazilians play with talent, passion, and precision, leaving many fans in awe and opponents envious, which is why the team was nicknamed "Bafana ba Style (Boys with style) due to the appetizing attractive football they display. Locals refer to this offensive playing style as 'shoeshine and piano,' which includes combinations of quick, short passes on the ground and is compared to the Spanish 'tiki-taka' style, as demonstrated by Spanish teams, mainly FC Barcelona.`;
        if (DD9) DD9.textContent = 'The Brazilians';
        if (DD10) DD10.innerHTML = '<div>All rights reserved © WebDev 2025 </div>';
        if (DD11) DD11.innerHTML = '<p>Mamelodi Sundowns is a South African football club based in Pretoria and plays in the top flight of South African football. They are the most successful team in the Premier Soccer League era and are considered one of Africa\'s giants. Since the inception of the Premier Soccer League in 1996, Masandawana has won the league title eleven times, the CAF Champions League record in 2016, and was voted CAF Club of the Year in the same year. They have also won the Nedbank Cup four times and hold the joint record of three National Football League championships and are the only South African team to compete in the FIFA Club World Cup.</p><p>The club\'s nickname, The Brazilians, is a reference to their uniforms, which echo those of the Brazilian national team. The Brazilians play with talent, passion, and precision, leaving many fans in awe and opponents envious, which is why the team was nicknamed "Bafana ba Style (Boys with style) due to the appetizing attractive football they display. Locals refer to this offensive playing style as "shoeshine and piano", which includes combinations of quick, short passes on the ground and is compared to the Spanish "tiki-taka" style, as demonstrated by Spanish teams, mainly FC Barcelona.</p>';
        if (DD12) DD12.innerHTML = '<h5>Mamelodi Sundowns: Premier Soccer League Champions</h5><p style="color:white;"> The South African team Mamelodi Sundowns enthusiastically celebrate their victory and the Premier Soccer League title, proudly displaying their medals and the joy of consecration.</p>';
        if (DD13) DD13.innerHTML = '<h5>Mamelodi Sundowns: K-League Glory</h5><p style="color:white;">Amidst a shower of confetti, Mamelodi Sundowns lift the K-League trophy, solidifying yet another achievement in their successful journey in South African football.</p>';
        if (DD14) DD14.innerHTML = '<h5>Mamelodi Sundowns: Conquerors of Africa - CAF Champions League Winners</h5><p style="color:white;">Mamelodi Sundowns exult as they lift the coveted CAF Champions League trophy, celebrating their supremacy in African continental football.</p>';
        if (DD15) DD15.textContent = 'How They Qualified';
        if (DD16) DD16.textContent = 'Mamelodi Sundowns secured their spot in the FIFA Club World Cup through the CAF ranking. Their consistency in the CAF Champions League during the four-year qualifying period (2020-24), where they reached both the quarter-finals and semi-finals twice, ensured the team qualified for the tournament to be played in the USA.';
        if (DD17) DD17.textContent = 'Squad';
        if (DD18) DD18.textContent = 'Titles';
        if (T1) T1.textContent = 'Goalkeeper';
        if (T2) T2.textContent = 'Goalkeeper';
        if (T3) T3.textContent = 'Goalkeeper';
        if (T4) T4.textContent = 'Goalkeeper';
        if (T5) T5.textContent = 'Defender';
        if (T6) T6.textContent = 'Defender';
        if (T7) T7.textContent = 'Defender';
        if (T8) T8.textContent = 'Defender';
        if (T9) T9.textContent = 'Defender';
        if (T10) T10.textContent = 'Defender';
        if (T11) T11.textContent = 'Defender';
        if (T12) T12.textContent = 'Defender';
        if (T13) T13.textContent = 'Defender';
        if (T14) T14.textContent = 'Defender';
        if (T15) T15.textContent = 'Defender';
        if (T16) T16.textContent = 'Defender';
        if (T17) T17.textContent = 'Defender';
        if (T18) T18.textContent = 'Defender';
        if (T19) T19.textContent = 'Midfielder';
        if (T20) T20.textContent = 'Midfielder';
        if (T21) T21.textContent = 'Midfielder';
        if (T22) T22.textContent = 'Midfielder';
        if (T23) T23.textContent = 'Midfielder';
        if (T24) T24.textContent = 'Midfielder';
        if (T25) T25.textContent = 'Midfielder';
        if (T26) T26.textContent = 'Midfielder';
        if (T27) T27.textContent = 'Midfielder';
        if (T28) T28.textContent = 'Midfielder';
        if (T29) T29.textContent = 'Forward';
        if (T30) T30.textContent = 'Forward';
        if (T31) T31.textContent = 'Forward';
        if (T32) T32.textContent = 'Forward';
        if (T33) T33.textContent = 'Forward';
        if (T34) T34.textContent = 'Forward';
        if (T35) T35.textContent = 'Forward';
        if (T36) T36.textContent = 'Forward';
        if (T37) T37.textContent = 'Forward';
        if (T38) T38.textContent = 'Forward';
        localStorage.setItem('LG', 'true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}
