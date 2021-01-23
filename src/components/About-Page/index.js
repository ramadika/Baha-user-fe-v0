// Dependencies
import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
import Team from 'components/About-Page/Team'
// Internals
import 'components/About-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="about text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h2 className="text-left"><span>Because We Love</span><span> What We Do.</span></h2>
                            </div>
                            <div className="col align-self-center">
                                <h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.</span>
                                    <span>Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.</span>
                                </h5>
                            </div>
                        </div>
                        <Link to="about#idTeam" className="d-flex justify-content-start">Meet Our Team</Link>
                    </div>
                </div>
                <div className="container teams">
                    <div className="row my-5" id="idTeam">
                        <div className="col">
                            <h6>Arnawa</h6>
                            <h3><span>Our Team Leads.</span></h3>
                        </div>
                    </div>
                    <div className="row">
                        <Team />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
