// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav gap-4 ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pagination">Pagination</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="search">Search</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="otp">Login OTP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="kanbanboard">Kanban Board</a>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  )
}

export default Navbar