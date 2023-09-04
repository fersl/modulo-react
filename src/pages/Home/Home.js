import { Link } from "react-router-dom";
import "./Home.css";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function Home() {
  const user = useContext(UserContext)
  return (
    <>
      <h2>Bem vindo, {user}!</h2>
      <h1>Página Inicial</h1>
      <div className="home-nav">
        <Link to="/filmes">Filmes</Link>
        <br />
        <Link to="/series">Series</Link>
      </div>
    </>
  );
}

export default Home;
