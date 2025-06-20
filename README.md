# 💜 Mural de Dicas MFP

Um mural colaborativo para a **Maratona Feminina de Programação (MFP)** que exibe dicas no formato de post-its colados em uma parede de cortiça.

## ✨ Funcionalidades

- Visual estilo mural de post-its com cores e rotações aleatórias
- Template comentado para facilitar contribuições manuais pelo HTML
- Layout responsivo que simula dicas em uma parede de cortiça

## 🚀 Como Contribuir

1. Faça **fork** deste repositório no GitHub.
2. Abra o seu fork no **GitHub Codespaces**.
3. No Codespaces, abra `index.html` e localize `<div class="tips-grid">`.
4. Copie o template comentado, cole abaixo e **adicione sua dica**:

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
└── README.md     # Documentação do projeto
```

---

Feito com 💜 para a comunidade MFP.
