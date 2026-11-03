const estoque = [
  // BH Centro
  { nome: "Amoxicilina 500mg",       farmacia: "BH Centro",             quantidade: 150, status: "disponivel" },
  { nome: "Losartana 50mg",           farmacia: "BH Centro",             quantidade: 6,   status: "baixo" },
  { nome: "Metformina 850mg",         farmacia: "BH Centro",             quantidade: 0,   status: "indisponivel" },
  { nome: "Atorvastatina 20mg",       farmacia: "BH Centro",             quantidade: 80,  status: "disponivel" },
  { nome: "Levotiroxina 50mcg",       farmacia: "BH Centro",             quantidade: 4,   status: "baixo" },
  // BH Barreiro
  { nome: "Dipirona 500mg",           farmacia: "BH Barreiro",           quantidade: 200, status: "disponivel" },
  { nome: "Omeprazol 20mg",           farmacia: "BH Barreiro",           quantidade: 0,   status: "indisponivel" },
  { nome: "Metformina 850mg",         farmacia: "BH Barreiro",           quantidade: 90,  status: "disponivel" },
  { nome: "Atenolol 25mg",            farmacia: "BH Barreiro",           quantidade: 7,   status: "baixo" },
  // BH Venda Nova
  { nome: "Amoxicilina 500mg",        farmacia: "BH Venda Nova",         quantidade: 0,   status: "indisponivel" },
  { nome: "Losartana 50mg",           farmacia: "BH Venda Nova",         quantidade: 110, status: "disponivel" },
  { nome: "Atorvastatina 20mg",       farmacia: "BH Venda Nova",         quantidade: 3,   status: "baixo" },
  // BH Nordeste
  { nome: "Omeprazol 20mg",           farmacia: "BH Nordeste",           quantidade: 55,  status: "disponivel" },
  { nome: "Dipirona 500mg",           farmacia: "BH Nordeste",           quantidade: 0,   status: "indisponivel" },
  { nome: "Levotiroxina 50mcg",       farmacia: "BH Nordeste",           quantidade: 40,  status: "disponivel" },
  // Contagem
  { nome: "Metformina 850mg",         farmacia: "Contagem",              quantidade: 5,   status: "baixo" },
  { nome: "Atenolol 25mg",            farmacia: "Contagem",              quantidade: 130, status: "disponivel" },
  { nome: "Amoxicilina 500mg",        farmacia: "Contagem",              quantidade: 0,   status: "indisponivel" },
  // Betim
  { nome: "Losartana 50mg",           farmacia: "Betim",                 quantidade: 75,  status: "disponivel" },
  { nome: "Omeprazol 20mg",           farmacia: "Betim",                 quantidade: 8,   status: "baixo" },
  { nome: "Atorvastatina 20mg",       farmacia: "Betim",                 quantidade: 0,   status: "indisponivel" },
  // Juiz de Fora
  { nome: "Dipirona 500mg",           farmacia: "Juiz de Fora",          quantidade: 180, status: "disponivel" },
  { nome: "Metformina 850mg",         farmacia: "Juiz de Fora",          quantidade: 60,  status: "disponivel" },
  { nome: "Levotiroxina 50mcg",       farmacia: "Juiz de Fora",          quantidade: 2,   status: "baixo" },
  // Uberlândia
  { nome: "Atenolol 25mg",            farmacia: "Uberlândia",            quantidade: 0,   status: "indisponivel" },
  { nome: "Amoxicilina 500mg",        farmacia: "Uberlândia",            quantidade: 95,  status: "disponivel" },
  { nome: "Omeprazol 20mg",           farmacia: "Uberlândia",            quantidade: 6,   status: "baixo" },
  // Montes Claros
  { nome: "Losartana 50mg",           farmacia: "Montes Claros",         quantidade: 0,   status: "indisponivel" },
  { nome: "Atorvastatina 20mg",       farmacia: "Montes Claros",         quantidade: 50,  status: "disponivel" },
  { nome: "Dipirona 500mg",           farmacia: "Montes Claros",         quantidade: 4,   status: "baixo" },
  // Governador Valadares
  { nome: "Metformina 850mg",         farmacia: "Governador Valadares",  quantidade: 120, status: "disponivel" },
  { nome: "Levotiroxina 50mcg",       farmacia: "Governador Valadares",  quantidade: 0,   status: "indisponivel" },
  { nome: "Atenolol 25mg",            farmacia: "Governador Valadares",  quantidade: 9,   status: "baixo" },
  // Uberaba
  { nome: "Amoxicilina 500mg",        farmacia: "Uberaba",               quantidade: 70,  status: "disponivel" },
  { nome: "Omeprazol 20mg",           farmacia: "Uberaba",               quantidade: 0,   status: "indisponivel" },
  { nome: "Atorvastatina 20mg",       farmacia: "Uberaba",               quantidade: 5,   status: "baixo" },
  // Divinópolis
  { nome: "Dipirona 500mg",           farmacia: "Divinópolis",           quantidade: 160, status: "disponivel" },
  { nome: "Losartana 50mg",           farmacia: "Divinópolis",           quantidade: 3,   status: "baixo" },
  { nome: "Metformina 850mg",         farmacia: "Divinópolis",           quantidade: 0,   status: "indisponivel" },
];

const labels = { disponivel: "Disponível", baixo: "Estoque Baixo", indisponivel: "Indisponível" };

const maxEstoque = {
  "Amoxicilina 500mg":  200,
  "Losartana 50mg":     150,
  "Metformina 850mg":   200,
  "Atorvastatina 20mg": 100,
  "Levotiroxina 50mcg": 100,
  "Dipirona 500mg":     300,
  "Omeprazol 20mg":     100,
  "Atenolol 25mg":      150,
};

function barraProgresso(item) {
  const max = maxEstoque[item.nome] || 200;
  const pct = Math.round((item.quantidade / max) * 100);
  const cor = item.status === "disponivel" ? "var(--green)" :
              item.status === "baixo"      ? "var(--yellow)" : "var(--red)";
  return `
    <div class="progress-wrap">
      <div class="progress-bar">
        <div class="progress-fill" style="width:${pct}%; background:${cor}"></div>
      </div>
      <span class="progress-label">${item.quantidade} <small>/ ${max} un.</small></span>
    </div>`;
}

const cores = {
  "Amoxicilina 500mg":  "#f59e0b",
  "Losartana 50mg":     "#3b82f6",
  "Metformina 850mg":   "#8b5cf6",
  "Atorvastatina 20mg": "#ef4444",
  "Levotiroxina 50mcg": "#06b6d4",
  "Dipirona 500mg":     "#f97316",
  "Omeprazol 20mg":     "#10b981",
  "Atenolol 25mg":      "#6366f1",
};

function iniciais(nome) {
  return nome.split(" ").slice(0, 2).map(p => p[0].toUpperCase()).join("");
}

const detalhes = {
  "Amoxicilina 500mg": {
    classe: "Antibiótico",
    uso: "Tratamento de infecções bacterianas como otite, sinusite, pneumonia e infecções urinárias.",
    posologia: "500mg a cada 8 horas por 7 a 10 dias, conforme prescrição médica.",
    contraindicacoes: ["Alergia a penicilinas ou cefalosporinas", "Mononucleose infecciosa"],
    observacoes: "Pode ser tomado com ou sem alimentos. Completar o tratamento mesmo com melhora dos sintomas."
  },
  "Losartana 50mg": {
    classe: "Anti-hipertensivo (BRA)",
    uso: "Tratamento da hipertensão arterial e proteção renal em diabéticos.",
    posologia: "50mg uma vez ao dia. Dose pode ser ajustada para 100mg/dia.",
    contraindicacoes: ["Gravidez (2º e 3º trimestre)", "Hipersensibilidade ao losartana", "Uso com alisquireno em diabéticos"],
    observacoes: "Monitorar potássio sérico e função renal periodicamente."
  },
  "Metformina 850mg": {
    classe: "Antidiabético (Biguanida)",
    uso: "Controle da glicemia no diabetes tipo 2, especialmente em pacientes com sobrepeso.",
    posologia: "850mg 2 a 3 vezes ao dia durante as refeições.",
    contraindicacoes: ["Insuficiência renal grave", "Insuficiência hepática", "Alcoolismo", "Insuficiência cardíaca descompensada"],
    observacoes: "Suspender 48h antes de exames com contraste iodado."
  },
  "Atorvastatina 20mg": {
    classe: "Hipolipemiante (Estatina)",
    uso: "Redução do colesterol LDL e prevenção de doenças cardiovasculares.",
    posologia: "20mg uma vez ao dia, preferencialmente à noite.",
    contraindicacoes: ["Doença hepática ativa", "Gravidez e amamentação", "Uso com ciclosporina"],
    observacoes: "Relatar imediatamente dores musculares inexplicáveis ao médico."
  },
  "Levotiroxina 50mcg": {
    classe: "Hormônio tireoidiano",
    uso: "Reposição hormonal no hipotireoidismo.",
    posologia: "50mcg uma vez ao dia em jejum, 30 minutos antes do café da manhã.",
    contraindicacoes: ["Hipertireoidismo não tratado", "Infarto agudo do miocárdio recente"],
    observacoes: "Não tomar junto com cálcio, ferro ou antiácidos. Intervalo mínimo de 4 horas."
  },
  "Dipirona 500mg": {
    classe: "Analgésico e Antipirético",
    uso: "Alívio de dores moderadas a intensas e febre.",
    posologia: "500mg a 1g a cada 6 horas. Máximo de 4g por dia.",
    contraindicacoes: ["Alergia à dipirona ou pirazolonas", "Porfiria hepática aguda", "Deficiência de G6PD"],
    observacoes: "Pode causar queda de pressão arterial se administrada rapidamente por via injetável."
  },
  "Omeprazol 20mg": {
    classe: "Inibidor da Bomba de Prótons",
    uso: "Tratamento de úlceras gástricas, refluxo gastroesofágico e gastrite.",
    posologia: "20mg uma vez ao dia em jejum, 30 minutos antes da primeira refeição.",
    contraindicacoes: ["Hipersensibilidade ao omeprazol", "Uso com nelfinavir"],
    observacoes: "Uso prolongado pode reduzir absorção de vitamina B12 e magnésio."
  },
  "Atenolol 25mg": {
    classe: "Beta-bloqueador",
    uso: "Tratamento da hipertensão arterial, angina e arritmias cardíacas.",
    posologia: "25mg a 50mg uma vez ao dia.",
    contraindicacoes: ["Bradicardia severa", "Bloqueio AV de 2º e 3º grau", "Asma brônquica", "Insuficiência cardíaca descompensada"],
    observacoes: "Não suspender abruptamente — reduzir a dose gradualmente."
  },
};

function abrirDrawer(item) {
  const cor = cores[item.nome] || "#64748b";
  const info = detalhes[item.nome];

  document.getElementById("drawerAvatar").textContent = iniciais(item.nome);
  document.getElementById("drawerAvatar").style.cssText = `background:${cor}18; border-color:${cor}40; color:${cor}`;
  document.getElementById("drawerTitulo").textContent = item.nome;

  const badge = document.getElementById("drawerBadge");
  badge.textContent = labels[item.status];
  badge.className = `badge ${item.status}`;

  document.getElementById("drawerBody").innerHTML = `
    <div class="drawer-secao">
      <h4>Informações gerais</h4>
      <div class="drawer-info-grid">
        <div class="drawer-info-item"><small>Classe</small><strong>${info.classe}</strong></div>
        <div class="drawer-info-item"><small>Unidade</small><strong>${item.farmacia}</strong></div>
        <div class="drawer-info-item"><small>Quantidade</small><strong>${item.quantidade} un.</strong></div>
        <div class="drawer-info-item"><small>Status</small><strong>${labels[item.status]}</strong></div>
      </div>
    </div>
    <div class="drawer-secao">
      <h4>Para que serve</h4>
      <p>${info.uso}</p>
    </div>
    <div class="drawer-secao">
      <h4>Como tomar</h4>
      <p>${info.posologia}</p>
    </div>
    <div class="drawer-secao">
      <h4>Contraindicações</h4>
      <ul class="drawer-lista">${info.contraindicacoes.map(c => `<li>${c}</li>`).join("")}</ul>
    </div>
    <div class="drawer-secao">
      <h4>Observações</h4>
      <p>${info.observacoes}</p>
    </div>
    ${item.status === "indisponivel" ? `<div class="drawer-alerta">Este medicamento está indisponível nesta unidade. Consulte outras unidades FAE.</div>` : ""}
  `;

  document.getElementById("drawer").classList.add("aberto");
  document.getElementById("drawerOverlay").classList.add("aberto");
  document.body.style.overflow = "hidden";
}

function fecharDrawer() {
  document.getElementById("drawer").classList.remove("aberto");
  document.getElementById("drawerOverlay").classList.remove("aberto");
  document.body.style.overflow = "";
}

function atualizarStats(lista) {
  document.getElementById("total-disp").textContent  = lista.filter(i => i.status === "disponivel").length;
  document.getElementById("total-baixo").textContent = lista.filter(i => i.status === "baixo").length;
  document.getElementById("total-indisp").textContent= lista.filter(i => i.status === "indisponivel").length;
}

function filtrar() {
  const busca    = document.getElementById("busca").value.toLowerCase();
  const farmacia = document.getElementById("farmacia").value;
  const status   = document.getElementById("status").value;

  const resultado = estoque.filter(item =>
    item.nome.toLowerCase().includes(busca) &&
    (farmacia === "" || item.farmacia === farmacia) &&
    (status   === "" || item.status   === status)
  );

  atualizarStats(resultado);

  const div = document.getElementById("resultado");

  document.getElementById("contagem").textContent =
    resultado.length === 0 ? "" : `${resultado.length} resultado${resultado.length > 1 ? "s" : ""} encontrado${resultado.length > 1 ? "s" : ""}`;

  if (resultado.length === 0) {
    div.innerHTML = `
      <div class="vazio">
        <h3>Nenhum resultado encontrado</h3>
        <p>Tente ajustar os filtros ou buscar por outro medicamento.</p>
      </div>`;
    return;
  }

  div.innerHTML = resultado.map(item => {
    const cor = cores[item.nome] || "#64748b";
    return `
    <div class="card" onclick='abrirDrawer(${JSON.stringify(item)})'>
      <div class="card-name">
        <div class="card-avatar" style="background:${cor}18; border-color:${cor}40; color:${cor}">
          ${iniciais(item.nome)}
        </div>
        <div class="card-dot ${item.status}"></div>
        <h3>${item.nome}</h3>
      </div>
      <div class="card-location">${item.farmacia}</div>
      ${barraProgresso(item)}
      <span class="badge ${item.status}">${labels[item.status]}</span>
    </div>`;
  }).join("");
}

document.getElementById("hora").textContent = new Date().toLocaleString("pt-BR");
atualizarStats(estoque);
filtrar();

// ── TEMA ──
const toggle   = document.getElementById("themeToggle");
const iconSun  = document.getElementById("iconSun");
const iconMoon = document.getElementById("iconMoon");

const temaSalvo = localStorage.getItem("tema") || "light";
aplicarTema(temaSalvo);

toggle.addEventListener("click", () => {
  const atual = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  localStorage.setItem("tema", atual);
  aplicarTema(atual);
});

function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  iconSun.style.display  = tema === "dark"  ? "block" : "none";
  iconMoon.style.display = tema === "light" ? "block" : "none";
}
