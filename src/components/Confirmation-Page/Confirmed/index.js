// Dependencies
import React, { Component } from 'react'
import Footer from 'components/Base-Layout/Footer'
import { TiTickOutline } from 'react-icons/ti'
// Internals
import 'components/Confirmation-Page/Confirmed/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-center confirmed">
                    <div className="row">
                        <TiTickOutline size={125} className="tick-confirmed"/>
                    </div>
                    <div className="row">
                        <h2 className="text-center">Order Confirmed</h2>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
