const produtos = [
  { id: 1, nome: 'Fone Bluetooth X200', preco: 89.90 },
  { id: 2, nome: 'Carregador Turbo 20W', preco: 49.90 },
  { id: 3, nome: 'Suporte Veicular Magnético', preco: 29.90 }
];

const produtosEl = document.getElementById('produtos');
const carrinhoEl = document.getElementById('lista-carrinho');
const totalEl = document.getElementById('total');
let carrinho = [];

function renderProdutos() {
  produtos.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco.toFixed(2)}</p>
      <button onclick="addCarrinho(${p.id})">Adicionar</button>
    `;
    produtosEl.appendChild(div);
  });
}

function addCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  renderCarrinho();
}

function renderCarrinho() {
  carrinhoEl.innerHTML = '';
  let total = 0;
  carrinho.forEach((item, index) => {
    total += item.preco;
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    carrinhoEl.appendChild(li);
  });
  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
  alert('Compra finalizada! Obrigado pela preferência.');
  carrinho = [];
  renderCarrinho();
}

renderProdutos();
