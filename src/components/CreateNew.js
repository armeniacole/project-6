import React, { Component } from "react";

class CreateNew extends Component {
    render(){
        return(
            <form className="createNewEvent" onSubmit={this.props.checkName} action="">

                <button className="close" onClick={this.props.toggleHidden}>
                    &times;
                </button>

              {this.props.errorMessage !== "" ? (
                <p>{this.props.errorMessage}</p>
              ) : null}

              <label htmlFor="createEvent">
                Enter the name for your event here.
              </label>
              <input
                onChange={this.props.getEventName}
                name="createEvent"
                className="createEvent"
                type="text"
                placeholder="new event name"
              />

                <button className="submit">
                  Submit
                  {/* This button creates a new event object in the events array AND links to event page. */}
                </button>
              
            </form>

        );
    }   
}

export default CreateNew;