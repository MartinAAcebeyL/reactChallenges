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
            visibility:!this.visibility
        });
    }


    render(){
        return(
            <section className="sectionBirthday">
                <h2>{this.props.title}</h2>
                {this.state.visibility ? this.props.childrens: <p>you dont have birthdays</p>}
                <BotonBirthay />
            </section>
        );
    }
}

export default SectionBirthday