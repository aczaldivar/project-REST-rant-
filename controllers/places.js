const router = require('express').Router()

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
})


module.exports = router
