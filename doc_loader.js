document.querySelectorAll('div, a').forEach(e => e.addEventListener('click', async (ew) => {
    ew.preventDefault();
    document.querySelector('iframe').src = ew.target.id;
}));
