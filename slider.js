let slideIndex = 1;
const images = ["/img/1.webp", "/img/2.webp", "/img/3.webp", "/img/4.webp", "/img/5.webp"];

// Adiciona um evento de clique a cada imagem
const galleryImages = document.querySelectorAll('.gallery-image');
galleryImages.forEach((image, index) => {
    image.addEventListener('click', function () {
        slideIndex = index;
        openModal();
        showSlides();
    });
});

function openModal() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = "block";
}

function showSlides() {
    const modalImg = document.getElementById('modalImage');
    modalImg.src = images[slideIndex];
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= images.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }
    showSlides();
}

// Fecha o modal ao clicar no botão de fechar
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function () {
    const modal = document.getElementById('galleryModal');
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da imagem
window.onclick = function (event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
};