const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const painel = [{
        title: "Estágio em Adminstração -  5º ao 8º período. ",
        image: "/assets/icon.png",
        empresa: "Vision Engenharia e Consultoria",
        beneficios: "R$ 1.200,00 (Bolsa de Estágio) + Vale Transporte + Alimentação + Seguro de Vida",
        requisito: "Comunicação, dinamismo, proativa, organização, Pacote Office Avançado",
        email: "cv@visionsistemas.com.br"
    },
    {
        title: " Coordenação de RH - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Schulz",
        beneficios: "Beneficios a definir",
        requisito: "Profissional com sólida experiência na área de departamento pessoal Responsável pelas rotinas do DP (folha de pagamento, rescisão, férias, décimo terceiro), Experiência em eSocial, DTCFWeb e encargos, Conhecimento intermediários no pacote office",
        email: "jose.perito@schulz.com.br "
    },
    {
        title: " Assistente de RH - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Região da Barra funda - Seg a Sex",
        beneficios: "Salário de R$ 1.648,20 + Beneficios a definir",
        requisito: "Com foco em admissão e ponto eletrônico",
        email: "raraujo@commcenter.com.br"
    },
    {
        title: " Almoxarife/PCD",
        image: "/assets/icon.png",
        empresa: "Tempo Concessionárias CAMPINAS / SP.",
        beneficios: "Salário: R$ 1.726,00 + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição / Credencial plena do SESC",
        requisito: " Desejável experiência na função de almoxarife/estoque. Conhecimento básico em Excel. Ensino Médio completo. Residir em Campinas",
        email: "vagas@tempoveiculos.com.br"
    },
    {
        title: "Consultor de Vendas",
        image: "/assets/mili.png",
        empresa: "Farmácia Miligrama.",
        beneficios: "Salário fixo de R$ 1.366,00 + comissões (podendo chegar a R$ 3.000,00)",
        requisito: " Escolaridade: Mínimo: Ensino Médio Completo; Desejável: Ensino Superior Cursando, Habilidade de atuar com metas e orientação para resultados",
        email: "vera.loos@fmiligrama.com.br"
    },
    {
        title: "Encarregado de Limpeza -  Temporario 2 meses",
        image: "/assets/icon.png",
        empresa: "Zona sul - Vila Nova Madalena -  Seg a Sab 8hs as 17hs.",
        beneficios: "Salário fixo de R$ 1.490,00 + 20 % (podendo chegar a R$ 1.788,10)",
        requisito: "Condominio Residencial",
        email: "Dpessoal7@guillaumon.com.br"
    },
];

painel.map(video => {
    const cardClone = card.cloneNode(true);
    cardClone.setAttribute("id", video.email);
    cardClone.querySelector("img").src = video.image;
    cardClone.querySelector(".title").innerHTML = video.title;
    cardClone.querySelector(".info > p.beneficios").innerHTML =
        video.beneficios;
    cardClone.querySelector(".info > p.requisito").innerHTML =
        video.requisito;
    cardClone.querySelector(".info > p.empresa").innerHTML =
        video.empresa;
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