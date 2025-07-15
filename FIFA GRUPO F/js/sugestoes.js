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
        for (let i = 0; i < h1.length; i++){
        h1[i].style.color = 'white';
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
        for (let i = 0; i < h1.length; i++){
        h1[i].style.color = 'black';
        }
        for (let i = 1; i < p1.length; i++){
                p1[i].style.color = 'black';
        }
        FT.style.backgroundColor = 'black';
        FT.style.color = 'rgb(248, 248, 255)';
        h1.style.color = 'rgb(39, 39, 39)';
        cc.style.color = 'rgb(39, 39, 39)';
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







document.addEventListener('DOMContentLoaded', () => {
    
    const messagesList = document.getElementById('messagesList');
   
    const clearAllMessagesButton = document.getElementById('clearAllMessages');
   
    const adminMessage = document.getElementById('adminMessage');

    // --- Função Principal: Carregar Mensagens ---
    /**
     * Carrega as mensagens salvas no localStorage e as exibe na página.
     */
    function loadMessages() {
        // Tenta obter as mensagens do localStorage usando a chave 'contactSubmissions'.
        // JSON.parse() converte a string JSON de volta para um array JavaScript.
        // Se não houver dados (null), inicializa com um array vazio [].
        const messages = JSON.parse(localStorage.getItem('sugestoes')) || [];

        // Limpa qualquer conteúdo anterior na lista de mensagens para evitar duplicação.
        messagesList.innerHTML = '';

        // Verifica se existem mensagens para exibir.
        if (messages.length === 0) {
            // Se não houver mensagens, exibe uma mensagem indicando isso.
            messagesList.innerHTML = '<p class="no-messages-yet">Nenhuma mensagem recebida ainda.</p>';
            // Desabilita o botão de limpar todas as mensagens se não houver nada para limpar.
            clearAllMessagesButton.style.display = 'none';
            return; // Sai da função
        }

        // Habilita o botão de limpar todas as mensagens se houver mensagens.
        clearAllMessagesButton.style.display = 'block';

        // Itera sobre cada mensagem no array de mensagens.
        messages.forEach((message, index) => {
            // Cria um novo elemento div para cada item de mensagem.
            const messageItem = document.createElement('div');
            // Adiciona a classe CSS 'message-item' para estilização.
            messageItem.classList.add('message-item');

            // Formata a data para uma leitura mais amigável.
            // Cria um objeto Date a partir da string ISO (timestamp).
            const date = new Date(message.timestamp);
            // Formata a data e hora em um formato local.
            const formattedDate = date.toLocaleString('pt-BR', {
                year: 'numeric', month: 'long', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });

            // Define o conteúdo HTML do item da mensagem usando template literals (backticks `).
            // Isso permite inserir variáveis diretamente na string.
            messageItem.innerHTML = `
                <div class="message-header">
                    <div class="message-info">
                        <strong>Nome:</strong> ${message.nome}<br>
                        <strong>Sobrenome:</strong> ${message.sobrenome}<br>
                        <strong>Email:</strong> ${message.email}
                    </div>
                    <span class="message-date">${formattedDate}</span>
                </div>
                <div class="message-body">
                    <strong>Mensagem:</strong><br>${message.sugestao}
                </div>
                <button class="delete-button" data-index="${index}">Excluir</button>
            `;

            // Adiciona um 'event listener' ao botão "Excluir" dentro de cada item de mensagem.
            // Quando o botão é clicado, a função 'deleteMessage' é chamada com o índice da mensagem.
            const deleteButton = messageItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                // Confirmação antes de excluir
                if (confirm('Tem certeza que deseja excluir esta mensagem?')) {
                    deleteMessage(index); // Chama a função de exclusão
                }
            });

            // Adiciona o item de mensagem (div) à lista de mensagens na página.
            messagesList.appendChild(messageItem);
        });
    }

    // --- Função: Excluir Mensagem Individual ---
    /**
     * Exclui uma mensagem específica do localStorage com base no seu índice.
     * @param {number} indexToDelete - O índice da mensagem a ser excluída no array.
     */
    function deleteMessage(indexToDelete) {
        // Obtém as mensagens atuais do localStorage.
        let messages = JSON.parse(localStorage.getItem('sugestoes')) || [];

        // Remove a mensagem do array usando o método splice().
        // splice(índice_de_início, número_de_elementos_a_remover)
        messages.splice(indexToDelete, 1);

        // Salva o array de mensagens atualizado de volta no localStorage.
        localStorage.setItem('sugestoes', JSON.stringify(messages));

        // Recarrega a lista de mensagens na página para refletir a exclusão.
        loadMessages();
        // Exibe uma mensagem de sucesso.
        displayAdminMessage('Mensagem excluída com sucesso!', 'success');
    }

    // --- Função: Limpar Todas as Mensagens ---
    /**
     * Limpa todas as mensagens do localStorage.
     */
    function clearAllMessages() {
        // Pede confirmação ao usuário antes de excluir todas as mensagens.
        if (confirm('Tem certeza que deseja EXCLUIR TODAS as mensagens? Esta ação é irreversível!')) {
            // Remove o item 'contactSubmissions' do localStorage.
            localStorage.removeItem('sugestoes');
            // Recarrega a lista (que agora estará vazia).
            loadMessages();
            // Exibe uma mensagem de sucesso.
            displayAdminMessage('Todas as mensagens foram limpas!', 'success');
        }}
    

    // Adiciona o 'event listener' ao botão "Limpar Todas as Mensagens".
    clearAllMessagesButton.addEventListener('click', clearAllMessages);

    // --- Função: Exibir Mensagens de Administração ---
    /**
     * Exibe mensagens de status (sucesso ou erro) na página de administração.
     * @param {string} msg - A mensagem de texto a ser exibida.
     * @param {string} type - O tipo da mensagem ('success' ou 'error').
     */
    function displayAdminMessage(msg, type) {
        adminMessage.textContent = msg;
        adminMessage.className = `admin-message ${type}`; // Adiciona classes CSS para estilização
        adminMessage.style.display = 'block'; // Torna a mensagem visível

        // Esconde a mensagem automaticamente após 5 segundos.
        setTimeout(() => {
            adminMessage.style.display = 'none';
            adminMessage.textContent = '';
            adminMessage.className = 'admin-message'; // Remove as classes de tipo
        }, 5000);
    }

    // --- Chamada Inicial ---
    // Chama a função loadMessages assim que a página é carregada para exibir as mensagens existentes.
    loadMessages();
});
