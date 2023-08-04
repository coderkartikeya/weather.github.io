import React, { useEffect } from "react";
import { useState } from "react";
import './App.css'
import { FaStreetView } from 'react-icons/fa';

// FaStreetView

// `https://api.openweathermap.org/data/2.5/weather?q=${setc}&metric&appid=ca3cf5b703c6f34d9c9b97042e90d694`



const App=()=>{

    const [city,initial]=useState('delhi')
    const [search,selectCity]=useState('delhi')

    useEffect(()=>{
        const fectchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ca3cf5b703c6f34d9c9b97042e90d694`;
            const response=await fetch(url);
            const resj= await response.json();
            initial(resj.main)

        }

        fectchApi();

    },[search])

    return(
        <>
            <div className="main">
                <div className="search-bar">
                    <input type="search" onChange={(event)=>{selectCity(event.target.value)}}/>

                </div>

                {city?( <div>
                    <div className="card">
                    <div className="icon"><FaStreetView/>
                    <h1>{search}</h1>
                    </div>

                    <h1>{city.temp} °C</h1>

                </div>
                <div className="effect-1"></div>
                <div className="effect-2"></div>
                <div className="effect-3"></div>

                </div>
                    
                    ):
                (<h1>error</h1>)
                }

                
                
                


                

            </div>

        </>

    )
}

export default App;