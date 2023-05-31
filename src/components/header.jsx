import { Link, useParams, useNavigate } from "react-router-dom";
import back from '../img/back.svg'

function Header() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo"> Spa React Project </a>
                <ul className="nav-links">
                    <li>
                        <a href="/contact"> Contact </a>
                    </li>
                    <li>
                        <a href="/about"> About </a>
                    </li>
                </ul>
                <button className="btn" onClick={goBack}>
                <img src={back}/> 
                Go Back
            </button>
            </div>
        </nav>
    );
}
export { Header };