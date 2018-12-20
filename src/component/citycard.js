/**
 * Created by benjamin on 06/11/2018.
 */
import React, { Component } from 'react';
import '../App.css';

 class Citycard extends React.Component {



    render(){
        return (
            <div className="card inlineblock">
                <div className="block">
                    <div className="city"><span>{this.props.city}</span></div>
                    <div className="mainimage"></div>
                    <div className="degree"><span>20°</span></div>
                    <div className="weather"><span>CLOUDY</span></div>
                </div>
                <div className="temperaturemain">
                    <div className="inlineblock">
                        <div className="cold"></div>
                        <div className="temperature"><span>18</span></div>
                        <div className="coldtext"><span>Min</span></div>
                    </div>
                    <div className="inlineblockright">
                        <div className="hot"></div>
                        <div className="temperature"><span>26</span></div>
                        <div className="hottext"><span>max</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Citycard;