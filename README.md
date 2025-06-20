# 💜 Mural de Dicas MFP

Um mural colaborativo para a **Maratona Feminina de Programação (MFP)** que exibe dicas no formato de post-its colados em uma parede de cortiça.

## ✨ Funcionalidades

- Visual estilo mural de post-its com cores e rotações aleatórias
- Template comentado para facilitar contribuições manuais pelo HTML
- Layout responsivo que simula dicas em uma parede de cortiça

## 🚀 Como Contribuir

1. Abra o arquivo `index.html` no seu editor.
2. Localize a `<div class="tips-grid">` dentro de `<section class="tips-feed">`.
3. Copie o bloco de template comentado:

   ```html
   <!--
   <article class="tip-card">
       <div class="tip-content">Escreva sua dica aqui...</div>
       <div class="tip-author">Por: Seu Nome</div>
   </article>
   -->
   ```

4. Cole abaixo dos exemplos existentes, preencha `tip-content` e `tip-author`.
5. Salve o arquivo e recarregue a página no navegador para ver seu post-it.
6. Faça commit das suas mudanças e abra um Pull Request para compartilhar sua dica!

## 📁 Estrutura do Projeto

```bash
mural-mfp/
├── index.html    # Página principal com mural de post-its
├── styles.css    # Estilos de cortiça e post-its
└── README.md     # Documentação do projeto
```

---

Feito com 💜 para a comunidade MFP.
