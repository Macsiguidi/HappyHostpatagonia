document.addEventListener("DOMContentLoaded", function () {
  // Inicializar Flatpickr
  const dateInput = document.getElementById("rango-fechas");
  if (dateInput) {
    const isMobile = window.innerWidth <= 768;  // 👈 Detectamos si es mobile

    flatpickr(dateInput, {
      mode: "range",
      dateFormat: "Y-m-d",
      locale: "es",
      minDate: "today",
      showMonths: isMobile ? 1 : 2,  // 👈 MOSTRAR 1 EN MOBILE Y 2 EN DESKTOP
      disableMobile: true
    });
  }
});

  // Selector de huéspedes
  const cantidadSpan = document.getElementById("cantidad");
  const inputHuespedes = document.getElementById("huespedes");
  const btnMas = document.getElementById("mas");
  const btnMenos = document.getElementById("menos");

  if (btnMas && btnMenos && cantidadSpan && inputHuespedes) {
    btnMas.onclick = () => {
      let cant = parseInt(inputHuespedes.value);
      cant = isNaN(cant) ? 0 : cant;
      if (cant < 15) cant++;
      cantidadSpan.textContent = cant;
      inputHuespedes.value = cant;
      cantidadSpan.classList.remove("placeholder");
    };

    btnMenos.onclick = () => {
      let cant = parseInt(inputHuespedes.value);
      cant = isNaN(cant) ? 0 : cant;
      if (cant > 1) {
        cant--;
        cantidadSpan.textContent = cant;
        inputHuespedes.value = cant;
        cantidadSpan.classList.remove("placeholder");
      } else {
        cant = 0;
        cantidadSpan.textContent = "Huéspedes";
        inputHuespedes.value = cant;
        cantidadSpan.classList.add("placeholder");
      }
    };

    if (inputHuespedes.value === "0") {
      cantidadSpan.textContent = "Huéspedes";
      cantidadSpan.classList.add("placeholder");
    }
  }

  // Captura del formulario principal
  const form = document.getElementById("form-busqueda");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const rango = document.getElementById("rango-fechas").value.split(" a ");
      const checkin = rango[0];
      const checkout = rango[1];
      const huespedes = document.getElementById("huespedes").value;

      if (!checkin || !checkout) {
        alert("Por favor seleccioná un rango de fechas completo.");
        return;
      }

      localStorage.setItem("checkin", checkin);
      localStorage.setItem("checkout", checkout);
      localStorage.setItem("huespedes", huespedes);

      window.location.href = `alojamientos.html?checkin=${checkin}&checkout=${checkout}&huespedes=${huespedes}`;

    });
  }

  // Cartel reserva exitosa
  const cartel = document.getElementById("cartel-reserva");
  if (cartel && localStorage.getItem("reservaExitosa") === "true") {
    cartel.style.display = "flex";
    setTimeout(() => {
      cartel.style.display = "none";
      localStorage.removeItem("reservaExitosa");
    }, 5000);
  }

  // Menú hamburguesa
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu-principal ul");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
});


