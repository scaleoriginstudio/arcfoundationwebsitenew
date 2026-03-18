/* blog.js */

/* Category filter */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.blog-card').forEach(card => {
      const cat = card.dataset.category;
      card.classList.toggle('hidden', filter !== 'all' && cat !== filter);
    });
  });
});

/* Newsletter */
document.getElementById('nl-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  this.innerHTML = '<p style="font-size:0.9rem;color:var(--grey-600);padding:0.5rem 0;">You\'re subscribed. We\'ll be in touch.</p>';
});
