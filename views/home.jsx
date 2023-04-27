const React = require('react');
const Def = require('./default');

function home () {
    return (
      <Def>
          <main> <div>
              <h1>HOME</h1>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
              </div>
              </main>
      </Def>
    )
  }
  
 
module.exports = home 
