import React from "react";
import './style.scss'

class InputComponent2 extends React.Component{

    state = {
        inputDisabled : ''
    }

    handleDiabled = () =>{
        this.setState({inputDisabled:'disabled'})

    }

    handleEnabled = () => {
        this.setState({inputDisabled:''})
    }

    render(){
        return <div>
            <button onClick={this.handleDiabled}>Disable</button>
            <input type="text" disabled={this.state.inputDisabled}/>
            <button onClick={this.handleEnabled}>Enable</button>
        </div>
    }
}

export default InputComponent2