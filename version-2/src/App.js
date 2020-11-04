import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';//adding in useEffect
import Axios from 'axios';//needed to use Axios instead of fetch

function App() {
  //destructure props and initialize to nothing
  const [state, setState] = useState([]);

  //disabling the button functionality and instead using useEffect to just render the API on page load and only load it once
  useEffect( () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => setState(res.data.results))
      .catch(err => console.log(err))},
      []
  )


  //function to process the button event of calling the API
  // const getPokemon = () => {
  //   Axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
  //     .then(res => {
  //       setState(res.data.results);
  //     })
  //     .catch(err => console.log(err))

    //since we are now using AXIOS, we can delete all the fetch code below
    // //fetch the API
    // fetch(' https://pokeapi.co/api/v2/pokemon?limit=807')
    //   //if API returns successfully, first return the API data as JSON data
    //   .then(response =>
    //     response.json()
    //   )
    //   // also do this, send all of the JSON data to our state
    //   .then(response => {
    //     setState(
    //       response.results
    //     )
    //   })

    //   //error case
    //   .catch(err => console.log(err))
  // }

  return (
    <div className="App">
      {/* disabling the button so we can just use useEffect */}
      {/* <button type="submit" onClick={getPokemon}>Fetch Pokemon</button> */}

      {/* map and plot all names */}
      {
        state.map((each_pokemon, i) => {
          return <ul><li key={i}>{each_pokemon.name}</li></ul>
        })
      }

    </div>
  );
}

export default App;
