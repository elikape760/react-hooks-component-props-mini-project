import React from 'react'
import Articles from './Article'

function ArticleList(props) {
    const defaultDate = "January 1, 1970"
    return (
        <main>
            {props.posts.map(post => <Articles post={post} title={post.title} date={post.date || defaultDate } preview={post.preview} key={post.id}/> )}
        </main>
    )
}
export default ArticleList