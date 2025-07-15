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
    const h3 = document.getElementsByTagName('h3');
    const FT = document.getElementsByTagName('footer')[0];
    
    if (verifica==true){
        boxwhite1.classList.add('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/dark_mode.svg" onclick="darktheme(false)">'
        for (let i = 0; i < h3.length; i++){
        h3[i].style.color = 'white';
        }
        for (let i = 0; i < h1.length; i++){
        h1[i].style.color = 'white';
        }
        FT.style.backgroundColor = 'rgb(13, 13, 41)';
        FT.style.color = 'rgb(248, 248, 255)';
        h1.style.color = 'rgb(248, 248, 255)';
        localStorage.setItem('TH','true');
    }else if (verifica==false){
        boxwhite1.classList.remove('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/light_mode.svg" onclick="darktheme(true)">'
        for (let i = 2; i < h3.length; i++){
        h3[i].style.color = 'black';
        }
        for (let i = 0; i < h1.length; i++){
        h1[i].style.color = 'black';
        }
        FT.style.backgroundColor = 'black';
        FT.style.color = 'rgb(248, 248, 255)';
        h1.style.color = 'rgb(39, 39, 39)';
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
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
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
        if (DD10) DD10.innerHTML = '<div>All rights reserved &#169; WebDev 2025 </div>';
        localStorage.setItem('LG','true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}
