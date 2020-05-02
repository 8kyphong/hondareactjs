import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="item-1">
                    <div className="left">
                        <p>©2019 American Honda Motor Co., Inc. All information contained herein applies to U.S. vehicles only.
        For non-U.S.-distributor information go to </p>
                        <a href="#">world.honda.com.</a>
                    </div>
                    <div className="right">
                        <div className="link ">
                            <a href="#">
                                Vehicle Data Privacy
        </a>
                            <a href="#">
                                Privacy Policy
        </a>
                            <a href="#">
                                Prop 65 Info
        </a>
                            <a href="#">
                                Terms &amp; Conditions
        </a>
                            <a href="#">
                                SMS Terms
        </a>
                        </div>
                        <a href="#">Site map</a>
                    </div>
                </div>
            </footer>


        )
    }
}
