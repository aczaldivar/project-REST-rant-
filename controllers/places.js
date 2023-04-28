const router = require('express').Router()
const places = require('../models/places.js')
// GET /places
router.get('/', (req,res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://www.hilton.com/im/en/ONTPODT/5579009/ontpo-vitarestaurant.jpg?impolicy=crop&cw=4504&ch=2983&gravity=NorthWest&xposition=0&yposition=8&rw=645&rh=427'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/1280px-Tom%27s_Restaurant%2C_NYC.jpg'
      }]
      
   res.render('places/index', {places})
});



router.get('/new', (req, res) => {
  res.render('places/new')
});

//POST
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  });
  
  router.get('/:id', (req, res) => {
    let id= Number (req.params.id)
    if (isNaN(id)){
      res.render('error 404')
    }
    else if (!places[id]){
      res.render('error 404')
    }
    else{
        res.render('places/show',{place:places[id] })
    }
  });
  



module.exports = router

