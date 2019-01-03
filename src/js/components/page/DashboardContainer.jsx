import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

class DashboardContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                new mau form 123
                <Input
                    text="SEO title 1"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
export default DashboardContainer;

let content= document.getElementById("app");
ReactDOM.render(<DashboardContainer />, content);

