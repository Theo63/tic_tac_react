import { useState } from "react";

export default function Player ({initalName, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(initalName);
    const [isEditing , setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing(editing => !editing); //toggle the value of isEditing (!isEditing) is posible but doesn't change imiatelly
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
        
    }

    function handlechange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonCaption = 'Edit';

    if (isEditing){
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handlechange}/>
        )
        buttonCaption = 'Save';
    }

    return (          
    <li className={isActive ? 'active' : undefined}>
        <span className="player"> 
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonCaption}</button>
    </li>
    )
}