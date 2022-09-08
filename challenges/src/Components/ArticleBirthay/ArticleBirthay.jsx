import React from "react";
import "./ArticleBirthay.css";

class ArticleBirthay extends React.Component{
    render(){
        return(
            <article className="articles">
                <figure>
                    <img src={this.props.src} alt={this.props.alt}/>
                </figure>
                <div className="importat-dates">
                    <h4>{this.props.name}</h4>                
                    <p>{this.props.years}</p>
                </div>
            </article>
        );
    }
}


export default ArticleBirthay