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
    
    // Cores de post-its para variação (baseadas no logo MFP, mas em tons bem clarinhos)
    const colors = [
        '#f5eaf8', // roxo primário bem clarinho (baseado no #8B2CAB)
        '#f8f0fb', // roxo secundário bem clarinho (baseado no #B967DB)
        '#fcedf2', // rosa accent bem clarinho (baseado no #E91E63)
        '#f4ebf7', // lilás claro bem clarinho (baseado no #E1BEE7)
        '#fbf7fd', // lilás quase branco
        '#f9ecf5', // rosa claro
        '#eee6f5', // lavanda clarinho
        '#f9f6fc', // off-white com tom lilás
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
