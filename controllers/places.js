const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err=>{
      console.log(err)
      res.render('error404')
    });
});


router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      if (err && err.name == 'ValidationError'){
        // TODO: Generate error message(s)
        let message = 'Validation Error:'
        for (var field in err.errors){
          message += `${field} was ${err.errors[field].value}. `
          message += `${err.errors[field].message}`
        }
        console.log ('Validation error message', message)
        res.render('places/new',{message})
      }
      else{
        res.render('error404')
      }
  });
});


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
      console.log(place.comments)
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  });
});


router.put('/:id', (req, res) => {
  let id = req.params.id;
  //  Dig into req.body and make sure data is valid
  if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = "../public/images/cartoon-rest-rant.png";
  }
  if (!req.body.city) {
      req.body.city = "Anytown";
  }
  if (!req.body.state) {
      req.body.state = "USA";
  }
  db.Place.findByIdAndUpdate(id, req.body, { new: true })
      .then((updatedPlace) => {
          res.redirect(`/places/${id}`);
      })
      .catch((err) => {
          console.log(err);
          res.render("error404");
      });
});

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  db.Place.findById(id)
      .then((place) => {
          res.render("places/edit", { place });
      })
      .catch((err) => {
          console.log("err", err);
          res.render("error404");
      });
});

router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  if (req.body.rant){
    req.body.rant =true
  }
  else{
    req.body.rant= false
  }
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
