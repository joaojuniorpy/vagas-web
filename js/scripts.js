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
        title: " Assistente de RH - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Região de Colombo/PR - Seg a Sex",
        beneficios: "Salário e Beneficios a definir",
        requisito: "Com foco em admissão e ponto eletrônico",
        email: "lucas.ferrarini@friozem.com.br"
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
    {
        title: "Analista de recrutamento -  Temporario",
        image: "/assets/icon.png",
        empresa: "Residir em São bernardo do Campo",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Ter atuado no segmento logistico e Cursar Psicologia ",
        email: "simone.leal@grupofacility.com.br"
    },
    {
        title: "Analista de recrutamento JR -  Centuaro",
        image: "/assets/icon.png",
        empresa: "Home Office",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Atuar com R&S em volume grande/ Graduação em relacionadas ",
        email: "debora.imperial@centauro.com.br"
    },
    {
        title: " Analista de RH - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Região de Curitiba - Seg a Sex",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Graduação em RH ou Psicologia e Experiencia em Phometheus",
        email: "curriculos@siderallinhasareas.com.br"
    },
    {
        title: " Analista de RH - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Região de Curitiba - Seg a Sex",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Graduação em RH ou Psicologia e Experiencia em Phometheus",
        email: "curriculos@siderallinhasareas.com.br"
    },
    {
        title: " Analista de Antedimento MultiSkill - SAC. ",
        image: "/assets/icon.png",
        empresa: "Região de São Paulo - 6X1 ",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Experiencia em Atendimento",
        email: "kaio.barbosa@concetrix.com"
    },
    {
        title: " Analista de Vendas. ",
        image: "/assets/icon.png",
        empresa: "Região de São Paulo - Seg a Sex 9hs as 18:45",
        beneficios: "Salário fixo de R$ 1.200,00 + comissões (podendo chegar a R$ 3.000,00)",
        requisito: "Experiencia em atendimento e vendas",
        email: "Chamar 11 995075667"
    },
    {
        title: " Assistente de Contabilidade - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Região da Bela Vista - Seg a Sex 8h30 as 17:30",
        beneficios: "Salário de R$ 2.200,00 conforme experência / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: " Desejavel experiencia em Contabilidade",
        email: "patricia.chacon@quadrantecontabil.com.br"
    },
    {
        title: " Supervisor de Operações de Transportes - Administrativo PJ. ",
        image: "/assets/icon.png",
        empresa: "Região da Zona Leste SP ",
        beneficios: "Salario a combinar",
        requisito: "Experiencia em Transporte Rodoviario/ Excel Intermediario/ Superior completo",
        email: "ccarneiro77@gmail.com"
    },
    {
        title: " Recepcionista - Adm. ",
        image: "/assets/icon.png",
        empresa: "Região de Osasco ",
        beneficios: "Salario a combinar",
        requisito: "Experiencia em Excel",
        email: "fagner@onelaudos.com.br"
    },
    {
        title: " Supervisor de Vendas - Auto Peças Diesel. ",
        image: "/assets/icon.png",
        empresa: "Região de Santos/SP ",
        beneficios: "Salario a combinar",
        requisito: "Experiencia na função/ Ter atuado em empresas de auto peças/ Superior",
        email: "elizeu@ecthoconsultoria.com"
    },
    {
        title: " Analista de RH - Equipe de Desempenho. ",
        image: "/assets/icon.png",
        empresa: "Região de Araçatuba - Seg a Sex",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Graduação em RH ou Psicologia e Experiencia minima em RH",
        email: "curriculo@prepararh.com.br"
    },
    {
        title: " Analista de Credito Pleno - Daniele Banco. ",
        image: "/assets/icon.png",
        empresa: "Região de São Paulo - Seg a Sex",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Experiencia solida em banco ou FID'cs",
        email: "recrutamento@danielebanco.com.br"
    },
    {
        title: " Cto gestor de Squad - Start UP. ",
        image: "/assets/icon.png",
        empresa: "Região de São Paulo - Seg a Sex",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição",
        requisito: "Experiencia solida em Frameworks JS e Sql",
        email: "debora.ribeiro@roberthalf.com.br"
    },
    {
        title: " Analista de Planejamento - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Rei Park",
        beneficios: "Beneficios a definir",
        requisito: "Experiencia em Pacote Office",
        email: "rh@reipark.com.br"
    },
    {
        title: " Analista de Planejamento - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Rei Park",
        beneficios: "Beneficios a definir",
        requisito: "Experiencia em Pacote Office",
        email: "rh@reipark.com.br"
    },
    {
        title: " Coordenador de Operações - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "Rei Park",
        beneficios: "Beneficios a definir",
        requisito: "Experiencia em Pacote Office",
        email: "rh@reipark.com.br"
    },
    {
        title: " HeadHunter - Administrativo. ",
        image: "/assets/icon.png",
        empresa: "The Adecco Group",
        beneficios: "Beneficios a definir",
        requisito: "Experiencia em R&S e Prospecção Comercial",
        email: "fernanda.baldivia@adecco.com"
    },
    {
        title: " Admnistrador de Vendas - Bicos. ",
        image: "/assets/icon.png",
        empresa: "Grupo Jacto - Pompeia/SP",
        beneficios: "Beneficios a definir",
        requisito: "Experiencia em Ramo Agricula",
        email: ""
    },
    {
        title: " Superintendente Comercial - Market. ",
        image: "/assets/icon.png",
        empresa: "Robert Half International",
        beneficios: "Beneficios a definir",
        requisito: "Experiencia em Middle Market e Boa experiencia em tramites comerciais",
        email: "sara.santos@robert.com.br"
    },
    {
        title: " Gerente de Gestão - Operdora de Saude. ",
        image: "/assets/icon.png",
        empresa: "Robert Half International",
        beneficios: "Beneficios a definir",
        requisito: "Experiencia em gestão de pessoas de alta performance/ Trabalhar presencialmente/ Conhecimento do seguimento de Operadoras Saude ",
        email: "sara.santos@robert.com.br"
    },
    {
        title: "Estágio em Adminstração  ",
        image: "/assets/icon.png",
        empresa: "Shicaton - Cotia/Sp",
        beneficios: "Beneficios e Salarios a definir",
        requisito: "Inglês Avançado / Pacote Office Avançado",
        email: "shicaton@uol.com.br"
    },
    {
        title: "Estágio em Adminstração  ",
        image: "/assets/icon.png",
        empresa: "Shicaton - Cotia/Sp",
        beneficios: "Beneficios e Salarios a definir",
        requisito: "Inglês Avançado / Pacote Office Avançado - Trabalhar com relacionamento com clientes",
        email: "shicaton@uol.com.br"
    },
    {
        title: "Estágio em Engenharia de produção -  Job Rotation",
        image: "/assets/icon.png",
        empresa: "Shicaton - Cotia/Sp",
        beneficios: "Beneficios e Salarios a definir",
        requisito: "Pacote Office Avançado - Trabalhar com Auxiliar nos processos da celulas, buscar melhoria continua",
        email: "shicaton@uol.com.br"
    },
    {
        title: "Estágio em Adminstração  ",
        image: "/assets/icon.png",
        empresa: "Shicaton - Cotia/Sp",
        beneficios: "Beneficios e Salarios a definir",
        requisito: "Inglês Avançado / Pacote Office Avançado - Trabalhar com relacionamento com clientes",
        email: "shicaton@uol.com.br"
    },
    {
        title: "Gerente de TI",
        image: "/assets/icon.png",
        empresa: "Itaim/Sp /Seg a Sex / 10hs as 19hs",
        beneficios: "Salário a definir + Benefícios: Seguro de vida / Vale Transporte / Vale Alimentação ou Refeição ",
        requisito: "Experiencia em gestão de Equipes Desenvolvimento/Infra",
        email: "recursoshumanosho6@gmail.com"
    },
    {
        title: "Produção - Metalurgica ",
        image: "/assets/icon.png",
        empresa: "Cotia/Sp /Seg a Sab ",
        beneficios: "Salário de R$ 1.597,20 + Beneficios a definir",
        requisito: "Experiencia em Metalurgica e E.Médio Completo",
        email: "selecao2@adhapta.com.br"
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