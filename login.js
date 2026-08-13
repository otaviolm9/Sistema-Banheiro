const senhaAcesso = "banheiro1234";
    
    var senhaDigitada = prompt("Digite a senha para acessar o painel de visualização:");
    if (senhaDigitada === senhaAcesso) {
        window.location.href = "control.html";
    } else {
        alert("Senha incorreta. Acesso negado.");
    }