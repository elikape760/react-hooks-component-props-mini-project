import React from 'react'

function Articles(props) {
    console.log(props.blogPost);
    return (
        <article>
            <h3> {props.title} </h3>
            <small>{props.date}</small>
            <p>{props.preview}</p>
        </article>
    )
}

export default Articles
