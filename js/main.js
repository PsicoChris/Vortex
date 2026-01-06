const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    // Desplaza el ancho de una tarjeta + el gap
    const cardWidth = track.querySelector('.discipline-card').offsetWidth + 25;
    track.scrollLeft += cardWidth;
});

prevBtn.addEventListener('click', () => {
    const cardWidth = track.querySelector('.discipline-card').offsetWidth + 25;
    track.scrollLeft -= cardWidth;
});