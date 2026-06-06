// =====================================================
// TEMA CLARO / ESCURO
// Usa uma variável para saber o estado atual do tema
// =====================================================

// Guarda o botão do tema numa variável
var temaBotao = document.getElementById('tema-btn');

// Variável que controla se o tema escuro está ativo
var temaEscuro = false;

// Quando o utilizador clica no botão de tema
temaBotao.onclick = function() {

  // Alterna o valor da variável
  temaEscuro = !temaEscuro;

  if (temaEscuro) {
    // Adiciona a classe "dark" ao body — o CSS trata do resto
    document.body.classList.add('dark');
    temaBotao.textContent = '☀️';
  } else {
    // Remove a classe "dark" do body
    document.body.classList.remove('dark');
    temaBotao.textContent = '🌙';
  }
}

// =====================================================
// MENU HAMBURGUER (para mobile)
// Mostra ou esconde os links do menu em ecrãs pequenos
// =====================================================

var hamburguer = document.getElementById('hamburguer');
var navLinks = document.getElementById('nav-links');

// Quando clica no botão hamburguer
hamburguer.onclick = function() {
  // Adiciona ou remove a classe "aberto" — o CSS trata da visibilidade
  if (navLinks.classList.contains('aberto')) {
    navLinks.classList.remove('aberto');
  } else {
    navLinks.classList.add('aberto');
  }
}

// Fecha o menu ao clicar em qualquer link (em mobile)
var links = navLinks.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function() {
    navLinks.classList.remove('aberto');
  }
}

// =====================================================
// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// Verifica os campos antes de "enviar"
// =====================================================

function enviarFormulario() {

  // Recolhe os valores dos campos
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var mensagem = document.getElementById('mensagem').value;
  var feedback = document.getElementById('feedback');

  // Limpa mensagens anteriores
  feedback.textContent = '';
  feedback.className = 'feedback';

  // Verifica se algum campo está vazio
  if (nome === '' || email === '' || mensagem === '') {
    feedback.textContent = '⚠️ Por favor, preenche todos os campos!';
    feedback.classList.add('erro');
    return;   // Para aqui e não continua
  }

  // Verificação simples do email: deve conter @ e um ponto depois
  if (email.includes('@') === false || email.includes('.') === false) {
    feedback.textContent = '⚠️ Por favor, insere um e-mail válido (ex: nome@email.com)';
    feedback.classList.add('erro');
    return;   // Para aqui e não continua
  }

  // Se chegou até aqui, tudo está correto!
  // Limpa os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mensagem').value = '';

  // Mostra mensagem de sucesso
  feedback.textContent = '✅ Mensagem enviada com sucesso! Obrigada pelo contato 💜';
  feedback.classList.add('sucesso');
}