# 💜 Mural de Dicas MFP

Um mural colaborativo para a **Maratona Feminina de Programação (MFP)** que exibe dicas no formato de post-its.

## ✨ Sobre o Projeto

Este projeto cria um mural virtual onde participantes da Maratona Feminina de Programação podem compartilhar dicas de programação, estratégias e experiências através de post-its coloridos. O objetivo é criar um espaço colaborativo para troca de conhecimentos.

- Visual estilo mural de post-its com cores e rotações aleatórias
- Fácil contribuição através da edição direta do código HTML
- Layout responsivo que simula dicas em uma parede de cortiça

## 🚀 Como Contribuir

1. Faça **fork** deste repositório no GitHub.
2. Abra o seu fork no **GitHub Codespaces** ou clone localmente.
3. No editor, abra `index.html` e localize a seção `<div class="tips-grid">`.
4. Copie o template comentado, cole abaixo das dicas existentes e **adicione sua dica**:

   ```html
   <article class="tip-card">
       <div class="tip-content">Sua dica aqui...</div>
       <div class="tip-author">Por: Seu Nome</div>
   </article>
   ```

5. Realize **commit** das alterações e **push** para o seu fork.
6. No GitHub, **crie um Pull Request (PR)** apontando para o repositório original.

## 📁 Estrutura do Projeto

```bash
mural-mfp/
├── index.html    # Página principal com mural de post-its
├── styles.css    # Estilos de cortiça e post-its
├── script.js     # JavaScript para efeitos visuais dos post-its
├── logo.png      # Logo do projeto
└── README.md     # Documentação do projeto
```

## 💡 Ideias para Expansão Futura

- Categorização de dicas por cores
- Adicionar sistema de "like" nas dicas mais úteis
- Opção de imprimir o mural para eventos presenciais
- Versão móvel com interface otimizada

---

Feito com 💜 para a comunidade MFP.
