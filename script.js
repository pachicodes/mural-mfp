// Classe principal do Mural MFP
class MuralMFP {
    constructor() {
        this.tips = [];
        this.filteredTips = [];
        this.currentFilter = 'all';
        this.searchTerm = '';
        
        this.init();
    }
    
    init() {
        this.loadTips();
        this.bindEvents();
        this.renderTips();
        this.addSampleTips();
    }
    
    // Carregar dicas do localStorage
    loadTips() {
        const savedTips = localStorage.getItem('mfp-tips');
        if (savedTips) {
            this.tips = JSON.parse(savedTips);
        }
        this.filteredTips = [...this.tips];
    }
    
    // Salvar dicas no localStorage
    saveTips() {
        localStorage.setItem('mfp-tips', JSON.stringify(this.tips));
    }
    
    // Vincular eventos
    bindEvents() {
        // Modal
        document.getElementById('btnAddTip').addEventListener('click', () => this.openModal());
        document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
        document.getElementById('btnCancel').addEventListener('click', () => this.closeModal());
        document.getElementById('modalOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'modalOverlay') this.closeModal();
        });
        
        // Formulário
        document.getElementById('tipForm').addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Filtros
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
        
        // Busca
        document.getElementById('searchInput').addEventListener('input', (e) => this.handleSearch(e));
        document.getElementById('searchBtn').addEventListener('click', () => this.focusSearch());
        
        // Escape para fechar modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeModal();
        });
    }
    
    // Abrir modal
    openModal() {
        document.getElementById('modalOverlay').style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Focar no primeiro campo
        setTimeout(() => {
            document.getElementById('tipTitle').focus();
        }, 100);
    }
    
    // Fechar modal
    closeModal() {
        document.getElementById('modalOverlay').style.display = 'none';
        document.body.style.overflow = 'auto';
        this.clearForm();
    }
    
    // Limpar formulário
    clearForm() {
        document.getElementById('tipForm').reset();
    }
    
    // Manipular envio do formulário
    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const tip = {
            id: Date.now(),
            title: formData.get('title').trim(),
            category: formData.get('category'),
            content: formData.get('content').trim(),
            tags: this.parseTags(formData.get('tags')),
            author: formData.get('author').trim(),
            date: new Date().toISOString(),
            dateFormatted: this.formatDate(new Date())
        };
        
        // Validar campos obrigatórios
        if (!tip.title || !tip.category || !tip.content || !tip.author) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        this.addTip(tip);
        this.closeModal();
        
        // Mostrar feedback
        this.showNotification('Dica adicionada com sucesso! 🎉', 'success');
    }
      // Adicionar nova dica
    addTip(tip) {
        this.tips.unshift(tip); // Adicionar no início
        this.saveTips();
        this.applyFilters();
        this.renderTips();
    }
    
    // Processar tags
    parseTags(tagsString) {
        if (!tagsString) return [];
        return tagsString.split(',')
            .map(tag => tag.trim().toLowerCase())
            .filter(tag => tag.length > 0);
    }
      // Formatar data
    formatDate(date) {
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }
    
    // Manipular filtros
    handleFilter(e) {
        // Remover classe active de todos os botões
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Adicionar classe active ao botão clicado
        e.target.classList.add('active');
        
        this.currentFilter = e.target.dataset.category;
        this.applyFilters();
        this.renderTips();
    }
    
    // Manipular busca
    handleSearch(e) {
        this.searchTerm = e.target.value.toLowerCase().trim();
        this.applyFilters();
        this.renderTips();
    }
    
    // Focar na busca
    focusSearch() {
        document.getElementById('searchInput').focus();
    }
    
    // Aplicar filtros e busca
    applyFilters() {
        this.filteredTips = this.tips.filter(tip => {
            // Filtro por categoria
            const categoryMatch = this.currentFilter === 'all' || tip.category === this.currentFilter;
            
            // Filtro por busca
            const searchMatch = !this.searchTerm || 
                tip.title.toLowerCase().includes(this.searchTerm) ||
                tip.content.toLowerCase().includes(this.searchTerm) ||
                tip.author.toLowerCase().includes(this.searchTerm) ||
                tip.tags.some(tag => tag.includes(this.searchTerm));
            
            return categoryMatch && searchMatch;
        });
    }
      // Renderizar dicas
    renderTips() {
        const tipsGrid = document.querySelector('.tips-grid');
        const emptyState = document.getElementById('emptyState');
        
        if (this.filteredTips.length === 0) {
            tipsGrid.innerHTML = '';
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            // Ordenar dicas por data (mais recentes primeiro)
            const sortedTips = [...this.filteredTips].sort((a, b) => new Date(b.date) - new Date(a.date));
            tipsGrid.innerHTML = sortedTips.map(tip => this.createTipCard(tip)).join('');
        }
    }
    
    // Criar card de dica
    createTipCard(tip) {
        const tagsHtml = tip.tags.length > 0 
            ? `<div class="tip-tags">${tip.tags.map(tag => `<span class="tip-tag">#${tag}</span>`).join('')}</div>`
            : '';
        
        return `
            <article class="tip-card">
                <div class="tip-header">
                    <span class="tip-category ${tip.category}">${this.getCategoryName(tip.category)}</span>
                    <span class="tip-date">${tip.dateFormatted}</span>
                </div>
                <h3 class="tip-title">${this.escapeHtml(tip.title)}</h3>
                <div class="tip-content">${this.formatContent(tip.content)}</div>
                ${tagsHtml}
                <div class="tip-author">Por: ${this.escapeHtml(tip.author)}</div>
            </article>
        `;
    }
      // Obter nome da categoria
    getCategoryName(category) {
        const categories = {
            'tecnica': 'Técnica',
            'mindset': 'Mindset',
            'estrategia': 'Estratégia',
            'experiencia': 'Experiência'
        };
        return categories[category] || category;
    }
    
    // Formatar conteúdo (quebras de linha)
    formatContent(content) {
        return this.escapeHtml(content).replace(/\n/g, '<br>');
    }
    
    // Escapar HTML para prevenir XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Mostrar notificação
    showNotification(message, type = 'info') {
        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        // Adicionar estilos inline (será movido para CSS depois)
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? '#28a745' : '#007bff',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: '1001',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            maxWidth: '300px',
            animation: 'slideInRight 0.3s ease'
        });
        
        // Estilo do botão fechar
        const closeBtn = notification.querySelector('.notification-close');
        Object.assign(closeBtn.style, {
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0',
            marginLeft: 'auto'
        });
        
        // Adicionar ao documento
        document.body.appendChild(notification);
        
        // Remover automaticamente após 3 segundos
        const removeNotification = () => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        };
        
        // Evento de clique para fechar
        closeBtn.addEventListener('click', removeNotification);
        
        // Auto-remover
        setTimeout(removeNotification, 3000);
    }
      // Adicionar dicas de exemplo (apenas se não houver dicas salvas)
    addSampleTips() {
        if (this.tips.length === 0) {
            const now = new Date();
            const sampleTips = [
                {
                    id: 1,
                    title: "Use printf para debug eficiente",
                    category: "tecnica",
                    content: "Em vez de usar debuggers complexos, use printf estratégicos para entender o fluxo do seu código. Sempre remova os prints antes de submeter!",
                    tags: ["debug", "printf", "dica"],
                    author: "Ana Paula",
                    date: new Date(now.getTime() - 86400000).toISOString(), // 1 dia atrás
                    dateFormatted: this.formatDate(new Date(now.getTime() - 86400000))
                },
                {
                    id: 2,
                    title: "Gerenciar ansiedade durante a prova",
                    category: "mindset",
                    content: "Respire fundo, leia o problema duas vezes antes de começar a implementar. Se travar em um problema, passe para o próximo e volte depois. Tempo é precioso!",
                    tags: ["ansiedade", "gestao-tempo", "mindset"],
                    author: "Beatriz Santos",
                    date: new Date(now.getTime() - 172800000).toISOString(), // 2 dias atrás
                    dateFormatted: this.formatDate(new Date(now.getTime() - 172800000))
                },
                {
                    id: 3,
                    title: "Template para problemas de DP",
                    category: "estrategia",
                    content: "Sempre defina claramente os estados da DP antes de implementar. Escreva a recorrência no papel primeiro. Use memoização inicialmente, depois otimize se necessário.",
                    tags: ["dp", "programacao-dinamica", "template"],
                    author: "Carla Ferreira",
                    date: new Date(now.getTime() - 259200000).toISOString(), // 3 dias atrás
                    dateFormatted: this.formatDate(new Date(now.getTime() - 259200000))
                },
                {
                    id: 4,
                    title: "Minha primeira MFP",
                    category: "experiencia",
                    content: "Na minha primeira MFP eu estava super nervosa, mas o ambiente acolhedor das outras participantes me ajudou muito. Aprendi que não importa quantos problemas você resolve, o importante é participar e aprender!",
                    tags: ["primeira-vez", "nervosismo", "aprendizado"],
                    author: "Diana Costa",
                    date: new Date(now.getTime() - 345600000).toISOString(), // 4 dias atrás
                    dateFormatted: this.formatDate(new Date(now.getTime() - 345600000))
                }
            ];
            
            this.tips = sampleTips;
            this.saveTips();
            this.applyFilters();
        }
    }
}

// Adicionar animações CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Inicializar aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new MuralMFP();
});

// Adicionar funcionalidade de scroll suave para melhor UX
document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave para o topo quando clicar no logo
    document.querySelector('.logo').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Service Worker para melhor performance (opcional - para futuras implementações)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Implementar depois se necessário
        console.log('Service Worker support detected');
    });
}
