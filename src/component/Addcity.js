import React from 'react';
import '../App.css';

class Addcity extends React.Component {

    render(){
        return (
            <div className={"card inlineblock top10 "+this.props.changecolor("card")}>
                <div className="block">
                    <div className={"city "+this.props.changecolor("city")}><span>ADD CITY</span></div>
                    <input type="text" className="inputcity" placeholder="search city"/>
                    <div className="mainimage addicon"></div>
                    <div className="mainimage cityicon"></div>
                </div>
            </div>
        );
    }
}

export default Addcity;
