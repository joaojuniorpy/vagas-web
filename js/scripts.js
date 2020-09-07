const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Analista de Ti | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title: "Analista de Contabilidade | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title: "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title: "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title: "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
    {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
  {
    title:
      "Cargo | Efetivo CLT",
    horas: "8hs p/ dia",
    imagethumb: "",
    formid: ""
  },
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.imagethumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.horas;
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
    ).src = `https://forms.gle/APWr5k57KL5ipnH56`;
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