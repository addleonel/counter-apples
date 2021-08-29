import React, {useState, useEffect} from 'react';

// styles 
import '../assets/styles/Apples.scss';

export default function Apples() {
    const [countApples, setCountApples] = useState(0);
    const [isAssigned, setIsAssigned] = useState(true);
    const [boxLimit, setBoxLimit] = useState(0);

    useEffect(() => {
        if (countApples === 0) {
            document.title = `There is no Apples`;
        } else if (countApples === 1) {
            document.title = `There is ${countApples} Apple`;
        } else if (countApples > 1) {
            document.title = `There are ${countApples} Apples`;
        }
    }, [countApples]);

    useEffect(() => {
        document.getElementById("id-assign-button").addEventListener("click", (e) => {
            e.preventDefault();
            setBoxLimit(document.getElementById("id-box-limit").value);
            setIsAssigned(false);
        });
        
    }, []);

    useEffect(() => {
        if (boxLimit > 0) {
            if (countApples >= boxLimit) {
                setIsAssigned(true);

            }
        }
    }, [boxLimit, countApples]);

    return (
        <React.Fragment>
            <div className="">{countApples}</div>

            <form>
            <input id="id-box-limit" type="number" name="box_limit" placeholder="Type the box limit"/>
            <button id="id-assign-button" >Assign</button>    
            </form>
            <button id="id-add-apples" disabled={isAssigned} onClick={() => setCountApples(countApples + 1)}>Add more apples</button>
            
        </React.Fragment>
    );
}