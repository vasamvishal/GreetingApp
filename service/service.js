var model = require('../model/greetingModel');

class Service {
    registerGreeting(body, callback) {
        const req = {
            firstName: body.firstName,
            lastName: body.lastName,
            message: `Welcome,${body.firstName} ${body.lastName}`
        }
        model.register(req, (err, data) => {
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

    getByIdAllDetails(req) {
        return new Promise(function (resolve, reject) {
            let query = req.query.Id;
            model.getDetailsById(query)
                .then((data) => {
                    resolve(data);
                }).catch((err) => {
                reject(err);
            })
        })
    }

    updateGreetings(req, callback) {
        console.log("service", req.body.firstName);
        console.log("service",req.body.lastName);
        var body;
        var result=(req.body.firstName == undefined?'':req.body.firstName);
        console.log("VV",result,req.body.firstName);
        if (req.body.firstName == undefined && req.body.lastName == undefined) {
            body = {
                params: req.params.Id,
                firstName: 'Anonymous',
                lastName: 'Anonymous',
                message: `Hello World`
            };
            console.log(body);
        }
        else {
            let firstname=req.body.firstName == undefined?'':req.body.firstName;
            let lastname=req.body.lastName == undefined?'':req.body.lastName;
            body = {
                params: req.params.Id,
                firstName: firstname,
                lastName: lastname,
                message: `Welcome,${firstname} ${lastname}`
            };
        }

        model.updateGreetings(body, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

    getDeleteById(req, callback) {
        let query = req.params.Id;
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