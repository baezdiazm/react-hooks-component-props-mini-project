import React from "react"
import Article from "./Article"

function ArticleList({posts}) {
    
    const all = posts.map((post) => {
        //console.log(post)
        return (
                <Article 
                    key={post.id} 
                    title={post.title}
                    date={post.date}
                    preview={post.preview}
                />
        )
    })

    return (
        <main>
            {all}
        </main>
    )
}

export default ArticleList;