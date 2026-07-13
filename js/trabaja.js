// js/trabaja.js

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll('.js-interactive-carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const arrowsContainer = carousel.querySelector('.carousel-navigation-arrows');
        const slides = carousel.querySelectorAll('.carousel-slide');

        if (!track || slides.length === 0) return;

        // 1. GENERAR PUNTITOS DINÁMICAMENTE SEGÚN LA CANTIDAD DE FOTOS
        if (dotsContainer) {
            dotsContainer.innerHTML = ''; // Limpiamos por las dudas
            slides.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                
                // Si hacen clic en un puntito, el carrusel se desplaza a esa foto
                dot.addEventListener('click', () => {
                    track.scrollTo({
                        left: track.offsetWidth * i,
                        behavior: 'smooth'
                    });
                });
                dotsContainer.appendChild(dot);
            });
        }

        // 2. GENERAR FLECHAS DE NAVEGACIÓN PARA WEB
        // 2. GENERAR FLECHAS DE NAVEGACIÓN PARA WEB (UNIFICADAS CON EL CATÁLOGO)
		if (arrowsContainer) {
			arrowsContainer.innerHTML = `
				<button class="carousel-arrow prev" aria-label="Anterior">&#8249;</button>
				<button class="carousel-arrow next" aria-label="Siguiente">&#8250;</button>
			`;

			const prevBtn = arrowsContainer.querySelector('.prev');
			const nextBtn = arrowsContainer.querySelector('.next');

			prevBtn.addEventListener('click', () => {
				track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
			});

			nextBtn.addEventListener('click', () => {
				track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
			});
		}

        // 3. ESCUCHAR EL SCROLL PARA PRENDER/APAGAR LOS PUNTITOS EN TIEMPO REAL
        track.addEventListener('scroll', () => {
            const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
            if (dots.length === 0) return;

            const index = Math.round(track.scrollLeft / track.offsetWidth);
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        });
    });
});