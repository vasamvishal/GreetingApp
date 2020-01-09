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
        const greeting = new Greetings({
            firstName: body.firstName,
            lastName: body.lastName,
            message: `Welcome,${body.firstName} ${body.lastName}`
        })
        greeting.save((err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log(data);
                callback(null, data);
            }
        })
    }

    getDetails(body, callback) {
        Greetings.find((err, data) => {
            if (err) {
                callback(err)
            } else {
                console.log(data);
                callback(null, data);
            }
        })
    }

    getDetailsById(req, callback) {
        console.log(req);
        Greetings.findById(req, (err, data) => {
            if (err) {
                console.log(err);
                callback(err)
            } else {
                console.log(data.message);
                callback(null, data.message);
            }

        })
    }
}

module.exports = new greetingModel();
