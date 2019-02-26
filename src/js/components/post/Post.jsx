import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from 'react-router-dom';
import history from "../../../history.jsx";

class Post extends Component {

    render() {
        let item = this.props.item;

        console.log(this.props.item);
        return (
            <div className='post'>
                <blockquote>
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </blockquote>

                <div className="Comment">
                    <div className="UserInfo">
                        <img className="Avatar"
                             /*src={props.author.avatarUrl}
                             alt={props.author.name}*/
                        />
                        <div className="UserInfo-name">
                            {item.name}
                        </div>
                    </div>
                    <div className="Comment-text">
                        {item.cars}
                    </div>
                    <div className="Comment-date">
                        {item.age}
                    </div>
                </div>

            </div>


        );
    }
}

export default Post;
