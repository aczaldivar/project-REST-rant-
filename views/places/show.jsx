const React = require('react')
const Def = require('../default')

function show (data,place) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name}</h1>
            <a href= {`/places/${data.id}/edit`}className="btn btn-warning"> 
            Edit
            </a> 
            <img src= "chia-fruit-drink.jpg" alt="chia drink"></img>
            <h1>Rating</h1>
            <h3>Not Rated</h3>
            <h1>Description</h1>
            <h3>Located in {data.place.city},{data.place.state} and serving {data.place.cuisines}</h3>
            <h1>Comments</h1>
            <h3>No comments yet!</h3>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
           Delete
            </button>
            </form>     
          </main>
        </Def>
    )
}

module.exports = show
