import { ArrowRight, Orbit } from "lucide-react";

function Banner() {
  return (
    <section className="banner" id="inicio" aria-labelledby="banner-titulo">
      <div className="banner-content">
        <p className="tagline">
          <Orbit size={18} />
          Leituras raras, intensas e atmosféricas
        </p>
        <h1 id="banner-titulo">Livros para atravessar noites longas</h1>
        <p>
          Uma curadoria para quem gosta de histórias com mistério, imaginação,
          crítica e um brilho estranho nas entrelinhas.
        </p>
        <a className="banner-button" href="#produtos">
          Ver produtos
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default Banner;
