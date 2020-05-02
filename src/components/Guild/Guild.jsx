import React, { Component } from 'react'

export default class Guild extends Component {
    render() {
        return (
            <section className="guild">
                <div className="guild-container">
                    <div className="left" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="text">
                            <button className="btn btn--blue">SHOP CERTIFIED</button>
                        </div>
                    </div>
                    <div className="right" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="text">
                            <h3>How-To Videos and Guides</h3>
                            <p>Find owner manuals, instructional guides, how-to videos and helpful links designed to help you
                            make the most of your Honda.
                            </p>
                            <button className="btn btn--white">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
