window.onload = function(){

    let savelg=localStorage.getItem('LG');
    if (savelg =='true' ){
        ptbr(true);
    }else if(savelg =='false'){
        ptbr(false);
    }else{
        localStorage.setItem('LG', 'false');
    };
}

function seachtheme(){
    let saveTH=localStorage.getItem('TH');

    if (saveTH == 'true' ){
        darktheme(true);
    }else if(saveTH == 'false'){
        darktheme(false);
    }else{
        localStorage.setItem('TH', 'true');
    }
}


function darktheme(verifica){
    const boxwhite1 = document.getElementById('boxwhite');
    const thm = document.getElementById('THEME');
    const h1 = document.getElementsByTagName('h1')[0];
    const h3 = document.getElementsByTagName('h1');
    const p1 = document.getElementsByTagName('p');
    const FT = document.getElementsByTagName('footer')[0];
    const cc = document.getElementsByClassName('text-center')[0]; 
    
    if (verifica==true){
        boxwhite1.classList.add('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/dark_mode.svg" onclick="darktheme(false)">'
        for (let i = 2; i < h3.length; i++){
        h3[i].style.color = 'white';
        }
        for (let i = 1; i < p1.length; i++){
        p1[i].style.color = 'white';
        }
        FT.style.backgroundColor = 'rgb(13, 13, 41)';
        FT.style.color = 'rgb(248, 248, 255)';
        cc.style.color = 'rgb(248, 248, 255)';
        h1.style.color = 'rgb(248, 248, 255)';
        localStorage.setItem('TH','true');
    }else if (verifica==false){
        boxwhite1.classList.remove('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/light_mode.svg" onclick="darktheme(true)">'
        for (let i = 2; i < h3.length; i++){
        h3[i].style.color = 'black';
        }
        for (let i = 1; i < p1.length; i++){
            if (i <= 7 || i >= 11) {
                p1[i].style.color = 'black';
            }
        }
        FT.style.backgroundColor = 'black';
        FT.style.color = 'rgb(248, 248, 255)';
        h1.style.color = 'rgb(39, 39, 39)';
        cc.style.color = 'rgb(39, 39, 39)';
        localStorage.setItem('TH','false');
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
    
    
    const B1 = document.getElementById('B1');
    const B2 = document.getElementById('B2');
    const B3 = document.getElementById('B3');
    const B4 = document.getElementById('B4');
    const B5 = document.getElementById('B5');
    const B6 = document.getElementById('B6');
    const B7 = document.getElementById('B7');
    const B8 = document.getElementById('B8');
    const B9 = document.getElementById('B9');
    const B10 = document.getElementById('B10');
    const B11 = document.getElementById('B11');
    const B12 = document.getElementById('B12');
    const B13 = document.getElementById('B13');
    const B14 = document.getElementById('B14');
    const B15 = document.getElementById('B15');
    const B16 = document.getElementById('B16');
    const B17 = document.getElementById('B17');
    const B18 = document.getElementById('B18');
    const B19 = document.getElementById('B19');
    const B20 = document.getElementById('B20');
    const B21 = document.getElementById('B21');
    const B22 = document.getElementById('B22');
    const B23 = document.getElementById('B23');
    const B24 = document.getElementById('B24');
    const B25 = document.getElementById('B25');
    const B26 = document.getElementById('B26');
    const B27 = document.getElementById('B27');

    if (view === false) {
        if (DD1) DD1.textContent = 'Início';
        if (DD2) DD2.textContent = 'Quem somos';
        if (DD3) DD3.textContent = 'Times';
        if (DD4) DD4.textContent = 'Sugestões';
        if (DD5) DD5.textContent = 'Contato';
        if (DD6) DD6.textContent = 'Echte Liebe (Amor verdadeiro)';
        if (DD7) DD7.textContent = 'História do Time';
        if (DD8) DD8.innerHTML = '<p>O Borussia Dortmund foi fundado em 1909 e com o tempo foi se tornando um dos mais bem-sucedidos e mais queridos clubes do futebol alemão. A equipe venceu seu primeiro Campeonato Alemão em 1956 e desde então conquistou oito títulos da Bundesliga, o último deles em 2012 sob o comando de Jürgen Klopp. O Borussia conquistou ainda quatro Copas da Alemanha, a última em 2021. No cenário internacional, a equipe também alcançou triunfos consideráveis. O principal deles aconteceu em 1997, quando o clube de Dortmund conquistou a taça da Liga dos Campeões da UEFA depois de derrotar a Juventus por 3 a 1 na final. No mesmo ano, o título continental foi complementado pela conquista do Mundial de Clubes derrotando o Cruzeiro por 2 a 0 na decisão.O Borussia ficou perto de conquistar o principal torneio continental da Europa oO clube foi fundado em 19 de dezembro de 1909 por um grupo de jovens insatisfeitos com o clube Trinity Youth, patrocinado pela Igreja Católica, onde jogavam futebol sob o olhar severo e antipático do pároco local. Os fundadores foram Franz e Paul Braun, Henry Cleve, Hans Debest, Paul Dziendzielle, Franz, Julius e Wilhelm Jacobi, Hans Kahn, Gustav Müller, Franz Risse, Fritz Schulte, Hans Siebold, August Tönnesmann, Heinrich e Robert Unger, Fritz Weber e Franz Wendt. O nome Borussia vem do latim e significa Prússia, mas foi tirado da cerveja Borussia. A equipe começou a jogar com camisas listradas azul e branco com uma faixa vermelha e shorts pretos. Em 1913, eles vestiram as listras pretas e amarelas tão familiares hoje. Nas décadas seguintes, o clube desfrutou de um modesto sucesso jogando em ligas locais. Eles quase foram à falência em 1929, quando a contratação de alguns jogadores profissionais deixou a equipe profundamente endividada. Eles sobreviveram apenas através da generosidade de um torcedor que cobriu o déficit da equipe de seu próprio bolso. A década de 1930 assistiu à ascensão do Terceiro Reich, que reestruturou organizações esportivas em todo o país para se adequar aos objetivos do regime.</p><p>O presidente do Borussia foi substituído quando ele se recusou a se juntar ao Partido Nazista e alguns membros que secretamente usaram os escritórios do clube para produzir panfletos antinazistas foram executados nos últimos dias da guerra. O clube teve sucesso no recém-criado Gauliga Westfalen, a liga de futebol mais importante da província de Vestfália da Prússia e do pequeno Estado Livre de Lippe durante o período da Alemanha Nazista, entre 1933 e 1945, mas teria que esperar até depois da Segunda Guerra Mundial para fazer um grande avanço.</p><p>Foi nessa época que o Borussia desenvolveu sua intensa rivalidade com o Schalke 04 de Gelsenkirchen, o time mais bem-sucedido da época.Como qualquer outra organização na Alemanha, o Borussia foi dissolvido pelas autoridades de ocupação dos Aliados após a guerra, numa tentativa de distanciar as instituições do país de seu passado recente nazista. Houve uma curta tentativa de fundir o clube com dois outros — Werksportgemeinschaft Hoesch e Freier Sportverein 98 — como Sportgemeinschaft Borussia von 1898, mas foi com o nome de Ballspiel-Verein Borussia (BVB) que eles fizeram sua primeira aparição na final da liga nacional em 1949. Primeiros Títulos Nacionais Entre 1946 e 1963, o Borussia jogou na Oberliga West, a primeira divisão do futebol alemão no final dos anos 50. Em 1949, o Borussia chegou à final em Stuttgart contra o VfR Mannheim, mas perdeu por 3 a 2 na prorrogação. O clube conquistou seu primeiro título nacional em 1956 depois de uma vitória por 4 a 2 sobre o Karlsruher SC. Um ano depois, o Borussia derrotou o Hamburger SV por 4 a 1 e conquistou seu segundo título nacional. Em 1963, o Borussia venceu a última edição da Oberliga West (antes da introdução da nova Bundesliga) para garantir seu terceiro título nacional. Estreia na Bundesliga Em 1962, a DFB reuniu-se em Dortmund e votou pelo estabelecimento de uma liga profissional de futebol começando em agosto de 1963 sob o nome de Bundesliga. O Borussia Dortmund conquistou seu lugar entre os primeiros dezesseis clubes a disputar a liga ao vencer o último campeonato nacional pré-Bundesliga. Friedhelm Konietzka, do Dortmund, marcou o primeiro gol da Bundesliga em uma derrota por 3 a 2 para o Werder Bremen. Em 1965, o Dortmund conquistou sua primeira DFB-Pokal. Em 1966, o Dortmund venceu a Taça dos Clubes Vencedores de Taças por 2 a 1 contra o Liverpool com os gols de Sigfried Held e Reinhard Libuda. Os anos 1970 foram caracterizados por problemas financeiros, rebaixamento da Bundesliga em 1972 e a inauguração do Westfalenstadion, em homenagem a sua região natal, Vestfália, em 1974. O clube retornou à Bundesliga em 1976. Dortmund continuou a ter problemas financeiros nos anos 80. O BVB evitou ser rebaixado em 1986 ao vencer o terceiro jogo decisivo contra o Fortuna Köln, depois de terminar a temporada regular tras duas vezes, em 2013 e 2014, mas foi derrotado na final nas duas graças.</p>';
        if (DD9) DD9.textContent = 'Como Classificou';
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
        if (DD11) DD11.textContent = 'O finalista da Liga dos Campeões de 2024 garantiu a sua vaga em março de 2024 através das classificações do ranking europeu. Quando o Leipzig, seu último concorrente alemão, foi eliminado do torneio continental, a participação do Borussia estava assegurada. Juntamente com o clube de Dortmund, o Bayern de Munique - o outro alemão que disputará o Mundial de Clubes - já houve ganhos na vaga também pelas classificações do ranking.';
        if (DD12) DD12.textContent = 'Elenco';
        if (DD13) DD13.textContent = 'Títulos';
        if (DD14) DD14.innerHTML = '<p>Em 1992, Ottmar Hitzfeld levou o Borussia Dortmund ao segundo lugar na Bundesliga e teria vencido o título se o Stuttgart não tivesse vencido o seu último jogo para se tornar campeão.Juntamente com o quarto lugar na Bundesliga, o Dortmund chegou à final da Copa da UEFA de 1993, mas perdeu por 6 a 1 para a Juventus. Apesar desse resultado, o Borussia saiu com um prêmio de 25 milhões pelo sistema de premiação em dinheiro na época para os times alemães que participavam da Copa. Com esse dinheiro, eles foram capazes de contratar jogadores que mais tarde trouxeram numerosas honras nos anos 90. Sob a chefia do Bola de Ouro de 1996, Matthias Sammer, o Borussia Dortmund ganhou títulos da Bundesliga em 1995 e 1996. O Dortmund também venceu a DFL-Supercup contra o Borussia Mönchengladbach em 1995 e o Kaiserslautern em 1996.</p><p> Na temporada de 1996-97, a equipe chegou à sua primeira final da Liga dos Campeões. Numa memorável final jogada no Estádio Olímpico de Munique, o Dortmund enfrentou a Juventus. Dortmund levantou o troféu com uma vitória por 3 a 1 com gols de Lars Ricken e Karl-Heinz Riedle (duas vezes). Dortmund, em seguida, bateu o Cruzeiro por 2 a 0 na final da Copa Europeia/Sul-Americana de 1997 para se tornar o campeão do mundo. O Borussia Dortmund foi o segundo clube alemão a vencer a Copa Intercontinental, depois do Bayern de Munique em 1976. Século 21 e Borussia "Vai ao Público" Em outubro de 2000, o Borussia Dortmund tornou-se o primeiro — e até agora o único — clube de capital aberto do mercado de ações alemão.</p><p> Em 2002, o Borussia Dortmund conquistou seu terceiro título da Bundesliga. Eles tiveram uma notável corrida no final da temporada para ultrapassar o Bayer Leverkusen e garantir o título na última rodada. O treinador Matthias Sammer tornou-se a primeira pessoa na história do Borussia Dortmund a vencer a Bundesliga como jogador e treinador. Na mesma temporada, o Borussia perdeu a final da Copa da UEFA de 2001-02 para o Feyenoord. A sorte de Dortmund, então, declinou de forma constante por vários anos. A má gestão financeira conduziu a uma pesada carga de dívidas e à venda dos seus terrenos no Westfalenstadion. A situação foi agravada pela incapacidade de avançar na Liga dos Campeões da UEFA de 2003-04, quando a equipe foi eliminada nos pênaltis para o Club Brugge.</p><p> Em 2003, o Bayern de Munique emprestou 2 milhões de euros ao Dortmund para pagar sua folha de pagamento. O Borussia foi novamente levado à beira da falência em 2005, o valor original de € 11 de suas ações despencou mais de 80% na Bolsa de Valores de Frankfurt. A resposta à crise incluiu um corte salarial de 20% para todos os jogadores. Em 2006, a fim de reduzir a dívida, o Westfalenstadion foi renomeado para "Signal Iduna Park", após uma companhia de seguros local comprar os direitos. O Dortmund sofreu um início ruim na temporada de 2005-06, mas conseguiu terminar em sétimo lugar na Bundesliga. A administração do clube indicou que o clube voltou a mostrar lucro; isto foi em grande parte relacionado com a venda de David Odonkor para o Real Betis e Tomáš Rosický para o Arsenal. Na temporada de 2006-07, o Dortmund inesperadamente enfrentou sérios problemas de rebaixamento pela primeira vez em anos. Eles conseguiram se salvar por apenas um ponto. Na temporada de 2007-08, o Dortmund perdeu para muitos clubes menores da Bundesliga. Apesar de terminar em 13º na tabela, o Dortmund chegou à final da DFB-Pokal contra o Bayern de Munique, onde perdeu por 2 a 1 na prorrogação. A aparição na final qualificou Dortmund para a Copa da UEFA, porque o Bayern já tinha se classificado para a Liga dos Campeões. Thomas Doll renunciou em 19 de maio de 2008 e foi substituído por Jürgen Klopp.</p>';
         if (DD15) DD15.innerHTML = '<h5>O primeiro título do clube em 23 anos. </h5><p>Norbert Dickel e Andreas Möller, jogadores do Borussia Dortmund, comemorando a vitória na DFB-Pokal (Copa da Alemanha) de 1989. </p>';
        if (DD16) DD16.innerHTML = '<h5>BVB Campeão 95</h5><p> A imagem retrata a euforia do Borussia Dortmund ao erguer o troféu da Bundesliga em 17 de junho de 1995, marcando seu primeiro título alemão em mais de três décadas, com figuras como Karl-Heinz Riedle e Andreas Möller na celebração.</p>';
        if (DD17) DD17.innerHTML = '<h5>UEFA Champions League</h5><p>Premiação da Champions de 1997</p>';
        if (DD18) DD18.textContent = 'Foto do estadio da Borrusia Westfalenstadion';
        if (DD19) DD19.textContent = 'Idade de Ouro: Anos 90';
        if (B1) B1.textContent = 'Goleiro';
        if (B2) B2.textContent = 'Goleiro';
        if (B3) B3.textContent = 'Goleiro';
        if (B4) B4.textContent = 'Defensor';
        if (B5) B5.textContent = 'Defensor';
        if (B6) B6.textContent = 'Defensor';
        if (B7) B7.textContent = 'Defensor';
        if (B8) B8.textContent = 'Defensor';
        if (B9) B9.textContent = 'Defensor';
        if (B10) B10.textContent = 'Defensor';
        if (B11) B11.textContent = 'Defensor';
        if (B12) B12.textContent = 'Meio-Campo';
        if (B13) B13.textContent = 'Meio-Campo';
        if (B14) B14.textContent = 'Meio-Campo';
        if (B15) B15.textContent = 'Meio-Campo';
        if (B16) B16.textContent = 'Meio-Campo';
        if (B17) B17.textContent = 'Meio-Campo';
        if (B18) B18.textContent = 'Meio-Campo';
        if (B19) B19.textContent = 'Meio-Campo';
        if (B20) B20.textContent = 'Meio-Campo';
        if (B21) B21.textContent = 'Meio-Campo';
        if (B22) B22.textContent = 'Atacante';
        if (B23) B23.textContent = 'Atacante';
        if (B24) B24.textContent = 'Atacante';
        if (B25) B25.textContent = 'Atacante';
        if (B26) B26.textContent = 'Atacante';
        if (B27) B27.textContent = 'Atacante';
        localStorage.setItem('LG', 'false');
        BT2.classList.remove('ativo');
        BT1.classList.add('ativo');
    } else if (view === true) {
        if (DD1) DD1.textContent = 'Home';
        if (DD2) DD2.textContent = 'About Us';
        if (DD3) DD3.textContent = 'Teams';
        if (DD4) DD4.textContent = 'Suggestions';
        if (DD5) DD5.textContent = 'Contact';
        if (DD6) DD6.textContent = 'Echte Liebe(True Love)';
        if (DD7) DD7.textContent = 'Team History';
        if (DD8) DD8.innerHTML = '<p>Borussia Dortmund was founded in 1909 and, over time, grew into one of the most successful and beloved football clubs in Germany. The team won its first German Championship in 1956 and has since clinched eight Bundesliga titles, the latest in 2012 under Jürgen Klopp. Borussia has also won four German Cups, most recently in 2021. On the international stage, the team has achieved considerable triumphs. The most significant came in 1997 when the Dortmund club lifted the UEFA Champions League trophy after defeating Juventus 3-1 in the final. In the same year, the continental title was complemented by winning the Club World Cup, beating Cruzeiro 2-0 in the decider. Borussia came close to winning Europe\'s main continental tournament twice more, in 2013 and 2014, but was defeated in both finals. The club was founded on December 19, 1909, by a group of young men dissatisfied with the Catholic Church-sponsored Trinity Youth club, where they played football under the stern and unsympathetic eye of the local pastor. The founders were Franz and Paul Braun, Henry Cleve, Hans Debest, Paul Dziendzielle, Franz, Julius and Wilhelm Jacobi, Hans Kahn, Gustav Müller, Franz Risse, Fritz Schulte, Hans Siebold, August Tönnesmann, Heinrich and Robert Unger, Fritz Weber, and Franz Wendt. The name Borussia comes from Latin and means Prussia, but was taken from Borussia beer. The team initially played in blue and white striped shirts with a red sash and black shorts. In 1913, they adopted the black and yellow stripes so familiar today. In the following decades, the club enjoyed modest success playing in local leagues. They almost went bankrupt in 1929 when the hiring of some professional players left the team deeply in debt. They only survived through the generosity of a fan who covered the team\'s deficit out of his own pocket. The 1930s saw the rise of the Third Reich, which restructured sports organizations nationwide to align with the regime\'s goals.</p><p>Borussia\'s president was replaced when he refused to join the Nazi Party, and some members who secretly used the club\'s offices to produce anti-Nazi leaflets were executed in the final days of the war. The club found success in the newly created Gauliga Westfalen, the most important football league in the Prussian province of Westphalia and the small Free State of Lippe during the Nazi Germany period between 1933 and 1945, but would have to wait until after World War II to make a major breakthrough.</p><p>It was at this time that Borussia developed its intense rivalry with Schalke 04 of Gelsenkirchen, the most successful team of the era. Like any other organization in Germany, Borussia was dissolved by the Allied occupation authorities after the war in an attempt to distance the country\'s institutions from its recent Nazi past. There was a brief attempt to merge the club with two others—Werksportgemeinschaft Hoesch and Freier Sportverein 98—as Sportgemeinschaft Borussia von 1898, but it was under the name Ballspiel-Verein Borussia (BVB) that they made their first appearance in the national league final in 1949. Early National Titles: Between 1946 and 1963, Borussia played in the Oberliga West, the first division of German football in the late 1950s. In 1949, Borussia reached the final in Stuttgart against VfR Mannheim but lost 3-2 in extra time. The club won its first national title in 1956 after a 4-2 victory over Karlsruher SC. A year later, Borussia defeated Hamburger SV 4-1 and won its second national title. In 1963, Borussia won the last edition of the Oberliga West (before the introduction of the new Bundesliga) to secure its third national title. Bundesliga Debut: In 1962, the DFB met in Dortmund and voted to establish a professional football league starting in August 1963 under the name Bundesliga. Borussia Dortmund earned its place among the first sixteen clubs to play in the league by winning the last pre-Bundesliga national championship. Friedhelm Konietzka of Dortmund scored the first Bundesliga goal in a 3-2 defeat to Werder Bremen. In 1965, Dortmund won its first DFB-Pokal. In 1966, Dortmund won the UEFA Cup Winners\' Cup 2-1 against Liverpool with goals from Sigfried Held and Reinhard Libuda. The 1970s were characterized by financial problems, relegation from the Bundesliga in 1972, and the inauguration of the Westfalenstadion, named after its home region, Westphalia, in 1974. The club returned to the Bundesliga in 1976. Dortmund continued to have financial problems in the 1980s. BVB avoided relegation in 1986 by winning the decisive third game against Fortuna Köln, after finishing the regular season. Twice, in 2013 and 2014, they came close to winning Europe\'s main continental tournament, but were defeated in the final on both occasions.</p>';
        if (DD9) DD9.textContent = 'How They Qualified';
        if (DD10) DD10.innerHTML = '<div>All rights reserved &#169; WebDev 2025 </div>';
        if (DD11) DD11.textContent = 'The 2024 Champions League finalist secured their spot in March 2024 through the European ranking classifications. When Leipzig, their last German competitor, was eliminated from the continental tournament, Borussia\'s participation was assured. Along with the Dortmund club, Bayern Munich - the other German team that will compete in the Club World Cup - also gained a spot through ranking classifications.';
        if (DD12) DD12.textContent = 'Squad';
        if (DD13) DD13.textContent = 'Titles';
        if (DD14) DD14.innerHTML = '<p>In 1992, Ottmar Hitzfeld led Borussia Dortmund to second place in the Bundesliga, and they would have won the title if Stuttgart hadn\'t won their final game to become champions. Along with a fourth-place finish in the Bundesliga, Dortmund reached the 1993 UEFA Cup final but lost 6-1 to Juventus. Despite this result, Borussia walked away with a 25 million prize from the prize money system at the time for German teams participating in the Cup. With this money, they were able to sign players who later brought numerous honors in the 90s. Under the leadership of the 1996 Ballon d\'Or winner, Matthias Sammer, Borussia Dortmund won Bundesliga titles in 1995 and 1996. Dortmund also won the DFL-Supercup against Borussia Mönchengladbach in 1995 and Kaiserslautern in 1996.</p><p>In the 1996-97 season, the team reached its first Champions League final. In a memorable final played at the Olympic Stadium in Munich, Dortmund faced Juventus. Dortmund lifted the trophy with a 3-1 victory, with goals from Lars Ricken and Karl-Heinz Riedle (twice). Dortmund then beat Cruzeiro 2-0 in the 1997 Intercontinental Cup final to become world champions. Borussia Dortmund was the second German club to win the Intercontinental Cup, after Bayern Munich in 1976. 21st Century and Borussia "Go Public" In October 2000, Borussia Dortmund became the first — and so far the only — publicly traded football club on the German stock market. In 2002, Borussia Dortmund won their third Bundesliga title. They had a remarkable late-season run to overtake Bayer Leverkusen and secure the title on the final matchday. Coach Matthias Sammer became the first person in Borussia Dortmund\'s history to win the Bundesliga as both a player and a coach. In the same season, Borussia lost the 2001-02 UEFA Cup final to Feyenoord. Dortmund\'s fortunes then steadily declined for several years. Poor financial management led to a heavy debt burden and the sale of their land at Westfalenstadion. The situation was worsened by their inability to advance in the 2003-04 UEFA Champions League, where the team was eliminated on penalties by Club Brugge.</p><p>In 2003, Bayern Munich lent Dortmund 2 million euros to pay their payroll. Borussia was again brought to the brink of bankruptcy in 2005, when the original value of €11 of its shares plummeted more than 80% on the Frankfurt Stock Exchange. The response to the crisis included a 20% salary cut for all players. In 2006, in order to reduce debt, Westfalenstadion was renamed "Signal Iduna Park" after a local insurance company bought the rights. Dortmund suffered a poor start to the 2005-06 season but managed to finish seventh in the Bundesliga. Club management indicated that the club had returned to profitability; this was largely related to the sale of David Odonkor to Real Betis and Tomáš Rosický to Arsenal. In the 2006-07 season, Dortmund unexpectedly faced serious relegation problems for the first time in years. They managed to save themselves by just one point. In the 2007-08 season, Dortmund lost to many smaller Bundesliga clubs. Despite finishing 13th in the table, Dortmund reached the DFB-Pokal final against Bayern Munich, where they lost 2-1 in extra time. The final appearance qualified Dortmund for the UEFA Cup because Bayern had already qualified for the Champions League. Thomas Doll resigned on May 19, 2008, and was replaced by Jürgen Klopp.</p>';
        if (DD15) DD15.innerHTML = '<h5>The club\'s first title in 23 years.</h5><p>Norbert Dickel and Andreas Möller, Borussia Dortmund players, celebrating their victory in the 1989 DFB-Pokal (German Cup).</p>';
        if (DD16) DD16.innerHTML = '<h5>BVB Champions 95</h5><p> The image depicts the euphoria of Borussia Dortmund as they lift the Bundesliga trophy on June 17, 1995, marking their first German title in over three decades, with figures like Karl-Heinz Riedle and Andreas Möller in the celebration.</p>';
        if (DD17) DD17.innerHTML = '<h5>UEFA Champions League</h5><p>1997 Champions League award ceremony</p>';
        if (DD18) DD18.textContent = 'Photo of the Borussia Westfalenstadion stadium';
        if (DD19) DD19.textContent = 'Golden Age: 90s';
        if (B1) B1.textContent = 'Goalkeeper';
        if (B2) B2.textContent = 'Goalkeeper';
        if (B3) B3.textContent = 'Goalkeeper';
        if (B4) B4.textContent = 'Defender';
        if (B5) B5.textContent = 'Defender';
        if (B6) B6.textContent = 'Defender';
        if (B7) B7.textContent = 'Defender';
        if (B8) B8.textContent = 'Defender';
        if (B9) B9.textContent = 'Defender';
        if (B10) B10.textContent = 'Defender';
        if (B11) B11.textContent = 'Defender';
        if (B12) B12.textContent = 'Midfielder';
        if (B13) B13.textContent = 'Midfielder';
        if (B14) B14.textContent = 'Midfielder';
        if (B15) B15.textContent = 'Midfielder';
        if (B16) B16.textContent = 'Midfielder';
        if (B17) B17.textContent = 'Midfielder';
        if (B18) B18.textContent = 'Midfielder';
        if (B19) B19.textContent = 'Midfielder';
        if (B20) B20.textContent = 'Midfielder';
        if (B21) B21.textContent = 'Midfielder';
        if (B22) B22.textContent = 'Forward';
        if (B23) B23.textContent = 'Forward';
        if (B24) B24.textContent = 'Forward';
        if (B25) B25.textContent = 'Forward';
        if (B26) B26.textContent = 'Forward';
        if (B27) B27.textContent = 'Forward';
        localStorage.setItem('LG', 'true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}
