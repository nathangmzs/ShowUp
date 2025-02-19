document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificação simples de usuário e senha
    if (username === "ngomezskkj" && password === "12345678") {
        window.location.href = "homepage.html"; // Redireciona para a homepage
    } else {
        alert("Usuário ou senha inválidos!");
    }
});
