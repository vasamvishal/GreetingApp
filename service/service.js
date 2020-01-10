var model = require('../model/greetingModel');

class Service {
    registerGreeting(body, callback) {
        model.register(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        });
    }

    getAllRegisteredGreetingDetails(body, callback) {
        model.getDetails(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
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
                callback(null, data)
            }
        })
    }
    updateGreetings(req,callback){
        model.updateGreetings(req, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
    getDeleteById(req,callback){
        let query=req.params.Id;
        model.deleteDetailsById(query, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }
}
module.exports = new Service();