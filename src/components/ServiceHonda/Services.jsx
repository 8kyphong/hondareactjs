import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <section className="service">
                <ul className="row">
                    <li className="col-lg-3 col-md-6 col-sm-12 service-item">
                        <div className="round">
                            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Utility-Belt/V3/IconsBAP_200px.png?w=100&hash=7FC68426FC5264742DF045171C07AA22DBD4AB01" />
                            <h4>Build and price</h4>
                            <p>Customize a Honda vehicle to make it your very own</p>
                            <button className="btn btn--blue">Go</button>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-sm-12 service-item">
                        <div className="round">
                            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Utility-Belt/V3/Shopping_Tools_Icons_200pxCompare_200px.png?w=100&hash=E15503DA8FCBBAE5533268C84C3F600688573EC6" />
                            <h4>Compare</h4>
                            <p>Choose up to four Honda vehicles to find the right one for you</p>
                            <button className="btn btn--blue">Go</button>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-sm-12 service-item">
                        <div className="round">
                            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Utility-Belt/V3/IconsSee_Offers_200px.png?w=100&hash=A1DD6D076D605B821322959001A7090EE8BC0839" />
                            <h4>Current Offers</h4>
                            <p>Find out how easy it is to get into a new vehicle today </p>
                            <button className="btn btn--blue">Go</button>
                        </div>
                    </li>
                    <li className="col-lg-3 col-md-6 col-sm-12 service-item">
                        <div className="round">
                            <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Utility-Belt/V3/IconsSearch_Inventory_200px.png?w=100&hash=465F68934899C8A1B208FD0912D743C1D9696C49" />
                            <h4>Search Inventory</h4>
                            <p>Find your Honda vehicle at a dealer near you</p>
                            <button className="btn btn--blue">Go</button>
                        </div>
                    </li>
                </ul>
            </section>

        )
    }
}
