import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class HomeContainer extends Component {
    constructor() {
        super();
        let listItems;
        axios('http://react.loc/test.php',  {
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
            });

        this.state = {
            seo_title: ""
        };
       // this.handleChange = this.handleChange.bind(this);


    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        const {seo_title} = this.state;
      //  console.log(this.state.list);
        return (
            <div id="home">

                <section className='container'>
                    home
                    <ul>

                    </ul>
                </section>

            </div>

        );
    }
}

export default HomeContainer;

let content = document.getElementById("app");
ReactDOM.render(<HomeContainer/>, content);