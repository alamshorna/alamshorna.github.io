import React, { useRef, useState } from 'react';
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import '../styles/WorldMap.css';
import data from '../assets/books.json';

const geoUrl = `${process.env.PUBLIC_URL}/ne_10m_admin_0_countries_usa--simplified.json`

function WorldMap() {
    const containerRef = useRef(null);
    const [hover, setHover] = useState(null);       
    const [pinned, setPinned] = useState(null);   
    const [pos, setPos] = useState({ x: 0, y: 0 }); 
    const active = pinned ?? hover;
    const book = data[active];

    function cursorPosition(event) {
        const rect = containerRef.current.getBoundingClientRect();
        return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    }

    function handleMouseMove(event) {
        if (!pinned) setPos(cursorPosition(event));
    }

    function handleClick(event, country) {
        if (!data[country] || pinned === country) {
            setPinned(null);
            return;
        }
        setPinned(country);
        setPos(cursorPosition(event));
    }

    return (
    <div ref={containerRef} className="world-map" onMouseMove={handleMouseMove}>
        <ComposableMap>
            <Geographies geography={geoUrl}>
            {({ geographies }) =>
                geographies.map((geo) => {
                    const country = geo.properties.admin;
                    return <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => setHover(country)}
                        onMouseLeave={() => setHover(null)}
                        onClick={(event) => handleClick(event, country)}
                        className={data[country] ? "read" : "unread"}
                    />
                })
            }
            </Geographies>
        </ComposableMap>

        {book && (
            <div
                className={`book-card ${pinned ? "pinned" : ""}`}
                style={{ left: pos.x, top: pos.y }}
            >
                {book.Cover && (
                    <img
                        className="book-cover"
                        src={`${process.env.PUBLIC_URL}/${book.Cover}`}
                        alt={`Cover of ${book.Title}`}
                    />
                )}
                <div className="book-info">
                    <span className="book-country">{active}</span>
                    <span className="book-title">{book.Title}</span>
                    <span className="book-author">by {book.Author}</span>
                    {book.Review && <p className="book-review">{book.Review}</p>}
                </div>
            </div>
        )}
    </div>
    );
}

export default WorldMap;
