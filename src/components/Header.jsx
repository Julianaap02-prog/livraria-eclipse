import { MoonStar } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#inicio" aria-label="Livraria Eclipse - Início">
        <span className="logo-icon">
          <MoonStar size={24} />
        </span>
        <span>Livraria Eclipse</span>
      </a>

      <nav className="menu" aria-label="Menu principal">
        <a href="#inicio">Início</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
