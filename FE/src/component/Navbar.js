import { Link } from "react-router-dom";

export default function Navbar(){
  return(
<nav className="navbar navbar-default navbar-static-top navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </div>
        <h4 className="navbar-text navbar-right">[C0223G1] <Link to="/" className="navbar-link">Phạm Công Nam</Link></h4>
      </div>
    </nav>
  )
}

