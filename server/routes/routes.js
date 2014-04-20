/**
 * Created by awalpole on 20/04/2014.
 */

var Users = require('./models/user_model');

module.exports = function (app) {

  app.route('/api/users/')

    .post(function (req, res) {

      // create a user with name and password hashed
      Users.create({

        text: req.body.name,
        password: req.body.password

      }, function (err, users) {

        if (err) {
          res.send(err);
        }

        // get and return all the users after creating a new one
        Users.find(function (err, todos) {

          if (err) {
            res.send(err);
          }

          res.json(todos);

        });
      });
    });

};
