import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, Link, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      this.setState( {smurfs: res.data} )
    })
    .catch(err => {
      console.log(err)
    })
  }

  addSmurf = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      this.setState( {smurfs: res.data })
    })
    .catch(err => console.log(err));
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render(props) {
    return (
      <div className="App">
        <Link to='/'>Home</Link>{' '}
        <Link to='/smurf-form'>Add New Smurf</Link>
        <Route exact path='/smurf-form' render={() => <SmurfForm {...props} addSmurf={this.addSmurf}/> }/>
        <Route path='/' render={() => <Smurfs smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;
