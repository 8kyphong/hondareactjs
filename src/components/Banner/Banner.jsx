import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <section className="banner">
                <ul className="banner-carousel">
                    <li className="item banner1">
                        <div>
                            <button className="btn btn--red">SEE OFFERS</button>
                        </div>
                    </li>
                    <li className="item banner2">
                        <div>
                            <h3>Named the most fuel-efficient automaker in America by the EPA</h3>
                            <button className="btn btn--red">LEARN MORE</button>
                            <p>
                                Accord Touring, Insight Touring, Civic Sedan Touring, HR-V Touring and CR-V Touring shown.
                                </p>
                        </div>
                    </li>
                    <li className="item banner3">
                        <div>
                            <h3>Key by Amazon In-Car Delivery</h3>
                            <button className="btn btn--red">LEARN MORE</button>
                            <p>
                                Pilot Elite shown in Deep Scarlet Pearl. Passport Elite shown in Lunar Silver Metallic.
                                </p>
                        </div>
                    </li>
                    <li className="item banner4">
                        <div>
                            <h3>Buckle Up, It’s Festival Season!</h3>
                            <p>Enter for a chance to win a Honda Civic and automatically be entered for a chance to win VIP
                            passes
          to a music festival this summer. </p>
                            <button className="btn--red">ENTER NOW</button>
                            <p>
                                No purchase necessary. Void in AK, HI, and where prohibited. Must be 18 or over for entry
                                qualification. Entrants must be U.S. citizens. See official rules at music.honda.com.
                                </p>
                        </div>
                    </li>
                    <li className="item banner5">
                        <div>
                            <button className="btn btn--red">LEARN MORE</button>
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}
