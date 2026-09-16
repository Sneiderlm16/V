const accessForm = document.getElementById("access-form");
const accessScreen = document.getElementById("access-screen");
const welcomeScreen = document.getElementById("welcome-screen");
const site = document.getElementById("site");
const accessMessage = document.getElementById("access-message");
const openSite = document.getElementById("open-site");

const USERNAME = "Valentina";
const PASSWORD = "0910";

accessForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (
        username.toLowerCase() === USERNAME.toLowerCase() &&
        password === PASSWORD
    ) {
        accessScreen.style.display = "none";
        welcomeScreen.classList.add("show");
        accessMessage.textContent = "";
    } else {
        accessMessage.textContent = "Mmm... esa no es la clave mi amor ♡";
    }
});

openSite.addEventListener("click", function () {
    welcomeScreen.style.display = "none";
    site.classList.add("show");
    document.body.style.overflow = "auto";
});

const candle = document.getElementById("candle");
const flame = document.getElementById("flame");
const cakeMessage = document.getElementById("cake-message");

candle.addEventListener("click", function () {
    flame.classList.add("off");
    cakeMessage.textContent = "Deseo pedido. Ahora sí, sigue viendo tu regalo ♡";
    candle.disabled = true;
});

const garden = document.getElementById("lily-garden");

function createLily(x, y) {
    const lily = document.createElement("div");

    lily.className = "lily";

    lily.style.left = `${x}%`;
    lily.style.top = `${y}%`;

    lily.innerHTML = `
        <div class="lily-flower">✿</div>
        <div class="lily-stem"></div>
    `;

    lily.addEventListener("click", function () {
        lily.style.transform = "scale(1.12)";
        setTimeout(() => {
            lily.style.transform = "scale(1)";
        }, 180);
    });

    garden.appendChild(lily);
}

createLily(18, 58);
createLily(38, 45);
createLily(58, 60);
createLily(77, 48);

garden.addEventListener("click", function (event) {
    if (event.target.closest(".lily")) {
        return;
    }

    const rect = garden.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    if (y > 30) {
        createLily(x, y);
    }
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.08
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});