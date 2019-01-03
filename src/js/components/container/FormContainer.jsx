import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Input from "../presentational/Input.jsx";
import HeaderContainer from "./HeaderContainer.jsx";


class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const {seo_title} = this.state;
        return (
            <div>
                <div id="header">
                    <HeaderContainer/>
                </div>111
                <section>
                    <div className="row mt-5">
                        <div className="col-md-4 offset-md-1">
                            <p>Create a new article new as</p>
                            <div id="create-article-form">
                                <form id="article-form">
                                    <Input
                                        text="SEO title 2342"
                                        label="seo_title"
                                        type="text"
                                        id="seo_title"
                                        value={seo_title}
                                        handleChange={this.handleChange}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>


                </section>

            </div>
        );
    }
}

export default FormContainer;
let content = document.getElementById("create-article-form");
ReactDOM.render(<FormContainer/>, content);
