# Projeto Final - S05-A

Este projeto foi desenvolvido como parte da disciplina de Engenharia de Software, com o objetivo de aplicar os conhecimentos adquiridos ao longo do curso na construção de uma aplicação web utilizando tecnologias modernas.

## 📚 Descrição

A aplicação é uma interface de chat educacional que permite aos usuários interagirem com uma assistente virtual para esclarecer dúvidas sobre disciplinas específicas. O sistema adapta suas respostas com base na matéria selecionada, proporcionando uma experiência personalizada de aprendizado.

## 🛠 Tecnologias Utilizadas

* **Next.js**: Framework React para desenvolvimento de aplicações web.
* **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
* **Tailwind CSS**: Framework de utilitários para estilização.
* **Lucide Icons**: Conjunto de ícones para interfaces modernas.
* **pnpm**: Gerenciador de pacotes rápido e eficiente.
* **AI SDK**: Biblioteca para integração com modelos de linguagem.

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/pedroaba/s05-final-project.git
   cd s05-final-project
   ```

2. **Instale as dependências:**

   ```bash
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   pnpm dev
   ```

4. **Acesse a aplicação:**

   Abra o navegador e vá para [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

* `src/`: Contém os arquivos fonte da aplicação.
* `components/`: Componentes reutilizáveis da interface.
* `pages/`: Páginas da aplicação.
* `public/`: Arquivos públicos acessíveis diretamente.
* `styles/`: Arquivos de estilização global.
* `utils/`: Funções utilitárias.

## 🧠 Funcionalidades

* Interface de chat interativa com assistente virtual.
* Seleção de disciplina para personalizar as respostas.
* Renderização de mensagens com suporte a Markdown.
* Scroll automático para a última mensagem.
* Integração com modelo de linguagem para geração de respostas.

## 📌 Observações

* Certifique-se de que o Node.js e o pnpm estão instalados em sua máquina.
* O projeto utiliza o AI SDK para integração com modelos de linguagem; verifique as configurações necessárias para seu funcionamento adequado.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
