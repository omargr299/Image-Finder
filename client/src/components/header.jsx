import React from 'react';
import {Link} from 'react-router-dom'

function Active(e){
    const active = document.querySelector(".active");
    if(e.target===active) return;
    active.classList.remove("active");
    e.target.classList.add("active");
}

export function Header(){

    

    return(
        <nav className='navbar navbar-expand-sm background-color shadow-sm mb-2 p-0'>
            <div className='navbar-container container-fluid position-relative h-100'>

            <Link to='/' className='navbar-brand mb-0 mx-1 h1'>Image Finder</Link>
            
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list"></i>
                </button>
            

                <div className='collapse navbar-collapse end-0 h-100' id='navbarNav'>
                    <ul className='navbar-nav h-100'>
                        <li className='nav-item'>
                            <Link to="/" className='nav-link active' onClick={Active}>Inico</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/favoritos" className='nav-link' onClick={Active}>Favortios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}