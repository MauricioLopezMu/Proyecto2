import React, { Component } from 'react'
import '../spinner.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        )
    }
}
