import React from "react";
import "./BotonBirthay.css"

class BotonBirthay extends React.Component{

    render(){
        return(
            <button onClick={this.props.onclick}>
                {this.props.content ? this.props.content : 'Clear all'} 
            </button>
        );
    }
}

export default BotonBirthay;