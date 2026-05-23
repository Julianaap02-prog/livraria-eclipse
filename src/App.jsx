import { Camera, Mail, MessageCircle, Sparkles } from "lucide-react";
import Banner from "./components/Banner.jsx";
import CardProduto from "./components/CardProduto.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Sobre from "./components/Sobre.jsx";
import { produtos } from "./data/produtos.js";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Banner />

        <section className="produtos" id="produtos" aria-labelledby="produtos-titulo">
          <div className="section-heading">
            <span className="eyebrow">
              <Sparkles size={18} />
              Curadoria
            </span>
            <h2 id="produtos-titulo">Leituras para sentir antes de entender</h2>
          </div>

          <div className="grid-produtos">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </section>

        <Sobre />

        <section className="contato" id="contato" aria-labelledby="contato-titulo">
          <div>
            <span className="eyebrow">
              <MessageCircle size={18} />
              Contato
            </span>
            <h2 id="contato-titulo">Fale com a Livraria Eclipse</h2>
            <p>
              Peça indicações, monte sua lista de leitura ou acompanhe as
              novidades pelos canais fictícios abaixo.
            </p>
          </div>
          <div className="contato-links">
            <a href="mailto:contato@livrariaeclipse.com">
              <Mail size={18} />
              contato@livrariaeclipse.com
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Camera size={18} />
              @livrariaeclipse
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
