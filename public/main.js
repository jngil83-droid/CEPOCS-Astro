// ==========================================
// PROYECTOS (Lógica restaurada)
// ==========================================
const proyectosData = [
  { titulo: "Promover la producción agroecológica y el desarrollo socioeconómico a través de la actividad agropecuaria de los/las pequeños/as campesinos/as en la provincia de Montecristi, R.D.", fecha: "2025", monto: 71830, localizacion: "Provincia de Montecristi, República Dominicana", resumen: "Este proyecto tiene como objetivo fortalecer la soberanía alimentaria y la producción agroecológica de alimentos en comunidades campesinas de Montecristi. Se impulsará la producción de hortalizas, la crianza de ganado ovicaprino y la capacitación en técnicas sostenibles, contribuyendo así al desarrollo socioeconómico de las familias productoras.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item"><img src="https://i.postimg.cc/JG4ymtv2/Manos-unidas.png" alt="Manos Unidas" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Manos Unidas</span></div>' },
  { titulo: "El cacao agroecológico: instrumento de empoderamiento de la mujer y de las comunidades de la Cordillera Septentrional, RD", fecha: "2024", monto: 444617, localizacion: "Los Hidalgos, Guananico, Altamira", resumen: "Intervención en el marco de la cooperación feminista, alineada con el ODS 5. Se incluyó fortalecimiento del liderazgo feminista, puesta en funcionamiento de una Unidad de Procesamiento de Cacao gestionada por mujeres, mejora de capacidades para la comercialización y producción agrícola agroecológica.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/xTbkqdVs/Logo.png" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item aecid"><img src="https://i.postimg.cc/YS5rRHtw/AECID-HORIZONTAL-CMYK-COLOR.png" alt="AECID" width="60" height="auto" loading="lazy"><span class="entidad-nombre">AECID</span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div>' },
  { titulo: "Producción agroecológica y participación de la mujer en comunidades marginadas. Provincia Valverde.", fecha: "2023", monto: 35542, localizacion: "Distrito Municipal de Paradero (La Cayota, El Aguacate, La Lomota)", resumen: "Proyecto socioproductivo que incrementó los ingresos de las productoras en un 25%, reduciendo la pobreza. Se fortaleció a Alcaldías Municipales y Ministerios de Agricultura y Medio Ambiente.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/TYxJqDDj/Logo-favicon-CEPOCS.webp" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item"><img src="https://i.postimg.cc/JG4ymtv2/Manos-unidas.png" alt="Manos Unidas" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Manos Unidas</span></div><div class="entidad-item"><img src="https://i.postimg.cc/Pr11Ww45/Dm-PAradero.jpg" alt="Ayuntamiento Paradero" width="40" height="auto" loading="lazy"><span class="entidad-nombre">Ayuntamiento Paradero</span></div>' },
  { titulo: "Empoderamiento de las mujeres a través de la mejora de la transformación y comercialización del café en Paradero, RD", fecha: "2022", monto: 249687, localizacion: "Distrito Municipal de Paradero", resumen: "Se acompañó a las mujeres de La Cayota en su proceso de empoderamiento individual y colectivo, a través de la creación de un centro de transformación y comercialización del café.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/TYxJqDDj/Logo-favicon-CEPOCS.webp" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item aecid"><img src="https://i.postimg.cc/YS5rRHtw/AECID-HORIZONTAL-CMYK-COLOR.png" alt="AECID" width="60" height="auto" loading="lazy"><span class="entidad-nombre">AECID</span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div><div class="entidad-item"><img src="https://i.postimg.cc/Pr11Ww45/Dm-PAradero.jpg" alt="Ayuntamiento Paradero" width="40" height="auto" loading="lazy"><span class="entidad-nombre">Ayuntamiento Paradero</span></div>' },
  { titulo: "Intercambio entre Alcaldías Municipales España/República Dominicana", fecha: "2022", monto: 9500, localizacion: "Madrid; Andalucía; Castilla la Mancha (España)", resumen: "Alcaldes, director de Mancomunidad y representantes de la sociedad civil dominicana visitaron España para reunirse con representantes políticos y sociales.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/TYxJqDDj/Logo-favicon-CEPOCS.webp" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre"><i>CEPOCS</i></span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div><div class="entidad-item"><img src="https://i.postimg.cc/wTDDXmVM/Gobierno-de-Rep-Dominicana-(cropped).png" alt="Mancomunidad" width="50" height="auto" loading="lazy"><span class="entidad-nombre">Mancomunidad</span></div>' },
  { titulo: "Aumentar la productividad y los ingresos agrícolas con enfoque agroecológico", fecha: "2020", monto: 217315, localizacion: "Esperanza, Altamira, Navarrete", resumen: "Se contribuyó al desarrollo económico mediante el aumento de la productividad de familias agrícolas. Se incluyó capacitación técnica y fábrica de zumos y mermeladas gestionada por mujeres rurales.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/TYxJqDDj/Logo-favicon-CEPOCS.webp" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item aecid"><img src="https://i.postimg.cc/YS5rRHtw/AECID-HORIZONTAL-CMYK-COLOR.png" alt="AECID" width="60" height="auto" loading="lazy"><span class="entidad-nombre">AECID</span></div><div class="entidad-item prodiversa"><img src="https://i.postimg.cc/jd8tk8vJ/LOGO-PRODIVERSA-FINAL.png" alt="Prodiversa" width="60" height="auto" loading="lazy"><span class="entidad-nombre">Prodiversa</span></div><div class="entidad-item"><img src="https://i.postimg.cc/Pr11Ww45/Dm-PAradero.jpg" alt="Ayuntamiento Paradero" width="40" height="auto" loading="lazy"><span class="entidad-nombre">Ayuntamiento Paradero</span></div>' },
  { titulo: "Gestión de Residuos Sólidos en 9 municipios y 12 Distritos", fecha: "2021", monto: 56000, localizacion: "Navarrete, Villa González, Guananíco, Esperanza, Los Hidalgos, Villa Isabela, Luperón, Imbert, Altamira", resumen: "Se contribuyó al derecho a vivir en un ambiente sano, planificando e implementando la mejora de la Política de Gestión de Residuos Sólidos.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/TYxJqDDj/Logo-favicon-CEPOCS.webp" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre"><i>CEPOCS</i>/span></div><div class="entidad-item"><img src="https://i.postimg.cc/wTDDXmVM/Gobierno-de-Rep-Dominicana-(cropped).png" alt="Mancomunidad" width="50" height="auto" loading="lazy"><span class="entidad-nombre">Mancomunidad</span></div>' },
  { titulo: "Aumento de la productividad del cacao y mejora de las plantaciones", fecha: "2020", monto: 110000, localizacion: "Navarrete", resumen: "Se contribuyó al desarrollo organizational de los productores. Gran resultado: constitución de la marca, fábrica y empresa \'Chocolala\'.", entidades: '<div class="entidad-item"><img src="https://i.postimg.cc/TYxJqDDj/Logo-favicon-CEPOCS.webp" alt="CEPOCS" width="40" height="auto" loading="lazy"><span class="entidad-nombre">CEPOCS</span></div><div class="entidad-item bid"><img src="https://i.postimg.cc/D8yWFmRK/Logo-BID-Espanol.png" alt="BID" width="70" height="auto" loading="lazy"><span class="entidad-nombre">BID</span></div><div class="entidad-item"><img src="https://i.postimg.cc/4ymc14wd/logo-cnc-web-2line-scaled-(1).png" alt="CNC" width="50" height="auto" loading="lazy"><span class="entidad-nombre">CNC</span></div>' }
];

proyectosData.sort((a,b) => b.fecha - a.fecha || b.monto - a.monto);

function renderProyectos(limit) {
  const container = document.getElementById('proyectosContainer');
  if (!container) return;
  container.innerHTML = '';
  proyectosData.slice(0, limit).forEach(p => {
    const card = document.createElement('div'); card.className = 'proyecto-card';
    card.innerHTML = `<div class="proyecto-header"><h3>${p.titulo}</h3><div class="proyecto-fecha">${p.fecha} | ${p.monto.toLocaleString('es-ES')} €</div></div><div class="proyecto-info"><p><strong>Localización:</strong> ${p.localizacion}</p><p><strong>Resumen:</strong> ${p.resumen}</p><div class="entidades-participantes"><strong>ENTIDADES PARTICIPANTES:</strong>${p.entidades}</div></div>`;
    container.appendChild(card);
  });
}

let proyectosLimit = 5;
renderProyectos(proyectosLimit);
const toggleProy = document.getElementById('toggleProyectosBtn');
if (toggleProy) {
  toggleProy.onclick = () => {
    proyectosLimit = (proyectosLimit === 5) ? proyectosData.length : 5;
    renderProyectos(proyectosLimit);
    toggleProy.textContent = (proyectosLimit === 5) ? 'Ver más' : 'Ver menos';
  };
}
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 60) {
    header.classList.add("scroll-activo");
  } else {
    header.classList.remove("scroll-activo");
  }
});

// ... resto de tu código (Menú, Scroll, Cookies, Privacidad) sigue igual ...

// =============================
// Menú accesible (móvil + teclado)
// =============================
function initAccessibleMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const overlay = document.getElementById('menuOverlay');
  const dropdownToggles = document.querySelectorAll('.has-sub > .nav-link');

  const resetSubmenus = () => {
    document.querySelectorAll('.nav-item.active').forEach((item) => item.classList.remove('active'));
    dropdownToggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
  };

  const setMenuState = (expanded) => {
    if (menuToggle) menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (navLinks) navLinks.classList.toggle('open', expanded);
    if (overlay) overlay.classList.toggle('show', expanded);
    document.body.classList.toggle('menu-open', expanded);
    if (!expanded) resetSubmenus();
    if (expanded && navLinks) {
      const first = navLinks.querySelector('.nav-link');
      first?.focus();
    }
  };

  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!expanded);
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      const isTopLevelToggle = link.classList.contains('nav-link') && link.parentElement?.classList.contains('has-sub');
      if (window.innerWidth <= 760 && !isTopLevelToggle) {
        setMenuState(false);
      }
    });
  });

  overlay?.addEventListener('click', () => setMenuState(false));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setMenuState(false);
      menuToggle?.focus();
      document.querySelectorAll('.nav-item.active').forEach((it) => it.classList.remove('active'));
      dropdownToggles.forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) {
      setMenuState(false);
      document.querySelectorAll('.nav-item.active').forEach((it) => it.classList.remove('active'));
    }
  });

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener('click', (event) => {
      if (window.innerWidth <= 760) {
        event.preventDefault();
        const item = toggle.parentElement;
        if (!item) return;
        const isActive = item.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');

        if (isActive) {
          dropdownToggles.forEach((otherToggle) => {
            const otherItem = otherToggle.parentElement;
            if (otherItem && otherItem !== item) {
              otherItem.classList.remove('active');
              otherToggle.setAttribute('aria-expanded', 'false');
            }
          });
        }
      }
    });

    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  });

  // Left/Right navigation across top-level links
  const topLinks = Array.from(document.querySelectorAll('.nav-list > .nav-item > .nav-link'));
  topLinks.forEach((link, idx) => {
    link.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        topLinks[(idx + 1) % topLinks.length].focus();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        topLinks[(idx - 1 + topLinks.length) % topLinks.length].focus();
      } else if (e.key === 'ArrowDown') {
        const parent = link.parentElement;
        const submenu = parent?.querySelector('.sub-list a');
        if (submenu) { e.preventDefault(); submenu.focus(); }
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccessibleMenu);
} else {
  initAccessibleMenu();
}