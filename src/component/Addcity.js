import React from 'react';
import '../App.css';
import fetchAPI from "../utils/fetchAPI.js";

class Addcity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newCityName:"",
            cod:0
        }
    }

    componentDidUpdate(){
        if(parseInt(this.state.cod) === 200){
            this.props.handleCities(this.state.newCityName)
            this.setState({
                cod:0
            })
            // TODO Success add city
        }
        else{
            // TODO Display city doesn't exist
        }
    }

    addCity = () => {
        let newInputCityName = document.getElementById("newCityName").value;
        this.setState({
            newCityName:newInputCityName
        })
        fetchAPI.ifCityExist2(newInputCityName,(code)=>{
            console.log("code = ", code)
            this.setState({
                cod:code
            })
        })
    }

    render(){
        return (
            <div className={"card inlineblock top10 "+this.props.changecolor("card")}>
                <div className="block">
                    <div className={"city "+this.props.changecolor("city")}><span>ADD CITY</span></div>
                    <input id="newCityName" type="text" className="inputcity" placeholder="search city"/>
                    <div onClick={this.addCity} className="mainimage addicon"></div>
                    <div className="mainimage cityicon"></div>
                </div>
            </div>
        );
    }
}

export default Addcity;
