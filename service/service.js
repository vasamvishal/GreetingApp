var model = require('../model/greetingModel');

class Service {
    registerGreeting(body, callback) {
        model.register(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log("service", data);
                callback(null, data)
            }
        });
    }

    getAllRegisteredGreetingDetails(body, callback) {
        model.getDetails(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log("service", data);
                callback(null, data)
            }
        })
    }

    getByIdAllDetails(req, callback) {
        let query=req.query.Id;
        model.getDetailsById(query, (err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log("service", data);
                callback(null, data)
            }
        })
    }
}
module.exports = new Service();