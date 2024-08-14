// script.js
window.onload = function() {
    // Mensagem de boas-vindas falada
    const welcomeMessage = new SpeechSynthesisUtterance("Parabéns mamãe querida, te amo mais que tudo e que Deus te abençoe sempre");
    welcomeMessage.lang = "pt-BR";
    window.speechSynthesis.speak(welcomeMessage);

    // Animação dos corações
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.style.animation = `bounce ${1 + index * 0.5}s infinite alternate`;
        }, index * 300);
    });

    // Função para alternar a visibilidade das seções
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mudança de cor do fundo ao longo do tempo
    let colors = ['#ffcccc', '#ffe6e6', '#ffcce6', '#ffe6cc'];
    let i = 0;
    setInterval(() => {
        document.body.style.background = `linear-gradient(135deg, ${colors[i]}, ${colors[(i + 1) % colors.length]})`;
        i = (i + 1) % colors.length;
    }, 5000);

    // Modo noturno
    const footer = document.querySelector('footer');
    footer.addEventListener('dblclick', () => {
        document.body.classList.toggle('night-mode');
    });
};

// Modo noturno CSS
document.body.classList.toggle('night-mode', {
    background: '#333',
    color: '#fff'
});

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('background-audio');
    var playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(function() {
            // Audio started successfully
        }).catch(function(error) {
            // Autoplay was prevented
            console.log('Autoplay prevenido: o usuário deve interagir primeiro.');
        });
    }
});