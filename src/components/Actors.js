import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => 
      <div>
        <h2>Actors Name: {actor.name}</h2>
        <h3>Actors Movies</h3>
        
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div> )}
    </div>
  );
};

export default Actors;
