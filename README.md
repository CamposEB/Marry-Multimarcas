# Marry Multimarcas — Landing page

Site estático (HTML, CSS e JavaScript puro). Não precisa de backend.

## 1. Abrir no VS Code
Abra o VS Code > Arquivo > Abrir Pasta > escolha a pasta `marry-multimarcas`.

## 2. Rodar com Live Server
Instale a extensão **Live Server** (Ritwick Dey). Clique com o botão direito em `index.html` > **Open with Live Server**.

## 3. Trocar logotipo e fotos
Salve os arquivos em `assets/images/` com estes nomes:
- `logo.png` (logotipo, também usado como favicon)
- `hero.jpg` (foto de fundo do topo, horizontal, ex.: 1920x1080; o ideal é a pessoa/produto à direita e fundo escuro à esquerda)
- `og.jpg` (imagem de compartilhamento, 1200x630)
- `produtos/` (fotos dos produtos, proporção 4:3, ex.: 600x450)

Sem os arquivos, o site mostra um fundo escuro com painéis dourados e a letra M como reserva.

## 4. Cadastrar produtos
Edite `js/products.js`: copie um bloco `{ ... }`, mude `nome`, `descricao`, `imagem` e deixe `ativo: true`. Para esconder, use `ativo: false`. Ative só o que a loja confirmou que vende.

## 5. Testar WhatsApp e Instagram
Clique em cada botão "Consultar disponibilidade", "Fale pelo WhatsApp" e no botão flutuante: o WhatsApp deve abrir com a mensagem preenchida para +55 21 98538-5730. Teste também no celular. O Instagram é https://www.instagram.com/marrymult/

## 6. Publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `marry-multimarcas`) e envie os arquivos (com `index.html` na raiz).
2. Em **Settings > Pages**, em Source escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Aguarde 1 a 2 minutos. O endereço será `https://SEU-USUARIO.github.io/marry-multimarcas/`.
4. Depois, atualize `og:image` no `index.html` com a URL completa da imagem.

## 7. Domínio próprio (futuro)
1. Registre o domínio (ex.: no Registro.br).
2. Em Settings > Pages > Custom domain, digite o domínio.
3. No DNS: para `www`, crie um CNAME para `SEU-USUARIO.github.io`. Para o domínio raiz, crie registros A para os IPs listados na documentação do GitHub Pages.
4. Marque **Enforce HTTPS**.

## Observações
- Horário de funcionamento, preços e dados estruturados não foram incluídos porque não foram confirmados.
- As fontes vêm do Google Fonts e, sem internet, o navegador usa fontes do sistema.
