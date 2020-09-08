const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const painel = [
  {
    title: "Analista de Ti | Júnior",
    tipo: "Efetivo CLT",
    imagethumb: "",
    formid: ""
  },
  // Alterar
  {
    title: "Analista de Contabilidade | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title: "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title: "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title: "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
    {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    tipo: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
];

painel.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.formid);
  cardClone.querySelector("img").src = video.imagethumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.tipo;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `mailto:${card.getAttribute("id")}`; 
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});

