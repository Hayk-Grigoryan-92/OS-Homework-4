import React from "react";
import './style.scss'

class TabsItem extends React.Component{

    state = {
        active : '',
        flag : false,

        tabs : [ 'Actions', 'Transactions', 'NFT', 'Assets', 'Projects', 'Programs' ]
    }

    handleClick = () => {
        this.setState({flag: true})
        if(!this.state.flag){
            this.setState({active:'activeTab'})
        }
    }

    render(){
        return (
            <div className="tabsList">
                {this.state.tabs.map(item => <div onClick={this.handleClick}>{item}</div>)}

                
                {/* <div className="activeTab" onClick={this.handleClick}>Actions</div>
                <div onClick={this.handleClick} className={this.state.active}>Transactions</div>
                <div>NFT</div>
                <div>Assets</div>
                <div>Projects</div>
                <div>Programs</div> */}
            </div>
        )
    }
}

export default TabsItem