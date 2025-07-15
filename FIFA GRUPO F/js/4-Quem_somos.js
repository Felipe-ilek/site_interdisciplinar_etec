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
    const h5 = document.getElementsByTagName('h5');
    const h3 = document.getElementsByTagName('h3');
    const h2 = document.getElementsByTagName('h2');
    const p1 = document.getElementsByTagName('p');
    const FT = document.getElementsByTagName('footer')[0];
    const cont = document.getElementsByClassName('containerQM');    
    if (verifica===true){
        boxwhite1.classList.add('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/dark_mode.svg" onclick="darktheme(false)">'
        for (let i = 2; i < h3.length; i++){
        h3[i].style.color = 'white';}
        for (let i = 0; i < cont.length; i++){
            cont[i].backgroundColor = 'white';}
        for (let i = 0; i < p1.length; i++) {
            p1[i].style.color = 'white';
        }
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = 'white';
        }
        for (let i = 0; i < h5.length; i++) {
            h5[i].style.color = 'rgb(98, 98, 255)';
        }
        FT.style.backgroundColor = 'rgb(13, 13, 41)';
        FT.style.color = 'rgb(248, 248, 255)';
        localStorage.setItem('TH','true');
    }else if (verifica===false){
        boxwhite1.classList.remove('dark');
        thm.classList.add('dark');
        thm.innerHTML='<img src="img/light_mode.svg" onclick="darktheme(true)">'
        for (let i = 2; i < h3.length; i++){
        h3[i].style.color = 'black';}
        for (let i = 0; i < cont.length; i++){
            cont[i].backgroundColor = 'black';}
        for (let i = 0; i < p1.length; i++) {
            p1[i].style.color = 'black';
        }
        for (let i = 0; i < h2.length; i++) {
            h2[i].style.color = 'rgb(31,29,29)';
        }
        for (let i = 0; i < h5.length; i++) {
            h5[i].style.color = 'rgb(31,29,29)';
        }
        FT.style.backgroundColor = 'black';
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
    const DD12 = document.getElementById('D12');
    const DD13 = document.getElementById('D13');
    const DD14 = document.getElementById('D14');
    const DD15 = document.getElementById('D15');
    const DD16 = document.getElementById('D16');
    const DD17 = document.getElementById('D17');
    const DD18 = document.getElementById('D18');
    const DD19 = document.getElementById('D19');
    const DD20 = document.getElementById('D20');
    const DD21 = document.getElementById('D21');
    const DD22 = document.getElementById('D22');
    const DD23 = document.getElementById('D23');
    const DD24 = document.getElementById('D24');
    const DD25 = document.getElementById('D25');

if (view===false) {
        if (DD1) DD1.textContent = 'Início';
        if (DD2) DD2.textContent = 'Quem somos';
        if (DD3) DD3.textContent = 'Times';
        if (DD4) DD4.textContent = 'Sugestões';
        if (DD5) DD5.textContent = 'Contato';
        if (DD6) DD6.textContent = 'Quem Somos :';
        if (DD7) DD7.innerHTML = '<p>A <strong>WebDev</strong>,é uma empresa especializada em desenvolvimento de sistemas e aplicações web,comprometida em transformar ideias em soluções digitais funcionais, modernas e eficientes. Atuamos com foco na criação de plataformas robustas, sites institucionais, sistemas personalizados e e-commerces, oferecendo performance, segurança e uma excelente experiência ao usuário.<p>';
        if (DD8) DD8.textContent = 'Nossa Missão :';
        if (DD9) DD9.innerHTML = '<p>A missão da <strong>WebDev</strong>, Atender à expectativa do cliente com qualidade, respeitando os prazos, as normas e a expectativa de cada cliente.</p>';
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
        if (DD11) DD11.textContent = 'Nossa Equipe';
        if (DD12) DD12.textContent = 'Desenvolvedor Front-End';
        if (DD13) DD13.textContent = 'UI/UX Designer';
        if (DD14) DD14.textContent = 'Desenvolvedor Back-End';
        if (DD15) DD15.textContent = 'Gerente de Projetos';
        if (DD16) DD16.textContent = 'Sobre a FIFA:';
        if (DD17) DD17.textContent = 'Política de Privacidade';
        if (DD18) DD18.textContent = 'Sustentabilidade';
        if (DD19) DD19.textContent = 'Iniciativas';
        if (DD20) DD20.textContent = 'Código de Ética';
        if (DD21) DD21.textContent = 'Código de Ética para Terceiros';
        if (DD22) DD22.textContent = 'Lei de Proteção de Dados (Brasil)';
        if (DD23) DD23.textContent = 'Proteção de Dados (FIFA)';
        if (DD24) DD24.textContent = 'Regulamento Mundial de Clubes';
        if (DD25) DD25.textContent = 'Estatuto da FIFA';
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
        if (DD6) DD6.textContent = 'About Us:';
        if (DD7) DD7.innerHTML = '<p><strong>WebDev</strong> is a company specializing in web system and application development, committed to transforming ideas into functional, modern, and efficient digital solutions. We focus on creating robust platforms, institutional websites, custom systems, and e-commerce solutions, offering performance, security, and an excellent user experience.<p>';
        if (DD8) DD8.textContent = 'Our Mission:';
        if (DD9) DD9.innerHTML = '<p>The mission of <strong>WebDev</strong> is to meet client expectations with quality, respecting deadlines, standards, and the unique needs of each client.</p>';
        if (DD10) DD10.innerHTML = '<div>All rights reserved &#169; WebDev 2025 </div>';
        if (DD11) DD11.textContent = 'Our Team';
        if (DD12) DD12.textContent = 'Front-End Developer';
        if (DD13) DD13.textContent = 'UI/UX Designer';
        if (DD14) DD14.textContent = 'Back-End Developer';
        if (DD15) DD15.textContent = 'Project Manager';
        if (DD16) DD16.textContent = 'About FIFA:';
        if (DD17) DD17.textContent = 'Privacy Policy';
        if (DD18) DD18.textContent = 'Sustainability';
        if (DD19) DD19.textContent = 'Initiatives';
        if (DD20) DD20.textContent = 'Code of Ethics';
        if (DD21) DD21.textContent = 'Third-Party Code of Ethics';
        if (DD22) DD22.textContent = 'Data Protection Law (Brazil)';
        if (DD23) DD23.textContent = 'Data Protection (FIFA)';
        if (DD24) DD24.textContent = 'Club World Cup Regulations';
        if (DD25) DD25.textContent = 'FIFA Statutes';
        localStorage.setItem('LG','true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}

