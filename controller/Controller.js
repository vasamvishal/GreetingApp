const service = require('../service/service');

class Controller {

    registerGreetings(req, res) {
        service.registerGreeting(req.body, (err, data) => {
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })
    }

    getAllregisteredDetails(req, res) {
        service.getAllRegisteredGreetingDetails(req, (err, data) => {
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })
    }

    getByIdAllDetails(req, res) {
        service.getByIdAllDetails(req, (err, data) => {
            if (err)
                res.status(422).send(err);
            else
                res.status(200).send(data);
        })
    }
}

module.exports = new Controller();