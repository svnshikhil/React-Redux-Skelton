import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="sk-chasing-dots">
                <div className="sk-child sk-dot1"></div>
                <div className="sk-child sk-dot2"></div>
            </div>
        )
    }
}
