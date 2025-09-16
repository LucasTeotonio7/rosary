# Rosário Interativo

Um site interativo para rezar o Rosário católico, desenvolvido com HTML, CSS e JavaScript (jQuery).

## 🎯 Objetivo

Criar uma experiência digital para oração do Rosário que:
- Mostra automaticamente os mistérios do dia conforme a tradição católica
- Fornece versículos bíblicos e orações para cada mistério
- Oferece navegação intuitiva entre os mistérios
- Inclui um guia completo de como rezar o Rosário
- Salva o progresso automaticamente
- Funciona perfeitamente em dispositivos móveis

## 📅 Mistérios do Dia

O site mostra automaticamente os mistérios corretos para cada dia da semana:

- **Segunda-feira e Sábado**: Mistérios Gozosos
- **Terça-feira e Sexta-feira**: Mistérios Dolorosos  
- **Quarta-feira e Domingo**: Mistérios Gloriosos
- **Quinta-feira**: Mistérios Luminosos

## ✨ Funcionalidades

### 🏠 Tela de Boas-vindas
- Design limpo e espiritual
- Botão para iniciar a oração
- Acesso ao guia completo do Rosário

### 📖 Guia Completo
- **As Orações**: Pai Nosso, Ave Maria, Glória, Salve Rainha
- **Ordem da Oração**: Passo a passo de como rezar o Rosário
- **Como Usar o Site**: Instruções de navegação

### 🙏 Tela Principal
- **Mistérios do Dia**: Mostra automaticamente os mistérios corretos
- **Versículos Bíblicos**: Texto bíblico associado a cada mistério
- **Orações**: Oração específica para cada mistério
- **Navegação**: Botões "Anterior" e "Próximo"
- **Progresso Visual**: Bolinhas que mostram o progresso (5 por dia)
- **Data Atual**: Exibição da data e tipo de mistério

### 🎨 Recursos Visuais
- **Design Responsivo**: Funciona perfeitamente em mobile e desktop
- **Modo Escuro**: Alternância entre tema claro e escuro
- **Animações Suaves**: Transições elegantes entre telas
- **Ícones**: Font Awesome para elementos visuais
- **Tipografia**: Fontes Google (Playfair Display e Source Sans Pro)

### 💾 Funcionalidades Extras
- **Salvamento Automático**: Progresso salvo no localStorage
- **Navegação por Teclado**: Setas esquerda/direita para navegar
- **Clique nos Pontos**: Navegação direta para qualquer mistério
- **Persistência**: Progresso mantido entre sessões (mesmo dia)
- **Reset Diário**: Novo dia = novo progresso

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com variáveis CSS e flexbox/grid
- **JavaScript**: Lógica da aplicação
- **jQuery**: Manipulação do DOM e eventos
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Smartphones (320px+)
- Tablets (768px+)
- Desktops (1024px+)

## 🎨 Paleta de Cores

- **Azul Primário**: #4A90E2
- **Dourado**: #D4AF37
- **Laranja**: #F5A623
- **Texto Primário**: #2C3E50
- **Texto Secundário**: #7F8C8D
- **Fundo Claro**: #F8F9FA
- **Branco**: #FFFFFF

## 🚀 Como Usar

1. **Abrir o site**: Abra `index.html` em qualquer navegador moderno
2. **Ler o guia** (opcional): Clique em "Como Rezar o Rosário" para instruções
3. **Iniciar**: Clique em "Começar a Rezar"
4. **Navegar**: Use os botões ou setas do teclado para navegar entre mistérios
5. **Progresso**: As bolinhas mostram seu progresso (clique nelas para ir direto)
6. **Modo Escuro**: Clique no ícone da lua/sol para alternar

## 📁 Estrutura do Projeto

```
rosario/
├── index.html          # Arquivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
└── README.md           # Documentação
```

## 🔧 Personalização

### Adicionar Novos Mistérios
Edite o objeto `mysteries` no arquivo `script.js`:

```javascript
const mysteries = {
    joyful: [
        {
            title: "Nome do Mistério",
            bibleText: "Versículo bíblico...",
            bibleReference: "Livro Capítulo:Versículo",
            prayer: "Oração específica..."
        }
    ]
    // ... outros tipos
};
```

### Modificar Cores
Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #4A90E2;
    --accent-color: #D4AF37;
    /* ... outras cores */
}
```

## 🌟 Recursos Futuros

- [ ] Áudio das orações
- [ ] Notificações diárias
- [ ] Estatísticas de oração
- [ ] Compartilhamento de progresso
- [ ] Múltiplos idiomas
- [ ] Modo offline (PWA)

## 📄 Licença

Este projeto é de uso livre para fins educacionais e religiosos.

## 🙏 Agradecimentos

- Tradição católica pelos mistérios do Rosário
- Comunidade de desenvolvedores por ferramentas open source
- Família e amigos pelo apoio e feedback

---

**Desenvolvido com ❤️ para a comunidade católica** 