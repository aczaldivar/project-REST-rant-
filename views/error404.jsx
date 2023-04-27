const React = require('react')
const Def = require ('./default')

function error404 () {
    return (
      <Def>
          <main>
          <h1>404 Page</h1>
            <div>
            <img src="/images/kittens" alt=" Kittens" />
              </div>
              <div>
                Photo by <a href= "https://unsplash.com/@theluckyneko "> The Lucky Neko </a> on  <a href="https://unsplash.com/ "> Unsplash </a>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

