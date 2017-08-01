import React, {Component} from 'react'
import './Hogwarts.css'



class Hogwarts extends Component {
    constructor() {
        super();
        this.state = {
            crest: 'https://vignette3.wikia.nocookie.net/jspotter/images/1/18/Hogwarts_Crest_1.png/revision/latest?cb=20140720035204'
        }
    }
    render() {
        return(
            <section className="section">
                <div className="header-pic">
                     <img src={this.state.crest} alt="Hogwarts crest" /> 
                </div>
                <h2 className="header">Welcome to the Sorting Ceremony</h2>
            </section>  
        );
    }
}

export default Hogwarts;
