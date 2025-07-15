window.onload = function(){

    let savelg=localStorage.getItem('LG');
    if (savelg == 'true' ){
        ptbr(true);
    }else if(savelg == 'false'){
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
    const h3 = document.getElementsByTagName('h3');
    const FT = document.getElementsByTagName('footer')[0];
    const p1 = document.getElementsByTagName('p');
    const bxt = document.getElementsByClassName('boxesT')[0];    
    if (verifica===true){
        boxwhite1.classList.add('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/dark_mode.svg" onclick="darktheme(false)">'
        for (let i = 2; i < h3.length; i++){
        h3[i].style.color = 'white';}
         for (let i = 0; i < p1.length; i++) {
            p1[i].style.color = 'white';
        }
        bxt.style.backgroundColor = 'rgb(6, 16, 31)';
        FT.style.backgroundColor = 'rgb(13, 13, 41)';
        FT.style.color = 'rgb(248, 248, 255)';
        localStorage.setItem('TH','true');
    }else if (verifica===false){
        boxwhite1.classList.remove('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/light_mode.svg" onclick="darktheme(true)">'
        for (let i = 2; i < h3.length; i++){
        h3[i].style.color = 'black';}
        for (let i = 0; i < p1.length; i++) {
            p1[i].style.color = 'black';
        }
        FT.style.backgroundColor = 'black';
        bxt.style.backgroundColor = '';
        FT.style.color = 'rgb(248, 248, 255)';
        localStorage.setItem('TH','false');
    }
}


function ptbr(view){
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

if (view===false) {
        if (DD1) DD1.textContent = 'Início';
        if (DD2) DD2.textContent = 'Quem somos';
        if (DD3) DD3.textContent = 'Times';
        if (DD4) DD4.textContent = 'Sugestões';
        if (DD5) DD5.textContent = 'Contato';
        if (DD6) DD6.textContent = 'NOTÍCIAS';
        if (DD7) DD7.textContent = 'Um Novo Formato, Emoções Redobrada';
        if (DD8) DD8.textContent = 'Pela primeira vez, o Mundial de Clubes será disputado em um formato expandido, contando com 32 equipes dos quatro cantos do globo. Essa mudança histórica significa mais jogos, mais confrontos entre estilos diferentes e, claro, muito mais chances de ver seu time do coração levantar a taça. Esqueça o formato antigo; agora, a competição será uma verdadeira maratona de talentos, com os melhores clubes de cada continente se enfrentando em busca da glória máxima.';
        if (DD9) DD9.textContent = 'Nossos Times Selecionados';
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
        if (DD11) DD11.textContent = 'Proximos Jogos';
        localStorage.setItem('LG','false');
        BT2.classList.remove('ativo');
        BT1.classList.add('ativo');

}
else if(view===true) {
         if (DD1) DD1.textContent = 'Home';
        if (DD2) DD2.textContent = 'About Us';
        if (DD3) DD3.textContent = 'Teams';
        if (DD4) DD4.textContent = 'Suggestions';
        if (DD5) DD5.textContent = 'Contact';
        if (DD6) DD6.textContent = 'NEWS';
        if (DD7) DD7.textContent = 'A New Format, Double the Excitement';
        if (DD8) DD8.textContent = 'For the first time, the Club World Cup will be played in an expanded format, featuring 32 teams from the four corners of the globe. This historic change means more games, more clashes between different styles, and of course, many more chances to see your favorite team lift the trophy. Forget the old format; now, the competition will be a true marathon of talent, with the best clubs from each continent facing off in pursuit of ultimate glory.';
        if (DD9) DD9.textContent = 'Our Selected Teams';
        if (DD10) DD10.innerHTML = '<div>All rights reserved &#169; WebDev 2025 </div>';
        if (DD11) DD11.textContent = 'Upcoming Games'
        localStorage.setItem('LG','true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}

