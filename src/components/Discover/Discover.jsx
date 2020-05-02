import React, { Component } from 'react'

export default class Discover extends Component {



    render() {
        return (
            <section className="discover">
                <h2>Discover Honda</h2>
                <p>Explore the world of Honda through our latest news, events and videos</p>
                <ul className="discover-container">
                    <li>
                        <div className="cover1">
                            <div className="text">
                                <h3>Key by Amazon In-Car Delivery</h3>
                                <p>Now you can have Amazon packages delivered* directly inside your vehicle with an active
                                HondaLink®
                                Remote Package; available on select trims.</p>
                                <a href="#">LEARN MORE</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cover2">
                            <div className="text">
                                <h3>New Degree? Get a New Ride, Too.</h3>
                                <p>To reward your hard work, Honda would like to offer you $500 towards any 2018 or newer Honda
                                when
                                you
            finance or lease with Honda Financial Services®*.</p>
                                <a href="#">LEARN MORE</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cover3">
                            <div className="text">
                                <h3>Buckle Up, It’s Festival Season!</h3>
                                <p>Enter for a chance to win a Honda Civic and automatically be entered for a chance to win VIP
                                passes
            to a music festival this summer*.</p>
                                <a href="#">ENTER NOW</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cover4 video video-play-on-hover">
                            <video className="autoPlayVideo" width="450px" height="434px"
                                onMouseOver="this.play()" onMouseOut="this.pause(); this.currentTime = 0"
                            >
                                <source src="https://automobiles.honda.com/-/media/Honda-Automobiles/Non-VLP/Honda-Sensing/Homepage/T3-930x868_Tablet_mp4.mp4" />
                            </video>
                            <div className="text">
                                <h3>Honda Sensing</h3>
                                <p>
                                    Learn more about our suite of safety and driver-assistive technologies designed to alert you
                                    to
                                    things you might miss while driving.
                            </p>
                                <a href="#">ENTER NOW</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cover5">
                            <div className="text">
                                <h3>Honda Wins Big</h3>
                                <p>Keeping our spot at the top: Honda has again been awarded the title of 2019 KBB.com Best
                                Value
                                and
                                Best Overall Brand*.</p>
                                <a href="#">ENTER NOW</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cover6">
                            <i className="fab fa-twitter main-logo" />
                            <div className="text-cover6">
                                <div className="logo1">
                                    <span>
                                        <a href="#">Honda</a>
                                        <a href="#">@Honda</a>
                                    </span>
                                </div>
                                <p>It’s #NationalRadioDay. What song turns your steering wheel into a drum set?
                                    <a href="#">https://t.co/EmjRwTE3nJ</a>
                                </p>
                                <a href="#">06:05 AM - 21 Aug 2019</a>
                                <div className="logo2">
                                    <a href="#"><i className="fa fa-reply" /></a>
                                    <a href="#">
                                        <span>
                                            <i className="fa fa-retweet" />
                                             6
                                         </span>
                                    </a>
                                    <a href="#">
                                        <span><i className="fa fa-heart" />80</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="more">
                    <button className="btn btn--red">MORE NEW &amp; EVENTS</button>
                </div>
            </section >

        )
    }
}
