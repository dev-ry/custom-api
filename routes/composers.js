const db = require('../models');

function getComposers(req,res) {
  db.Composers.find({}, function(err, data){
    if (err) {
      console.log('Error retrieving Composers from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createComposers(req, res) {
  const newComposer = db.Composers({
    name: req.body.name,
    country: req.body.country,
    birth: req.body.birth,
    death: req.body.death,
    eras: req.body.eras
  });

  // functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getComposers: getComposers,
  createComposers: createComposers,
};
