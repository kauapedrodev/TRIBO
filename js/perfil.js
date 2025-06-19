// Seleciona elementos importantes
const themeToggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const fecharModalBtn = document.getElementById('fechar-modal');
const galeria = document.querySelector('.galeria-postagens');
const bio = document.getElementById('bio');
const editarBioBtn = document.getElementById('editar-bio');

// Função para aplicar tema salvo no localStorage
function aplicarTema() {
  const tema = localStorage.getItem('tema') || 'escuro';
  if (tema === 'claro') {
    root.style.setProperty('--fundo', '#ffffff');
    root.style.setProperty('--branco', '#000000');
    root.style.setProperty('--cinza-claro', '#555555');
    root.style.setProperty('--verde-menta', '#4CAF50');
    root.style.setProperty('--verde-escuro', '#388E3C');
    themeToggleBtn.textContent = '☀️';
  } else {
    root.style.setProperty('--fundo', '#101010');
    root.style.setProperty('--branco', '#FFFFFF');
    root.style.setProperty('--cinza-claro', '#B0B0B0');
    root.style.setProperty('--verde-menta', '#98FF98');
    root.style.setProperty('--verde-escuro', '#76C7C0');
    themeToggleBtn.textContent = '🌙';
  }
}

// Alternar tema e salvar preferencia
themeToggleBtn.addEventListener('click', () => {
  const temaAtual = localStorage.getItem('tema') || 'escuro';
  if (temaAtual === 'escuro') {
    localStorage.setItem('tema', 'claro');
  } else {
    localStorage.setItem('tema', 'escuro');
  }
  aplicarTema();
});

// Inicializa o tema
aplicarTema();

// Modal abrir imagem
galeria.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    modalImg.src = e.target.src;
    modal.classList.add('visible');
    modal.setAttribute('aria-hidden', 'false');
  }
});

// Fechar modal
fecharModalBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', e => {
  if (e.target === modal) {
    fecharModalBtn.click();
  }
});

// Fechar modal com tecla ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('visible')) {
    fecharModalBtn.click();
  }
});

// Editar bio inline
editarBioBtn.addEventListener('click', () => {
  const novoTexto = prompt('Edite sua bio:', bio.textContent);
  if (novoTexto !== null) {
    bio.textContent = novoTexto.trim() || 'Nenhuma bio disponível';
  }
});
