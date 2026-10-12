const PHONE = '5491159468220';

function waUrl(message){
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('[data-wa]').forEach(el => {
  const msg = el.dataset.wa || 'Hola, quiero consultar por la limpieza de tapizados de mi auto.';
  el.href = waUrl(msg);
  el.target = '_blank';
  el.rel = 'noopener';
});

const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name') || '';
    const phone = fd.get('phone') || '';
    const service = fd.get('service') || 'Limpieza de tapizados de auto';
    const detail = fd.get('detail') || '';
    const text = `Hola, soy ${name}. Quiero consultar por ${service}. Mi teléfono es ${phone}.${detail ? ` Detalles: ${detail}` : ''}`;
    window.open(waUrl(text), '_blank', 'noopener');
  });
}
