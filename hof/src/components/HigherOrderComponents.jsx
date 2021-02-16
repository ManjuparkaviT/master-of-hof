import React, { Component } from 'react';

class HigherOrderComponents extends Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  
    // display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};

displayBasedOnUserType = () => {
    const data = this.state.userData
    const userDetails = data.filter(item => {
        if (item.user_type === "Designer")
            return true;
    }).map(item => {
        return (
            <div key={item.id} className="list-elements">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </div>
        );
    }
    );

    return userDetails;
}

    displayWithStartingLetter = () => {
    const data = this.state.userData
    const userDetails= data.filter(item => {
        if (item.name[0] === "J")
            return true;
    }).map(item => {
        return (
            <div key={item.id} className="list-elements">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </div>
        );
    });
    return userDetails;
}
displayBasedOnAge = () => {
    const data = this.state.userData
    const userDetails= data.filter(item => {
        if (item.age > 28 && item.age < 50)
            return true;
    }).map(item => {
        return (
            <div key={item.id} className="list-elements">
                <span>ID: {item.id}</span>
                <span>Name: {item.name}</span>
                <span>User Type: {item.user_type}</span>
            </div>
        );
    });

    return userDetails;
}
displayBasedOnDesignersYears = () => {

    const data = this.state.userData
    const total = data.filter(item => {
        if (item.user_type === "Designer")
            return true;
    }).reduce((initial, item) => initial += item.years, 0);

    return total;
}


    render() {
        // instead of a parent div tag we can also use React.Fragment
        return(
        <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
        <p>{this.renderItems()} </p>
        </div>

        <h1>Display based on usertype</h1>
                <div className="display-box">
                    <p>{this.displayBasedOnUserType()} </p>
                </div>

        <h1>Filter all data starting with J</h1>
                <div className="display-box">
                    <p>{this.displayWithStartingLetter()} </p>
                </div>
        < h1>Filter all data based on age greaterthan 28 and age lessthan or equal to 50  </h1>
                <div className="display-box">
                    <p>{this.displayBasedOnAge()} </p>
                </div>
        <h1>Find the total years of designers </h1>
                <div className="display-box">
                    <p>{this.displayBasedOnDesignersYears()} </p>
                </div>
      </React.Fragment>);
    }
}



export default HigherOrderComponents;