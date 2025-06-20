# 💜 Mural de Dicas MFP

Um mural colaborativo para a **Maratona Feminina de Programação (MFP)** onde participantes podem compartilhar dicas, aprendizados e experiências sobre programação competitiva.

## 🎯 Objetivo

Criar um espaço acolhedor onde mulheres e pessoas não-binárias possam:
- Compartilhar dicas técnicas sobre algoritmos e implementação
- Trocar estratégias de estudo e preparação
- Dividir experiências e aprendizados pessoais
- Construir uma comunidade de apoio mútuo

## ✨ Funcionalidades

### 📝 **Compartilhamento de Dicas**
- Formulário intuitivo para adicionar novas dicas
- Categorias organizadas: Técnica, Mindset, Estratégia, Experiência
- Sistema de tags para melhor organização
- Identificação do autor/nickname

### 🔍 **Exploração de Conteúdo**
- Feed dinâmico com todas as dicas
- Filtros por categoria
- Busca em tempo real por título, conteúdo, autor ou tags
- Interface responsiva para todos os dispositivos

### 💾 **Persistência de Dados**
- Armazenamento local usando localStorage
- Dicas de exemplo para demonstração
- Dados persistem entre sessões

## 🎨 Design

### Paleta de Cores MFP
- **Roxo Primário**: `#8B2CAB` - Elementos principais
- **Roxo Secundário**: `#B967DB` - Elementos de destaque
- **Rosa Accent**: `#E91E63` - Botões de ação
- **Lilás Claro**: `#E1BEE7` - Backgrounds suaves
- **Branco**: `#FFFFFF` - Backgrounds principais

### Características do Design
- ✅ **Responsivo** - Funciona em desktop, tablet e mobile
- ✅ **Acessível** - Cores contrastantes e navegação clara
- ✅ **Moderno** - Gradientes, sombras e animações suaves
- ✅ **Intuitivo** - Interface familiar e fácil de usar

## 🚀 Como Usar

### Instalação
1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Pronto! Não requer servidor ou instalações adicionais

### Adicionando Dicas
1. Clique no botão **"+ Adicionar Dica"** no header
2. Preencha o formulário com:
   - **Título**: Resumo da sua dica
   - **Categoria**: Escolha entre Técnica, Mindset, Estratégia ou Experiência
   - **Conteúdo**: Detalhe sua dica ou aprendizado
   - **Tags**: Palavras-chave separadas por vírgula (opcional)
   - **Nome/Nickname**: Como você gostaria de ser identificada
3. Clique em **"Compartilhar Dica"**

### Explorando Dicas
- **Filtrar**: Use os botões de categoria para ver dicas específicas
- **Buscar**: Digite no campo de busca para encontrar dicas por palavras-chave
- **Navegar**: Role pela página para ver todas as dicas

## 📁 Estrutura do Projeto

```
mural-mfp/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e design responsivo
├── script.js           # Lógica JavaScript e interatividade
└── README.md           # Documentação (este arquivo)
```

### Arquivos Principais

#### `index.html`
- Estrutura semântica da página
- Modal para adicionar dicas
- Seções organizadas (header, filtros, feed, footer)

#### `styles.css`
- Variáveis CSS com paleta de cores MFP
- Design responsivo com breakpoints
- Animações e transições suaves
- Sistema de grid flexível

#### `script.js`
- Classe `MuralMFP` para gerenciar toda a aplicação
- Sistema de filtros e busca em tempo real
- Persistência com localStorage
- Validação de formulários e feedback

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Variáveis CSS para temas
  - Flexbox e Grid Layout
  - Animações e transições
  - Design responsivo
- **JavaScript ES6+**:
  - Classes e módulos
  - LocalStorage API
  - Event handling moderno
  - Template literals

## 🔮 Próximas Funcionalidades

### Versão 2.0 (Planejada)
- [ ] **Backend**: Integração com API para persistência real
- [ ] **Autenticação**: Sistema de login/cadastro
- [ ] **Curtidas**: Sistema de votação nas dicas
- [ ] **Comentários**: Discussões em cada dica
- [ ] **Perfis**: Páginas de perfil das usuárias
- [ ] **Moderação**: Sistema de aprovação de conteúdo

### Versão 2.1 (Futura)
- [ ] **PWA**: Funcionalidades offline
- [ ] **Notificações**: Push notifications para novas dicas
- [ ] **Exportar**: Download de dicas em PDF
- [ ] **Temas**: Modo escuro e outras variações
- [ ] **Analytics**: Estatísticas de uso e engajamento

## 🤝 Como Contribuir

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. Abra um **Pull Request**

### Diretrizes para Contribuição
- Mantenha o código limpo e comentado
- Siga a paleta de cores MFP
- Teste em diferentes dispositivos
- Documente novas funcionalidades

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 💝 Agradecimentos

- **Maratona Feminina de Programação** pela inspiração e oportunidade
- **Comunidade MFP** por tornar a programação competitiva mais inclusiva
- **Todas as participantes** que compartilham conhecimento e experiências

---

**Feito com 💜 para a comunidade MFP**

> *"Juntas somos mais fortes, juntas programamos melhor!"*
