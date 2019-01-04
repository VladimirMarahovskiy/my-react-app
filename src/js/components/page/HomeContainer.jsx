import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import list from "../../../value.jsx";
import Post from "../post/Post.jsx";

let listItems;

class HomeContainer extends Component {
    constructor() {
        super();

        /*axios('http://react.loc/test.php',  {
                method:'POST',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },

                "crossDomain": false
            },
        )
            .then(function (response) {
                if (response) {
                    console.log(response);
                    this.state = {
                        list: response
                    }
                }
            })
            .catch(function (error) {
                console.log(1);
                console.log(error);
            });*/


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
        const listItems = list.map((item) =>
            <Post item={item}/>
        );

        return (
            <div id="home">

                <section className='container'>
                    home

                    {listItems}

                </section>

            </div>

        );
    }
}

export default HomeContainer;

