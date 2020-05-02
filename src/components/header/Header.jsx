import React, { Component } from 'react';
import HeaderModal from './HeaderModal';
import { Link, NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="head-container">
                    <div className="row">
                        <div className="left col-lg-6">
                            <a className="logo" href="https://automobiles.honda.com/">
                                <img src="/images/honda-logo.png" alt="" />
                            </a>
                            <div className="vehicles">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        VEHICLES
                                        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">CARS</a>
                                        <a className="dropdown-item" href="#">SUVS &amp; CROSSOVERS</a>
                                        <a className="dropdown-item" href="#">MINIVAN &amp; TRUCK</a>
                                        <a className="dropdown-item" href="#">ELECTRIFIED</a>
                                        <a className="dropdown-item" href="#">FUTURE</a>
                                        <a className="dropdown-item" href="#">PRE-OWNED</a>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-tools">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        SHOPPING TOOLS
                                        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Research</a>
                                        <a className="dropdown-item" href="#">Finance</a>
                                        <a className="dropdown-item" href="#">MINIVAN &amp; TRUCK</a>
                                    </div>
                                </div>
                            </div>
                            {/* MODAL */}
                            <div>
                                <HeaderModal />
                            </div>
                            {/* KHÁCH HÀNG   */}
                            <div className="khachHang">
                                <NavLink className="nav-link" to='/khachhang'>Danh Sách Khách Hàng</NavLink>
                            </div>

                        </div>
                        <div className="right navbar col-lg-6">
                            <a href="https://automobiles.honda.com/tools/dealership-locator">
                                <i className="fa fa-map-marker-alt" /> Dealers</a>
                            <div className="owners">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Owners
                                        </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Your Honda</a>
                                        <a className="dropdown-item" href="#">Helpful Links</a>
                                        <a className="dropdown-item" href="#">Recalls</a>
                                        <a className="dropdown-item" href="#">How-to videos and guides</a>
                                    </div>
                                </div>
                            </div>
                            <div className="discover">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Discover
            </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Innovation</a>
                                        <a className="dropdown-item" href="#">News &amp; Events</a>
                                    </div>
                                </div>
                            </div>
                            <div className="english">
                                <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        English
            </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Language</a>
                                        <a className="dropdown-item" href="#">News &amp; Events</a>
                                    </div>
                                </div>
                            </div>
                            <div className="search">
                                <i className="fa fa-search" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
