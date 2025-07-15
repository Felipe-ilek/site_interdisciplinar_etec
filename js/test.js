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
    const p1 = document.getElementsByTagName('label');
    const FT = document.getElementsByTagName('footer')[0];
    const cc = document.getElementsByClassName('text-center')[0];

    if (verifica == true) {
        boxwhite1.classList.add('dark');
        thm.classList.add('dark');
        thm.innerHTML = '<img src="img/dark_mode.svg" onclick="darktheme(false)">'
        for (let i = 0; i < h3.length; i++) {
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
        for (let i = 0; i < h3.length; i++) {
            h3[i].style.color = 'black';
        }
        for (let i = 0; i < p1.length; i++) {
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
        
        if (DD10) DD10.innerHTML = '<div>Todos os direitos reservados &#169; WebDev 2025 </div>';
        localStorage.setItem('LG', 'false');
        BT2.classList.remove('ativo');
        BT1.classList.add('ativo');
    } else if (view === true) {
        if (DD1) DD1.textContent = 'Home';
        if (DD2) DD2.textContent = 'About Us';
        if (DD3) DD3.textContent = 'Teams';
        if (DD4) DD4.textContent = 'Suggestions';
        if (DD5) DD5.textContent = 'Contact';

        if (DD10) DD10.innerHTML = '<div>All rights reserved &#169; WebDev 2025 </div>';
        localStorage.setItem('LG', 'true');
        BT1.classList.remove('ativo');
        BT2.classList.add('ativo');
    }
    seachtheme();
}

function incluirsugestao() {
  let innome = document.getElementById("innome");
  let insobrenome = document.getElementById("insobrenome");
  let inemail = document.getElementById("inemail");
  let imsugestao = document.getElementById("imsugestao");

  let nome = innome.value.trim();
  let sobrenome = insobrenome.value.trim();
  let email = inemail.value.trim();
  let sugestao = imsugestao.value.trim();

  if (!nome || !sobrenome || !email || !sugestao) {
    alert("Preencha todos os campos.");
    innome.focus();
    return;
  }

  // Recupera o array de sugestões já salvo no localStorage (ou cria um vazio)
  let sugestoes = JSON.parse(localStorage.getItem("sugestoes") || "[]");

  // Adiciona a nova sugestão ao array
  sugestoes.push({
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    sugestao: sugestao,
     timestamp: new Date().toISOString()
  });

  // Salva o array atualizado como JSON no localStorage
  localStorage.setItem("sugestoes", JSON.stringify(sugestoes));

  alert("Sugestão salva com sucesso!");

  // Opcional: limpar os campos após salvar
  innome.value = "";
  insobrenome.value = "";
  inemail.value = "";
  imsugestao.value = "";
}

let btApostar = document.getElementById("buttonenviar");
btApostar.addEventListener("click", incluirsugestao);



