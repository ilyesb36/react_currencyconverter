import React, { Component } from 'react';

export default class GradientGenerator extends Component{

    constructor(props){
        super(props);

    this.state = {
        angle: 0,
        color1: "#009900",
        breakpoint1: 0,
        color2: "#633D35",
        breakpoint2: 0,
        color3: "#0E2C6F",
        breakpoint3: 0
     } 
    }

     render() {
        const gradient = {
            width: "60%",
            height: "100px",
            background: `linear-gradient(${this.state.angle}deg, ${this.state.color1} ${this.state.breakpoint1}%,${this.state.color2} ${this.state.breakpoint2}% ,${this.state.color3} ${this.state.breakpoint3}%)`
          };
    console.log(this.state)
        return(
            <div>
                    Angle : 
                    <input value={this.state.angle} onChange={this.getAngle} type="range" min="0" max="360"></input>
                    <span>{this.state.angle}</span>
                    <br/>
                    color 1
                    <input type="color" id="col1" name="col1" value={this.state.color1} onChange={this.getFirstValue}/>
                    Breakpoint1
                    <input value={this.state.breakpoint1} onChange={this.getFirstBP} type="range" min="0" max="100"></input>
                    <span>{this.state.breakpoint1}</span>
                    <br/>
                    color 2
                    <input type="color" id="col2" name="col2" value={this.state.color2} onChange={this.getSndValue}/>
                    Breakpoint2
                    <input value={this.state.breakpoint2} onChange={this.getSndBP} type="range" min="0" max="100"></input>
                    <span>{this.state.breakpoint2}</span>
                    <br/>   
                    color 3
                    <input type="color" id="col3" name="col3" value={this.state.color3} onChange={this.getThrdValue}/>
                    Breakpoint3
                    <input value={this.state.breakpoint3} onChange={this.getThrdtBP} type="range" min="0" max="100"></input>
                    <span>{this.state.breakpoint3}</span>

                    <div style={gradient} />

                    <span> background: linear-gradient({this.state.angle}deg, {this.state.color1} {this.state.breakpoint1}%,{this.state.color2} {this.state.breakpoint2}%,{this.state.color3} {this.state.breakpoint3}%)</span>
            </div>
        )
     }

     getAngle = (e) => {
        this.setState({angle: e.target.value});
    }
     
     getFirstValue = (e) => {
        this.setState({color1: e.target.value});
    }
    getSndValue = (e) => {
        this.setState({color2: e.target.value});
    }
    getThrdValue = (e) => {
        this.setState({color3: e.target.value});
    }

    getFirstBP = (e) => {
        this.setState({breakpoint1: e.target.value});
    }
    getSndBP = (e) => {
        this.setState({breakpoint2: e.target.value});
    }
    getThrdtBP = (e) => {
        this.setState({breakpoint3: e.target.value});
    }
}