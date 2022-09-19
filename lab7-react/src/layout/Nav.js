import Login from "./Login";
import logo from '../assets/logo.png';

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
            <div className="container">
                <a className="navbar-brand" href="#!"><img className="logo" src={logo} alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0" id="login">
                        <Login />
                    </div>
                </div>

            </div>
        </nav>

    )
}