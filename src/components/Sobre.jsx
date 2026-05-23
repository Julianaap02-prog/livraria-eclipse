function Sobre() {
  return (
    <section className="sobre" id="sobre" aria-labelledby="sobre-titulo">
      <div className="sobre-texto">
        <span className="eyebrow">Sobre a loja</span>
        <h2 id="sobre-titulo">Uma livraria para quem procura outros mundos</h2>
        <p>
          A Livraria Eclipse reúne obras escolhidas para quem se interessa por
          futuros possíveis, personagens intensas, saberes antigos e narrativas
          que questionam o mundo sem perder o encanto.
        </p>
      </div>
      <div className="sobre-dados" aria-label="Destaques da loja">
        <div>
          <strong>6+</strong>
          <span>livros selecionados</span>
        </div>
        <div>
          <strong>4</strong>
          <span>linhas de curadoria</span>
        </div>
        <div>
          <strong>24h</strong>
          <span>loja disponível</span>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
