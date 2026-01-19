const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
}

const modeToggle = document.getElementById('modeToggle');
const body = document.body;

if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

if (modeToggle) {
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if(body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');
        let valid = true;

        [nombre, email, mensaje].forEach(el => el.style.borderColor = '#eee');

        if (!nombre.value) {
            nombre.style.borderColor = '#ff4444';
            valid = false;
        }
        if (!email.value || !email.value.includes('@')) {
            email.style.borderColor = '#ff4444';
            valid = false;
        }
        if (!mensaje.value) {
            mensaje.style.borderColor = '#ff4444';
            valid = false;
        }

        if (valid) {
            modal.classList.add('show');
            contactForm.reset();
        }
    });
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}