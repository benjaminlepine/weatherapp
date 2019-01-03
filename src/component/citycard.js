/**
 * Created by benjamin on 06/11/2018.
 */
import React, { Component } from 'react';
import '../App.css';

class Citycard extends React.Component {
    tarzan(){
        console.log("test")
        return (
            <h1>hello</h1>
        )
    }

    render(){
        return (
            <div className={"card inlineblock "+this.props.changecolor("card")} onClick={()=>this.tarzan}>
                <div className="block">
                    <div className={"city "+this.props.changecolor("city")}><span>{this.props.city.name}</span></div>
                    <div className="mainimage"></div>
                    <div className={"degree "+this.props.changecolor("degree")}><span>{this.props.city.temp}°</span></div>
                    <div className={"weather "+this.props.changecolor("weather")}><span>{this.props.city.main}</span></div>
                </div>
                <div className="temperaturemain">
                    <div className="inlineblock">
                        <div className="temp-icon cold"></div>
                        <div className={"temperature "+this.props.changecolor("temperature")}><span>{this.props.city.temp_min}</span></div>
                        <div className="coldtext"><span>Min</span></div>
                    </div>
                    <div className="inlineblockright">
                        <div className="temp-icon hot"></div>
                        <div className={"temperature "+this.props.changecolor("temperature")}><span>{this.props.city.temp_max}</span></div>
                        <div className="hottext"><span>max</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Citycard;