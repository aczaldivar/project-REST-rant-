const React = require('react');
const Def = require('./default');

function home () {
    return (
      <Def>
          <main> <div>
              <h1>HOME</h1>
              <div>
                <img src="/images/chia-fruit-drink.jpg" alt=" Chia Fruit Drink" />
              </div>
              <div>
                Photo by <a href= "https://unsplash.com/@cravethebenefits "> Brenda Godinez</a> on  <a href="https://unsplash.com/ "> Unsplash </a>
              </div>
              <a href="/places">
                <button className="btn btn-primary">Places Page</button>
              </a>
              </div>
              </main>
      </Def>
    )
  }
  
 
module.exports = home 
