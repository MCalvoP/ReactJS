import CartWidget from "./CartWidget";

function Navbar () {
    return (
        <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">MCWorkout</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        <a class="nav-link" href="#">Proteina</a>
        <a class="nav-link" href="#">Creatina</a>
        <a class="nav-link" href="#">Pre-entreno</a>
        </div>
    </div>
    </div>
</nav>
        <CartWidget/>
    </>
    )
}

export default Navbar;