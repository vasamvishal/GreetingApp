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

    getDetailsById(req, callback) {
        Greetings.findById(req, (err, data) => {
            if (err) {
                callback(err)
            } else {
                callback(null, data.message);
            }

        })
    }
    updateGreetings(req,callback){
        Greetings.findByIdAndUpdate(req.params.Id, {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            message:`Welcome,${req.body.firstName} ${req.body.lastName}`},(err,data)=>{
            if (err) {
                callback(err)
            } else {
                console.log(data);
                callback(null, data.message);
            }
        })
    }
    deleteDetailsById(req,callback){
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
