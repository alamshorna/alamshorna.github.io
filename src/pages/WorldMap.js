import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import '../styles/WorldMap.css';
import data from '../assets/books.json';
import { HiOutlineVideoCamera } from 'react-icons/hi2';

const geoUrl = `${process.env.PUBLIC_URL}/ne_10m_admin_0_countries_usa--simplified.json`

function WorldMap() {
    const [hover, setHover] = useState(null);  // currently no country is getting hovered over

    function handleMouseEnter(properties) {
        console.log(properties.admin);
        setHover(properties.admin); // the name of the hovered country

    }

    function handleMouseLeave() {
        setHover(null);
    }

    return (
    <>
        <ComposableMap>
            <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => <Geography 
                        key={geo.rsmKey} 
                        geography={geo} 
                        onMouseEnter={() => handleMouseEnter(geo.properties)}
                        onMouseLeave={() => handleMouseLeave()}
                        className = {data[geo.properties.admin]? "read": "unread"}
                />)
                
            }
            </Geographies>
        </ComposableMap>
        {data[hover] && <div className="aside"> 
            {data[hover]?.Title} by {data[hover]?.Author}
            {data[hover]?.Review} 
        </div>}
    </>
    );
    
}

export default WorldMap;