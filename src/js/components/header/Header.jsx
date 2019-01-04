import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from 'react-router-dom';
import history from "../../../history.jsx";

class Header extends Component {
    mobileMenu() {
        let navbarCollapse = document.getElementById('navbarCollapse');
        if(navbarCollapse.classList.contains('show')){
            navbarCollapse.classList.remove('show');
        }else{
            navbarCollapse.classList.add('show');
        }

    }

    handleClick() {
        console.log('this is:', this);
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
                    <Router history={history}>
                    <div className="container">

                        <Link className="navbar-brand" to="/" router="/">Home</Link>
                        <button onClick={(e) => this.mobileMenu(e)} className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">

                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">

                                        <Link className="nav-link" to="/dash" router="/dash">Dashboard</Link>
                                    </li>
                                    <li className="nav-item">

                                        <Link className="nav-link" to="/page" router="/page">Page</Link>
                                    </li>


                                </ul>



                        </div>
                    </div>
                    </Router>
                </nav>

            </header>

        );
    }
}

export default Header;
