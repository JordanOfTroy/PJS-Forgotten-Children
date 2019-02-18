import React, {Component} from 'react'

class Blog extends Component {
  render () {
    return(
      <div>
        <h1>Blog.js</h1>
        {/* this is just an example of the HTML structure i will be using for each blog post- */}
        <div className="example_blog">
          <h2 className="blog_title">Sample Title</h2>
          <img src="#" alt="cover image" className="cover_image"/> {/*source will be link from AWS */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cum mollitia itaque asperiores neque minus vero, minima fuga voluptates est dolores magni ex blanditiis distinctio illum corporis debitis voluptas adipisci!
            Sit quasi ullam nulla similique, doloribus minus pariatur odio placeat esse. Esse ratione dolore beatae earum amet, iure reiciendis cumque blanditiis natus possimus quasi, voluptatem asperiores praesentium facere hic quibusdam?
            Id dolores deleniti accusantium cum non corrupti, illum ipsam repellat? Commodi fugit molestiae expedita aspernatur tempore est aliquam, ab dolore sunt provident magnam magni pariatur aut repudiandae omnis quaerat repellat!
            Atque ipsa vel enim molestias voluptatem! Repellat, ad libero sed assumenda ducimus eligendi! Quidem voluptas, odio saepe quasi, aliquid delectus deleniti vel iusto fugit nisi odit tempora ad iste placeat!
            Ex qui autem suscipit alias excepturi atque dicta. Reiciendis quibusdam velit quos necessitatibus fugit repudiandae libero eligendi, amet, voluptate exercitationem sed consectetur! Ex fuga, dolores maiores sapiente nisi provident sint.
          </p>
        </div>

      </div>
    )
  }
}

export default Blog