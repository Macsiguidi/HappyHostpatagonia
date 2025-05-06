window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);

  const propertyId     = params.get('propertyId');
  const roomTypeId     = params.get('roomTypeId');
  const checkInDate    = params.get('checkInDate');
  const checkOutDate   = params.get('checkOutDate');
  const numberOfGuests = params.get('numberOfGuests');
  const totalPrice     = params.get('totalPrice');

  // Completar inputs ocultos
  document.getElementById('propertyId').value      = propertyId;
  document.getElementById('roomTypeId').value      = roomTypeId;
  document.getElementById('checkInDate').value     = checkInDate;
  document.getElementById('checkOutDate').value    = checkOutDate;
  document.getElementById('numberOfGuests').value  = numberOfGuests;
  document.getElementById('totalPrice').value      = totalPrice;

  // Mostrar resumen
  document.getElementById('fechasReserva').textContent    = `${checkInDate} → ${checkOutDate}`;
  document.getElementById('huespedesReserva').textContent = numberOfGuests;
  document.getElementById('precioReserva').textContent    = `$ ${totalPrice}`;

  // Mapas de nombres e imágenes
  const nombreMap = {
    '601552': 'Calafate 1',
    '601707': 'Calafate 2',
    '601708': 'Calafate 3',
    '601710': 'Calafate 4',
    '601711': 'Calafate 5',
    '601712': 'Calafate 6',
    '601713': 'Calafate 7',
    '601717': 'Cruz del Sur 4',
    '601714': 'Cruz del Sur 5',
    '601719': 'Las Nilidas',
    '648950': 'Gurisa',
    '601720': 'Paisajismo'
  };

  const imagenMap = {
    '601552': 'propiedades/casa1/casa1_img1.jpg',
    '601707': 'propiedades/casa2/casa2_img3.jpg',
    '601708': 'propiedades/casa3/casa3_img1.jpg',
    '601710': 'propiedades/casa4/casa4_img2.jpg',
    '601711': 'propiedades/casa5/casa5_img3.jpg',
    '601712': 'propiedades/casa6/casa6_img1.jpg',
    '601713': 'propiedades/casa7/casa7_img1.jpg',
    '601717': 'propiedades/cds4/cds4_1.jpg',
    '601714': 'propiedades/cds5/cds5_2.jpg',
    '601719': 'propiedades/nilidas/nilidas1.jpg',
    '648950': 'propiedades/gurisa/gurisa2.jpg',
    '601720': 'propiedades/paisajismo/paisajismo1.jpg'
  };

  // Mostrar nombre e imagen
  const nombre = nombreMap[propertyId] || 'Alojamiento';
  document.getElementById('nombrePropiedad').textContent = nombre;
  document.getElementById('imagenPropiedad').src = imagenMap[propertyId] || '';

  // También actualiza el título del header
  const headerTitulo = document.querySelector('.titulo-header');
  if (headerTitulo) {
    headerTitulo.textContent = nombre;
  }
});

// Enviar formulario
document.getElementById('formularioReserva').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    nombre: form.nombre.value,
    email: form.email.value,
    telefono: form.telefono.value,
    comentarios: form.comentarios.value,
    propertyId: form.propertyId.value,
    roomTypeId: form.roomTypeId.value,
    checkInDate: form.checkInDate.value,
    checkOutDate: form.checkOutDate.value,
    numberOfGuests: form.numberOfGuests.value,
    totalPrice: form.totalPrice.value
  };

  try {
    const response = await fetch('http://localhost:3000/enviar-reserva', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      localStorage.setItem('reservaExitosa', 'true');
      window.location.href = 'index.html';
    } else {
      alert('❌ Hubo un error al enviar la reserva.');
    }
  } catch (err) {
    console.error('Error:', err);
    alert('❌ No se pudo enviar el formulario.');
  }
});



