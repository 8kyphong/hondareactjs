import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <section className="search">
                <i className="fa fa-search" />
                <input type="text" placeholder="Search" />
                <div className="search-button">
                    <button className="btn btn--white-blue">SEARCH</button>
                </div>
                <div className="to--top">
                    <a href="#" id="toTop" className="cd-top text-replace js-cd-top">
                        Back to top<i className="fa fa-arrow-up" />
                    </a>
                </div>
            </section>

        )
    }
}
