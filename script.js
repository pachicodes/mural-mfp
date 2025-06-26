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
    
    // Cores de post-its para variação (tons pastéis variados)
    const colors = [
        '#ffffcc', // amarelo pastel
        '#e6fff2', // verde pastel
        '#e6f7ff', // azul pastel
        '#ffe6ee', // rosa pastel
        '#fff0e6', // laranja pastel
        '#f5eaf8', // lilás pastel (baseado no logo MFP)
        '#f0f8ff', // azul céu pastel
        '#ffefd5', // pêssego pastel
        '#e6ffee', // menta pastel
        '#ffebf0', // rosa bebê pastel
        '#f0fff0', // verde honeydew pastel
        '#ffeee0', // salmão pastel
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
