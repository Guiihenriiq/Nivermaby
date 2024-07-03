function playMusic() {
    // Você pode alterar a URL para a música desejada
    let audio = new Audio('musicas.mp3');
    audio.play();
}

function showBouquet() {
    let bouquet = document.getElementById('buquê de flores');
    bouquet.classList.remove('hidden');
    bouquet.classList.add('visible');
}
