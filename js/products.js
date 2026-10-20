/*
  CATÁLOGO — edite só este arquivo para cadastrar, alterar ou remover produtos.
  Campos:
    nome      nome exibido e enviado na mensagem do WhatsApp
    descricao texto curto
    imagem    caminho em assets/images/produtos/ (se faltar, aparece um espaço reservado)
    ativo     true = aparece no site | false = fica escondido
  Só marque ativo: true para o que a loja confirmou que vende.
*/
const PRODUTOS = [
  {
    nome: "Camisas esportivas",
    descricao: "Camisas de times e esportivas. Consulte modelos e tamanhos com a loja.",
    imagem: "assets/images/produtos/camisas.jpg",
    ativo: true
  },
  {
    nome: "Perfumes e fragrâncias",
    descricao: "Consulte as fragrâncias disponíveis.",
    imagem: "assets/images/produtos/perfumes.jpg",
    ativo: false // confirme com a loja antes de ativar
  },
  {
    nome: "Relógios",
    descricao: "Consulte os modelos disponíveis.",
    imagem: "assets/images/produtos/relogios.jpg",
    ativo: false // confirme com a loja antes de ativar
  },
  {
    nome: "Acessórios",
    descricao: "Consulte as opções disponíveis.",
    imagem: "assets/images/produtos/acessorios.jpg",
    ativo: false // confirme com a loja antes de ativar
  }
];