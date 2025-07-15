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
            if (i <= 6|| i >= 10) {
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

    if (view === false) {
        if (DD1) DD1.textContent = 'Início';
        if (DD2) DD2.textContent = 'Quem somos';
        if (DD3) DD3.textContent = 'Times';
        if (DD4) DD4.textContent = 'Sugestões';
        if (DD5) DD5.textContent = 'Contato';
        if (DD6) DD6.textContent = 'Tigres da Coreia';
        if (DD7) DD7.textContent = 'História';
        if (DD8) DD8.textContent = 'O clube foi fundado em 6 de dezembro de 1983 como Hyundai Horang-i, com o tigre como mascote (horangi significa tigre em coreano). Sua área de franquia original era a província de Incheon e Gyeonggi. Eles se juntaram à K League profissional a partir da temporada de 1984. Enquanto terminaram sua temporada de estreia como 3º lugar, o atacante da equipe, Baek Jong-chul, tornou-se o artilheiro da K League, marcando 16 gols em 28 partidas. Eles ganharam seu primeiro troféu profissional em 1986, vencendo o Campeonato de Futebol Profissional, que é a origem da Copa da Liga Coreana. A partir da temporada de 1987, o clube mudou sua franquia de Incheon e Gyeonggi para Gangwon. Na temporada de 1988, eles terminaram a temporada como vice-campeões da liga. A partir da temporada de 1990, o clube mudou sua franquia para Ulsan, onde estão localizadas as sedes de várias filiais da empresa proprietária Hyundai, na província de Gangwon. O ex-atacante da Coreia do Sul, Cha Bum-kun, assumiu o cargo de técnico na temporada de 1991, levando o clube ao vice-campeonato da liga em sua temporada de estreia. No entanto, ele não conseguiu ganhar nenhum troféu e foi substituído por Ko Jae-wook após a temporada de 1994. Sob o comando de Ko Jae-wook, o Ulsan conquistou seu segundo troféu da Copa da Liga Coreana em 1995, que foi sua temporada de estreia como técnico do Ulsan. O Ulsan conquistou seu primeiro título da liga em 1996, derrotando o Suwon Samsung Bluewings por 3 a 2 no agregado nos playoffs do campeonato. O clube então entrou em um longo período de seca em termos de troféus da liga, embora tenha conquistado seu terceiro troféu da Copa da Liga Coreana em 1998, derrotando o Bucheon SK por 2 a 1 no agregado nas finais.';
        if (DD9) DD9.textContent = 'Retorno da Geração de ouro';
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
        if (DD11) DD11.innerHTML = '<p>Em 21 de novembro de 2016, a Ulsan Hyundai contratou Kim Do-hoon como seu gerente. Ele restaurou o status do clube guiando-o para a final da Copa da Coreia de 2017 e vencendo por 2 a 1 no agregado contra o Busan IPark, o primeiro troféu do clube em cinco anos. Três anos depois, Kim também levou o Ulsan Hyundai à vitória na Liga dos Campeões da AFC de 2020, derrotando o clube iraniano Persepolis por 2 a 1 na final. Júnior Negrão marcou dois gols para garantir o segundo troféu da Liga dos Campeões da AFC do clube, qualificando-se posteriormente para a Copa do Mundo de Clubes da FIFA de 2020, onde o Ulsan terminou em sexto.</p><p>Para a temporada de 2021, o Ulsan Hyundai contratou o ex-jogador internacional da Coreia do Sul Hong Myung-bo como técnico. Ele guiou o clube a títulos consecutivos da liga nas temporadas de 2022 e 2023. O título de 2022 foi conquistado de forma dramática, já que o Ulsan derrotou o rival Jeonbuk Hyundai Motors, vencedor das cinco temporadas anteriores da K League 1, com dois gols marcados pelo internacional húngaro Martin Ádám nos acréscimos. Foi o primeiro título da liga do Ulsan desde 2005.</p><p>Em dezembro de 2023, a Ulsan Hyundai mudou seu nome para Ulsan HD e revelou um novo emblema antes da temporada de 2024. O "HD" vem da empresa-mãe do clube "HD Hyundai", que foi renomeada de Hyundai Heavy Industries Holdings em dezembro de 2022. Em abril de 2024, a equipe se classificou para a Copa do Mundo de Clubes da FIFA de 2025 ao derrotar o Yokohama F. Marinos em casa na primeira mão da semifinal da Liga dos Campeões da AFC de 2023/24.</p><p>Com a saída de Hong Myung-bo para orientar a seleção sul-coreana, o Ulsan HD contratou o ex-técnico da seleção da Malásia, Kim Pan-gon, em 28 de julho de 2024. Ele guiou com sucesso a equipe ao terceiro título consecutivo do campeonato em 2024, estabelecendo assim uma dinastia.</p>';
        if (DD12) DD12.innerHTML = '<h5>Ulsan Hyundai Campeão da Liga dos Campeões da AFC 2020</h5><p color="white">O time sul-coreano Ulsan Hyundai ergue o troféu após conquistar o título da Liga dos Campeões da AFC em 2020, em uma emocionante final contra o Persepolis do Irã</p>';
        if (DD13) DD13.innerHTML = '<h5>Ulsan Hyundai Campeão da K League 1 de 2023</h5><p color="white"> O Ulsan Hyundai, equipe sul-coreana, celebra a conquista do título da K League 1 de 2023, erguendo o troféu em meio a uma chuva de confetes</p>';
        if (DD14) DD14.innerHTML = '<h5>Ulsan Hyundai Vencedor da Liga dos Campeões da AFC 2020</h5><p color="white">O Ulsan Hyundai, da Coreia do Sul, festeja sua vitória na Liga dos Campeões da AFC de 2020, com jogadores usando máscaras e celebrando com o troféu e confetes</p>';
        if (DD15) DD15.textContent = 'Como Classificou';
        if (DD16) DD16.textContent = 'O Ulsan que já havia vencido a Liga dos Campeões da AFC em 2012 e 2020 fez outras grandes campanhas na competição entre 2021 e 2023, se classificando assim para o Mundial de Clubes FIFA 25 através do ranking da AFC. O time confirmou sua participação com uma vitória em casa por 1 a 0 no jogo de ida da semifinal do torneio de 2023-24 contra o Yokohama F. Marinos, do Japão, em abril. A equipe também chegou à semifinal do torneio na edição de 2020-21, subindo ainda mais no ranking asiático de clubes. O jogador que garantiu a vaga foi Lee Donggyeong naquele primeiro jogo contra o Yokohama: o meia-atacante, que voltou à equipe após passar a temporada anterior no Schalke 04 da Alemanha, fez o único gol da partida com um chute preciso de pé esquerdo.';
        if (DD17) DD17.textContent = 'Elenco';
        if (DD18) DD18.textContent = 'Títulos';
        if (T1) T1.textContent = 'Goleiro';
        if (T2) T2.textContent = 'Goleiro';
        if (T3) T3.textContent = 'Goleiro';
        if (T4) T4.textContent = 'Defensor';
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
        if (T16) T16.textContent = 'Meio-Campo';
        if (T17) T17.textContent = 'Meio-Campo';
        if (T18) T18.textContent = 'Meio-Campo';
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
        if (T29) T29.textContent = 'Meio-Campo';
        if (T30) T30.textContent = 'Meio-Campo';
        if (T31) T31.textContent = 'Meio-Campo';
        if (T32) T32.textContent = 'Atacante';
        if (T33) T33.textContent = 'Atacante';
        localStorage.setItem('LG', 'false');
        BT2.classList.remove('ativo');
        BT1.classList.add('ativo');
    } else if (view === true) {
        if (DD1) DD1.textContent = 'Home';
        if (DD2) DD2.textContent = 'About Us';
        if (DD3) DD3.textContent = 'Teams';
        if (DD4) DD4.textContent = 'Suggestions';
        if (DD5) DD5.textContent = 'Contact';
        if (DD6) DD6.textContent = 'Tigers of Korea';
        if (DD7) DD7.textContent = 'History';
        if (DD8) DD8.textContent = 'The club was founded on December 6, 1983, as Hyundai Horang-i, with the tiger as its mascot (horangi means tiger in Korean). Its original franchise area was Incheon and Gyeonggi province. They joined the professional K League from the 1984 season. While they finished their debut season in 3rd place, the team\'s forward, Baek Jong-chul, became the K League\'s top scorer, netting 16 goals in 28 matches. They won their first professional trophy in 1986, winning the Professional Football Championship, which is the origin of the Korean League Cup. From the 1987 season, the club moved its franchise from Incheon and Gyeonggi to Gangwon. In the 1988 season, they finished the season as league runners-up. From the 1990 season, the club moved its franchise to Ulsan, where the headquarters of several branches of the owner company Hyundai are located, in Gangwon province. Former South Korea striker Cha Bum-kun took over as manager in the 1991 season, leading the club to the league runners-up spot in his debut season. However, he failed to win any trophies and was replaced by Ko Jae-wook after the 1994 season. Under Ko Jae-wook, Ulsan won their second Korean League Cup trophy in 1995, which was his debut season as Ulsan\'s manager. Ulsan won their first league title in 1996, defeating Suwon Samsung Bluewings 3-2 on aggregate in the championship playoffs. The club then entered a long trophy drought in terms of league trophies, although they won their third Korean League Cup trophy in 1998, defeating Bucheon SK 2-1 on aggregate in the finals.';
        if (DD9) DD9.textContent = 'Return of the Golden Generation';
        if (DD10) DD10.innerHTML = '<div>All rights reserved &#169; WebDev 2025 </div>';
        if (DD11) DD11.innerHTML = '<p>On November 21, 2016, Ulsan Hyundai hired Kim Do-hoon as their manager. He restored the club\'s status by guiding them to the 2017 Korean FA Cup final and winning 2-1 on aggregate against Busan IPark, the club\'s first trophy in five years. Three years later, Kim also led Ulsan Hyundai to victory in the 2020 AFC Champions League, defeating Iranian club Persepolis 2-1 in the final. Júnior Negrão scored two goals to secure the club\'s second AFC Champions League trophy, subsequently qualifying for the 2020 FIFA Club World Cup, where Ulsan finished sixth.</p><p>For the 2021 season, Ulsan Hyundai hired former South Korea international Hong Myung-bo as manager. He guided the club to back-to-back league titles in the 2022 and 2023 seasons. The 2022 title was won dramatically, as Ulsan defeated rivals Jeonbuk Hyundai Motors, winners of the previous five K League 1 seasons, with two goals scored by Hungarian international Martin Ádám in added time. It was Ulsan\'s first league title since 2005.</p><p>In December 2023, Ulsan Hyundai changed its name to Ulsan HD and unveiled a new emblem ahead of the 2024 season. "HD" comes from the club\'s parent company "HD Hyundai", which was renamed from Hyundai Heavy Industries Holdings in December 2022. In April 2024, the team qualified for the 2025 FIFA Club World Cup by defeating Yokohama F. Marinos at home in the first leg of the 2023/24 AFC Champions League semi-final.</p><p>With Hong Myung-bo\'s departure to coach the South Korean national team, Ulsan HD hired former Malaysia national team coach Kim Pan-gon on July 28, 2024. He successfully guided the team to their third consecutive league title in 2024, thus establishing a dynasty.</p>';
        if (DD12) DD12.innerHTML = '<h5>Ulsan Hyundai AFC Champions League 2020 Winners</h5><p style="color:white">The South Korean team Ulsan Hyundai lifts the trophy after winning the 2020 AFC Champions League title in a thrilling final against Persepolis of Iran.</p>';
        if (DD13) DD13.innerHTML = '<h5>Ulsan Hyundai K League 1 2023 Champions</h5><p style="color:white">Ulsan Hyundai, the South Korean team, celebrates winning the 2023 K League 1 title, raising the trophy amidst a shower of confetti.</p>';
        if (DD14) DD14.innerHTML = '<h5>Ulsan Hyundai AFC Champions League 2020 Winners</h5><p style="color:white">Ulsan Hyundai, from South Korea, celebrates their victory in the 2020 AFC Champions League, with players wearing masks and celebrating with the trophy and confetti.</p>';
        if (DD15) DD15.textContent = 'How They Qualified';
        if (DD16) DD16.textContent = 'Ulsan, who had already won the AFC Champions League in 2012 and 2020, had other great campaigns in the competition between 2021 and 2023, thus qualifying for the FIFA Club World Cup 2025 through the AFC ranking. The team confirmed their participation with a 1-0 home win in the first leg of the 2023-24 tournament semi-final against Japan\'s Yokohama F. Marinos in April. The team also reached the semi-final of the tournament in the 2020-21 edition, climbing further in the Asian club ranking. The player who secured the spot was Lee Dong-gyeong in that first match against Yokohama: the attacking midfielder, who returned to the team after spending the previous season at Schalke 04 in Germany, scored the only goal of the match with a precise left-footed shot.';
        if (DD17) DD17.textContent = 'Squad';
        if (DD18) DD18.textContent = 'Titles';
        if (T1) T1.textContent = 'Goalkeeper';
        if (T2) T2.textContent = 'Goalkeeper';
        if (T3) T3.textContent = 'Goalkeeper';
        if (T4) T4.textContent = 'Defender';
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
        if (T16) T16.textContent = 'Midfielder';
        if (T17) T17.textContent = 'Midfielder';
        if (T18) T18.textContent = 'Midfielder';
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
        if (T29) T29.textContent = 'Midfielder';
        if (T30) T30.textContent = 'Midfielder';
        if (T31) T31.textContent = 'Midfielder';
        if (T32) T32.textContent = 'Forward';
        if (T33) T33.textContent = 'Forward';
        localStorage.setItem('LG', 'true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}
