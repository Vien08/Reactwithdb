import './css/Main.css';
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <div className='container d-flex justify-content-between border-bottom border-dark'>
            <div className="d-flex align-items-center">
            <Link className="navbar-brand" to = '/'><h3 className='fw-bold'>Kap<i class="bi bi-cup-hot-fill" style={{fontSize:'23px'}}></i> De Sulit</h3></Link>
            </div>
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to = '/'><i class="bi bi-house-door-fill"  style={{fontSize:'25px'}}></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to ='/register'><i class="bi bi-person-plus-fill" style={{fontSize:'25px'}}></i></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to ='/login'><i class="bi bi-door-open-fill" style={{fontSize:'25px'}}></i></Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar;