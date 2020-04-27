import React from "react";
import { useParams } from "react-router-dom";
// import DogFinder from "./DogFinder";
// import {dogs} from "./App";

function DogDetails(dogs) {


const {name} = useParams()
let dawgArray = dogs.dogs.dogs.filter( dog => dog.name.toLowerCase() === name);
let dog = dawgArray[0];

// console.log(`\n\n\n The value of dog is `, dog);
    /**
     * name
     * age
     * src
     * facts - array of strings =>
     *         ul with li iterated for each fact
     */
    return (

        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt="dog"></img>
            <p>Age: {dog.age}</p>
            <p>Facts:</p>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>


        </div>
    )
}

export default DogDetails;