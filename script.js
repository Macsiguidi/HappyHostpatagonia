function toggleMenu() {
    const nav = document.getElementById('mobileMenu');
    if (!nav) return;

    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';

    if (!isOpen) {
      const links = nav.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          nav.style.display = 'none';
        });
      });
    }
}
  

  let imagenes = [
    "imagenes/casa1/img1.jpg",
    "imagenes/casa1/img2.jpg",
    "imagenes/casa1/img3.jpg",
    "imagenes/casa1/img4.jpg",
    "imagenes/casa1/img5.jpg"
  ];
  
//CArrusel imagenes casa 1
const imagenesCalafate1 = [
  "imagenes/Casa 1/casa1_img1.jpg",
  "imagenes/Casa 1/casa1_img2.jpg",
  "imagenes/Casa 1/casa1_img3.jpg",
  "imagenes/Casa 1/casa1_img4.jpg",
  "imagenes/Casa 1/casa1_img5.jpg",
  "imagenes/Casa 1/casa1_img6.jpg"
];

let indiceCalafate1 = 0;

function cambiarImagenCalafate1(direccion) {
  indiceCalafate1 += direccion;

  if (indiceCalafate1 < 0) {
    indiceCalafate1 = imagenesCalafate1.length - 1;
  } else if (indiceCalafate1 >= imagenesCalafate1.length) {
    indiceCalafate1 = 0;
  }

  const imagen = document.querySelector('#calafate1 .img-principal');
  imagen.src = imagenesCalafate1[indiceCalafate1];
}

//CArrusel imagenes casa 2
const imagenesCalafate2 = [
  "imagenes/Casa 2/casa2_img1.jpg",
  "imagenes/Casa 2/casa2_img2.jpg",
  "imagenes/Casa 2/casa2_img3.jpg",
  "imagenes/Casa 2/casa2_img4.jpg",
  "imagenes/Casa 2/casa2_img5.jpg",
  "imagenes/Casa 2/casa2_img6.jpg"
];

let indiceCalafate2 = 0;

function cambiarImagenCalafate2(direccion) {
  indiceCalafate2 += direccion;

  if (indiceCalafate2 < 0) {
    indiceCalafate2 = imagenesCalafate2.length - 1;
  } else if (indiceCalafate2 >= imagenesCalafate2.length) {
    indiceCalafate2 = 0;
  }

  const imagen = document.querySelector('#calafate2 .img-principal');
  imagen.src = imagenesCalafate2[indiceCalafate2];
}

//CArrusel imagenes casa 3
const imagenesCalafate3 = [
  "imagenes/Casa 3/casa3_img1.jpg",
  "imagenes/Casa 3/casa3_img2.jpg",
  "imagenes/Casa 3/casa3_img3.jpg",
  "imagenes/Casa 3/casa3_img4.jpg",
  "imagenes/Casa 3/casa3_img5.jpg",
  "imagenes/Casa 3/casa3_img6.jpg"
];

let indiceCalafate3 = 0;

function cambiarImagenCalafate3(direccion) {
  indiceCalafate3 += direccion;

  if (indiceCalafate3 < 0) {
    indiceCalafate3 = imagenesCalafate3.length - 1;
  } else if (indiceCalafate3 >= imagenesCalafate3.length) {
    indiceCalafate3 = 0;
  }

  const imagen = document.querySelector('#calafate3 .img-principal');
  imagen.src = imagenesCalafate3[indiceCalafate3];
}

  
//CArrusel imagenes casa 4
const imagenesCalafate4 = [
  "imagenes/Casa 4/casa4_img1.jpg",
  "imagenes/Casa 4/casa4_img2.jpg",
  "imagenes/Casa 4/casa4_img3.jpg",
  "imagenes/Casa 4/casa4_img4.jpg",
  "imagenes/Casa 4/casa4_img5.jpg",
  "imagenes/Casa 4/casa4_img6.jpg"
];

let indiceCalafate4 = 0;

function cambiarImagenCalafate4(direccion) {
  indiceCalafate4 += direccion;

  if (indiceCalafate4 < 0) {
    indiceCalafate4 = imagenesCalafate4.length - 1;
  } else if (indiceCalafate4 >= imagenesCalafate4.length) {
    indiceCalafate4 = 0;
  }

  const imagen = document.querySelector('#calafate4 .img-principal');
  imagen.src = imagenesCalafate4[indiceCalafate4];
}

//CArrusel imagenes casa 5
const imagenesCalafate5 = [
  "imagenes/Casa 5/casa5_img1.jpg",
  "imagenes/Casa 5/casa5_img2.jpg",
  "imagenes/Casa 5/casa5_img3.jpg",
  "imagenes/Casa 5/casa5_img4.jpg",
  "imagenes/Casa 5/casa5_img5.jpg",
  "imagenes/Casa 5/casa5_img6.jpg"
];

let indiceCalafate5 = 0;

function cambiarImagenCalafate5(direccion) {
  indiceCalafate5 += direccion;

  if (indiceCalafate5 < 0) {
    indiceCalafate5 = imagenesCalafate5.length - 1;
  } else if (indiceCalafate5 >= imagenesCalafate5.length) {
    indiceCalafate5 = 0;
  }

  const imagen = document.querySelector('#calafate5 .img-principal');
  imagen.src = imagenesCalafate5[indiceCalafate5];
}
//CArrusel imagenes casa 6
const imagenesCalafate6 = [
  "imagenes/Casa 6/casa6_img1.jpg",
  "imagenes/Casa 6/casa6_img2.jpg",
  "imagenes/Casa 6/casa6_img3.jpg",
  "imagenes/Casa 6/casa6_img4.jpg",
  "imagenes/Casa 6/casa6_img5.jpg",
  "imagenes/Casa 6/casa6_img6.jpg"
];

let indiceCalafate6 = 0;

function cambiarImagenCalafate6(direccion) {
  indiceCalafate6 += direccion;

  if (indiceCalafate6 < 0) {
    indiceCalafate6 = imagenesCalafate6.length - 1;
  } else if (indiceCalafate6 >= imagenesCalafate6.length) {
    indiceCalafate6 = 0;
  }

  const imagen = document.querySelector('#calafate6 .img-principal');
  imagen.src = imagenesCalafate6[indiceCalafate6];
}

//CArrusel imagenes casa 7
const imagenesCalafate7 = [
  "imagenes/Casa 7/casa7_img1.jpg",
  "imagenes/Casa 7/casa7_img2.jpg",
  "imagenes/Casa 7/casa7_img3.jpg",
  "imagenes/Casa 7/casa7_img4.jpg",
  "imagenes/Casa 7/casa7_img5.jpg",
  "imagenes/Casa 7/casa7_img6.jpg"
];

let indiceCalafate7 = 0;

function cambiarImagenCalafate7(direccion) {
  indiceCalafate7 += direccion;

  if (indiceCalafate7 < 0) {
    indiceCalafate7 = imagenesCalafate7.length - 1;
  } else if (indiceCalafate7 >= imagenesCalafate7.length) {
    indiceCalafate7 = 0;
  }

  const imagen = document.querySelector('#calafate7 .img-principal');
  imagen.src = imagenesCalafate7[indiceCalafate7];
}


//CArrusel imagenes cruz del sur 4
const imagenesCruz4 = [
  "imagenes/Cruz del Sur 4/cds4_2.jpg",
  "imagenes/Cruz del Sur 4/cds4_3.jpg",
  "imagenes/Cruz del Sur 4/cds4_4.jpg",
  "imagenes/Cruz del Sur 4/cds4_5.jpg",
  "imagenes/Cruz del Sur 4/cds4_6.jpg",
  "imagenes/Cruz del Sur 4/cds4_7.jpg"
];

let indiceCruz4 = 0;

function cambiarImagenCruz4(direccion) {
  indiceCruz4 += direccion;

  if (indiceCruz4 < 0) {
    indiceCruz4 = imagenesCruz4.length - 1;
  } else if (indiceCruz4 >= imagenesCruz4.length) {
    indiceCruz4 = 0;
  }

  const imagen = document.querySelector('#cruz4 .img-principal');
  imagen.src = imagenesCruz4[indiceCruz4];
}

//CArrusel imagenes cruz del sur 5 
const imagenesCruz5 = [
  "imagenes/Cruz del Sur 5/cds5_3.jpg",
  "imagenes/Cruz del Sur 5/cds5_4.jpg",
  "imagenes/Cruz del Sur 5/cds5_5.jpg",
  "imagenes/Cruz del Sur 5/cds5_6.jpg",
  "imagenes/Cruz del Sur 5/cds5_7.jpg",
  "imagenes/Cruz del Sur 5/cds5_8.jpg"
];

let indiceCruz5 = 0;

function cambiarImagenCruz5(direccion) {
  indiceCruz5 += direccion;

  if (indiceCruz5 < 0) {
    indiceCruz5 = imagenesCruz5.length - 1;
  } else if (indiceCruz5 >= imagenesCruz5.length) {
    indiceCruz5 = 0;
  }

  const imagen = document.querySelector('#cruz5 .img-principal');
  imagen.src = imagenesCruz5[indiceCruz5];
}

//CArrusel imagenes NILIDAS
const imagenesNilidas = [
  "imagenes/Casa NIlidas/nilidas1.jpg",
  "imagenes/Casa NIlidas/nilidas2.jpg",
  "imagenes/Casa NIlidas/nilidas3.jpg",
  "imagenes/Casa NIlidas/nilidas4.jpg",
  "imagenes/Casa NIlidas/nilidas5.jpg",
  "imagenes/Casa NIlidas/nilidas6.jpg",
  "imagenes/Casa NIlidas/nilidas7.jpg",
  "imagenes/Casa NIlidas/nilidas8.jpg",
  "imagenes/Casa NIlidas/nilidas9.jpg",
  "imagenes/Casa NIlidas/nilidas10.jpg",
  "imagenes/Casa NIlidas/nilidas11.jpg",
  "imagenes/Casa NIlidas/nilidas12.jpg",
  "imagenes/Casa NIlidas/nilidas13.jpg",
  "imagenes/Casa NIlidas/nilidas14.jpg",
  "imagenes/Casa NIlidas/nilidas15.jpg",
  "imagenes/Casa NIlidas/nilidas16.jpg",
  "imagenes/Casa NIlidas/nilidas17.jpg",
];

let indiceNilidas = 0;

function cambiarImagenNilidas(direccion) {
  indiceNilidas += direccion;

  if (indiceNilidas < 0) {
    indiceNilidas = imagenesNilidas.length - 1;
  } else if (indiceNilidas >= imagenesNilidas.length) {
    indiceNilidas = 0;
  }

  const imagen = document.querySelector('#nilidas .img-principal');
  imagen.src = imagenesNilidas[indiceNilidas];
}
//CArrusel imagenes Paisajismo-domo
const imagenesPaisajismo = [
  "imagenes/paisajismo/paisajismo1.jpg",
  "imagenes/paisajismo/paisajismo2.jpg",
  "imagenes/paisajismo/paisajismo3.jpg",
  "imagenes/paisajismo/paisajismo4.jpg",
  "imagenes/paisajismo/paisajismo5.jpg",
  "imagenes/paisajismo/paisajismo6.jpg",
  "imagenes/paisajismo/paisajismo7.jpg",
  "imagenes/paisajismo/paisajismo8.jpg",
  "imagenes/paisajismo/paisajismo9.jpg",
  "imagenes/paisajismo/paisajismo10.jpg",
];

let indicePaisajismo = 0;

function cambiarImagenPaisajismo(direccion) {
  indicePaisajismo += direccion;

  if (indicePaisajismo < 0) {
    indicePaisajismo = imagenesPaisajismo.length - 1;
  } else if (indicePaisajismo >= imagenesPaisajismo.length) {
    indicePaisajismo = 0;
  }

  const imagen = document.querySelector('#Paisajismo .img-principal');
  imagen.src = imagenesPaisajismo[indicePaisajismo];
}

//CArrusel imagenes LA Gurisa
const imagenesGurisa = [
  "imagenes/La Gurisa/gurisa1.jpg",
  "imagenes/La Gurisa/gurisa2.jpg",
  "imagenes/La Gurisa/gurisa3.jpg",
  "imagenes/La Gurisa/gurisa4.jpg",
  "imagenes/La Gurisa/gurisa5.jpg",
  "imagenes/La Gurisa/gurisa6.jpg",
  "imagenes/La Gurisa/gurisa7.jpg",
  "imagenes/La Gurisa/gurisa8.jpg",
  "imagenes/La Gurisa/gurisa9.jpg",
  "imagenes/La Gurisa/gurisa10.jpg",
  "imagenes/La Gurisa/gurisa11.jpg",
  "imagenes/La Gurisa/gurisa12.jpg",
  "imagenes/La Gurisa/gurisa13.jpg",
  "imagenes/La Gurisa/gurisa14.jpg",
  "imagenes/La Gurisa/gurisa15.jpg",
  "imagenes/La Gurisa/gurisa16.jpg",
  "imagenes/La Gurisa/gurisa17.jpg",

];

let indiceGurisa = 0;

function cambiarImagenGurisa(direccion) {
  indiceGurisa += direccion;

  if (indiceGurisa < 0) {
    indiceGurisa = imagenesGurisa.length - 1;
  } else if (indiceGurisa >= imagenesGurisa.length) {
    indiceGurisa = 0;
  }

  const imagen = document.querySelector('#gurisa .img-principal');
  imagen.src = imagenesGurisa[indiceGurisa];
}

document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.querySelector('.contenedor-tarjetas');
  const tarjetas = Array.from(contenedor.querySelectorAll('.tarjeta-alojamiento'));

  // Mezclar tarjetas
  for (let i = tarjetas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tarjetas[i], tarjetas[j]] = [tarjetas[j], tarjetas[i]];
  }

  // Reinsertar tarjetas en orden aleatorio
  tarjetas.forEach(tarjeta => contenedor.appendChild(tarjeta));
});


//pop up promociones<script>
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-promocion");
  popup.style.display = "flex"; // siempre se muestra al entrar
});

function cerrarPopup() {
  const popup = document.getElementById("popup-promocion");
  popup.style.display = "none";
}


// buscador movil
  flatpickr("#checkin", {
    dateFormat: "Y-m-d",
    allowInput: true
  });

  flatpickr("#checkout", {
    dateFormat: "Y-m-d",
    allowInput: true
  });

