import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import firebase from '../firebase';



class LandingPage extends Component {

    constructor(){
        super();
        this.state = ({
            events:[{name: "event1"}, {name:"event2"}]
        })


    }

    // function to add new event to Firebase 'event' array as new object.  New object contains all state information with empty strings as key values for any still undetermined info.

    componentDidMount(){

    //function that grabs events array on firebase and updates array 'events' in this.state.
    // console.log(this.state.events[0].name)
    //     const dbRef = firebase.database().ref(`events/${this.state.events[0].name}`);
    //     dbRef.set({
    //         guests: [{ name: "Aaron", ingredients: ["carrots", "potatoes"]} ],
    //         recipes: [{ recipe1: { title: "", img: "", ingredients: ["carrots", "potatoes"], directions: "" } }, { recipe: { title: "", img: "", ingredients: ["carrots", "potatoes"], directions: "" } }, { recipe3: { title: "", img: "", ingredients: ["carrots", "potatoes"], directions: "" }}]
    //     });
    }

    getEventName = (event) => {
        this.setState({
            [event.target.name]: event.target.value,   
        })
    }



    pushToFirebase = (event) => {
        event.preventDefault();

        const dbRef = firebase.database().ref(`events/${this.state.events[0].name}`);
        dbRef.set({
            guests: [{ name: "Aaron", ingredients: ["carrots", "potatoes", "tomatoes"] }],
            recipes: [{ recipe1: { title: "", img: "", ingredients: [], directions: "" } }, { recipe: { title: "", img: "", ingredients: [], directions: "" } }, { recipe3: { title: "", img: "", ingredients: [], directions: "" }}]
        });
    }
    
    render(){
    
        return (
        
            <div className="">
                <header className="">
                    <h1>What's For Dinner?</h1>
                    <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/event/:">Event Page</Link></li>
                    </ul>
                    </nav>
                </header>
                <section className="startForm">
                    <form 
                    // onSubmit={this.pushToFirebase} 
                    action="">
                        <input onChange={this.getEventName} name="createEvent" className="createEvent" type="text"/>
                        <button>
                            Submit
                            {/* This button creates a new event object in the events array AND links to event page. */}
                        </button>      
                    </form>
                    <button>
                        {/* link to events (scroll) */}
                    </button>
                </section>
                <section className="events">
                    {/* map through this.state.events and return events to page as <li> elements in <Link>s. */}
                </section>
            </div>
        
        );
  }
}
export default LandingPage;