# Voz Ativa — site institucional

Site estático em HTML, CSS e JavaScript, pronto para publicar no GitHub Pages.

## Arquivos
- `index.html`: página inicial
- `sobre.html`: sobre a proposta e valores
- `servicos.html`: frentes de atuação
- `metodologia.html`: etapas e princípios
- `contato.html`: formulário que prepara uma mensagem para WhatsApp
- `assets/style.css`: identidade visual e responsividade
- `assets/script.js`: menu mobile, ano automático e configuração do WhatsApp

## Antes de publicar
1. Abra `assets/script.js`.
2. Altere `WHATSAPP_NUMBER` para o número oficial da Voz Ativa, com código do país + DDD + número, somente dígitos. Exemplo fictício: `5511999999999`.
3. Revise os textos e os dados institucionais. O conteúdo está redigido como uma proposta de assessoria e não afirma que serviços já estejam operacionalmente implantados.
4. O formulário não armazena dados nem envia para um servidor; ele monta a mensagem e abre o WhatsApp.

## Publicar pelo GitHub Pages
1. Entre em https://github.com e crie um repositório público, por exemplo `voz-ativa`.
2. Envie todos os arquivos e pastas deste projeto para a raiz do repositório (o `index.html` deve ficar na raiz).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/(root)`, depois clique em **Save**.
6. Aguarde a publicação. A URL normalmente será `https://SEU-USUARIO.github.io/voz-ativa/`.

Se usar um repositório chamado `SEU-USUARIO.github.io`, a URL costuma ser `https://SEU-USUARIO.github.io/`.

## Observações
- GitHub Pages hospeda conteúdo estático; não oferece backend ou banco de dados para o formulário.
- O botão WhatsApp fica como demonstração até você trocar o número de exemplo.
- Fontes do Google Fonts precisam de conexão com a internet; se não estiverem disponíveis, o site usa fontes alternativas.
