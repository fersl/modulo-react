import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <h1>Página Inicial</h1>
            <Link to='/filmes'>Filmes</Link>
            <br/>
            <Link to='/series'>Series</Link>
        </>
    )
}

export default Home