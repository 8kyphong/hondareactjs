import React, { Component } from 'react'

export default class Vehiclas extends Component {
    render() {
        return (
            <section className="vehicles">
                <h2 className="h2-vehicles">Our Vehicles</h2>
                <div className="tab">
                    <ul className="nav nav-tabs mb-3 tab-vehicles" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="cars-tab" data-toggle="tab" href="#cars" role="tab" aria-controls="cars" aria-selected="true">CARS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="suvs-tab" data-toggle="tab" href="#suvs" role="tab" aria-controls="suvs" aria-selected="false">SUVS &amp; CROSSOVER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="minivan-tab" data-toggle="tab" href="#minivan" role="tab" aria-controls="minivan" aria-selected="false">MINIVAN &amp; TRUCK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="electrified-tab" data-toggle="tab" href="#electrified" role="tab" aria-controls="electrified" aria-selected="false">ELECTRIFIED</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="pre-tab" data-toggle="tab" href="#pre" role="tab" aria-controls="pre" aria-selected="false">PRE-OWNED</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active hero-carousel" id="cars" role="tabpanel" aria-labelledby="cars-tab">
                            <div className="pic1">
                                <p className="page">Car 1/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>ACCORD</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With three advanced powertrains, a revolutionary design and Honda Sensing®
                                    standard
                                    on
              all trims, the Accord is the most impressive Honda yet.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="pic2">
                                <p className="page">Car 2/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>ACCORD</h3>
                                        <span>
                                            <hr />
                                            <p>Hybrid</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">Sophisticated on the outside. Tech-forward on the inside. Add efficiency
              and exhilaration to every drive in the no-compromise Accord Hybrid.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="pic3">
                                <p className="page">Car 3/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>CIVIC</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With fresh looks, innovative technology and sporty performance, the
              restyled Civic Sedan delivers more fun inside and out.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2019/Civic-Sedan/Non-VLP/Full-Line/MY19_Copper_Family_Lock-Up_4_2x.png?mw=289&hash=D6C2F9E3C65E49282BAFAD1C840A9346837F32C6" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade hero-carousel" id="suvs" role="tabpanel" aria-labelledby="suvs-tab">
                            <div className="suv1">
                                <p className="page">SUVe &amp; CROSSOVERS 1/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>PASSPORT</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With three advanced powertrains, a revolutionary design and Honda Sensing®
                                    standard
                                    on
              all trims, the Accord is the most impressive Honda yet.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="suv2">
                                <p className="page">SUVe &amp; CROSSOVERS 2/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>ACCORD</h3>
                                        <span>
                                            <hr />
                                            <p>Hybrid</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">Sophisticated on the outside. Tech-forward on the inside. Add efficiency
              and exhilaration to every drive in the no-compromise Accord Hybrid.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="suv3">
                                <p className="page">SUVe &amp; CROSSOVERS 3/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>CIVIC</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With fresh looks, innovative technology and sporty performance, the
              restyled Civic Sedan delivers more fun inside and out.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2019/Civic-Sedan/Non-VLP/Full-Line/MY19_Copper_Family_Lock-Up_4_2x.png?mw=289&hash=D6C2F9E3C65E49282BAFAD1C840A9346837F32C6" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade hero-carousel" id="minivan" role="tabpanel" aria-labelledby="minivan-tab">
                            <div className="mini1">
                                <p className="page">SUVe &amp; CROSSOVERS 1/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>PASSPORT</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With three advanced powertrains, a revolutionary design and Honda Sensing®
                                    standard
                                    on
              all trims, the Accord is the most impressive Honda yet.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="mini2">
                                <p className="page">SUVe &amp; CROSSOVERS 2/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>ACCORD</h3>
                                        <span>
                                            <hr />
                                            <p>Hybrid</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">Sophisticated on the outside. Tech-forward on the inside. Add efficiency
              and exhilaration to every drive in the no-compromise Accord Hybrid.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="mini3">
                                <p className="page">SUVe &amp; CROSSOVERS 3/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>CIVIC</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With fresh looks, innovative technology and sporty performance, the
              restyled Civic Sedan delivers more fun inside and out.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2019/Civic-Sedan/Non-VLP/Full-Line/MY19_Copper_Family_Lock-Up_4_2x.png?mw=289&hash=D6C2F9E3C65E49282BAFAD1C840A9346837F32C6" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade hero-carousel" id="electrified" role="tabpanel" aria-labelledby="electrified-tab">
                            <div className="mini1">
                                <p className="page">SUVe &amp; CROSSOVERS 1/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>PASSPORT</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With three advanced powertrains, a revolutionary design and Honda Sensing®
                                    standard
                                    on
              all trims, the Accord is the most impressive Honda yet.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="mini2">
                                <p className="page">SUVe &amp; CROSSOVERS 2/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>ACCORD</h3>
                                        <span>
                                            <hr />
                                            <p>Hybrid</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">Sophisticated on the outside. Tech-forward on the inside. Add efficiency
              and exhilaration to every drive in the no-compromise Accord Hybrid.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade hero-carousel" id="pre" role="tabpanel" aria-labelledby="pre-tab">
                            <div className="mini1">
                                <p className="page">SUVe &amp; CROSSOVERS 1/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>PASSPORT</h3>
                                        <span>
                                            <hr />
                                            <p>Sedan</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">With three advanced powertrains, a revolutionary design and Honda Sensing®
                                    standard
                                    on
              all trims, the Accord is the most impressive Honda yet.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                            <div className="mini2">
                                <p className="page">SUVe &amp; CROSSOVERS 2/3</p>
                                <div className="item--1">
                                    <div className="title">
                                        <span>
                                            <hr />
                                            <p>2019</p>
                                            <hr />
                                        </span>
                                        <h3>ACCORD</h3>
                                        <span>
                                            <hr />
                                            <p>Hybrid</p>
                                            <hr />
                                        </span>
                                    </div>
                                    <p className="intro">Sophisticated on the outside. Tech-forward on the inside. Add efficiency
              and exhilaration to every drive in the no-compromise Accord Hybrid.</p>
                                    <div className="price">
                                        <div className="left">
                                            <p className="number">$23,720</p>
                                            <p className="text">STARTING MSRP</p>
                                        </div>
                                        <div className="right">
                                            <p className="number">38 / 30</p>
                                            <p className="text">HWY/CITY MPG RATING</p>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn btn--red">EXPLORE</button>
                                        <button className="btn btn--white">BUILDS</button>
                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="item--2">
                                    <a href="https://automobiles.honda.com/accord">EXPLORE THE ACCORD FAMILY</a>
                                    <img src="https://automobiles.honda.com/-/media/Honda-Automobiles/Homepage/Full-Line-Module/accord-family-vehicles-2x.png?mw=298&hash=DCCAA05B45D9AE45820F8FCC2DDA9022699E521E" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
