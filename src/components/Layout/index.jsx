import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <img
          width={80}
          src="https://i.pinimg.com/originals/de/7a/d6/de7ad64b093e745891bc2243a82b6a0c.png"
          alt="logo da barbearia"
        />

        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/barbeiros"}>Barbeiros</Link>
            </li>
            <li>
              <Link to={"/servicos"}>Serviços</Link>
            </li>
            <li>
              <Link to={"/atendimentos"}>Atendimentos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h3>Barbearia X</h3>
        <p>Todos os Direitos Reservados ©</p>
      </footer>
    </>
  );
};
