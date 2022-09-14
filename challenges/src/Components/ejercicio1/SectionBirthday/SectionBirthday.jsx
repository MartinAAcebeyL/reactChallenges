import React from "react";
import "./SectionBirthday.css";
import BotonBirthay from "../BotonBirthay/BotonBirthay";

class SectionBirthday extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            visibility:true
        };

        this.chanceArticlesVisibility = this.chanceArticlesVisibility.bind(this);
    }

    chanceArticlesVisibility() {
        this.setState({
            visibility:!this.state.visibility
        });
    }


    render(){
        
        const buttonContent = <BotonBirthay onclick={this.chanceArticlesVisibility} content="Update birtday" />;
        const justButton = <BotonBirthay onclick={this.chanceArticlesVisibility} />; 

        return(
            <section className="sectionBirthday">
                
                {this.state.visibility ? <h2>{this.props.title}</h2> : <h2>0 birthdays today</h2>}
                {this.state.visibility ? this.props.childrens: ''}
                {this.state.visibility? justButton: buttonContent}                
            </section>
        );
    }
}

export default SectionBirthday