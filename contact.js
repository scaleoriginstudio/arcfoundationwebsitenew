/* contact.js */
document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.textContent = 'Sending…'; btn.disabled = true;
  const data = Object.fromEntries(new FormData(this));
  data._form = 'contact'; data._to = 'hanabiradesigns.in';
  try {
    await fetch('https://script.google.com/macros/s/YOUR_GOOGLE_SCRIPT_ID/exec', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(data), mode: 'no-cors'
    });
  } catch(_) {}
  this.style.display = 'none';
  document.getElementById('contact-success').style.display = 'block';
});