import React from "react";
import './style.scss'

class InputComponent1 extends React.Component{

    state={
        inputText:'',
        color:''
    }

    handlechancge = (e) => {
        this.setState({inputText:e.target.value})

        if(this.state.inputText.length > 15 && this.state.inputText.length < 30 ){
            this.setState({color:'red'})
        } else  if(this.state.inputText.length > 30){
            this.setState({color:'green'})
        } else {
            this.setState({color: 'grey'})
        }
    }

    render(){
        return (
            <div className="inputComponent">
               <input type="text" onChange={this.handlechancge}/>
               <p style={{color:this.state.color}}>{this.state.inputText}</p>
            </div>
        )
    }
}

export default InputComponent1