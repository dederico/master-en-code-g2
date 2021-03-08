import React, { Component } from 'react'
import Background from './svg/background.png'
import './Section.css'

export class Section extends Component {
    render() {
        return (

            <div>
                <img src={Background} alt="background" className="responsive" />
            </div>
        )
    }
};
export default Section