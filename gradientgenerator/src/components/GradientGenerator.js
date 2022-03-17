import React, { Component } from 'react';

export default class GradientGenerator extends Component{

    constructor(props){
        super(props);

    this.state = {
        value1: "#009900",
        value2: "#633D35",
        value3: "#0E2C6F"
     } 
    }

     render() {
        const gradient = {
            width: "60%",
            height: "100px",
            background: `linear-gradient(${this.state.value1},${this.state.value2},${this.state.value3})`
          };
    console.log(this.state)
        return(
            <div>
                    <input type="color" id="col1" name="col1" value={this.state.value1} onChange={this.getFirstValue}/>
                    <label htmlFor="col1">color 1</label>

                    <input type="color" id="col2" name="col2" value={this.state.value2} onChange={this.getSndValue}/>
                    <label htmlFor="col2">color 2</label>

                    <input type="color" id="col3" name="col3" value={this.state.value3} onChange={this.getThrdValue}/>
                    <label htmlFor="col2">color 3</label>

                    <div style={gradient} />

                    <span> background: linear-gradient({this.state.value1},{this.state.value2},{this.state.value3})</span>
            </div>
        )
     }

     getFirstValue = (e) => {
        this.setState({value1: e.target.value});
    }
    getSndValue = (e) => {
        this.setState({value2: e.target.value});
    }
    getThrdValue = (e) => {
        this.setState({value3: e.target.value});
    }
}