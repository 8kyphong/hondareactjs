import React, { Component } from 'react'
import Header from './header/Header'
import Banner from './Banner/Banner'
import CarWow from './CarWow/CarWow'
import Vehiclas from './Vehicles/Vehicles'
import Services from './ServiceHonda/Services'
import Guild from './Guild/Guild'
import Discover from './Discover/Discover'
import Search from './Search/Search'
import MoreDetail from './MoreDetail/MoreDetail'
import StayInTouch from './StayInTouch/StayInTouch'
import Footer from './Footer/Footer'

export default class TrangChu extends Component {

    render() {
        return (
            <div>
                <Header />
                <Banner />
                <CarWow />
                <Vehiclas />
                <Services />
                <Guild />
                <Discover />
                <Search />
                <MoreDetail />
                <StayInTouch />
                <Footer />
            </div>
        )
    }
}
