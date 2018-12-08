import React, { Component } from 'react';
import Citycard from './citycard.js';
import '../App.css';

class Weatherapp extends React.Component {




    render() {
        return (
            <div>
                <Citycard city={'PARIS'}/>
                <Citycard/>
                <Citycard/>

                {/*<div className="weekcontainer">*/}
                    {/*<div className="weekcontainer1">1</div>*/}
                    {/*<div className="weekcontainer2">2</div>*/}
                    {/*<div className="weekcontainer1">3</div>*/}
                    {/*<div className="weekcontainer2">4</div>*/}
                    {/*<div className="weekcontainer1">5</div>*/}
                    {/*<div className="weekcontainer2">6</div>*/}
                    {/*<div className="weekcontainer1">7</div>*/}
                {/*</div>*/}
                {/*<div className="weekcontainerday">*/}
                    {/*<div className="weekcontainerday1">MON</div>*/}
                    {/*<div className="weekcontainerday2">TUE</div>*/}
                    {/*<div className="weekcontainerday1">WED</div>*/}
                    {/*<div className="weekcontainerday2">THU</div>*/}
                    {/*<div className="weekcontainerday1">FRI</div>*/}
                    {/*<div className="weekcontainerday2">SAT</div>*/}
                    {/*<div className="weekcontainerday1">SUN</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Weatherapp;

