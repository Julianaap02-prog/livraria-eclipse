import { ShoppingBag } from "lucide-react";

function CardProduto({ produto }) {
  return (
    <article className="card-produto">
      <img src={produto.imagem} alt={`Capa do livro ${produto.nome}`} />
      <div className="card-body">
        <span className="categoria">{produto.categoria}</span>
        <h3>{produto.nome}</h3>
        <p className="autor">{produto.autor}</p>
        <p>{produto.descricao}</p>
        <div className="card-footer">
          <strong>{produto.preco}</strong>
          <button type="button">
            <ShoppingBag size={17} />
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardProduto;
