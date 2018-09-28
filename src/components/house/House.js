import React from 'react'

export default function House(props){
    const {id,name,address,city,state,zip,image_url,mortgage,rent}=props.house
    return(
        <div className='houseCard'>
            <img className='cardImage' src={image_url} alt = 'house'></img>
        <div className='cardTextContainer'>
            <div className=''>
                <h3>Property Name: {name}</h3>
                <h3>Address: {address}</h3>
                <h3>City: {city}</h3>
                <h3>State: {state}</h3>
                <h3>Zip: {zip}</h3>
            </div>
            <div>
                <h4>Monthly Mortgage: {mortgage}</h4>
                <h4>Desired Rent: {rent}</h4>
            </div>
        </div>
        <button onClick={()=>props.deleteHouse(id)}>X</button>
        </div>
    )
}