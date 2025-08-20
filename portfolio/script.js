// Scroll suave
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Animação das seções usando IntersectionObserver
const sections = document.querySelectorAll(".animated-section");

const observerOptions = {
    root: null,           // observa a tela toda
    rootMargin: "0px",
    threshold: 0.1        // 10% da seção visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target); // para de observar após animar
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Carrossel de frases
const frases = document.querySelectorAll('.frase');
let indice = 0;

function mostrarFrase() {
    frases.forEach((f, i) => f.classList.remove('show'));
    frases[indice].classList.add('show');
    indice = (indice + 1) % frases.length;
}

// Mostrar primeira frase imediatamente
mostrarFrase();

// Mudar a cada 3 segundos
setInterval(mostrarFrase, 3000);
