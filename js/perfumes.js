// js/perfumes.js

const perfumesData = [
  {
    slug: "alborada",
    nombre: "Alborada",
    familia: "Floral Blanco Luminoso",
    caracteristicas: ["Limpio", "Delicado"],
    teaser: "Es la mañana que entra sin pedir permiso.",
    descripcion: "La luz cae blanca sobre la piel, como una sábana recién tendida, y todo parece empezar de nuevo. No hay ruido, no hay exceso: sólo una calma limpia que acompaña cada gesto. Camina con naturalidad, sin necesidad de afirmarse: su presencia es clara, segura, inevitablemente femenina. Alborada es la sensación de estar en orden con una misma, de habitar el día con suavidad y convicción al mismo tiempo.",
    precios: {
      "50ml": "$59.000",
      "12.5ml": "$22.000"
    },
    medios: [
      { tipo: "imagen", ruta: "images/alborada_1.jpg", alt: "Frasco Alborada" },
      //{ tipo: "video", ruta: "images/alborada_1.mp4" },
    ]
  },
  {
    slug: "tentacion",
    nombre: "Tentación",
    familia: "Fruta Floral",
    caracteristicas: ["Frambuesa", "Rosa"],
    teaser: "Un instante de risa contenida.",
    descripcion: "La dulzura no es inocente, es consciente. Hay brillo, hay juego, pero también una elegancia que nunca se desarma. Es el contraste entre la fruta madura y la rosa perfecta: placer sin culpa, encanto sin exceso. Tentación vive en ese punto exacto donde lo delicioso se vuelve sofisticado, donde seducir es un acto natural, casi involuntario.",
    precios: {
      "50ml": "$59.000",
      "12.5ml": "$22.000"
    },
    medios: [
      { tipo: "imagen", ruta: "images/tentacion_1.jpg", alt: "Frasco Tentación" },
      //{ tipo: "video", ruta: "images/alborada_1.mp4" },
    ]
  },
  {
    slug: "niagara",
    nombre: "Niágara",
    familia: "Cítrico Frutal",
    caracteristicas: ["Ananá", "Frescura"],
    teaser: "El día avanza ligero.",
    descripcion: "Hay movimiento, aire, una energía que no pesa. Todo se siente fresco, actual, posible. Niágara es la sensación de caminar con el sol acompañando, de elegir sin dudar, de estar en el ritmo justo del presente. No necesita imponerse: brilla con naturalidad, como quien sabe que la frescura también puede ser elegante.",
    precios: {
      "50ml": "$59.000",
      "12.5ml": "$22.000"
    },
    medios: [
      { tipo: "imagen", ruta: "images/niagara_1.jpg", alt: "Frasco Niágara" },
      //{ tipo: "video", ruta: "images/alborada_1.mp4" },
    ]
  },
  {
    slug: "emberwood",
    nombre: "Emberwood",
    familia: "Amaderado Cremoso",
    caracteristicas: ["Sándalo Suave"],
    teaser: "El tiempo se desacelera.",
    descripcion: "Hay una calidez que envuelve, que sostiene, que no apura. Todo se vuelve cercano, íntimo, sereno. Emberwood es ese momento en el que el mundo baja el volumen y la elegancia se expresa en calma. No busca destacar: permanece. Y en esa permanencia, transmite una sofisticación profunda, silenciosa, casi meditativa.",
    precios: {
      "50ml": "$59.000", // Precio estandarizado según patrón del catálogo
      "12.5ml": "$22.000"
    },
    medios: [
      { tipo: "imagen", ruta: "images/emberwood_1.jpg", alt: "Frasco Emberwood" },
      //{ tipo: "video", ruta: "images/alborada_1.mp4" },
    ]
  },
  {
    slug: "old-money",
    nombre: "Old Money",
    familia: "Ambarado Especiado",
    caracteristicas: ["Profundo", "Elegante"],
    teaser: "Todo adquiere densidad.",
    descripcion: "La voz se vuelve más grave, el gesto más medido. Hay una elegancia que nace de la profundidad, de la experiencia, del dominio silencioso. Old Money es envolvente como una conversación que atrapa, como una mirada que sostiene. No es inmediato, es memorable. Deja una huella que habla de distinción, de fuerza tranquila, de masculinidad sofisticada.",
    precios: {
      "50ml": "$59.000",
      "12.5ml": "$22.000"
    },
    medios: [
      { tipo: "imagen", ruta: "images/old_money_1.jpg", alt: "Frasco Old Money" },
	  //{ tipo: "imagen", ruta: "images/old_money_2.jpg", alt: "Frasco Old Money" },
      //{ tipo: "video", ruta: "images/alborada_1.mp4" },
    ]
  },
  {
    slug: "sombrealis",
    nombre: "Sombrealis",
    familia: "Amaderado Moderno",
    caracteristicas: ["Madera oscura", "Limpia y refinada"],
    teaser: "La noche es limpia, ordenada, precisa.",
    descripcion: "Nada sobra, nada falta. La profundidad no es pesada, es controlada. Sombrealis es la experiencia del lujo sin ostentación, de la seguridad que no necesita demostrarse. Hay carácter, hay misterio, pero también una claridad moderna que lo mantiene actual. Es presencia firme, pulida, absolutamente consciente de su valor.",
    precios: {
      "50ml": "$59.000",
      "12.5ml": "$22.000"
    },
    medios: [
      { tipo: "imagen", ruta: "images/sombrealis_1.jpg", alt: "Frasco Sombrealis" },
      //{ tipo: "video", ruta: "images/alborada_1.mp4" },
    ]
  },
  {
    slug: "baqueano",
    nombre: "Baqueano",
    familia: "Cuero Amaderado",
    caracteristicas: ["Intenso", "Sobrio", "Sofisticado"],
    teaser: "Aquí no hay concesiones.",
    descripcion: "El carácter se impone con sobriedad, con una intensidad que no se diluye. Baqueano es la sensación de firmeza, de identidad clara, de decisiones tomadas sin titubeo. Es seco, elegante, poderoso. No busca agradar: se respeta. Y en ese respeto, se vuelve inconfundible.",
    precios: {
      "50ml": "$59.000",
      "12.5ml": "$22.000"
    },
    medios: [
      { tipo: "imagen", ruta: "images/baqueano_1.jpg", alt: "Frasco Baqueano" },
      { tipo: "video", ruta: "images/baqueano_2.mp4" },
    ]
  }
];

// Hacerlo accesible para nuestro script principal
window.perfumesData = perfumesData;