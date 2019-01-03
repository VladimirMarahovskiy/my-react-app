import React, { Component } from "react";
import ReactDOM from "react-dom";

class PageContainer extends Component {
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
            <div id="page_id">
               page
            </div>
        );
    }
}
export default PageContainer;

let content = document.getElementById("app");
 ReactDOM.render(<PageContainer />, content);