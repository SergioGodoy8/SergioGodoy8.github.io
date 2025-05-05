// --- Validación de Formulario y Pop-up de confirmación ---
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let errores = [];

        if (!nombre) errores.push("El nombre es obligatorio.");
        if (!apellido) errores.push("El apellido es obligatorio.");
        if (!email) errores.push("El email es obligatorio.");
        if (!telefono) errores.push("El teléfono es obligatorio.");

        const errorDiv = document.getElementById("errores");
        errorDiv.innerHTML = "";

        if (errores.length > 0) {
            errores.forEach(error => {
                const p = document.createElement("p");
                p.textContent = error;
                p.classList.add("error");
                errorDiv.appendChild(p);
            });
        } else {
            alert("Formulario enviado correctamente. ¡Gracias por tu mensaje!");
            form.reset();
        }
    });

    // --- Modo Oscuro/Claro ---
    const toggle = document.getElementById("modo-toggle");
    const body = document.body;
    if (localStorage.getItem("modo") === "oscuro") {
        body.classList.add("oscuro");
        toggle.checked = true;
    }

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            body.classList.add("oscuro");
            localStorage.setItem("modo", "oscuro");
        } else {
            body.classList.remove("oscuro");
            localStorage.setItem("modo", "claro");
        }
    });

    // --- Contador de Visitas ---
    const contador = document.getElementById("contador-visitas");
    let visitas = localStorage.getItem("visitas") || 0;
    visitas++;
    localStorage.setItem("visitas", visitas);
    contador.textContent = `Visitas: ${visitas}`;

    // --- Temporizador de Entrega ---
    const countdown = document.getElementById("temporizador");
    const deadline = new Date("2025-05-05T23:59:59");

    function actualizarTemporizador() {
        const ahora = new Date();
        const diferencia = deadline - ahora;

        if (diferencia <= 0) {
            countdown.textContent = "¡Entrega finalizada!";
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferencia / 1000 / 60) % 60);
        const segundos = Math.floor((diferencia / 1000) % 60);

        countdown.textContent = `Tiempo restante: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    }

    setInterval(actualizarTemporizador, 1000);
});
