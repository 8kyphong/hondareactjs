import React, { Component } from 'react'

export default class CarWow extends Component {
    render() {
        return (
            <section className="car-wow">
                <div className="car-container">
                    <div className="left" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="text">
                            <h3>The Best Midsize Two-Row SUV</h3>
                            <p>The Passport proves that it has more to offer than any other SUV in its class.*</p>
                            <button className="btn btn--blue">LEARN MORE</button>
                            <p className="small">Elite shown in White Diamond Pearl.</p>
                        </div>
                    </div>
                    <div className="right" data-aos="fade-up" data-aos-duration={1000}>
                        <div className="text">
                            <p>2019 KBB.com Best Value and Best Overall Brand</p>
                            <button className="btn btn--white">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
