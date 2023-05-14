const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating= (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce ((tot,c)=>{
        return tot+ c.stars
      },0)
      let averageRating = sumRatings /data.place.comments.length
      rating =(
        <h3>{Math.round(averageRating)} stars </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h2>Rating: {c.stars}</h2>
            {rating}
            <br/>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <h1>{ data.place.name}</h1>
            <a href= {`/places/${data.place.id}/edit`}className="btn btn-warning"> 
            Edit
            </a> 
            <img src= "chia-fruit-drink.jpg" alt="chia drink"/>
            <h3>Located in {data.place.city},{data.place.state}</h3>
            <h1>Rating</h1>
            <h3>Not Rated</h3>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            
            <h4>Serving {data.place.cuisines}</h4>
            <h4>Since</h4>
            <h1>Comments</h1>
            <form method="POST" action={`/places/${data.place.id}/comment`}>
              <label for="author">Author</label>
              <input type="text" id="author" name="author"></input>
              <label for="content">Content:</label>
              <textarea id="content" name="content"></textarea>
              <label for="Stars">Star Rating:</label>
              <input type="number" id="stars" name="stars" step="0.5"/>
  
              <label for="rant">Rant:</label>
              <input type="checkbox" id="rant" name="rant"></input>
              <input type="submit" value="Submit"></input>
            </form>
            <h3>{comments}</h3>
            <form method="POST" action={`/places/${data.place.id}?_method=POST`}> 
            <button type="submit" className="btn btn-danger">
           Delete
            </button>
            </form>     
          </main>
        </Def>
    )
}

module.exports = show
