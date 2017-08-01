# DvMtn26-girls-study-night-practice
Building a React app!

1. Fork & clone this repository to your computer

2. What's the file structure of this? Someone walk through how the files are connected
    --Everything is int eh folder where react is installed and created
    --App.js is our ultimate parent component
    --in components folder we have Hogwarts.js and Houses.js which are child components of App.js

3. Open Hogwarts.js
    a. what goes at the top of the file?
    --import React, {Component} from 'react'
    b. what do we have to import to get our styles?
    import './Hogwarts.css'
    c. how do we set up the component?
    --class Hogwarts extends Component { }

    d. what function must every compnonent have? add it.
    -- render() {return ();}

    e. what do we add above render to track data in this component?
    --constructor() {
        super();
    }

4. Add this code to the *special function that tracks data*:
    '''
    this.state = {
            crest: 'https://vignette3.wikia.nocookie.net/jspotter/images/1/18/Hogwarts_Crest_1.png/revision/latest?cb=20140720035204'
        }
    '''

5. Inside the return function, create:
    a. a <section> with class name "section"
    b. inside that, a <div> with class name "header-pic"
    c. inside that <div>, add:
        <img src={'WHAT GOES HERE? hint: we tracked this data in the state...'} alt="Hogwarts crest" /> 
    d. as a sibling to the <div>, add an <h2> with a class name 'header', and make it say 'Welcome to the Sorting Ceremony'

6. There's one more important line at the end of the file--what is it?
    --export default Hogwarts;

__________________________________________

7. Open Houses.js
    a. what goes at the top of the file?
    --import React, {Component} from 'react'
    b. what do we have to import to get our styles?
    import './Houses.css'
    c. how do we set up the component?
    --class Houses extends Component { }

    d. what function must every compnonent have? add it.
    -- render() {return ();}

    e. what line is missing in the constructor?
     -- super();
    
    f. create a function called 'updateName' that will update the value of state.currentStudent to a passed in value, 'e'
    --updateName(e) {
        this.setState({currentStudent: e.target.value});
    }

    g. create a function called 'updateQ1' that will update the value of state.q1 to a passed in value, 'e'
    --updateQ1(e) {
        this.setState({q1: e.target.value.toLowerCase()})
    }

    h. copy/paste the updateQ1 function 3 times, and change the name to be Q2, 3, 4 
    --updateQ2(e) {
        this.setState({q2: e.target.value.toLowerCase()})
    }
    updateQ3(e) {
        this.setState({q3: e.target.value.toLowerCase()})
    }
    updateQ4(e) {
        this.setState({q4: e.target.value.toLowerCase()})
    }

    i. in the return function, add this code:
    '''
    <section className="section-houses">
                <div className="houses-wrapper">
                    <div className="house">
                     <img src={this.state.gryffCrest} alt="Gryffindor crest" /> 
                     <h2 className="header-house">Gryffindor</h2>
                     <ul className="studentList">{
                         this.state.gryffindor.map(function(listValue){
                            return <li>{listValue}</li>;
                        })}
                    </ul>                                    
                    </div>
                    <div className="house">
                     <img src={this.state.slythCrest} alt="slytherin crest" /> 
                     <h2 className="header-house">Slytherin</h2>
                     <ul className="studentList">{
                         this.state.slytherin.map(function(listValue){
                            return <li>{listValue}</li>;
                        })}
                    </ul>  
                    </div>
                    <div className="house">
                     <img src={this.state.huffCrest} alt="Hufflepuff crest" /> 
                     <h2 className="header-house">Hufflepuff</h2>
                     <ul className="studentList">{
                         this.state.hufflepuff.map(function(listValue){
                            return <li>{listValue}</li>;
                        })}
                    </ul>  
                    </div>
                    <div className="house">
                     <img src={this.state.ravenCrest} alt="Ravenclaw crest" /> 
                     <h2 className="header-house">Ravenclaw</h2>
                     <ul className="studentList">{
                         this.state.ravenclaw.map(function(listValue){
                            return <li>{listValue}</li>;
                        })}
                    </ul>  
                    </div>
                </div>

                <div className="q-wrapper">
                    <span className="questions">Your Name?</span>
                    <input className="name-input" ///add something to call updateName() whenever I change///></input>
                    <span className="questions">Winter, Spring, Summer, or Fall?</span>
                    <input className="name-input" ///add something to call updateQ1() whenever I change///></input>
                    <span className="questions">Dragon, Unicorn, Phoenix, or Sphinx?</span>
                    <input className="name-input" ///add something to call updateQ2() whenever I change///></input>
                    <span className="questions">You are in a duel--what do you cast? Protego, Expelliarmus, Imperius Curse, or Stupefy?</span>
                    <input className="name-input" ///add something to call updateQ3() whenever I change///></input>
                    <span className="questions">What will be your favorite place in the castle--library, kitchens, forest, or room of requirement?</span>
                    <input className="name-input" ///add something to call updateQ4() whenever I change///></input>
                    <button className="sort-button" ///add something to call sortStudent() whenever I am clicked!///><img src={this.state.sortHat} alt="sorting hat" width="100px"/></button>
                </div>
                
                
            </section> 
    '''

    j. don't forget to export me!

8. Open App.js

9. How do we get our child components into this file?
--import Hogwarts from './components/Hogwarts/Hogwarts'
import Houses from './components/Houses/Houses'

10. How do set this file up?
class App extends Component {
  render() {
    return (
      <div>
        <Hogwarts />
        <Houses />
      </div>
    );
  }
}

11. Add our components in JSX to the return, within a <div>

12. make sure you're in the right directory and then run 'npm start'!



