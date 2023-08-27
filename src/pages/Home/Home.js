import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
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
