// Token: 1152310-2026A
// Producto: SyncDoc

const TOKEN_student = "1152310-2026A";

/* ================= SALUDO ================= */
function generarSaludo() {
  const hora = new Date().getHours();
  const el = document.getElementById("saludo");

  if (hora >= 5 && hora < 12) el.textContent = "Buenos días";
  else if (hora < 19) el.textContent = "Buenas tardes";
  else el.textContent = "Buenas noches";
}

/* ================= FOOTER ================= */
function generarAnioFooter() {
  const year = new Date().getFullYear();
  document.getElementById("footer-text").textContent = `SyncDoc - ${year}`;
}

/* ================= SCROLL ================= */
function scrollSeccion(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* ================= MENÚ ================= */
function configurarMenu() {
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").replace("#", "");
      scrollSeccion(id);
    });
  });
}

/* ================= BOTÓN HERO ================= */
function configurarBotonPrecios() {
  document.getElementById("btn-precios")
    .addEventListener("click", () => scrollSeccion("section-precios"));
}

/* ================= PRECIOS ================= */
function configurarPrecios() {
  const toggle = document.getElementById("toggle-precio");

  toggle.addEventListener("change", () => {
    const anual = toggle.checked;

    document.getElementById("precio1").textContent = "$0";
    document.getElementById("precio2").textContent = anual ? "$96" : "$10";
    document.getElementById("precio3").textContent = anual ? "$192" : "$20";
  });
}

/* ================= PLANES ================= */
function configurarPlanes() {
  document.querySelectorAll(".btn-plan").forEach(btn => {
    btn.addEventListener("click", () => {
      const plan = btn.parentElement.querySelector("h3").textContent;
      alert(`Elegiste el plan ${plan}`);
    });
  });
}

/* ================= CARACTERÍSTICAS ================= */
const features = [
  {
    nombre: "Edición en tiempo real",
    categoria: "core",
    icono: "📝",
    descripcion: "Permite editar documentos simultáneamente con otros usuarios en tiempo real."
  },
  {
    nombre: "Historial de versiones",
    categoria: "core",
    icono: "🕓",
    descripcion: "Guarda versiones anteriores automáticamente."
  },
  {
    nombre: "Integración con Drive",
    categoria: "integracion",
    icono: "☁️",
    descripcion: "Accede desde la nube fácilmente."
  },
  {
    nombre: "API abierta",
    categoria: "integracion",
    icono: "🔗",
    descripcion: "Permite integrar con otros sistemas."
  },
  {
    nombre: "Cifrado de datos",
    categoria: "seguridad",
    icono: "🔒",
    descripcion: "Protección avanzada de información."
  },
  {
    nombre: "Autenticación 2FA",
    categoria: "seguridad",
    icono: "🛡️",
    descripcion: "Seguridad en dos pasos."
  }
];

function renderFeatures(lista) {
  const contenedor = document.getElementById("cards");
  contenedor.innerHTML = "";

  lista.forEach(f => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="icono">${f.icono}</div>
      <h3>${f.nombre}</h3>
      <p>${f.descripcion}</p>
    `;

    contenedor.appendChild(card);
  });

  document.getElementById("contador").textContent =
    `Mostrando ${lista.length} de ${features.length}`;
}

function configurarFiltros() {
  renderFeatures(features);

  document.querySelectorAll(".filtros button").forEach(btn => {
    btn.addEventListener("click", () => {
      const filtro = btn.dataset.filter;

      if (filtro === "all") renderFeatures(features);
      else renderFeatures(features.filter(f => f.categoria === filtro));
    });
  });
}

/* ================= TESTIMONIOS ================= */
/**
 * Testimonios 
 */
function configurarTestimonios() {
  const testimonios = [
    {
      texto: "SyncDoc ha transformado completamente la manera en que trabajamos en equipo, permitiendo editar documentos en tiempo real sin conflictos y mejorando significativamente la productividad en cada uno de nuestros proyectos colaborativos diarios.",
      nombre: "Laura Gómez",
      rol: "Project Manager",
      estrellas: 5
    },
    {
      texto: "La plataforma es extremadamente intuitiva y nos ha permitido optimizar procesos internos, ya que podemos trabajar simultáneamente en documentos sin preocuparnos por errores o pérdida de información importante en el flujo de trabajo.",
      nombre: "Carlos Pérez",
      rol: "Desarrollador",
      estrellas: 4
    },
    {
      texto: "Me gusta mucho la facilidad de uso y las integraciones que ofrece SyncDoc, ya que puedo conectar herramientas externas y mejorar el flujo de trabajo, logrando una experiencia más eficiente en todos nuestros proyectos de diseño.",
      nombre: "Ana Torres",
      rol: "Diseñadora UX",
      estrellas: 5
    }
  ];

  let index = 0;

  const texto = document.getElementById("testimonio-texto");
  const nombre = document.getElementById("testimonio-nombre");
  const rol = document.getElementById("testimonio-rol");
  const estrellasEl = document.getElementById("testimonio-estrellas");

  function generarEstrellas(num) {
    return "★".repeat(num) + "☆".repeat(5 - num);
  }

  function mostrar() {
    const t = testimonios[index];

    texto.textContent = t.texto;
    nombre.textContent = t.nombre;
    rol.textContent = t.rol;
    estrellasEl.textContent = generarEstrellas(t.estrellas);
  }

  document.getElementById("btn-next").addEventListener("click", () => {
    index = (index + 1) % testimonios.length;
    mostrar();
  });

  document.getElementById("btn-prev").addEventListener("click", () => {
    index = (index - 1 + testimonios.length) % testimonios.length;
    mostrar();
  });

  setInterval(() => {
    index = (index + 1) % testimonios.length;
    mostrar();
  }, 5000);

  mostrar();
}

/* ================= FORMULARIO ================= */
/**
 * Validación completa de formulario
 */
function configurarFormulario() {
  const form = document.getElementById("form");

  form.addEventListener("submit", e => {
    e.preventDefault();

    let valido = true;

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");

    // limpiar errores
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    if (nombre.value.trim().length < 3) {
      document.getElementById("error-nombre").textContent = "Mínimo 3 caracteres";
      valido = false;
    }

    if (!correo.value.includes("@")) {
      document.getElementById("error-correo").textContent = "Correo inválido";
      valido = false;
    }

    if (asunto.value.trim().length < 5) {
      document.getElementById("error-asunto").textContent = "Mínimo 5 caracteres";
      valido = false;
    }

    if (mensaje.value.trim().length < 20) {
      document.getElementById("error-mensaje").textContent = "Mínimo 20 caracteres";
      valido = false;
    }

    if (valido) {
      alert("Mensaje enviado correctamente");
      form.reset();
    }
  });
}



/* ================= SCROLL TOP ================= */
function configurarScrollTop() {
  document.getElementById("btn-top")
    .addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded", () => {
  generarSaludo();
  generarAnioFooter();
  configurarMenu();
  configurarBotonPrecios();
  configurarPrecios();
  configurarPlanes();
  configurarFiltros();
  configurarTestimonios();
  configurarFormulario();
  configurarScrollTop();
});