// js/catalogo.js

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("catalogo-container");

    if (typeof perfumesData === 'undefined' || !container) {
        console.error("No se encontraron los datos de los perfumes o el contenedor.");
        return;
    }

    // 1. Inyección Dinámica con Flechas de Navegación
    perfumesData.forEach(perfume => {
        const chapter = document.createElement("section");
        chapter.className = "fragrance-chapter";
        chapter.id = perfume.slug;
        chapter.setAttribute("data-perfume", perfume.nombre);

        let mediosHTML = '';
        const tieneMultiplesMedios = perfume.medios && perfume.medios.length > 1;

        if (perfume.medios && perfume.medios.length > 0) {
            perfume.medios.forEach(medio => {
                if (medio.tipo === "imagen") {
                    mediosHTML += `
                        <div class="carousel-slide">
                            <div class="placeholder-fallback">${perfume.nombre}</div>
                            <img src="${medio.ruta}" alt="${medio.alt || perfume.nombre}" class="perfume-media" loading="lazy" onerror="this.style.opacity='0'">
                        </div>`;
                } else if (medio.tipo === "video") {
                    mediosHTML += `
                        <div class="carousel-slide">
                            <video class="perfume-media" autoplay loop muted playsinline disablePictureInPicture>
                                <source src="${medio.ruta}" type="video/mp4">
                            </video>
                        </div>`;
                }
            });
        } else {
            mediosHTML = `
                <div class="carousel-slide">
                    <div class="placeholder-fallback">${perfume.nombre}</div>
                </div>`;
        }

        const featuresList = perfume.caracteristicas ? perfume.caracteristicas.join(", ") : "";

        // Insertamos los botones nav-btn solo si hay más de 1 medio
        chapter.innerHTML = `
            <div class="card-wrapper">
                <div class="carousel-container">
                    ${tieneMultiplesMedios ? `
                        <button class="nav-btn prev-btn" type="button" aria-label="Anterior">&#8249;</button>
                        <button class="nav-btn next-btn" type="button" aria-label="Siguiente">&#8250;</button>
                    ` : ''}
                    
                    <div class="carousel-track">
                        ${mediosHTML}
                    </div>
                    
                    <div class="carousel-dots">
                        ${tieneMultiplesMedios ? perfume.medios.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}"></span>`).join('') : ''}
                    </div>
                </div>
                
                <div class="perfume-header">
                    <h2 class="perfume-title">${perfume.nombre}</h2>
                    <p class="perfume-teaser">“${perfume.teaser}”</p>
                </div>

                <button class="discover-btn" type="button" aria-expanded="false">
                    Descubrir Fragancia
                </button>

                <div class="expandable-content" aria-hidden="true" style="display: none;">
                    <div class="details-inner">
                        <p class="perfume-story">${perfume.descripcion}</p>
                        
                        <div class="specs-table">
                            <div class="spec-row">
                                <span class="spec-label">Familia</span>
                                <span class="spec-value">${perfume.familia}</span>
                            </div>
                            <div class="spec-row">
                                <span class="spec-label">Notas clave</span>
                                <span class="spec-value">${featuresList}</span>
                            </div>
                        </div>

                        <div class="pricing-action-zone">
                            <div class="price-box">
                                <div class="price-item">
                                    <span class="price-size">50 ml</span>
                                    <span class="price-amount">${perfume.precios["50ml"] || ''}</span>
                                </div>
                                <div class="price-item">
                                    <span class="price-size">12.5 ml</span>
                                    <span class="price-amount">${perfume.precios["12.5ml"] || ''}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(chapter);

        // --- LÓGICA DE INTERACCIÓN DE LOS BOTONES DE NAVEGACIÓN ---
        const track = chapter.querySelector('.carousel-track');
        const prevBtn = chapter.querySelector('.prev-btn');
        const nextBtn = chapter.querySelector('.next-btn');

        if (tieneMultiplesMedios && track && prevBtn && nextBtn) {
            // Al hacer clic en Siguiente, desplazamos el ancho exacto del contenedor a la derecha
            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
            });

            // Al hacer clic en Anterior, desplazamos el ancho exacto a la izquierda
            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
            });
        }

        // Control de los acordeones (Descubrir)
        const btn = chapter.querySelector(".discover-btn");
        const content = chapter.querySelector(".expandable-content");

        if (btn && content) {
            btn.addEventListener("click", () => {
                const isExpanded = chapter.classList.contains("is-expanded");

                if (!isExpanded) {
                    document.querySelectorAll(".fragrance-chapter").forEach(ch => {
                        ch.classList.remove("is-expanded");
                        const chBtn = ch.querySelector(".discover-btn");
                        if (chBtn) chBtn.setAttribute("aria-expanded", "false");
                        const chContent = ch.querySelector(".expandable-content");
                        if (chContent) {
                            chContent.setAttribute("aria-hidden", "true");
                            chContent.style.display = "none";
                        }
                    });

                    chapter.classList.add("is-expanded");
                    btn.setAttribute("aria-expanded", "true");
                    content.setAttribute("aria-hidden", "false");
                    content.style.display = "block";
                    
                    setTimeout(() => {
                        content.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 50);

                } else {
                    chapter.classList.remove("is-expanded");
                    btn.setAttribute("aria-expanded", "false");
                    content.setAttribute("aria-hidden", "true");
                    content.style.display = "none";
                    
                    setTimeout(() => {
                        chapter.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 50);
                }
            });
        }

        // Vincular los puntitos del carrusel con el scroll real
        const dots = chapter.querySelectorAll('.dot');
        if (track && dots.length > 0) {
            track.addEventListener('scroll', () => {
                const index = Math.round(track.scrollLeft / track['offsetWidth']);
                dots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            });
        }
    });

    // Deep Links nativos
    function checkHashLink() {
        const hash = window.location.hash;
        if (hash) {
            const targetChapter = document.querySelector(hash);
            if (targetChapter) {
                const btn = targetChapter.querySelector(".discover-btn");
                if (btn) btn.click();
            }
        }
    }
    checkHashLink();
    window.addEventListener("hashchange", checkHashLink);

    // Botón de retorno al inicio
    const topBtn = document.getElementById("back-to-top");
    if (topBtn) {
        topBtn.addEventListener("click", () => {
            document.querySelectorAll(".fragrance-chapter").forEach(ch => {
                ch.classList.remove("is-expanded");
                const chBtn = ch.querySelector(".discover-btn");
                if (chBtn) chBtn.setAttribute("aria-expanded", "false");
                const chContent = ch.querySelector(".expandable-content");
                if (chContent) {
                    chContent.setAttribute("aria-hidden", "true");
                    chContent.style.display = "none";
                }
            });
            window.scrollTo({ top: 0, behavior: "smooth" });
            history.pushState("", document.title, window.location.pathname + window.location.search);
        });
    }
});