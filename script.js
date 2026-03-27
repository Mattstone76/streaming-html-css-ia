// script.js - Funcionalidade de alternância de tema

// Seleciona o botão de alternância
const themeToggleButton = document.getElementById('theme-toggle');

// Seleciona o elemento raiz (html)
const rootElement = document.documentElement;

// Verifica se há um tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo, se existir
if (savedTheme) {
    rootElement.classList.add(savedTheme);
    updateButtonIcon(savedTheme);
}

// Adiciona evento de clique ao botão
themeToggleButton.addEventListener('click', () => {
    // Alterna a classe 'light-mode'
    rootElement.classList.toggle('light-mode');

    // Verifica se o modo claro está ativo
    const currentTheme = rootElement.classList.contains('light-mode') ? 'light-mode' : '';

    // Salva o tema no localStorage
    localStorage.setItem('theme', currentTheme);

    // Atualiza o ícone do botão
    updateButtonIcon(currentTheme);
});

// Função para atualizar o ícone do botão
function updateButtonIcon(theme) {
    if (theme === 'light-mode') {
        themeToggleButton.textContent = '☀️'; // Sol para modo claro
        themeToggleButton.setAttribute('aria-label', 'Alternar para modo escuro');
    } else {
        themeToggleButton.textContent = '🌙'; // Lua para modo escuro
        themeToggleButton.setAttribute('aria-label', 'Alternar para modo claro');
    }
}