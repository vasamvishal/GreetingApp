const mongoose = require('mongoose');

const greetingSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
});
const Greetings = mongoose.model('greetings', greetingSchema);

class greetingModel {
    register(body, callback) {
        console.log(body);
        const greeting = new Greetings(body)
        greeting.save((err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }
        })
    }

    getDetails(body, callback) {
        Greetings.find((err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }
        })
    }

    getDetailsById(req) {
        return new Promise(function (resolve, reject) {
            Greetings.findById(req)
                .then((data) => {
                    console.log("result at model", data);
                    resolve(data);
                }).catch((err) => {
                console.log("err at model", err);
                reject(err);
            })
        })
    }

    updateGreetings(req, callback) {
        Greetings.findByIdAndUpdate(req.params, {
            firstName: req.firstName,
            lastName: req.lastName,
            message: req.message
        }, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data.message);
            }
        })
    }

    deleteDetailsById(req, callback) {
        Greetings.findByIdAndRemove(req, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data);
            }

        })
    }
}

module.exports = new greetingModel();
