
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    btnTopo.style.display = window.scrollY > 300 ? "block" : "none";
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


const form = document.getElementById("formContato");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length < 3) {
        alert("Digite um nome válido.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return;
    }

    if (mensagem.length < 5) {
        alert("A mensagem deve ter pelo menos 5 caracteres.");
        return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
});
