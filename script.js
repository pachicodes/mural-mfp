/**
 * Mural MFP - Script para efeitos visuais de post-its
 * 
 * Este script aplica rotações aleatórias e cores variadas aos post-its
 * para dar um aspecto mais realista ao mural.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar efeitos visuais aos post-its
    applyVisualEffects();
});

/**
 * Aplica efeitos visuais aos post-its
 * - Rotação aleatória
 * - Cores variadas
 * - Sombras para efeito 3D
 */
function applyVisualEffects() {
    // Obter todos os post-its
    const tipCards = document.querySelectorAll('.tip-card');
    
    // Cores de post-its para variação (todas bem clarinhas)
    const colors = [
        '#ffffcc', // amarelo bem clarinho
        '#ffecf5', // rosa bem clarinho
        '#e6ffff', // azul bem clarinho
        '#faffd8', // verde bem clarinho
        '#f2e6ff', // lilás bem clarinho
        '#fff7e6', // pêssego bem clarinho
        '#e6fff2', // menta bem clarinho
        '#f9f9f9', // quase branco
    ];
    
    // Aplicar estilos aleatórios a cada post-it
    tipCards.forEach(card => {
        // Rotação aleatória entre -3 e 3 graus
        const rotation = Math.random() * 6 - 3;
        
        // Cor aleatória do array de cores
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        // Aplicar estilos
        card.style.transform = `rotate(${rotation}deg)`;
        card.style.backgroundColor = colors[colorIndex];
        
        // Adicionar sombra para dar efeito de profundidade
        card.style.boxShadow = '2px 2px 5px rgba(0,0,0,0.2)';
    });
}
