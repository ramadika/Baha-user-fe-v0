// Dependencies
import React, { Component } from 'react'
import Header from 'components/Base-Layout/Header'
import Footer from 'components/Base-Layout/Footer'
// Internals

export default class index extends Component {
    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}
