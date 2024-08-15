import "./Header.css";
export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light headerBar bg-light">
        <div className="container-fluid headerNavItems">
          <div className="d-flex align-items-center justify-content-center">
            <a className="navbar-brand">Home</a>
            <i className="navbar-brand">&#62;</i>
            <a className="navbar-brand">
              <strong>Dashboard</strong>
            </a>
          </div>
          <div className="d-flex">
            <form className="d-flex">
              <input
                className="form-control searchBar me-2"
                type="search"
                placeholder="Search Anything"
                aria-label="Search"
              />
            </form>
            <div className="nav-item dropdown">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
