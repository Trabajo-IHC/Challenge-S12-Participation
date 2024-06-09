document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const input = toggle.parentElement.querySelector('input[type="text"]');
            input.style.display = input.style.display === 'block' ? 'none' : 'block';
            toggle.textContent = toggle.textContent === '+' ? '-' : '+';
        });
    });

    document.getElementById('logout').addEventListener('click', () => {
        alert('Cerrando sesión...');
        window.location.href = 'index.html';
    });
});
