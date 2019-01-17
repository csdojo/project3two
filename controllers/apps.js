// import our app model
const db = require("../models");

// export a set of methods to edit and manipulate the app collection
module.exports = {
  // find all apps ("/api/app" => GET)
  findAll: function(req, res) {
    // /api/app?title=harry+potter
    // req.query => {title: "harry potter"}
    db
      .Apps
      .find(req.query)
      .sort({date: -1})
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  },
  // find a app by id ("/api/app/:id")
  findById: function (req, res) {
    db.Apps
      .findById(req.params.id)
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // create / insert new app ("/api/app" => POST)
  create: function (req, res) {
    db.Apps
      .create(req.body)
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // update app information ("/api/app/:id" => PUT)
  update: function (req, res) {
    db.Apps
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  // to delete a app from the reading list ("/api/app/:id" => DELETE)
  remove: function (req, res) {
    db.Apps
      .findById(req.params.id)
      .then(dbAppData => dbAppData.remove())
      .then(dbAppData => res.json(dbAppData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
}