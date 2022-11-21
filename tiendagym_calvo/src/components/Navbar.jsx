import CartWidget from "./CartWidget";

function Navbar () {
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">MCWorkout</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-link" href="#">Proteina</a>
        <a className="nav-link" href="#">Creatina</a>
        <a className="nav-link" href="#">Pre-entreno</a>
        </div>
    </div>
    </div>
</nav>
        <CartWidget/>
    </>
    )
}

export default Navbar;