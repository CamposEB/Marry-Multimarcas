const WA_NUMBER = "5521985385730";
const waLink = msg => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

/* Catálogo */
const grid = document.getElementById("grid");
const lista = PRODUTOS.filter(p => p.ativo);
lista.push({
  nome: "Outros produtos",
  descricao: "Não viu o que procura? Pergunte para a loja.",
  imagem: "",
  ativo: true
});
grid.innerHTML = lista.map(p => `
  <article class="card">
    <div class="card__img ${p.imagem ? "" : "card__img--empty"}">
      ${p.imagem ? `<img src="${esc(p.imagem)}" alt="${esc(p.nome)}" width="600" height="450" loading="lazy" onerror="this.parentNode.classList.add('card__img--empty');this.remove()">` : ""}
    </div>
    <div class="card__body">
      <h3>${esc(p.nome)}</h3>
      <p>${esc(p.descricao)}</p>
      <a class="btn btn--line" data-wa="Olá! Gostaria de consultar a disponibilidade do produto ${esc(p.nome)}.">Consultar disponibilidade</a>
    </div>
  </article>`).join("");

/* Links do WhatsApp */
document.querySelectorAll("[data-wa]").forEach(a => {
  a.href = waLink(a.dataset.wa);
  a.target = "_blank";
  a.rel = "noopener";
});

/* Mapa (local confirmado no Google Maps) */
const MAPS_LINK = "https://maps.app.goo.gl/2rS6Jgqo6VWssbaQA";
const COORDS = "-22.7872414,-42.9569678";
document.getElementById("mapframe").src = `https://www.google.com/maps?q=${COORDS}&z=17&output=embed`;
document.getElementById("route").href = `https://www.google.com/maps/dir/?api=1&destination=${COORDS}`;
document.getElementById("openmap").href = MAPS_LINK;

/* Menu móvel */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
function setMenu(open) {
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}
burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

document.getElementById("year").textContent = new Date().getFullYear();