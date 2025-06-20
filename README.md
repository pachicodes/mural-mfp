# 💜 Mural de Dicas MFP

Um mural colaborativo para a **Maratona Feminina de Programação (MFP)** onde participantes aprendem contribuições open source na prática e criam um legado de conhecimento para futuras maratonas.

## 🎯 Duplo Propósito

### 🎓 **Ferramenta Educativa (Workshop Open Source)**
- Ensinar Git e GitHub através de contribuições reais
- Praticar o fluxo completo: Fork → Branch → Commit → Pull Request
- Aprender boas práticas de desenvolvimento colaborativo
- Experiência hands-on com projetos open source

### � **Legado Comunitário (Banco de Conhecimento)**
- Criar um repositório permanente de dicas e aprendizados
- Beneficiar futuras participantes da MFP
- Construir memória coletiva da comunidade
- Fortalecer a rede de apoio entre mulheres programadoras

## 👩‍🏫 Workshop by Pachi Parra

Este projeto faz parte de um workshop prático onde as estudantes aprendem a contribuir com open source adicionando seus próprios cards de dicas ao mural. Cada contribuição não só ensina Git/GitHub, mas também deixa algo valioso para a comunidade.

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

## 🚀 Como Contribuir (Para Estudantes do Workshop)

### 📋 **Passo a Passo - Sua Primeira Contribuição Open Source**

#### 1️⃣ **Fork e Clone**
```bash
# 1. Clique em "Fork" neste repositório no GitHub
# 2. Clone SEU fork (não o original):
git clone https://github.com/SEU-USUARIO/mural-mfp.git
cd mural-mfp
```

#### 2️⃣ **Criar Branch**
```bash
# Sempre trabalhe em uma branch separada:
git checkout -b adiciona-dica-SEU-NOME
# Exemplo: git checkout -b adiciona-dica-maria
```

#### 3️⃣ **Adicionar Sua Dica**
- Abra `index.html` no navegador
- Clique em **"+ Contribuir"**
- Preencha o formulário com sua dica
- Sua dica será salva automaticamente

#### 4️⃣ **Commit e Push**
```bash
# Verificar o que mudou:
git status

# Adicionar mudanças:
git add .

# Commit com mensagem descritiva:
git commit -m "Adiciona dica sobre debugging por Maria"

# Enviar para SEU fork:
git push origin adiciona-dica-SEU-NOME
```

#### 5️⃣ **Abrir Pull Request**
1. Vá para SEU fork no GitHub
2. Clique em **"Compare & pull request"**
3. Escreva uma descrição clara da sua contribuição
4. Clique em **"Create pull request"**

🎉 **Parabéns! Você fez sua primeira contribuição open source!**

### ❗ **Regras Importantes**
- ✅ **Uma dica por Pull Request** - facilita a revisão
- ✅ **Branch descritiva** - use seu nome na branch
- ✅ **Commit claro** - explique o que você adicionou
- ✅ **Teste antes** - verifique se sua dica aparece corretamente
- ✅ **Seja respeitosa** - mantenha um tom colaborativo

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

## ⭐ Para Futuras Maratonas

Este mural crescerá a cada workshop e maratona! 

### 🔄 **Ciclo de Contribuições**
1. **Workshop atual**: Estudantes aprendem Git contribuindo com dicas
2. **Maratonas futuras**: Novas participantes se beneficiam das dicas
3. **Próximos workshops**: Mais turmas adicionam conhecimento
4. **Crescimento contínuo**: Banco de conhecimento sempre evoluindo

### 📚 **Tipos de Dicas Bem-vindas**
- **Técnicas**: Algoritmos, estruturas de dados, debugging
- **Git/GitHub**: Comandos úteis, fluxos de trabalho
- **Open Source**: Como encontrar projetos, primeiras contribuições
- **Experiências**: Primeiras maratonas, superação de desafios
- **Estratégias**: Gestão de tempo, preparação para competições

### 🌟 **Seu Legado**
Cada dica adicionada:
- ✨ Ajuda outras programadoras
- 🚀 Ensina sobre open source na prática  
- 💜 Fortalece a comunidade MFP
- 📈 Constrói seu portfólio GitHub

---

## 🛠️ Informações Técnicas

## 🤝 Para Instrutoras e Mentoras

### 📖 **Como Usar no Workshop**
1. **Preparação**: Clone o repo e teste todas as funcionalidades
2. **Demonstração**: Mostre o fluxo completo de contribuição
3. **Prática guiada**: Ajude cada estudante no seu primeiro PR
4. **Code review**: Revisite os PRs e dê feedback construtivo

### 💡 **Dicas para o Workshop**
- Explique a diferença entre fork e clone
- Enfatize a importância de mensagens de commit claras
- Mostre como resolver conflitos simples
- Incentive colaboração entre as participantes

---

## 🤝 Como Contribuir (Para Mentoras)

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
