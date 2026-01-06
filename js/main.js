const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Cantidad de pixeles a desplazar (ancho de tarjeta + gap)
const scrollAmount = 320; 

nextBtn.addEventListener('click', () => {
    track.scrollLeft += scrollAmount;
});

prevBtn.addEventListener('click', () => {
    track.scrollLeft -= scrollAmount;
});