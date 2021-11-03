import React from 'react'

function About(props) {
    const def = "https://via.placeholder.com/215"
    return (
        <aside>
            <img src={props.image || def} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
    )
}

export default About
