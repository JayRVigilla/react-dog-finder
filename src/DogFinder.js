import React from "react";
import { Link } from 'react-router-dom';
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import perry from "./perry.jpg";
import tubby from "./tubby.jpg"


function DogFinder() {


    return (
        <div>
            <h1>DAWGS</h1>
            <Link to="/dogs/whiskey">
            <img src={whiskey} alt="A rye comment about a dog named Whiskey" ></img>
            </Link>

            <Link to="/dogs/duke">
            <img src={duke} alt="Dog named Duke" ></img>
            </Link>

            <Link to="/dogs/perry">
            <img src={perry} alt="Dog named Perry" ></img>
            </Link>

            <Link to="/dogs/tubby">
            <img src={tubby} alt="He's not a chubby dog, he's Tubby" ></img>
            </Link>
        </div>
    )
}

export default DogFinder;