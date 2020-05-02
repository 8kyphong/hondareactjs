import React, { Component } from 'react'

export default class StayInTouch extends Component {
    render() {
        return (
            <section className="touch-intouch">
                <div className="touch">
                    <div className="left">
                        <h3>Stay In Touch</h3>
                        <ul className="items">
                            <li>
                                <a href="#"><i className="fab fa-facebook-f" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-twitter" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-youtube" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-instagram" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-pinterest-p" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-linkedin-in" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-tumblr" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fab fa-snapchat-ghost" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <p>Receive the latest news and exclusive updates.</p>
                        <button className="btn btn--white-blue informed">
                            <span>
                                <i className="fa fa-envelope" />
          STAY INFORMED
        </span>
                        </button>
                    </div>
                </div>
            </section>

        )
    }
}
